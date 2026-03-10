{
  "version": "2.0",
  "id": "m3-09",
  "number": "3.09",
  "title": "Mission 3.09 – Sensormatrix",
  "briefing": {
    "text": "Pilot! Die Sensormatrix zeigt ein komplexes Feld. Sammle PowerUps, schließe Öffnungen und navigiere zum Ziel. Alle Sensoren stehen dir zur Verfügung!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening()"
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
        1,
        6
      ],
      [
        5,
        5
      ],
      [
        4,
        10
      ],
      [
        8,
        9
      ],
      [
        7,
        14
      ]
    ],
    "openings": [
      [
        4,
        7
      ],
      [
        7,
        11
      ],
      [
        10,
        13
      ]
    ],
    "powerups": [
      [
        1,
        3
      ],
      [
        4,
        5
      ],
      [
        7,
        9
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
    "isOpening"
  ],
  "reward": {
    "stashSecret": "vZ1aB9",
    "stashText": "Pick up!"
  }
}