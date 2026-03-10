// mission-loader.js - Template Injector
(function() {
  const scriptEl = document.currentScript;
  let container = scriptEl ? scriptEl.previousElementSibling : null;

  // Fallbacks: Manche Einbettungsumgebungen (z.B. Moodle) verändern das DOM.
  // Versuche alternative Strategien, um das Container-Element zu finden.
  if (!container || typeof container.getAttribute !== 'function' || !container.getAttribute('data-mission')) {
    container = document.querySelector('div[data-mission]') || document.getElementById('mission-container') || (scriptEl && scriptEl.parentElement && scriptEl.parentElement.querySelector('div')) || container;
  }

  // Hilfsfunktion: Fehler auf der Seite anzeigen
  function showError(title, message, solution) {
    console.error('❌ Mission-Loader:', title);
    console.error('  ', message);
    console.error('   Lösung:', solution);

    // Erstelle ein visuelles Fehler-Element
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'border: 3px solid #ff4444; background: #fff; padding: 20px; margin: 20px 0; border-radius: 8px; font-family: system-ui, sans-serif;';
    errorDiv.innerHTML = `
      <h3 style="color: #ff4444; margin: 0 0 10px 0;">❌ ${title}</h3>
      <p style="margin: 10px 0; color: #333;"><strong>Problem:</strong> ${message}</p>
      <p style="margin: 10px 0; color: #333;"><strong>Lösung:</strong> ${solution}</p>
      <details style="margin-top: 15px;">
        <summary style="cursor: pointer; color: #666;">Beispiel anzeigen</summary>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin-top: 10px; overflow-x: auto;"><code>&lt;link rel="stylesheet" href="https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/mission.css"&gt;

&lt;div id="mission-container" data-mission="m1-01"&gt;&lt;/div&gt;
&lt;script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"&gt;&lt;/script&gt;
&lt;script src="https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/mission-loader.js"&gt;&lt;/script&gt;</code></pre>
      </details>
      <p style="margin-top: 15px; font-size: 0.9em; color: #666;">Weitere Hilfe: Siehe <code>moodle/alternative_embeds/SCHNELLANLEITUNG.md</code></p>
    `;
    document.body.appendChild(errorDiv);
  }

  // Fehlerprüfung: Container muss existieren
  if (!container) {
    showError(
      'Kein Container-Element gefunden',
      'Das Script konnte kein Element VOR dem &lt;script&gt;-Tag finden.',
      'Füge ein &lt;div id="mission-container" data-mission="m1-01"&gt;&lt;/div&gt; VOR dem &lt;script&gt;-Tag ein.'
    );
    return;
  }

  // Fehlerprüfung: Container muss ein data-mission Attribut haben
  const missionId = container.getAttribute('data-mission');
  if (!missionId) {
    showError(
      'Fehlende Mission-ID',
      'Das Container-Element hat kein data-mission Attribut.',
      'Füge dem &lt;div&gt; das Attribut data-mission="m1-01" hinzu (passe die Mission-ID entsprechend an).'
    );
    container.innerHTML = '<p style="color: #ff4444; padding: 20px; border: 2px solid #ff4444; border-radius: 8px;">❌ Fehler: Keine Mission-ID angegeben. Öffne die Browser-Konsole für Details.</p>';
    return;
  }

  // Container braucht eine ID für die Kommunikation mit mission-core.js
  if (!container.id) {
    container.id = 'mission-container';
  }

  // Wichtig für Kontrast/Farben: CSS-Variablen sind auf .sbp-wrap definiert
  if (container.classList && !container.classList.contains('sbp-wrap')) {
    container.classList.add('sbp-wrap');
  }

  console.log('📦 Mission-Loader: Injiziere Template für', missionId);
  
  // HTML-Template als String
  const template = `
<div class="sbp-hero">
  <div class="sbp-title">
    <div>
      <div class="sbp-chip">MISSION FILE • <span id="missionNumber-${missionId}"></span></div>
    </div>
    <div class="sbp-chip">COMMANDS: <code id="allowedCommands-${missionId}" style="color:var(--sbp-text);"></code></div>
  </div>

  <div class="sbp-briefing">
    <div class="sbp-officer">
      <img id="officerGif-${missionId}" src="" alt="Briefing-Offizier">
    </div>
    <div class="sbp-brief-card">
      <div class="sbp-kicker">HOLO BRIEFING</div>
      <p id="briefingText-${missionId}" class="sbp-body"></p>
    </div>
  </div>

  <div class="sbp-objectives" id="objectivesContainer-${missionId}"></div>
</div>

<div class="sbp-main" id="mainPanels-${missionId}">
  <div class="row g-3">
    <div class="col-12 col-lg-5">
      <div class="sbp-panel">
        <div class="sbp-panel-header">
          <div class="title">🕹️ Kommando-Konsole</div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="sbp-btn sbp-mobile-toggle" id="btnCodeFocus-${missionId}" style="padding:6px 10px;">Nur Code</button>
            <span id="pyStatus-${missionId}" class="badge rounded-pill">System lädt&hellip;</span>
          </div>
        </div>

        <div class="sbp-editor">
          <div class="sbp-codewrap">
            <pre id="codeGutter-${missionId}" class="sbp-gutter">1</pre>
            <textarea id="code-${missionId}" class="sbp-textarea" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off"></textarea>
          </div>
          <div class="sbp-keybar" id="mobileKeybar-${missionId}">
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
            <button type="button" class="sbp-btn" id="btnReset-${missionId}">Reset</button>
            <button type="button" class="sbp-btn primary" id="btnRun-${missionId}">Run</button>
            <button type="button" class="sbp-btn warn" id="btnStep-${missionId}">Step</button>
            <button type="button" class="sbp-btn" id="btnContinue-${missionId}">Continue</button>
            <button type="button" class="sbp-btn danger" id="btnStop-${missionId}">Stop</button>
            <button type="button" class="sbp-btn" id="btnMotion-${missionId}">Motion: Ein</button>
            <select id="speed-${missionId}" class="sbp-select">
              <option value="1200">0.8&times;</option>
              <option value="800">1&times;</option>
              <option value="400" selected>2&times;</option>
              <option value="200">4&times;</option>
            </select>
          </div>

          <div class="sbp-metrics">
            <div class="sbp-box">
              <div class="label">STATUS</div>
              <div id="simStatus-${missionId}" style="margin-top:6px; font-weight:900;">Bereit.</div>
            </div>
            <div class="sbp-box">
              <div class="label">KONSOLE</div>
              <pre id="console-${missionId}">(leer)</pre>
            </div>
            <div class="sbp-box sbp-reward">
              <div class="label">MISSIONSBELOHNUNG</div>
              <div style="margin-top:6px; color:var(--sbp-muted);">Freigeschaltet, sobald die Mission erfüllt ist.</div>
              <div id="stashDropWrap-${missionId}" style="display:none; margin-top:10px;"></div>
              <div id="stashLocked-${missionId}" style="margin-top:10px; font-weight:900;">🔒 Noch nicht freigeschaltet.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-7">
      <div class="sbp-panel">
        <div class="sbp-panel-header">
          <div class="title">🌌 Simulation (<span id="gridSize-${missionId}"></span>)</div>
          <span id="tickLabel-${missionId}" class="badge rounded-pill">Tick: 0</span>
        </div>

        <div class="sbp-mapwrap">
          <svg id="board-${missionId}" viewBox="0 0 600 600" class="sbp-map">
            <defs>
              <pattern id="spaceImg-${missionId}" patternUnits="userSpaceOnUse" width="600" height="600">
                <image id="bgImage-${missionId}" href="" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid slice"></image>
              </pattern>
              <linearGradient id="spaceDim-${missionId}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(0,0,0,0.20)"></stop>
                <stop offset="100%" stop-color="rgba(0,0,0,0.55)"></stop>
              </linearGradient>
              <pattern id="grid-${missionId}" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="transparent"></rect>
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(233,240,255,0.10)" stroke-width="1"></path>
              </pattern>
              <radialGradient id="vignette-${missionId}" cx="50%" cy="50%" r="70%">
                <stop offset="55%" stop-color="rgba(0,0,0,0)"></stop>
                <stop offset="100%" stop-color="rgba(0,0,0,0.58)"></stop>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="600" height="600" fill="url(#spaceImg-${missionId})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#spaceDim-${missionId})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#grid-${missionId})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#vignette-${missionId})"></rect>
            <g id="layerOpenings-${missionId}"></g>
            <g id="layerStations-${missionId}"></g>
            <g id="layerAsteroids-${missionId}"></g>
            <g id="layerAmmo-${missionId}"></g>
            <g id="layerAliens-${missionId}"></g>
            <g id="layerPowerups-${missionId}"></g>
            <g id="layerLaser-${missionId}"></g>
            <image id="player-${missionId}" href="" x="0" y="0" width="40" height="40"></image>
          </svg>
          <div class="sbp-mapnote">Das grüne Feld ist dein Ziel.</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  
  // Template injizieren
  container.innerHTML = template;
  container.setAttribute('data-mission-loaded', 'true');
  
  console.log('✅ Template injiziert für', missionId);
  
  // Mission-Core laden und initialisieren
  const script = document.createElement('script');
  // Feste URL für raw.githubusercontent.com statt dynamische Berechnung
  // Vorteil: Schneller als jsDelivr, keine Cache-Probleme, funktioniert zuverlässig in Moodle
  const basePath = 'https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/';
  script.src = basePath + 'mission-core.js';
  script.setAttribute('data-mission-id', missionId);
  script.setAttribute('data-container-id', container.id);
  document.body.appendChild(script);
})();
