{
  "version": "2.0",
  "id": "m5-06",
  "number": "5.06",
  "title": "Mission 5.06 – Hinterhalt",
  "briefing": {
    "text": "Pilot! WARNUNG: Das Alien schießt zurück! Grüne Zwillingslaser! Nutze Asteroiden als Deckung und greife im richtigen Moment an!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), wallAhead()"
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
        6,
        5
      ],
      [
        6,
        6
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
        5,
        3
      ],
      [
        9,
        3
      ],
      [
        3,
        10
      ],
      [
        11,
        10
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        7,
        7
      ]
    ],
    "ammo": [
      [
        1,
        5
      ],
      [
        1,
        9
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
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
            8,
            7
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
    "freeAhead",
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "sR0tS6",
    "stashText": "Pick up!"
  }
}