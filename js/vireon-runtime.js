(function () {
  const mission = window.VIREON_MISSION;
  const engineSource = window.VIREON_ENGINE_PY;
  const BASE = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/';

  if (!mission) {
    console.error('VIREON: mission data missing');
    return;
  }

  // ===== CONFIG =====
  const CELL_SIZE = 32;
  const GRID_WIDTH = 20;
  const GRID_HEIGHT = 15;

  // ===== STATE =====
  let pyodide = null;
  let gameState = null;
  let imageCache = {};

  // ===== ROOT CONTAINER =====
  const root = document.createElement('div');
  root.className = 'vireon-root';
  root.style.display = 'grid';
  root.style.gridTemplateColumns = '2fr 1fr';
  root.style.gap = '16px';
  root.style.marginTop = '8px';

  // ===== LEFT: CANVAS =====
  const left = document.createElement('div');
  const canvasWrapper = document.createElement('div');
  canvasWrapper.className = 'vireon-panel';

  const canvas = document.createElement('canvas');
  canvas.width = GRID_WIDTH * CELL_SIZE;
  canvas.height = GRID_HEIGHT * CELL_SIZE;
  canvas.className = 'vireon-grid';

  canvasWrapper.appendChild(canvas);
  left.appendChild(canvasWrapper);

  // ===== RIGHT: BRIEFING + OBJECTIVES + CONTROLS =====
  const right = document.createElement('div');
  right.style.display = 'flex';
  right.style.flexDirection = 'column';
  right.style.gap = '8px';

  const titleEl = document.createElement('h2');
  titleEl.textContent = mission.title || mission.id;
  titleEl.style.margin = '0';
  right.appendChild(titleEl);

  const briefingPanel = document.createElement('div');
  briefingPanel.className = 'vireon-panel vireon-briefing';
  briefingPanel.textContent = mission.briefing || '';
  right.appendChild(briefingPanel);

  const objPanel = document.createElement('div');
  objPanel.className = 'vireon-panel vireon-objectives';
  objPanel.textContent = mission.objectives_text || '';
  right.appendChild(objPanel);

  // Status Display
  const statusPanel = document.createElement('div');
  statusPanel.className = 'vireon-panel';
  statusPanel.style.fontFamily = 'monospace';
  statusPanel.style.fontSize = '0.85rem';
  statusPanel.innerHTML = '<strong>Status:</strong> Initialisiere...';
  right.appendChild(statusPanel);

  // ===== ASSEMBLE ROOT =====
  root.appendChild(left);
  root.appendChild(right);

  const target =
    document.getElementById('region-main') ||
    document.querySelector('#maincontent') ||
    document.body;

  target.appendChild(root);

  const ctx = canvas.getContext('2d');

  // ===== IMAGE PRELOADER =====
  function preloadImage(url) {
    return new Promise((resolve, reject) => {
      if (imageCache[url]) {
        resolve(imageCache[url]);
        return;
      }
      const img = new Image();
      img.onload = () => {
        imageCache[url] = img;
        resolve(img);
      };
      img.onerror = reject;
      img.src = BASE + url;
    });
  }

  // ===== RENDER GRID =====
  function renderGrid() {
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#000020';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= GRID_WIDTH; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL_SIZE, 0);
      ctx.lineTo(x * CELL_SIZE, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= GRID_HEIGHT; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL_SIZE);
      ctx.lineTo(canvas.width, y * CELL_SIZE);
      ctx.stroke();
    }

    const e = mission.engine;

    // Draw stations
    if (e.station_urls && e.station_urls.length > 0) {
      e.stations.forEach((pos, idx) => {
        const url = e.station_urls[idx % e.station_urls.length];
        const img = imageCache[url];
        if (img) {
          // Station ist 3x3 grid
          ctx.drawImage(
            img,
            pos[0] * CELL_SIZE,
            pos[1] * CELL_SIZE,
            CELL_SIZE * 3,
            CELL_SIZE * 3
          );
        }
      });
    }

    // Draw openings
    if (e.openings) {
      ctx.fillStyle = '#ff1744';
      e.openings.forEach(([x, y]) => {
        ctx.fillRect(
          x * CELL_SIZE + 4,
          y * CELL_SIZE + 4,
          CELL_SIZE - 8,
          CELL_SIZE - 8
        );
      });
    }

    // Draw station docks
    if (e.station_docks) {
      ctx.fillStyle = '#00e676';
      e.station_docks.forEach(([x, y]) => {
        ctx.fillRect(
          x * CELL_SIZE + 6,
          y * CELL_SIZE + 6,
          CELL_SIZE - 12,
          CELL_SIZE - 12
        );
      });
    }

    // Draw player
    if (gameState && gameState.player) {
      const p = gameState.player;
      const playerImg = imageCache['vireon/player.svg'];
      if (playerImg) {
        ctx.save();
        ctx.translate(
          p.x * CELL_SIZE + CELL_SIZE / 2,
          p.y * CELL_SIZE + CELL_SIZE / 2
        );
        const rotations = { N: 0, E: 90, S: 180, W: 270 };
        ctx.rotate((rotations[p.dir] || 0) * Math.PI / 180);
        ctx.drawImage(
          playerImg,
          -CELL_SIZE / 2,
          -CELL_SIZE / 2,
          CELL_SIZE,
          CELL_SIZE
        );
        ctx.restore();
      } else {
        // Fallback
        ctx.fillStyle = '#ffeb3b';
        ctx.fillRect(
          p.x * CELL_SIZE,
          p.y * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );
      }
    } else if (e.start) {
      // Initial player position
      ctx.fillStyle = '#ffeb3b';
      ctx.fillRect(
        e.start.x * CELL_SIZE,
        e.start.y * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  // ===== PYODIDE SETUP =====
  async function initPyodide() {
    statusPanel.innerHTML = '<strong>Status:</strong> Lade Pyodide...';

    // Load Pyodide from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
    document.head.appendChild(script);

    await new Promise((resolve) => {
      script.onload = resolve;
    });

    pyodide = await loadPyodide();
    statusPanel.innerHTML = '<strong>Status:</strong> Pyodide geladen.';

    // Load engine
    await pyodide.runPythonAsync(engineSource);
    statusPanel.innerHTML = '<strong>Status:</strong> Engine geladen.';

    // Initialize game
    await pyodide.runPythonAsync(`
import json
mission_data = json.loads('''${JSON.stringify(mission)}''')
engine = Engine(mission_data['engine'])
engine.reset()
    `);

    gameState = {
      player: {
        x: mission.engine.start.x,
        y: mission.engine.start.y,
        dir: mission.engine.start.dir
      }
    };

    statusPanel.innerHTML = '<strong>Status:</strong> Bereit!';
    renderGrid();
  }

  // ===== PRELOAD ASSETS & START =====
  async function start() {
    const imagesToLoad = [];

    if (mission.engine.station_urls) {
      imagesToLoad.push(...mission.engine.station_urls);
    }
    imagesToLoad.push('vireon/player.svg');

    try {
      await Promise.all(imagesToLoad.map(url => preloadImage(url)));
      renderGrid();
      await initPyodide();
    } catch (err) {
      console.error('VIREON init error:', err);
      statusPanel.innerHTML = '<strong>Fehler:</strong> ' + err.message;
    }
  }

  start();
})();
