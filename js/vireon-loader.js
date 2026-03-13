(async function () {
  const BASE = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/';
  const missionId = window.VIREON_MISSION_ID; // einzige Info von der Moodle-Seite

  // 1. Mission-Config und Engine parallel laden
  const [missionData, enginePy] = await Promise.all([
    fetch(BASE + 'missions/' + missionId + '.json').then(r => r.json()),
    fetch(BASE + 'engine/engine.py').then(r => r.text())
  ]);

  // 2. Runtime starten (vireon-runtime.js nutzt missionData + enginePy)
  window.VIREON_MISSION = missionData;
  window.VIREON_ENGINE_PY = enginePy;

  // 3. Runtime-Script dynamisch nachladen
  const s = document.createElement('script');
  s.src = BASE + 'js/vireon-runtime.js';
  document.head.appendChild(s);
})();
