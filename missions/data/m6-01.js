{
  "version": "2.0",
  "id": "m6-01",
  "number": "6.01",
  "title": "Mission 6.01 – Erste Lieferung",
  "briefing": {
    "text": "Pilot! Raumstation Omega braucht Versorgung. Fliege zum Dock (rechtes mittleres Feld), lade ein PowerUp mit loadPow() und setze es an der markierten Stelle ab!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 1 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 7,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 7
    },
    "asteroids": [],
    "openings": [
      [
        10,
        7
      ]
    ],
    "powerups": [],
    "stations": [
      [
        2,
        6
      ]
    ],
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
    "closeOpenings": 1,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "putPow"
  ],
  "reward": {
    "stashSecret": "dE6fG1",
    "stashText": "Pick up!"
  }
}