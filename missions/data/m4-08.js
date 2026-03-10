{
  "version": "2.0",
  "id": "m4-08",
  "number": "4.08",
  "title": "Mission 4.08 – Optimaler Pfad",
  "briefing": {
    "text": "Pilot! Finde den kürzesten Weg! Zähle deine Schritte: schritte = 0. Je weniger Schritte, desto effizienter dein Algorithmus!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
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
        1
      ],
      [
        3,
        2
      ],
      [
        3,
        3
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
        5,
        4
      ],
      [
        5,
        3
      ],
      [
        5,
        2
      ],
      [
        5,
        1
      ],
      [
        7,
        0
      ],
      [
        7,
        1
      ],
      [
        7,
        2
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
        6,
        6
      ],
      [
        5,
        6
      ],
      [
        4,
        6
      ],
      [
        3,
        6
      ],
      [
        3,
        7
      ],
      [
        3,
        8
      ],
      [
        4,
        8
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
        7,
        8
      ],
      [
        8,
        8
      ],
      [
        9,
        8
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
        9,
        4
      ],
      [
        10,
        4
      ],
      [
        11,
        4
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
        11,
        10
      ],
      [
        10,
        10
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
        9,
        12
      ],
      [
        9,
        13
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
    "stashSecret": "pG1qH8",
    "stashText": "Pick up!"
  }
}