{
  "version": "2.0",
  "id": "m3-08",
  "number": "3.08",
  "title": "Mission 3.08 – Adaptive Route",
  "briefing": {
    "text": "Pilot! An jeder Kreuzung führt nur ein Weg weiter. Nutze freeAhead() um die richtige Abzweigung zu finden!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), wallAhead()"
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
    "asteroids": [
      [
        1,
        8
      ],
      [
        2,
        8
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        4,
        7
      ],
      [
        3,
        6
      ],
      [
        5,
        6
      ],
      [
        6,
        6
      ],
      [
        5,
        8
      ],
      [
        6,
        8
      ],
      [
        8,
        7
      ],
      [
        7,
        8
      ],
      [
        9,
        6
      ],
      [
        9,
        8
      ],
      [
        10,
        6
      ],
      [
        11,
        7
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
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "uW0xY8",
    "stashText": "Pick up!"
  }
}