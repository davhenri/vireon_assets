{
  "version": "2.0",
  "id": "m5-07",
  "number": "5.07",
  "title": "Mission 5.07 – Verteidigung",
  "briefing": {
    "text": "Pilot! Zwei feindliche Schiffe nähern sich von verschiedenen Seiten! Sammle Munition, drehe dich schnell und feuere! Lass dich nicht treffen!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Zerstöre 2 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 7,
      "y": 7,
      "dir": "N"
    },
    "goal": {
      "x": 7,
      "y": 13
    },
    "asteroids": [
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        8,
        9
      ],
      [
        9,
        9
      ],
      [
        5,
        5
      ],
      [
        6,
        5
      ],
      [
        8,
        5
      ],
      [
        9,
        5
      ],
      [
        3,
        7
      ],
      [
        11,
        7
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        3,
        12
      ],
      [
        11,
        12
      ]
    ],
    "ammo": [
      [
        7,
        6
      ],
      [
        7,
        8
      ],
      [
        6,
        7
      ],
      [
        8,
        7
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
          [
            3,
            12
          ],
          [
            4,
            12
          ],
          [
            5,
            12
          ],
          [
            4,
            12
          ]
        ],
        "dir": "E",
        "shoots": true
      },
      {
        "pattern": [
          [
            11,
            12
          ],
          [
            10,
            12
          ],
          [
            9,
            12
          ],
          [
            10,
            12
          ]
        ],
        "dir": "W",
        "shoots": true
      }
    ]
  },
  "player": {
    "startPowerups": 0,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": false,
    "closeOpenings": 0,
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
    "isAlien",
    "scanForward",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "uT1vU7",
    "stashText": "Pick up!"
  }
}