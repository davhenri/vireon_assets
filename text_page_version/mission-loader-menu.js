// mission-loader-menu.js - Template Injector with Mission Selector

// Dynamischer Pfad-Bootstrap: Ermittelt zur Laufzeit den korrekten lokalen Basispfad
// aus der Moodle-URL und contextId
(function() {
  var baseMatch = window.location.href.match(/^(https?:\/\/[^\/]+\/[^\/]+\/)/);
  if (!baseMatch) return;
  var instanceBase = baseMatch[1];

  var ctxMatch = document.documentElement.innerHTML.match(/pluginfile\.php\/(\d+)\/mod_page/);
  if (!ctxMatch) return;
  var contextId = ctxMatch[1];

  window.VIREON_ASSET_BASE = instanceBase + 'pluginfile.php/' + contextId + '/mod_page/content/0/';
  console.log('📦 Vireon Asset Base Path:', window.VIREON_ASSET_BASE);
})();

(function() {
  const scriptEl = document.currentScript;
  let container = scriptEl ? scriptEl.previousElementSibling : null;

  // Fallbacks: Manche Einbettungsumgebungen (z.B. Moodle) verändern das DOM.
  // Versuche alternative Strategien, um das Container-Element zu finden.
  if (!container || typeof container.getAttribute !== 'function' || !container.getAttribute('data-default-mission')) {
    container = document.querySelector('div[data-default-mission]') || document.getElementById('mission-container') || (scriptEl && scriptEl.parentElement && scriptEl.parentElement.querySelector('div')) || container;
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
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin-top: 10px; overflow-x: auto;"><code>&lt;link data-rel-href="missions/mission.css" rel="stylesheet"&gt;

&lt;div id="mission-container" data-default-mission="m1-01"&gt;&lt;/div&gt;
&lt;script data-rel-href="missions/mission-loader-menu.js"&gt;&lt;/script&gt;</code></pre>
      </details>
      <p style="margin-top: 15px; font-size: 0.9em; color: #666;">Weitere Hilfe: Siehe <code>text_page_version/README.md</code></p>
    `;
    document.body.appendChild(errorDiv);
  }

  // Fehlerprüfung: Container muss existieren
  if (!container) {
    showError(
      'Kein Container-Element gefunden',
      'Das Script konnte kein Element VOR dem &lt;script&gt;-Tag finden.',
      'Füge ein &lt;div id="mission-container" data-default-mission="m1-01"&gt;&lt;/div&gt; VOR dem &lt;script&gt;-Tag ein.'
    );
    return;
  }

  // Fehlerprüfung: Container muss ein data-default-mission Attribut haben
  const defaultMissionId = container.getAttribute('data-default-mission') || 'm1-01';
  if (!container.getAttribute('data-default-mission')) {
    console.warn('⚠️ Kein data-default-mission Attribut gefunden. Verwende Standard: m1-01');
  }

  // Container braucht eine ID für die Kommunikation mit mission-core.js
  if (!container.id) {
    container.id = 'mission-container';
  }

  // Wichtig für Kontrast/Farben: CSS-Variablen sind auf .sbp-wrap definiert
  if (container.classList && !container.classList.contains('sbp-wrap')) {
    container.classList.add('sbp-wrap');
  }

  console.log('📦 Mission-Loader: Injiziere Template mit Mission-Selector (Standard:', defaultMissionId + ')');

  // Platzhalter für dynamische Mission-ID (wird durch JavaScript gesetzt)
  const missionIdPlaceholder = 'CURRENT_MISSION';

  // HTML-Template als String mit Mission-Selector
  const template = `
<div class="sbp-mission-selector">
  <label for="missionSelect" style="font-weight: bold; margin-right: 10px;">Mission auswählen:</label>
  <select id="missionSelect" class="sbp-select" style="min-width: 250px; padding: 8px; font-size: 1em;">
    <option value="">Lädt Missionen...</option>
  </select>
</div>

<div class="sbp-hero">
  <div class="sbp-title">
    <div>
      <div class="sbp-chip">MISSION FILE • <span id="missionNumber-${missionIdPlaceholder}"></span></div>
    </div>
    <div class="sbp-chip">COMMANDS: <code id="allowedCommands-${missionIdPlaceholder}" style="color:var(--sbp-text);"></code></div>
  </div>

  <div class="sbp-briefing">
    <div class="sbp-officer">
      <img id="officerGif-${missionIdPlaceholder}" src="" alt="Briefing-Offizier">
    </div>
    <div class="sbp-brief-card">
      <div class="sbp-kicker">HOLO BRIEFING</div>
      <p id="briefingText-${missionIdPlaceholder}" class="sbp-body"></p>
    </div>
  </div>

  <div class="sbp-objectives" id="objectivesContainer-${missionIdPlaceholder}"></div>
</div>

<div class="sbp-main" id="mainPanels-${missionIdPlaceholder}">
  <div class="row g-3">
    <div class="col-12 col-lg-5">
      <div class="sbp-panel">
        <div class="sbp-panel-header">
          <div class="title">🕹️ Kommando-Konsole</div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="sbp-btn sbp-mobile-toggle" id="btnCodeFocus-${missionIdPlaceholder}" style="padding:6px 10px;">Nur Code</button>
            <span id="pyStatus-${missionIdPlaceholder}" class="badge rounded-pill">System lädt&hellip;</span>
          </div>
        </div>

        <div class="sbp-editor">
          <div class="sbp-codewrap">
            <pre id="codeGutter-${missionIdPlaceholder}" class="sbp-gutter">1</pre>
            <textarea id="code-${missionIdPlaceholder}" class="sbp-textarea" spellcheck="false" autocapitalize="off" autocorrect="off" autocomplete="off"></textarea>
          </div>
          <div class="sbp-keybar" id="mobileKeybar-${missionIdPlaceholder}">
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
            <button type="button" class="sbp-btn" id="btnReset-${missionIdPlaceholder}">Reset</button>
            <button type="button" class="sbp-btn primary" id="btnRun-${missionIdPlaceholder}">Run</button>
            <button type="button" class="sbp-btn warn" id="btnStep-${missionIdPlaceholder}">Step</button>
            <button type="button" class="sbp-btn" id="btnContinue-${missionIdPlaceholder}">Continue</button>
            <button type="button" class="sbp-btn danger" id="btnStop-${missionIdPlaceholder}">Stop</button>
            <button type="button" class="sbp-btn" id="btnMotion-${missionIdPlaceholder}">Motion: Ein</button>
            <select id="speed-${missionIdPlaceholder}" class="sbp-select">
              <option value="1200">0.8&times;</option>
              <option value="800">1&times;</option>
              <option value="400" selected>2&times;</option>
              <option value="200">4&times;</option>
            </select>
          </div>

          <div class="sbp-metrics">
            <div class="sbp-box">
              <div class="label">STATUS</div>
              <div id="simStatus-${missionIdPlaceholder}" style="margin-top:6px; font-weight:900;">Bereit.</div>
            </div>
            <div class="sbp-box">
              <div class="label">KONSOLE</div>
              <pre id="console-${missionIdPlaceholder}">(leer)</pre>
            </div>
            <div class="sbp-box sbp-reward">
              <div class="label">MISSIONSBELOHNUNG</div>
              <div style="margin-top:6px; color:var(--sbp-muted);">Freigeschaltet, sobald die Mission erfüllt ist.</div>
              <div id="stashDropWrap-${missionIdPlaceholder}" style="display:none; margin-top:10px;"></div>
              <div id="stashLocked-${missionIdPlaceholder}" style="margin-top:10px; font-weight:900;">🔒 Noch nicht freigeschaltet.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-7">
      <div class="sbp-panel">
        <div class="sbp-panel-header">
          <div class="title">🌌 Simulation (<span id="gridSize-${missionIdPlaceholder}"></span>)</div>
          <span id="tickLabel-${missionIdPlaceholder}" class="badge rounded-pill">Tick: 0</span>
        </div>

        <div class="sbp-mapwrap">
          <svg id="board-${missionIdPlaceholder}" viewBox="0 0 600 600" class="sbp-map">
            <defs>
              <pattern id="spaceImg-${missionIdPlaceholder}" patternUnits="userSpaceOnUse" width="600" height="600">
                <image id="bgImage-${missionIdPlaceholder}" href="" x="0" y="0" width="600" height="600" preserveAspectRatio="xMidYMid slice"></image>
              </pattern>
              <linearGradient id="spaceDim-${missionIdPlaceholder}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(0,0,0,0.20)"></stop>
                <stop offset="100%" stop-color="rgba(0,0,0,0.55)"></stop>
              </linearGradient>
              <pattern id="grid-${missionIdPlaceholder}" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="transparent"></rect>
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(233,240,255,0.10)" stroke-width="1"></path>
              </pattern>
              <radialGradient id="vignette-${missionIdPlaceholder}" cx="50%" cy="50%" r="70%">
                <stop offset="55%" stop-color="rgba(0,0,0,0)"></stop>
                <stop offset="100%" stop-color="rgba(0,0,0,0.58)"></stop>
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="600" height="600" fill="url(#spaceImg-${missionIdPlaceholder})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#spaceDim-${missionIdPlaceholder})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#grid-${missionIdPlaceholder})"></rect>
            <rect x="0" y="0" width="600" height="600" fill="url(#vignette-${missionIdPlaceholder})"></rect>
            <g id="layerOpenings-${missionIdPlaceholder}"></g>
            <g id="layerStations-${missionIdPlaceholder}"></g>
            <g id="layerAsteroids-${missionIdPlaceholder}"></g>
            <g id="layerAmmo-${missionIdPlaceholder}"></g>
            <g id="layerAliens-${missionIdPlaceholder}"></g>
            <g id="layerPowerups-${missionIdPlaceholder}"></g>
            <g id="layerLaser-${missionIdPlaceholder}"></g>
            <image id="player-${missionIdPlaceholder}" href="" x="0" y="0" width="40" height="40"></image>
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
  container.setAttribute('data-current-mission', defaultMissionId);

  console.log('✅ Template injiziert mit Mission-Selector');

  // Pyodide laden (falls nicht bereits geladen)
  function ensurePyodideLoaded(callback) {
    // Prüfen, ob Pyodide bereits verfügbar ist
    if (typeof loadPyodide !== 'undefined') {
      console.log('✅ Pyodide bereits geladen');
      callback();
      return;
    }

    // Prüfen, ob Pyodide-Script bereits im DOM ist
    const existingScript = document.querySelector('script[src*="pyodide"]');
    if (existingScript) {
      console.log('⏳ Pyodide-Script gefunden, warte auf Laden...');
      existingScript.addEventListener('load', callback);
      existingScript.addEventListener('error', function() {
        console.error('❌ Fehler beim Laden von Pyodide');
        showError(
          'Pyodide konnte nicht geladen werden',
          'Das Pyodide-Script konnte nicht von der CDN geladen werden.',
          'Überprüfe deine Internetverbindung oder versuche es später erneut.'
        );
      });
      return;
    }

    // Pyodide-Script dynamisch laden
    console.log('📦 Lade Pyodide-Script...');
    const pyodideScript = document.createElement('script');
    pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
    pyodideScript.addEventListener('load', function() {
      console.log('✅ Pyodide-Script geladen');
      callback();
    });
    pyodideScript.addEventListener('error', function() {
      console.error('❌ Fehler beim Laden von Pyodide');
      showError(
        'Pyodide konnte nicht geladen werden',
        'Das Pyodide-Script konnte nicht von der CDN geladen werden.',
        'Überprüfe deine Internetverbindung oder versuche es später erneut.'
      );
    });
    document.head.appendChild(pyodideScript);
  }

  // Mission-Core laden und initialisieren
  function loadMissionCore() {
    const script = document.createElement('script');
    // Verwende lokalen Basispfad statt CDN
    const basePath = window.VIREON_ASSET_BASE || '';
    script.src = basePath + 'missions/mission-core-menu.js';
    script.setAttribute('data-default-mission', defaultMissionId);
    script.setAttribute('data-container-id', container.id);
    document.body.appendChild(script);
  }

  // Pyodide sicherstellen, dann Mission-Core laden
  ensurePyodideLoaded(loadMissionCore);
})();
