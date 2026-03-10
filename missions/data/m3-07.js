{
  "version": "2.0",
  "id": "m3-07",
  "number": "3.07",
  "title": "Mission 3.07 – Bedingte Schleife",
  "briefing": {
    "text": "Pilot! Auf der Route liegen PowerUps und Öffnungen gemischt. Sammle PowerUps mit removePow() und schließe Öffnungen mit putPow(). Nutze Bedingungen in der Schleife!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 2) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 2 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), removePow(), putPow(), isOpening(), scanForward()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 2,
      "y": 2,
      "dir": "E"
    },
    "goal": {
      "x": 12,
      "y": 2
    },
    "asteroids": [
      [
        2,
        3
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
        6,
        3
      ],
      [
        7,
        3
      ],
      [
        8,
        3
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
        12,
        3
      ],
      [
        2,
        1
      ],
      [
        3,
        1
      ],
      [
        4,
        1
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
        8,
        1
      ],
      [
        9,
        1
      ],
      [
        10,
        1
      ],
      [
        11,
        1
      ],
      [
        12,
        1
      ]
    ],
    "openings": [
      [
        6,
        2
      ],
      [
        10,
        2
      ]
    ],
    "powerups": [
      [
        4,
        2
      ],
      [
        8,
        2
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
    "closeOpenings": 2,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "removePow",
    "putPow",
    "isOpening",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "tT9uV7",
    "stashText": "Pick up!"
  }
}