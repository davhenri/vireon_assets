{
  "version": "2.0",
  "id": "m4-03",
  "number": "4.03",
  "title": "Mission 4.03 – Routenplanung",
  "briefing": {
    "text": "Pilot! Plane deine Route! Nutze Variablen um deinen Fortschritt zu verfolgen: schritt = 0 und erhöhe bei jedem move(). So weißt du immer, wo du bist!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), scanForward(), wallAhead()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 2,
      "y": 2,
      "dir": "N"
    },
    "goal": {
      "x": 12,
      "y": 12
    },
    "asteroids": [
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
        4,
        4
      ],
      [
        4,
        5
      ],
      [
        4,
        6
      ],
      [
        4,
        7
      ],
      [
        3,
        7
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        2,
        9
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        4,
        10
      ],
      [
        5,
        10
      ],
      [
        6,
        10
      ],
      [
        6,
        9
      ],
      [
        6,
        8
      ],
      [
        6,
        7
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
        8,
        8
      ],
      [
        8,
        9
      ],
      [
        8,
        10
      ],
      [
        8,
        11
      ],
      [
        8,
        12
      ],
      [
        9,
        12
      ],
      [
        10,
        12
      ],
      [
        10,
        11
      ],
      [
        10,
        10
      ],
      [
        10,
        9
      ],
      [
        11,
        9
      ],
      [
        12,
        9
      ],
      [
        12,
        10
      ],
      [
        12,
        11
      ]
    ],
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
    "move",
    "turnLeft",
    "turnRight",
    "freeAhead",
    "isAsteroid",
    "scanForward",
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "hW6iX3",
    "stashText": "Pick up!"
  }
}