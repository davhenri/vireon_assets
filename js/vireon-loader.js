(async function () {
  const BASE = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/';
  const missionId = window.VIREON_MISSION_ID; // einzige Info von der Moodle-Seite

  // 1. Mission-Config und Engine parallel laden
  // Try loading from missions/data/ first (Version 2.0), fallback to missions/ (simple schema)
  let missionData;
  try {
    // First try missions/data/ with .js extension (Version 2.0)
    missionData = await fetch(BASE + 'missions/data/' + missionId + '.js').then(r => r.json());
  } catch (e) {
    // Fallback to missions/ with .json extension (simple schema)
    missionData = await fetch(BASE + 'missions/' + missionId + '.json').then(r => r.json());
  }

  const enginePy = await fetch(BASE + 'missions/engine.py').then(r => r.text());

  // 2. Runtime starten (vireon-runtime.js nutzt missionData + enginePy)
  window.VIREON_MISSION = missionData;
  window.VIREON_ENGINE_PY = enginePy;

  // 3. Runtime-Script dynamisch nachladen
  const s = document.createElement('script');
  s.src = BASE + 'js/vireon-runtime.js';
  document.head.appendChild(s);
})();
