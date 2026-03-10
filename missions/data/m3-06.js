{
  "version": "2.0",
  "id": "m3-06",
  "number": "3.06",
  "title": "Mission 3.06 – Nebellabyrinth",
  "briefing": {
    "text": "Pilot! Im Nebellabyrinth kannst du nur den nächsten Schritt sehen. Nutze freeAhead() und Bedingungen, um den Weg zu finden!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), wallAhead(), isAsteroid()"
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
        0,
        6
      ],
      [
        1,
        6
      ],
      [
        2,
        6
      ],
      [
        3,
        6
      ],
      [
        5,
        4
      ],
      [
        5,
        5
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
        9,
        9
      ],
      [
        9,
        10
      ],
      [
        9,
        11
      ],
      [
        9,
        12
      ],
      [
        8,
        14
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
    "turnRight",
    "freeAhead",
    "wallAhead",
    "isAsteroid"
  ],
  "reward": {
    "stashSecret": "sQ8rS6",
    "stashText": "Pick up!"
  }
}