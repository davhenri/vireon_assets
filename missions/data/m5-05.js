{
  "version": "2.0",
  "id": "m5-05",
  "number": "5.05",
  "title": "Mission 5.05 – Bewegte Ziele",
  "briefing": {
    "text": "Pilot! Achtung – das Alien bewegt sich! Es patrouilliert auf und ab. Warte auf den richtigen Moment und feuere, wenn es in der Schusslinie ist!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (2, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
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
      "x": 2,
      "y": 1,
      "dir": "N"
    },
    "goal": {
      "x": 2,
      "y": 13
    },
    "asteroids": [
      [
        4,
        3
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
        8
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
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        7,
        5
      ]
    ],
    "ammo": [
      [
        2,
        3
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
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
            7,
            7
          ],
          [
            7,
            6
          ]
        ],
        "dir": "N",
        "shoots": false
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
    "destroyAliens": 1,
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
    "stashSecret": "qP9rQ5",
    "stashText": "Pick up!"
  }
}