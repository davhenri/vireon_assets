{
  "version": "2.0",
  "id": "m4-05",
  "number": "4.05",
  "title": "Mission 4.05 – Asteroidenkartierung",
  "briefing": {
    "text": "Pilot! Kartiere das Asteroidenfeld! Prüfe alle Richtungen mit scanForward() und finde den sicheren Weg. Speichere deine Beobachtungen in Variablen!"
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
      "dir": "N"
    },
    "goal": {
      "x": 13,
      "y": 13
    },
    "asteroids": [
      [
        0,
        3
      ],
      [
        1,
        3
      ],
      [
        2,
        3
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
        3,
        5
      ],
      [
        2,
        5
      ],
      [
        1,
        5
      ],
      [
        1,
        6
      ],
      [
        1,
        7
      ],
      [
        2,
        7
      ],
      [
        3,
        7
      ],
      [
        4,
        7
      ],
      [
        5,
        7
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
        5,
        2
      ],
      [
        6,
        2
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
        7,
        7
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
        9,
        3
      ],
      [
        10,
        3
      ],
      [
        11,
        3
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
        13,
        11
      ],
      [
        13,
        10
      ],
      [
        13,
        9
      ],
      [
        13,
        8
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
    "stashSecret": "kA8lB5",
    "stashText": "Pick up!"
  }
}