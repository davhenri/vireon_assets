{
  "version": "2.0",
  "id": "m6-05",
  "number": "6.05",
  "title": "Mission 6.05 – Schutzlieferung",
  "briefing": {
    "text": "Pilot! Lade an der Station und schließe drei Sicherheitslücken – aber Vorsicht vor Asteroiden! Nutze Sensoren für die Navigation."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 1,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 13
    },
    "asteroids": [
      [
        3,
        3
      ],
      [
        5,
        5
      ],
      [
        7,
        8
      ],
      [
        9,
        7
      ],
      [
        11,
        9
      ],
      [
        6,
        11
      ],
      [
        8,
        13
      ]
    ],
    "openings": [
      [
        8,
        6
      ],
      [
        10,
        8
      ],
      [
        12,
        10
      ]
    ],
    "powerups": [],
    "stations": [
      [
        1,
        5,
        "blue"
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
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "putPow",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "hQ0rS5",
    "stashText": "Pick up!"
  }
}