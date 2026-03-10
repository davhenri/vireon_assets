{
  "version": "2.0",
  "id": "m6-04",
  "number": "6.04",
  "title": "Mission 6.04 – Lagerlogistik",
  "briefing": {
    "text": "Pilot! Lade zwei PowerUps an Station Alpha und transportiere sie durch das Asteroidenfeld zu Station Beta. Effiziente Logistik ist gefragt!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Liefere 2 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow()"
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
        4
      ],
      [
        6,
        5
      ],
      [
        6,
        6
      ],
      [
        6,
        9
      ],
      [
        6,
        10
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
        7
      ],
      [
        8,
        8
      ],
      [
        10,
        7
      ],
      [
        10,
        8
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [
      [
        1,
        4
      ],
      [
        9,
        11
      ]
    ],
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
    "deliverPowerups": 2
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "unloadPow"
  ],
  "reward": {
    "stashSecret": "gN9oP4",
    "stashText": "Pick up!"
  }
}