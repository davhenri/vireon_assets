{
  "version": "2.0",
  "id": "m4-10",
  "number": "4.10",
  "title": "Mission 4.10 – Kartierung",
  "briefing": {
    "text": "Pilot! Die Abschluss-Kartierung: Ein riesiges Feld voller Geheimnisse. Nutze alles, was du gelernt hast – Schleifen, Bedingungen, Sensoren, Variablen. Der Sektor wartet auf seine Kartierung!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 4 Öffnung(en)."
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
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 13
    },
    "asteroids": [
      [
        3,
        0
      ],
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
        4,
        3
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
        6,
        1
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
        6,
        5
      ],
      [
        5,
        5
      ],
      [
        4,
        5
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
        8
      ],
      [
        5,
        9
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
        7,
        10
      ],
      [
        7,
        9
      ],
      [
        7,
        8
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
        8
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
        11,
        10
      ],
      [
        11,
        9
      ],
      [
        11,
        8
      ],
      [
        11,
        7
      ],
      [
        11,
        6
      ],
      [
        11,
        5
      ],
      [
        10,
        5
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
        2
      ],
      [
        11,
        1
      ],
      [
        12,
        1
      ],
      [
        13,
        1
      ]
    ],
    "openings": [
      [
        3,
        4
      ],
      [
        5,
        6
      ],
      [
        7,
        6
      ],
      [
        9,
        6
      ]
    ],
    "powerups": [
      [
        4,
        2
      ],
      [
        4,
        6
      ],
      [
        6,
        8
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
    "closeOpenings": 4,
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
    "stashSecret": "tK3uL0",
    "stashText": "Pick up!"
  }
}