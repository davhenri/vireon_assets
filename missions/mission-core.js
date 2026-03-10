// mission-core.js - Angepasst für Template-Injection
(async () => {

  // Mission-ID aus Script-Attribut lesen
  // Bei dynamisch geladenen Scripts ist document.currentScript oft null,
  // daher suchen wir das Script-Element über data-mission-id Attribut
  let currentScript = document.currentScript;
  if (!currentScript) {
    // Fallback: Finde das Script mit data-mission-id Attribut
    const scripts = document.querySelectorAll('script[data-mission-id]');
    currentScript = scripts[scripts.length - 1]; // Das zuletzt hinzugefügte Script
  }

  if (!currentScript) {
    console.error('❌ Konnte Script-Element nicht finden');
    return;
  }

  const missionId = currentScript.getAttribute('data-mission-id');
  const containerId = currentScript.getAttribute('data-container-id');

  if (!missionId) {
    console.error('❌ Keine Mission-ID gefunden');
    return;
  }

  console.log('🚀 Mission-Core startet für:', missionId);
  
  // Hilfsfunktion: Element mit Mission-ID Suffix finden
  function getEl(id) {
    return document.getElementById(id + '-' + missionId);
  }
  
  let allMissionsData = null;
  let config = null;
  let pyodide = null;
  let continueTimer = null;
  let continueToken = 0;
  let lastRenderedState = null;
  let programLoaded = false;
  let lastCodeHash = '';
  let saveCodeTimer = null;
  let lowMotionEnabled = false;
  let codeFocusEnabled = false;
  
  const cell = 40;
  let gridW = 15;
  let gridH = 15;
  
  // DOM-Elemente mit Mission-ID
  const elCode = getEl('code');
  const elConsole = getEl('console');
  const elBriefingText = getEl('briefingText');
  const elOfficerGif = getEl('officerGif');
  const elPyStatus = getEl('pyStatus');
  const elSimStatus = getEl('simStatus');
  const elTickLabel = getEl('tickLabel');
  const elMissionNumber = getEl('missionNumber');
  const elAllowedCommands = getEl('allowedCommands');
  const elObjectivesContainer = getEl('objectivesContainer');
  const elGridSize = getEl('gridSize');
  const elBgImage = getEl('bgImage');
  
  const btnReset = getEl('btnReset');
  const btnRun = getEl('btnRun');
  const btnStep = getEl('btnStep');
  const btnContinue = getEl('btnContinue');
  const btnStop = getEl('btnStop');
  const btnMotion = getEl('btnMotion');
  const btnCodeFocus = getEl('btnCodeFocus');
  const speedSel = getEl('speed');
  const codeGutter = getEl('codeGutter');
  const mobileKeybar = getEl('mobileKeybar');
  const mainPanels = getEl('mainPanels');
  const wrap = document.getElementById(containerId);
  
  const stashDropWrap = getEl('stashDropWrap');
  const stashLocked = getEl('stashLocked');

  const layerOpenings = getEl('layerOpenings');
  const layerStations = getEl('layerStations');
  const layerAsteroids = getEl('layerAsteroids');
  const layerAmmo = getEl('layerAmmo');
  const layerAliens = getEl('layerAliens');
  const layerPowerups = getEl('layerPowerups');
  const layerLaser = getEl('layerLaser');
  const player = getEl('player');

  let playerBaseHref = '';
  let CODE_STORAGE_KEY = '';
  let MOTION_STORAGE_KEY = '';

  // Basis-Pfad fest setzen statt dynamisch berechnen
  // Vorteil: raw.githubusercontent.com ist schneller als jsDelivr für kleine Dateien
  // und Änderungen sind sofort live (kein CDN-Cache-Purging nötig)
  const basePath = 'https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/';
  
  // Utility-Funktionen
  function worldToSvgY(y) { return (gridH - 1 - y) * cell; }
  function clearLayer(layer) { if(layer) while (layer.firstChild) layer.removeChild(layer.firstChild); }
  function makeImage(href, x, y, w, h) {
    w = w || cell; h = h || cell;
    const im = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    im.setAttribute('href', href);
    im.setAttribute('x', x);
    im.setAttribute('y', y);
    im.setAttribute('width', w);
    im.setAttribute('height', h);
    return im;
  }
  function rotateImage(im, angleDeg) {
    const x = parseFloat(im.getAttribute('x'));
    const y = parseFloat(im.getAttribute('y'));
    const w = parseFloat(im.getAttribute('width'));
    const h = parseFloat(im.getAttribute('height'));
    const cx = x + w/2;
    const cy = y + h/2;
    im.setAttribute('transform', 'rotate('+angleDeg+' '+cx+' '+cy+')');
  }
  function dirToAngle(dir) { return ({E:0, S:90, W:180, N:270})[dir] || 0; }
  
  function setPlayerPose(x, y, dir) {
    if (!player) return;
    player.setAttribute('x', x * cell);
    player.setAttribute('y', worldToSvgY(y));
    rotateImage(player, dirToAngle(dir));
  }
  
  function animatePlayerTransition(fromState, toState, durationMs) {
    if (!fromState || !toState || durationMs <= 0 || lowMotionEnabled || !player) return Promise.resolve();
    const fromX = fromState.x * cell;
    const fromY = worldToSvgY(fromState.y);
    const toX = toState.x * cell;
    const toY = worldToSvgY(toState.y);
    const fromA = dirToAngle(fromState.dir);
    const toA = dirToAngle(toState.dir);
    const start = performance.now();
    return new Promise(function(resolve) {
      function frame(now) {
        const t = Math.min((now - start) / durationMs, 1);
        const ix = fromX + (toX - fromX) * t;
        const iy = fromY + (toY - fromY) * t;
        const ia = fromA + (toA - fromA) * t;
        player.setAttribute('x', ix);
        player.setAttribute('y', iy);
        rotateImage(player, ia);
        if (t < 1) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });
  }
  
  function triggerPlayerLaserAnimation() {
    if (!player) return;
    const sep = playerBaseHref.indexOf('?') >= 0 ? '&' : '?';
    player.setAttribute('href', playerBaseHref + sep + 'laser=' + Date.now());
  }
  
  function setConsole(text) {
    if (!elConsole) return;
    elConsole.textContent = text || '(leer)';
    elConsole.scrollTop = elConsole.scrollHeight;
  }
  
  function getLineStart(value, pos) {
    return value.lastIndexOf('\n', pos - 1) + 1;
  }
  
  function updateLineNumbers() {
    if (!codeGutter || !elCode) return;
    const lineCount = Math.max(1, (elCode.value.match(/\n/g) || []).length + 1);
    const nums = new Array(lineCount);
    for (let i = 0; i < lineCount; i++) nums[i] = String(i + 1);
    codeGutter.textContent = nums.join('\n') + '\n';
    codeGutter.scrollTop = elCode.scrollTop;
  }
  
  function loadSavedCode() {
    try { return localStorage.getItem(CODE_STORAGE_KEY) || null; }
    catch (_) { return null; }
  }
  
  function persistCodeNow() {
    if (!elCode) return;
    try { localStorage.setItem(CODE_STORAGE_KEY, elCode.value); } catch (_) {}
  }
  
  function scheduleCodeSave() {
    if (saveCodeTimer) clearTimeout(saveCodeTimer);
    saveCodeTimer = setTimeout(persistCodeNow, 150);
  }
  
  function setLowMotion(enabled) {
    lowMotionEnabled = !!enabled;
    if (wrap) wrap.classList.toggle('sbp-reduce-motion', lowMotionEnabled);
    if (btnMotion) btnMotion.textContent = 'Motion: ' + (lowMotionEnabled ? 'Aus' : 'Ein');
    try { localStorage.setItem(MOTION_STORAGE_KEY, lowMotionEnabled ? 'off' : 'on'); } catch (_) {}
  }
  
  function toggleCodeFocus() {
    codeFocusEnabled = !codeFocusEnabled;
    if (mainPanels) mainPanels.classList.toggle('sbp-code-focus', codeFocusEnabled);
    if (btnCodeFocus) btnCodeFocus.textContent = codeFocusEnabled ? 'Karte anzeigen' : 'Nur Code';
  }
  
  function insertAtCursor(text) {
    if (!elCode) return;
    const s = elCode.selectionStart, en = elCode.selectionEnd;
    elCode.value = elCode.value.substring(0, s) + text + elCode.value.substring(en);
    const next = s + text.length;
    elCode.selectionStart = elCode.selectionEnd = next;
    updateLineNumbers();
    scheduleCodeSave();
    elCode.focus();
  }
  
  function lockReward() {
    if (stashDropWrap) stashDropWrap.style.display = 'none';
    if (stashLocked) stashLocked.style.display = 'block';
  }
  
  function unlockReward() {
    if (stashLocked) stashLocked.style.display = 'none';
    if (stashDropWrap) stashDropWrap.style.display = 'block';
  }
  
  function freezeOfficerGifNow() {
    if (!elOfficerGif || !elOfficerGif.naturalWidth || !elOfficerGif.naturalHeight) return;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = elOfficerGif.naturalWidth;
      canvas.height = elOfficerGif.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(elOfficerGif, 0, 0, canvas.width, canvas.height);
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      elOfficerGif.replaceWith(canvas);
    } catch (_) {}
  }
  
  function freezeOfficerGif() {
    if (!elOfficerGif) return;
    if (!elOfficerGif.complete || !elOfficerGif.naturalWidth) {
      elOfficerGif.addEventListener('load', freezeOfficerGifNow, { once: true });
      return;
    }
    freezeOfficerGifNow();
  }
  
  function playBriefingTransmission(text) {
    if (!elBriefingText) return;
    const fullText = '„' + (text || '') + '"';
    if (lowMotionEnabled) {
      elBriefingText.textContent = fullText;
      freezeOfficerGif();
      return;
    }
    let idx = 0;
    elBriefingText.textContent = '';
    const timer = setInterval(function() {
      idx += 1;
      elBriefingText.textContent = fullText.slice(0, idx);
      if (idx >= fullText.length) {
        clearInterval(timer);
        freezeOfficerGif();
      }
    }, 24);
  }
  
  function drawGoalMarker(gx, gy) {
    const board = getEl('board');
    if (!board) return;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', gx * cell + cell/2);
    circle.setAttribute('cy', worldToSvgY(gy) + cell/2);
    circle.setAttribute('r', cell * 0.4);
    circle.setAttribute('fill', 'rgba(183,255,42,0.25)');
    circle.setAttribute('stroke', 'rgba(183,255,42,0.9)');
    circle.setAttribute('stroke-width', '2');
    board.insertBefore(circle, player);
  }
  
  function drawStartWorld() {
    clearLayer(layerOpenings);
    clearLayer(layerAsteroids);
    clearLayer(layerPowerups);
    clearLayer(layerStations);
    clearLayer(layerAliens);
    clearLayer(layerAmmo);
    clearLayer(layerLaser);
    
    if (!config) return;
    
    const world = config.world;
    const assetBasePath = allMissionsData.baseAssets.basePath;
    const sprites = allMissionsData.baseAssets.sprites;
    
    world.openings.forEach(function(o) {
      if (!layerOpenings) return;
      var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      r.setAttribute('x', o[0]*cell + 4);
      r.setAttribute('y', worldToSvgY(o[1]) + 4);
      r.setAttribute('width', cell - 8);
      r.setAttribute('height', cell - 8);
      r.setAttribute('fill', 'rgba(255,215,0,0.10)');
      r.setAttribute('stroke', 'rgba(255,215,0,0.85)');
      r.setAttribute('stroke-width', '2');
      r.setAttribute('rx', '6');
      r.setAttribute('ry', '6');
      layerOpenings.appendChild(r);
    });
    
    world.stations.forEach(function(s) {
      if (!layerStations) return;
      // Support station types: [x, y, type] or [x, y] (defaults to 'blue')
      var stationType = s[2] || 'blue';
      var stationSprite = sprites['station' + stationType.charAt(0).toUpperCase() + stationType.slice(1)];
      layerStations.appendChild(makeImage(assetBasePath + stationSprite, s[0]*cell, worldToSvgY(s[1] + 2), cell*4, cell*3));
    });
    
    world.asteroids.forEach(function(a) {
      if (!layerAsteroids) return;
      layerAsteroids.appendChild(makeImage(assetBasePath + sprites.asteroid, a[0]*cell, worldToSvgY(a[1])));
    });
    
    world.ammo.forEach(function(a) {
      if (!layerAmmo) return;
      layerAmmo.appendChild(makeImage(assetBasePath + sprites.ammo, a[0]*cell + 6, worldToSvgY(a[1]) + 6, cell - 12, cell - 12));
    });
    
    world.aliens.forEach(function(a) {
      if (!layerAliens) return;
      layerAliens.appendChild(makeImage(assetBasePath + sprites.alien, a[0]*cell, worldToSvgY(a[1])));
    });
    
    world.powerups.forEach(function(p) {
      if (!layerPowerups) return;
      layerPowerups.appendChild(makeImage(assetBasePath + sprites.powerup, p[0]*cell + 8, worldToSvgY(p[1]) + 8, cell - 16, cell - 16));
    });
    
    if (world.goal) {
      drawGoalMarker(world.goal.x, world.goal.y);
    }
    
    setPlayerPose(world.start.x, world.start.y, world.start.dir);
    if (player) player.setAttribute('href', playerBaseHref);
    if (elTickLabel) elTickLabel.textContent = 'Tick: 0';
    if (elSimStatus) elSimStatus.textContent = 'Reset.';
    lockReward();
    lastRenderedState = { x: world.start.x, y: world.start.y, dir: world.start.dir };
  }
  
  let lastAlienKey = '';
  let lastAmmoKey = '';
  
  function renderPowerupLayers(fieldPows, placedPows) {
    if (!layerPowerups) return;
    const assetBasePath = allMissionsData.baseAssets.basePath;
    const sprites = allMissionsData.baseAssets.sprites;
    clearLayer(layerPowerups);
    (fieldPows || []).forEach(function(p) {
      layerPowerups.appendChild(makeImage(assetBasePath + sprites.powerup, p[0]*cell + 8, worldToSvgY(p[1]) + 8, cell - 16, cell - 16));
    });
    (placedPows || []).forEach(function(p) {
      layerPowerups.appendChild(makeImage(assetBasePath + sprites.powerup, p[0]*cell + 4, worldToSvgY(p[1]) + 4, cell - 8, cell - 8));
    });
  }
  
  function renderAliens(aliens) {
    if (!layerAliens) return;
    const assetBasePath = allMissionsData.baseAssets.basePath;
    const sprites = allMissionsData.baseAssets.sprites;
    var key = JSON.stringify(aliens || []);
    if (key === lastAlienKey) return;
    lastAlienKey = key;
    clearLayer(layerAliens);
    (aliens || []).forEach(function(a) {
      layerAliens.appendChild(makeImage(assetBasePath + sprites.alien, a[0]*cell, worldToSvgY(a[1])));
    });
  }
  
  function renderAmmo(ammoList) {
    if (!layerAmmo) return;
    const assetBasePath = allMissionsData.baseAssets.basePath;
    const sprites = allMissionsData.baseAssets.sprites;
    var key = JSON.stringify(ammoList || []);
    if (key === lastAmmoKey) return;
    lastAmmoKey = key;
    clearLayer(layerAmmo);
    (ammoList || []).forEach(function(a) {
      layerAmmo.appendChild(makeImage(assetBasePath + sprites.ammo, a[0]*cell + 6, worldToSvgY(a[1]) + 6, cell - 12, cell - 12));
    });
  }
  
  function renderLaser(lastShot) {
    if (!layerLaser) return;
    clearLayer(layerLaser);
    if (!lastShot) return;
    triggerPlayerLaserAnimation();
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lastShot.from[0]*cell + cell/2);
    line.setAttribute('y1', worldToSvgY(lastShot.from[1]) + cell/2);
    line.setAttribute('x2', lastShot.to[0]*cell + cell/2);
    line.setAttribute('y2', worldToSvgY(lastShot.to[1]) + cell/2);
    line.setAttribute('stroke', 'rgba(255,77,109,0.9)');
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-linecap', 'round');
    layerLaser.appendChild(line);
    setTimeout(function() { clearLayer(layerLaser); }, 400);
  }
  
  async function renderState(state, opts) {
    if (!state || typeof state.tick !== 'number' || typeof state.x !== 'number' || typeof state.y !== 'number') {
      setConsole('Interner Fehler: Ungültiger Status:\n' + JSON.stringify(state));
      if (elSimStatus) elSimStatus.textContent = 'Interner Fehler (siehe Konsole).';
      return;
    }
    opts = opts || {};
    const animateMs = opts.animateMs || 0;
    if (animateMs > 0 && lastRenderedState) {
      await animatePlayerTransition(lastRenderedState, state, animateMs);
    } else {
      setPlayerPose(state.x, state.y, state.dir);
    }
    lastRenderedState = { x: state.x, y: state.y, dir: state.dir };
    
    renderPowerupLayers(state.field_powerups, state.powerups);
    renderAliens(state.aliens);
    renderAmmo(state.field_ammo);
    if (state.last_shot) renderLaser(state.last_shot);
    
    if (elTickLabel) elTickLabel.textContent = 'Tick: ' + state.tick;
    if (state.message && elSimStatus) elSimStatus.textContent = state.message;
    if (state.solved) unlockReward();
  }
  
  function hashCode(s) {
    let h = 0;
    for (let i=0;i<s.length;i++) h = ((h<<5)-h) + s.charCodeAt(i) | 0;
    return String(h);
  }
  
  async function ensureProgramLoaded(force) {
    if (!pyodide || !elCode) return;
    const code = elCode.value;
    const h = hashCode(code);
    if (force || !programLoaded || (lastCodeHash && h !== lastCodeHash)) {
      const stJson = pyodide.globals.get('loadProgram')(code);
      const st = JSON.parse(stJson);
      programLoaded = true;
      lastCodeHash = h;
      await renderState(st);
      const _out = st.output || '';
      setConsole(_out ? _out + '\n── Programm geladen ──' : 'Programm geladen.');
    }
  }
  
  async function step(opts) {
    if (!pyodide) return;
    const stJson = pyodide.globals.get('stepOnce')();
    const st = JSON.parse(stJson);
    await renderState(st, opts);
    return st;
  }
  
  async function runAll() {
    if (!pyodide) return;
    const stJson = pyodide.globals.get('runAll')(2000);
    const st = JSON.parse(stJson);
    await renderState(st);
    setConsole("Run beendet.\n" + (st.message || ''));
    stopContinue();
  }
  
  function stopContinue() {
    continueToken += 1;
    if (continueTimer) clearTimeout(continueTimer);
    continueTimer = null;
  }
  
  // Missions laden
  async function loadAllMissions() {
    const missionsUrl = basePath + 'missions.js';
    try {
      const response = await fetch(missionsUrl);
      if (!response.ok) throw new Error(`missions.js nicht gefunden (${response.status}) – URL: ${missionsUrl}`);
      allMissionsData = await response.json();
      console.log('✅ Missions-Daten geladen:', Object.keys(allMissionsData.missions).length, 'Missionen');
    } catch (err) {
      console.error('❌ Fehler beim Laden der Missions-Daten:', err);
      if (elPyStatus) elPyStatus.textContent = 'Fehler: missions.js laden fehlgeschlagen';
      throw err;
    }
  }
  
  function selectMission() {
    const mission = allMissionsData.missions[missionId];
    if (!mission) {
      throw new Error(`Mission "${missionId}" nicht gefunden!`);
    }
    config = { id: missionId, ...mission };
    console.log('✅ Mission geladen:', missionId, '-', config.title);
  }
  
  function initUI() {
    const assetBasePath = allMissionsData.baseAssets.basePath;
    
    // Mission-Metadaten
    if (elMissionNumber) elMissionNumber.textContent = config.number;
    if (elAllowedCommands) elAllowedCommands.textContent = config.allowedCommands.map(c => c + '()').join(', ');
    if (elGridSize) elGridSize.textContent = `${config.grid.width}×${config.grid.height}`;
    
    // Bilder
    if (elOfficerGif) elOfficerGif.src = assetBasePath + allMissionsData.baseAssets.officerGif;
    if (elBgImage) elBgImage.setAttribute('href', assetBasePath + allMissionsData.baseAssets.background);
    playerBaseHref = assetBasePath + allMissionsData.baseAssets.sprites.player;
    if (player) player.setAttribute('href', playerBaseHref);
    
    // Grid-Größe
    gridW = config.grid.width;
    gridH = config.grid.height;
    
    // Objectives
    if (elObjectivesContainer) {
      elObjectivesContainer.innerHTML = '';
      config.objectives.forEach(obj => {
        const div = document.createElement('div');
        div.className = 'sbp-obj';
        div.innerHTML = obj.type === 'primary' 
          ? `<div><strong>${obj.text}</strong></div>`
          : `: `<div><strong>${obj.text}</strong></div>`;
        elObjectivesContainer.appendChild(div);
      });
    }
    
    // Briefing
    playBriefingTransmission(config.briefing.text);
    
    // Reward
    if (config.reward && stashDropWrap) {
      stashDropWrap.innerHTML = `[stashdrop secret="${config.reward.stashSecret}" text="${config.reward.stashText}" image]`;
    }
    
    // Storage-Keys
    CODE_STORAGE_KEY = 'sbp:code:' + missionId;
    MOTION_STORAGE_KEY = 'sbp:motion:' + missionId;
    
    // Gespeicherten Code laden
    if (elCode) {
      elCode.value = loadSavedCode() || "";
      updateLineNumbers();
    }
    
    // Motion-Einstellung laden
    try {
      const motionSetting = localStorage.getItem(MOTION_STORAGE_KEY);
      setLowMotion(motionSetting === 'off');
    } catch (_) {}
  }
  
  async function initPyodide() {
    try {
      if (elPyStatus) elPyStatus.textContent = 'Python lädt…';
      pyodide = await loadPyodide();
      
      // Engine-Code laden
      const engineResponse = await fetch(basePath + 'engine.py');
      const engineCode = await engineResponse.text();
      
      // Mission-spezifische Konfiguration
      await pyodide.runPythonAsync(`
${engineCode}

# Mission-spezifische Konfiguration
engine.gridW = ${config.grid.width}
engine.gridH = ${config.grid.height}
engine.startX = ${config.world.start.x}
engine.startY = ${config.world.start.y}
engine.startDir = "${config.world.start.dir}"
engine.goalX = ${config.world.goal ? config.world.goal.x : 0}
engine.goalY = ${config.world.goal ? config.world.goal.y : 0}
engine.hasGoal = ${config.rules.reachGoal ? 'True' : 'False'}
engine.initAsteroids = ${JSON.stringify(config.world.asteroids)}
engine.initOpenings = ${JSON.stringify(config.world.openings)}
engine.initFieldPow = ${JSON.stringify(config.world.powerups)}
engine.initStations = ${JSON.stringify(config.world.stations)}
engine.initAliens = ${JSON.stringify(config.world.aliens)}
engine.initAmmo = ${JSON.stringify(config.world.ammo)}
engine.alien_patrols = ${JSON.stringify(config.world.alienPatrols || [])}
engine.initPlayerPow = ${config.player.startPowerups}
engine.initPlayerAmmo = ${config.player.startAmmo}
engine.closeN = ${config.rules.closeOpenings}
engine.destroyN = ${config.rules.destroyAliens}
engine.collectN = ${config.rules.collectPowerups}
engine.deliverN = ${config.rules.deliverPowerups}
engine.reset()

MISSION_ID = "${missionId}"
ALLOWED_CALLS = ${JSON.stringify(config.allowedCommands)}
      `);
      
      if (elPyStatus) elPyStatus.textContent = 'Python 3 bereit.';
    } catch (err) {
      if (elPyStatus) elPyStatus.textContent = 'Python-Fehler.';
      setConsole('Python konnte nicht geladen werden:\n' + String(err));
      throw err;
    }
  }
  
  // Event-Handler
  if (btnReset) btnReset.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    drawStartWorld();
    setConsole('(leer)');
    programLoaded = false;
    lastCodeHash = '';
    try { pyodide && pyodide.runPython('engine.reset()'); } catch (_) {}
  });
  
  if (btnRun) btnRun.addEventListener('click', async function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    try { await ensureProgramLoaded(true); await runAll(); }
    catch (err) { setConsole(String(err)); }
  });
  
  if (btnStep) btnStep.addEventListener('click', async function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    try { await ensureProgramLoaded(false); await step(); }
    catch (err) { setConsole(String(err)); }
  });
  
  if (btnContinue) btnContinue.addEventListener('click', async function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    try {
      await ensureProgramLoaded(false);
      const delay = parseInt(speedSel.value, 10) || 400;
      const token = ++continueToken;
      const loop = async function() {
        if (token !== continueToken) return;
        try {
          const st = await step({ animateMs: lowMotionEnabled ? 0 : Math.max(80, delay - 40) });
          if (!st || /Programmende|Mission erfuellt|FEHLER|Interner Fehler/.test(String(st.message || ''))) {
            stopContinue();
            return;
          }
          continueTimer = setTimeout(loop, 0);
        } catch (err) {
          setConsole(String(err));
          stopContinue();
        }
      };
      loop();
    } catch (err) {
      setConsole(String(err));
    }
  });
  
  if (btnStop) btnStop.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    if (elSimStatus) elSimStatus.textContent = 'Stop.';
  });
  
  if (btnMotion) btnMotion.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    setLowMotion(!lowMotionEnabled);
  });
  
  if (btnCodeFocus) btnCodeFocus.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    toggleCodeFocus();
  });
  
  if (elCode) {
    elCode.addEventListener('input', function() { updateLineNumbers(); scheduleCodeSave(); });
    elCode.addEventListener('scroll', function() { if (codeGutter) codeGutter.scrollTop = elCode.scrollTop; });
  }
  
  if (mobileKeybar) mobileKeybar.addEventListener('click', function(e) {
    const btn = e.target && e.target.closest('button[data-ins]');
    if (!btn) return;
    insertAtCursor(btn.getAttribute('data-ins') || '');
  });
  
  if (elCode) elCode.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = elCode.selectionStart, en = elCode.selectionEnd;
      if (e.shiftKey) {
        const v = elCode.value;
        const lineStart = getLineStart(v, s);
        if (v.substring(lineStart, lineStart + 4) === '    ') {
          elCode.value = v.substring(0, lineStart) + v.substring(lineStart + 4);
          const nextS = s >= lineStart + 4 ? s - 4 : lineStart;
          const nextE = en >= lineStart + 4 ? en - 4 : lineStart;
          elCode.selectionStart = nextS;
          elCode.selectionEnd = nextE;
        }
      } else {
        elCode.value = elCode.value.substring(0, s) + '    ' + elCode.value.substring(en);
        elCode.selectionStart = elCode.selectionEnd = s + 4;
      }
      updateLineNumbers();
      scheduleCodeSave();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const s = elCode.selectionStart, en = elCode.selectionEnd;
      const v = elCode.value;
      const lineStart = getLineStart(v, s);
      const line = v.substring(lineStart, s);
      const indent = (line.match(/^\s*/) || [''])[0];
      const extra = line.trim().endsWith(':') ? '    ' : '';
      const insert = '\n' + indent + extra;
      elCode.value = v.substring(0, s) + insert + v.substring(en);
      const next = s + insert.length;
      elCode.selectionStart = elCode.selectionEnd = next;
      updateLineNumbers();
      scheduleCodeSave();
    }
  });
  
  // Initialisierung
  try {
    await loadAllMissions();
    selectMission();
    initUI();
    drawStartWorld();
    await initPyodide();
  } catch (err) {
    console.error('❌ Initialisierungsfehler:', err);
    if (elPyStatus) elPyStatus.textContent = 'Fehler beim Laden.';
    setConsole('Fehler:\n' + String(err));
  }
  
})();
