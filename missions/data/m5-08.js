{
  "version": "2.0",
  "id": "m5-08",
  "number": "5.08",
  "title": "Mission 5.08 – Raumgefecht",
  "briefing": {
    "text": "Pilot! Raumgefecht! Drei Alienschiffe in verschiedenen Formationen – manche bewegen sich, manche schießen. Plane deine Angriffsstrategie sorgfältig!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), isAsteroid(), wallAhead()"
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
        3
      ],
      [
        4,
        3
      ],
      [
        6,
        3
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
        9,
        9
      ],
      [
        9,
        10
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        5,
        5
      ],
      [
        10,
        5
      ],
      [
        7,
        11
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
        11,
        1
      ],
      [
        7,
        7
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
          [
            10,
            5
          ],
          [
            10,
            6
          ],
          [
            10,
            7
          ],
          [
            10,
            6
          ]
        ],
        "dir": "N",
        "shoots": false
      },
      {
        "pattern": [
          [
            7,
            11
          ],
          [
            8,
            11
          ],
          [
            9,
            11
          ],
          [
            8,
            11
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
    "isAsteroid",
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "wV2xW8",
    "stashText": "Pick up!"
  }
}