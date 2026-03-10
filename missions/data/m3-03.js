{
  "version": "2.0",
  "id": "m3-03",
  "number": "3.03",
  "title": "Mission 3.03 – Rettungspfad",
  "briefing": {
    "text": "Pilot! Fliege durch den Korridor. Wenn du eine Öffnung erkennst – isOpening() – setze sofort ein PowerUp! Nicht jedes Feld hat eine Öffnung."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (3, 12) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), putPow(), isOpening()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 3,
      "y": 1,
      "dir": "N"
    },
    "goal": {
      "x": 3,
      "y": 12
    },
    "asteroids": [
      [
        2,
        1
      ],
      [
        2,
        2
      ],
      [
        2,
        3
      ],
      [
        2,
        4
      ],
      [
        2,
        5
      ],
      [
        2,
        6
      ],
      [
        2,
        7
      ],
      [
        2,
        8
      ],
      [
        2,
        9
      ],
      [
        2,
        10
      ],
      [
        2,
        11
      ],
      [
        2,
        12
      ],
      [
        4,
        1
      ],
      [
        4,
        2
      ],
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
        7
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
      ],
      [
        4,
        12
      ]
    ],
    "openings": [
      [
        3,
        3
      ],
      [
        3,
        6
      ],
      [
        3,
        9
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 3,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "putPow",
    "isOpening"
  ],
  "reward": {
    "stashSecret": "pH5iJ3",
    "stashText": "Pick up!"
  }
}