{
  "version": "2.0",
  "id": "m2-07",
  "number": "2.07",
  "title": "Mission 2.07 – Sammelroute",
  "briefing": {
    "text": "Pilot! Auf der Sammelroute liegen regelmäßig PowerUps. Sammle alle vier ein und fliege zum Ziel. Die Abstände sind immer gleich – perfekt für eine Schleife!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 2) erreichen."
    },
    {
      "type": "primary",
      "text": "Sammle 4 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), removePow()"
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
      ],
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
      ]
    ],
    "openings": [],
    "powerups": [
      [
        4,
        2
      ],
      [
        6,
        2
      ],
      [
        8,
        2
      ],
      [
        10,
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
    "closeOpenings": 0,
    "destroyAliens": 0,
    "collectPowerups": 4,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "removePow"
  ],
  "reward": {
    "stashSecret": "vS8tU7",
    "stashText": "Pick up!"
  }
}