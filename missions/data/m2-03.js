{
  "version": "2.0",
  "id": "m2-03",
  "number": "2.03",
  "title": "Mission 2.03 – Spiralpatrouille",
  "briefing": {
    "text": "Pilot! Die Spiralroute führt ins Zentrum des Sektors. Bewege dich in immer kleineren Bahnen zum Zielfeld."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (5, 5) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnRight()"
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
      "x": 5,
      "y": 5
    },
    "asteroids": [
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
        1,
        10
      ],
      [
        2,
        10
      ],
      [
        3,
        10
      ],
      [
        4,
        10
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
        8,
        5
      ],
      [
        8,
        6
      ],
      [
        8,
        7
      ],
      [
        8,
        8
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
        5,
        4
      ],
      [
        6,
        4
      ],
      [
        7,
        4
      ],
      [
        6,
        6
      ],
      [
        6,
        7
      ],
      [
        6,
        8
      ],
      [
        3,
        8
      ],
      [
        4,
        8
      ],
      [
        5,
        8
      ],
      [
        6,
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
    "turnRight"
  ],
  "reward": {
    "stashSecret": "rG4hI3",
    "stashText": "Pick up!"
  }
}