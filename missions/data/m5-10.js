{
  "version": "2.0",
  "id": "m5-10",
  "number": "5.10",
  "title": "Mission 5.10 – Alien-Konfrontation",
  "briefing": {
    "text": "Pilot! Die finale Konfrontation! Drei Alien-Jäger – bewaffnet und in Bewegung. Zeige alles, was du gelernt hast. Die Vireon-Crew zählt auf dich!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 3 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), wallAhead(), isAsteroid()"
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
        2,
        2
      ],
      [
        3,
        2
      ],
      [
        4,
        2
      ],
      [
        2,
        5
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ],
      [
        6,
        3
      ],
      [
        6,
        4
      ],
      [
        8,
        5
      ],
      [
        8,
        6
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
        4,
        9
      ],
      [
        4,
        10
      ],
      [
        4,
        11
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
        11,
        9
      ],
      [
        11,
        10
      ],
      [
        11,
        11
      ],
      [
        5,
        12
      ],
      [
        5,
        13
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        5,
        3
      ],
      [
        10,
        7
      ],
      [
        7,
        12
      ]
    ],
    "ammo": [
      [
        3,
        1
      ],
      [
        7,
        1
      ],
      [
        1,
        7
      ],
      [
        7,
        9
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
            3
          ],
          [
            5,
            4
          ],
          [
            5,
            5
          ],
          [
            5,
            4
          ]
        ],
        "dir": "N",
        "shoots": false
      },
      {
        "pattern": [
          [
            10,
            7
          ],
          [
            11,
            7
          ],
          [
            12,
            7
          ],
          [
            11,
            7
          ]
        ],
        "dir": "E",
        "shoots": true
      },
      {
        "pattern": [
          [
            7,
            12
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
            8,
            12
          ]
        ],
        "dir": "E",
        "shoots": true
      }
    ]
  },
  "player": {
    "startPowerups": 0,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 0,
    "destroyAliens": 3,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "removeAmmo",
    "shoot",
    "isAlien",
    "scanForward",
    "freeAhead",
    "wallAhead",
    "isAsteroid"
  ],
  "reward": {
    "stashSecret": "aB4cD0",
    "stashText": "Pick up!"
  }
}