{
  "version": "2.0",
  "id": "m4-09",
  "number": "4.09",
  "title": "Mission 4.09 – Sektorerkundung",
  "briefing": {
    "text": "Pilot! Erkunde den gesamten Sektor! Sammle PowerUps, schließe Öffnungen und finde den Weg zum Ziel. Alle Sensoren und Variablen stehen dir zur Verfügung!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening(), wallAhead()"
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
      "dir": "N"
    },
    "goal": {
      "x": 13,
      "y": 13
    },
    "asteroids": [
      [
        0,
        4
      ],
      [
        1,
        4
      ],
      [
        2,
        4
      ],
      [
        3,
        4
      ],
      [
        3,
        5
      ],
      [
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        5,
        6
      ],
      [
        5,
        5
      ],
      [
        5,
        4
      ],
      [
        5,
        3
      ],
      [
        6,
        3
      ],
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        7,
        5
      ],
      [
        7,
        6
      ],
      [
        7,
        7
      ],
      [
        8,
        7
      ],
      [
        9,
        7
      ],
      [
        9,
        6
      ],
      [
        9,
        5
      ],
      [
        10,
        5
      ],
      [
        11,
        5
      ],
      [
        11,
        6
      ],
      [
        11,
        7
      ],
      [
        11,
        8
      ],
      [
        11,
        9
      ],
      [
        10,
        9
      ],
      [
        9,
        9
      ],
      [
        9,
        10
      ],
      [
        9,
        11
      ],
      [
        10,
        11
      ],
      [
        11,
        11
      ],
      [
        12,
        11
      ],
      [
        12,
        10
      ]
    ],
    "openings": [
      [
        3,
        3
      ],
      [
        7,
        8
      ],
      [
        12,
        12
      ]
    ],
    "powerups": [
      [
        2,
        2
      ],
      [
        6,
        5
      ],
      [
        10,
        8
      ]
    ],
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
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow",
    "scanForward",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "rI2sJ9",
    "stashText": "Pick up!"
  }
}