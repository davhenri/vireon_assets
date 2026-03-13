(function () {
  const mission = window.VIREON_MISSION;
  const enginePy = window.VIREON_ENGINE_PY;
  const BASE = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/';

  if (!mission) {
    console.error('VIREON: mission data missing');
    return;
  }

  // ===== IMAGE URLS =====
  const IMG = {
    player: BASE + 'vireon/player.svg',
    asteroid: BASE + 'vireon/asteroid.png',
    powerup: BASE + 'vireon/powerup.png',
    station: BASE + 'vireon/station.png',
    alien: BASE + 'vireon/alien.png',
    ammo: BASE + 'vireon/ammo.png',
    explosion: BASE + 'vireon/explosion.gif',
    officer: BASE + 'mission_briefings/offizier_briefing_12s.gif',
    background: BASE + 'mission_briefings/bg.jpg'
  };

  const gridW = 15, gridH = 15, cell = 40;
  const missionId = mission.id || 'm1-06';

  // ===== BUILD HTML STRUCTURE =====
  const html = `
<div class="sbp-wrap">
  <div class="sbp-hero">
    <div class="sbp-title">
      <div>
        <div class="sbp-chip">MISSION FILE • ${mission.id || '1.06'}</div>
      </div>
      <div class="sbp-chip">COMMANDS: ${(mission.allowed_commands || []).map(c => '<code style="color:var(--sbp-text);">' + c + '()</code>').join(' ')}</div>
    </div>

    <div class="sbp-briefing">
      <div class="sbp-officer">
        <img id="officerGif" src="${IMG.officer}" alt="Briefing-Offizier">
      </div>
      <div class="sbp-brief-card">
        <div class="sbp-kicker">HOLO BRIEFING</div>
        <p id="briefingText" class="sbp-body"></p>
      </div>
    </div>

    <div class="sbp-objectives">
      <div class="sbp-obj">
        <div><strong>${mission.objectives_text || 'Mission laden...'}</strong></div>
      </div>
      <div class="sbp-obj">
        <div><strong>Befehle: ${(mission.allowed_commands || []).join(', ')}</strong></div>
      </div>
    </div>
  </div>

  <div class="sbp-main" id="mainPanels">
    <div class="row g-3">
      <div class="col-12 col-lg-5">
        <div class="sbp-panel">
          <div class="sbp-panel-header">
            <div class="title">🕹️ Kommando-Konsole</div>
            <div style="display:flex; gap:6px; align-items:center;">
              <button type="button" class="sbp-btn sbp-mobile-toggle" id="btnCodeFocus" style="padding:6px 10px;">Nur Code</button>
              <span id="pyStatus" class="badge rounded-pill">System lädt&hellip;</span>
            </div>
          </div>

          <div class="sbp-editor">
            <div class="sbp-codewrap">
              <pre id="codeGutter" class="sbp-gutter">1</pre>
              <textarea id="code" class="sbp-textarea" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off" enterkeyhint="done"></textarea>
            </div>
            <div class="sbp-keybar" id="mobileKeybar">
              <button type="button" class="sbp-keybtn" data-ins="(">(</button>
              <button type="button" class="sbp-keybtn" data-ins=")">)</button>
              <button type="button" class="sbp-keybtn" data-ins=":">:</button>
              <button type="button" class="sbp-keybtn" data-ins=",">,</button>
              <button type="button" class="sbp-keybtn" data-ins=".">.</button>
              <button type="button" class="sbp-keybtn" data-ins="=">=</button>
              <button type="button" class="sbp-keybtn" data-ins="_">_</button>
              <button type="button" class="sbp-keybtn" data-ins="'">'</button>
            </div>

            <div class="sbp-controls">
              <button type="button" class="sbp-btn" id="btnReset">Reset</button>
              <button type="button" class="sbp-btn primary" id="btnRun">Run</button>
              <button type="button" class="sbp-btn warn" id="btnStep">Step</button>
              <button type="button" class="sbp-btn" id="btnContinue">Continue</button>
              <button type="button" class="sbp-btn danger" id="btnStop">Stop</button>
              <button type="button" class="sbp-btn" id="btnMotion">Motion: Ein</button>
              <select id="speed" class="sbp-select">
                <option value="1200">0.8×</option>
                <option value="800">1×</option>
                <option value="400" selected>2×</option>
                <option value="200">4×</option>
              </select>
            </div>

            <div class="sbp-metrics">
              <div class="sbp-box">
                <div class="label">STATUS</div>
                <div id="simStatus" style="margin-top:6px; font-weight:900;">Bereit.</div>
              </div>

              <div class="sbp-box">
                <div class="label">KONSOLE</div>
                <pre id="console">(leer)</pre>
              </div>

              <div class="sbp-box sbp-reward">
                <div class="label">MISSIONSBELOHNUNG</div>
                <div style="margin-top:6px; color:var(--sbp-muted);">Freigeschaltet, sobald die Mission erfüllt ist.</div>

                <div id="stashDropWrap" style="display:none; margin-top:10px;">
                  [stashdrop secret="${mission.reward?.secret || 'qR9sT0'}" text="${mission.reward?.text || 'Pick up!'}" image]
                </div>

                <div id="stashLocked" style="margin-top:10px; font-weight:900;">
                  🔒 Noch nicht freigeschaltet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <div class="sbp-panel">
          <div class="sbp-panel-header">
            <div class="title">🌌 Simulation (15×15)</div>
            <span id="tickLabel" class="badge rounded-pill">Tick: 0</span>
          </div>

          <div class="sbp-mapwrap">
            <svg id="board" viewBox="0 0 600 600" class="sbp-map">
              <defs>
                <pattern id="spaceImg" patternUnits="userSpaceOnUse" width="600" height="600">
                  <image href="${IMG.background}"
                         x="0" y="0" width="600" height="600"
                         preserveAspectRatio="xMidYMid slice"></image>
                </pattern>
                <linearGradient id="spaceDim" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(0,0,0,0.20)"></stop>
                  <stop offset="100%" stop-color="rgba(0,0,0,0.55)"></stop>
                </linearGradient>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="40" height="40" fill="transparent"></rect>
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(233,240,255,0.10)" stroke-width="1"></path>
                </pattern>
                <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
                  <stop offset="55%" stop-color="rgba(0,0,0,0)"></stop>
                  <stop offset="100%" stop-color="rgba(0,0,0,0.58)"></stop>
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="600" height="600" fill="url(#spaceImg)"></rect>
              <rect x="0" y="0" width="600" height="600" fill="url(#spaceDim)"></rect>
              <rect x="0" y="0" width="600" height="600" fill="url(#grid)"></rect>
              <rect x="0" y="0" width="600" height="600" fill="url(#vignette)"></rect>
              <g id="layerOpenings"></g>
              <g id="layerStations"></g>
              <g id="layerAsteroids"></g>
              <g id="layerAmmo"></g>
              <g id="layerAliens"></g>
              <g id="layerPowerups"></g>
              <g id="layerLaser"></g>
              <g id="layerExplosions"></g>
              <image id="player" href="" x="0" y="0" width="40" height="40"></image>
            </svg>

            <div class="sbp-mapnote">
              Gelbe Rahmen markieren Öffnungen. Stationen zum Laden/Entladen (Dock rechts).
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  // Insert into page
  const target = document.getElementById('region-main') || document.querySelector('#maincontent') || document.body;
  target.insertAdjacentHTML('beforeend', html);

  // ===== GET ELEMENT REFERENCES =====
  const elCode = document.getElementById('code');
  const elConsole = document.getElementById('console');
  const elBriefingText = document.getElementById('briefingText');
  const elOfficerGif = document.getElementById('officerGif');
  const elPyStatus = document.getElementById('pyStatus');
  const elSimStatus = document.getElementById('simStatus');
  const elTickLabel = document.getElementById('tickLabel');
  const briefingNarrative = mission.briefing || '';

  const btnReset = document.getElementById('btnReset');
  const btnRun = document.getElementById('btnRun');
  const btnStep = document.getElementById('btnStep');
  const btnContinue = document.getElementById('btnContinue');
  const btnStop = document.getElementById('btnStop');
  const btnMotion = document.getElementById('btnMotion');
  const btnCodeFocus = document.getElementById('btnCodeFocus');
  const speedSel = document.getElementById('speed');
  const codeGutter = document.getElementById('codeGutter');
  const mobileKeybar = document.getElementById('mobileKeybar');
  const mainPanels = document.getElementById('mainPanels');
  const wrap = document.querySelector('.sbp-wrap');

  const stashDropWrap = document.getElementById('stashDropWrap');
  const stashLocked = document.getElementById('stashLocked');

  const layerOpenings = document.getElementById('layerOpenings');
  const layerStations = document.getElementById('layerStations');
  const layerAsteroids = document.getElementById('layerAsteroids');
  const layerAmmo = document.getElementById('layerAmmo');
  const layerAliens = document.getElementById('layerAliens');
  const layerPowerups = document.getElementById('layerPowerups');
  const layerLaser = document.getElementById('layerLaser');
  const layerExplosions = document.getElementById('layerExplosions');
  const player = document.getElementById('player');
  const playerBaseHref = IMG.player;
  const explosionGifData = IMG.explosion;
  player.setAttribute('href', playerBaseHref);

  const CODE_STORAGE_KEY = 'sbp:code:' + missionId;
  const MOTION_STORAGE_KEY = 'sbp:motion:' + missionId;
  let saveCodeTimer = null;
  let lowMotionEnabled = false;
  let codeFocusEnabled = false;

  // ===== HELPER FUNCTIONS =====
  function worldToSvgY(y) { return (gridH - 1 - y) * cell; }
  function clearLayer(layer) { while (layer.firstChild) layer.removeChild(layer.firstChild); }
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
    player.setAttribute('x', x * cell);
    player.setAttribute('y', worldToSvgY(y));
    rotateImage(player, dirToAngle(dir));
  }

  function setConsole(text) {
    elConsole.textContent = text || '(leer)';
    elConsole.scrollTop = elConsole.scrollHeight;
  }

  function getLineStart(value, pos) {
    return value.lastIndexOf('\n', pos - 1) + 1;
  }

  function updateLineNumbers() {
    if (!codeGutter) return;
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
    const s = elCode.selectionStart, en = elCode.selectionEnd;
    elCode.value = elCode.value.substring(0, s) + text + elCode.value.substring(en);
    const next = s + text.length;
    elCode.selectionStart = elCode.selectionEnd = next;
    updateLineNumbers();
    scheduleCodeSave();
    elCode.focus();
  }

  function lockReward() {
    stashDropWrap.style.display = 'none';
    stashLocked.style.display = 'block';
  }

  function unlockReward() {
    stashLocked.style.display = 'none';
    stashDropWrap.style.display = 'block';
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

  function playBriefingTransmission() {
    if (!elBriefingText) return;
    const fullText = '„' + (briefingNarrative || '') + '"';
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

  function drawStartWorld() {
    clearLayer(layerOpenings);
    clearLayer(layerAsteroids);
    clearLayer(layerPowerups);
    clearLayer(layerStations);
    clearLayer(layerAliens);
    clearLayer(layerAmmo);
    clearLayer(layerLaser);
    clearLayer(layerExplosions);

    const eng = mission.engine;

    // Draw openings
    (eng.openings || []).forEach(function(o) {
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

    // Draw stations
    (eng.stations || []).forEach(function(s, idx) {
      const stationUrl = eng.station_urls && eng.station_urls[idx] ? BASE + eng.station_urls[idx] : IMG.station;
      layerStations.appendChild(makeImage(stationUrl, s[0]*cell, worldToSvgY(s[1] + 2), cell*4, cell*3));
    });

    // Draw asteroids
    (eng.asteroids || []).forEach(function(a) {
      layerAsteroids.appendChild(makeImage(IMG.asteroid, a[0]*cell, worldToSvgY(a[1])));
    });

    // Draw ammo
    (eng.ammo || []).forEach(function(a) {
      layerAmmo.appendChild(makeImage(IMG.ammo, a[0]*cell + 6, worldToSvgY(a[1]) + 6, cell - 12, cell - 12));
    });

    // Draw aliens
    (eng.aliens || []).forEach(function(a) {
      layerAliens.appendChild(makeImage(IMG.alien, a[0]*cell, worldToSvgY(a[1])));
    });

    // Draw field powerups
    (eng.field_powerups || []).forEach(function(p) {
      layerPowerups.appendChild(makeImage(IMG.powerup, p[0]*cell + 8, worldToSvgY(p[1]) + 8, cell - 16, cell - 16));
    });

    setPlayerPose(eng.start.x, eng.start.y, eng.start.dir);
    player.setAttribute('href', playerBaseHref);
    player.style.opacity = '1';
    elTickLabel.textContent = 'Tick: 0';
    elSimStatus.textContent = 'Reset.';
    lockReward();
    lastRenderedState = { x: eng.start.x, y: eng.start.y, dir: eng.start.dir };
  }

  let lastRenderedState = null;
  let lastRenderedShotTick = null;

  async function renderState(state, opts) {
    if (!state || typeof state.tick !== 'number' || typeof state.x !== 'number' || typeof state.y !== 'number') {
      setConsole('Interner Fehler: Ungültiger Status:\n' + JSON.stringify(state));
      elSimStatus.textContent = 'Interner Fehler (siehe Konsole).';
      return;
    }
    opts = opts || {};
    setPlayerPose(state.x, state.y, state.dir);
    lastRenderedState = { x: state.x, y: state.y, dir: state.dir };

    // Render powerups
    clearLayer(layerPowerups);
    (state.field_powerups || []).forEach(function(p) {
      layerPowerups.appendChild(makeImage(IMG.powerup, p[0]*cell + 8, worldToSvgY(p[1]) + 8, cell - 16, cell - 16));
    });
    (state.powerups || []).forEach(function(p) {
      layerPowerups.appendChild(makeImage(IMG.powerup, p[0]*cell + 4, worldToSvgY(p[1]) + 4, cell - 8, cell - 8));
    });

    elTickLabel.textContent = 'Tick: ' + state.tick;
    if (state.message) elSimStatus.textContent = state.message;
    if (state.player_alive === false) {
      elSimStatus.textContent = '❌ Dein Schiff wurde getroffen!';
      elSimStatus.style.color = 'var(--sbp-danger)';
    }
    if (state.solved) unlockReward();
  }

  // ===== PYODIDE =====
  let pyodide = null;
  let continueTimer = null;
  let continueToken = 0;
  let programLoaded = false;
  let lastCodeHash = '';

  function hashCode(s) {
    let h = 0;
    for (let i=0;i<s.length;i++) h = ((h<<5)-h) + s.charCodeAt(i) | 0;
    return String(h);
  }

  async function initPyodide() {
    try {
      elPyStatus.textContent = 'System lädt…';

      // Load Pyodide script
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        document.head.appendChild(script);
        await new Promise((resolve) => { script.onload = resolve; });
      }

      pyodide = await loadPyodide();
      await pyodide.runPythonAsync(enginePy);

      // Configure engine with mission data from JSON
      await pyodide.runPythonAsync(`
import json
mission_data = json.loads('''${JSON.stringify(mission)}''')
configure_engine(mission_data)
      `);

      elPyStatus.textContent = 'Python 3 bereit.';
    } catch (err) {
      elPyStatus.textContent = 'Fehler.';
      setConsole('Pyodide konnte nicht geladen werden:\n' + String(err));
      throw err;
    }
  }

  async function ensureProgramLoaded(force) {
    if (!pyodide) return;
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

  function triggerPlayerExplosion() {
    setTimeout(function() { player.style.opacity = '0'; }, 220);
  }

  // ===== EVENT LISTENERS =====
  btnReset.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    drawStartWorld();
    setConsole('(leer)');
    programLoaded = false;
    lastCodeHash = '';
    lastRenderedShotTick = null;
    try { pyodide && pyodide.runPython('engine.reset()'); } catch (_) {}
  });

  btnRun.addEventListener('click', async function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    try { await ensureProgramLoaded(true); await runAll(); }
    catch (err) { setConsole(String(err)); if (/Kollision|collision/i.test(String(err))) triggerPlayerExplosion(); }
  });

  btnStep.addEventListener('click', async function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    try { await ensureProgramLoaded(false); await step(); }
    catch (err) { setConsole(String(err)); if (/Kollision|collision/i.test(String(err))) triggerPlayerExplosion(); }
  });

  btnContinue.addEventListener('click', async function(e) {
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
          if (/Kollision|collision/i.test(String(err))) triggerPlayerExplosion();
          stopContinue();
        }
      };
      loop();
    } catch (err) {
      setConsole(String(err));
    }
  });

  btnStop.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    stopContinue();
    elSimStatus.textContent = 'Stop.';
  });

  btnMotion && btnMotion.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    setLowMotion(!lowMotionEnabled);
  });

  btnCodeFocus && btnCodeFocus.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation();
    toggleCodeFocus();
  });

  setLowMotion((function() {
    try { return localStorage.getItem(MOTION_STORAGE_KEY) === 'off'; } catch (_) { return false; }
  })());

  drawStartWorld();
  playBriefingTransmission();
  elCode.value = loadSavedCode() || "";
  lockReward();
  updateLineNumbers();

  elCode.addEventListener('input', function() { updateLineNumbers(); scheduleCodeSave(); });
  elCode.addEventListener('scroll', function() { codeGutter.scrollTop = elCode.scrollTop; });

  mobileKeybar && mobileKeybar.addEventListener('click', function(e) {
    const btn = e.target && e.target.closest('button[data-ins]');
    if (!btn) return;
    insertAtCursor(btn.getAttribute('data-ins') || '');
  });

  elCode.addEventListener('keydown', function(e) {
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

  initPyodide();
})();
