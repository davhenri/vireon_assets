{
  "version": "2.0",
  "id": "m5-09",
  "number": "5.09",
  "title": "Mission 5.09 – Endkampf-Vorbereitung",
  "briefing": {
    "text": "Pilot! Die Vorbereitung zum Endkampf: Sicherheitslücken schließen UND Aliens vernichten. Du brauchst alle Fähigkeiten!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 2 Öffnung(en)."
    },
    {
      "type": "primary",
      "text": "Zerstöre 2 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), putPow(), isAlien(), scanForward(), freeAhead(), isOpening(), wallAhead(), isAsteroid()"
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
        4,
        6
      ],
      [
        6,
        6
      ],
      [
        4,
        8
      ],
      [
        6,
        8
      ],
      [
        9,
        9
      ],
      [
        9,
        11
      ],
      [
        12,
        9
      ],
      [
        12,
        11
      ],
      [
        7,
        3
      ],
      [
        8,
        3
      ]
    ],
    "openings": [
      [
        3,
        5
      ],
      [
        11,
        12
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        5,
        7
      ],
      [
        10,
        10
      ]
    ],
    "ammo": [
      [
        1,
        3
      ],
      [
        1,
        6
      ],
      [
        8,
        1
      ],
      [
        13,
        5
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
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
            8
          ]
        ],
        "dir": "N",
        "shoots": true
      },
      {
        "pattern": [
          [
            10,
            10
          ],
          [
            11,
            10
          ],
          [
            12,
            10
          ],
          [
            11,
            10
          ]
        ],
        "dir": "E",
        "shoots": true
      }
    ]
  },
  "player": {
    "startPowerups": 2,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 2,
    "destroyAliens": 2,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "removeAmmo",
    "shoot",
    "putPow",
    "isAlien",
    "scanForward",
    "freeAhead",
    "isOpening",
    "wallAhead",
    "isAsteroid"
  ],
  "reward": {
    "stashSecret": "yX3zA9",
    "stashText": "Pick up!"
  }
}