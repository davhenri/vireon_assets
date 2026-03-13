(function () {
  const mission = window.VIREON_MISSION;
  const engineSource = window.VIREON_ENGINE_PY;

  if (!mission) {
    console.error('VIREON: mission data missing');
    return;
  }

  // Root-Container anlegen
  const root = document.createElement('div');
  root.className = 'vireon-root';
  root.style.display = 'grid';
  root.style.gridTemplateColumns = '2fr 1fr';
  root.style.gap = '16px';
  root.style.marginTop = '8px';

  // Linke Seite: Spielfeld
  const left = document.createElement('div');

  const canvasWrapper = document.createElement('div');
  canvasWrapper.className = 'vireon-panel';

  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 480;
  canvas.className = 'vireon-grid';

  canvasWrapper.appendChild(canvas);
  left.appendChild(canvasWrapper);

  // Rechte Seite: Briefing + Objectives
  const right = document.createElement('div');
  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.gap = '8px';

  const titleEl = document.createElement('h2');
  titleEl.textContent = mission.title || mission.id;
  right.appendChild(titleEl);

  const briefingPanel = document.createElement('div');
  briefingPanel.className = 'vireon-panel vireon-briefing';
  briefingPanel.textContent = mission.briefing || '';
  right.appendChild(briefingPanel);

  const objPanel = document.createElement('div');
  objPanel.className = 'vireon-panel vireon-objectives';
  objPanel.textContent = mission.objectives_text || '';
  right.appendChild(objPanel);

  // Root zusammenbauen
  root.appendChild(left);
  root.appendChild(right);

  // In Seite einhängen (unterstes geeignetes Element suchen)
  const target =
    document.getElementById('region-main') ||
    document.querySelector('#maincontent') ||
    document.body;

  target.appendChild(root);

  // Platzhalter-Rendering (nur Hintergrundfarbe und Startposition)
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#000020';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Startposition aus Mission markieren
    const start = mission.engine && mission.engine.start;
    if (start) {
      const cellSize = 32;
      ctx.fillStyle = '#ffeb3b';
      ctx.fillRect(
        start.x * cellSize,
        start.y * cellSize,
        cellSize,
        cellSize
      );
    }
  }

  // Hier später: Pyodide + Engine-Integration mit engineSource
})();
