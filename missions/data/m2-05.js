{
  "version": "2.0",
  "id": "m2-05",
  "number": "2.05",
  "title": "Mission 2.05 – Asteroidenumrundung",
  "briefing": {
    "text": "Pilot! Ein Asteroidenfeld blockiert den direkten Weg. Umrunde es mit einem geschickten Schleifenmuster!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (4, 10) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 4,
      "y": 4,
      "dir": "N"
    },
    "goal": {
      "x": 4,
      "y": 10
    },
    "asteroids": [
      [
        3,
        6
      ],
      [
        3,
        7
      ],
      [
        3,
        8
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
        5,
        6
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
    "turnLeft",
    "turnRight"
  ],
  "reward": {
    "stashSecret": "tM6nO5",
    "stashText": "Pick up!"
  }
}