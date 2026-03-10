{
  "version": "2.0",
  "id": "m2-01",
  "number": "2.01",
  "title": "Mission 2.01 – Patrouillenstart",
  "briefing": {
    "text": "Pilot! Die Patrouille beginnt. Zehn Sektoren geradeaus! Tipp: Mit einer for-Schleife sparst du viel Schreibarbeit: for i in range(10): move()"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 7,
      "y": 2,
      "dir": "N"
    },
    "goal": {
      "x": 7,
      "y": 12
    },
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 0,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 0,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move"
  ],
  "reward": {
    "stashSecret": "pA2bC1",
    "stashText": "Pick up!"
  }
}