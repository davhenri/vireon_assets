{
  "version": "2.0",
  "id": "m4-07",
  "number": "4.07",
  "title": "Mission 4.07 – Wand-Folger",
  "briefing": {
    "text": "Pilot! Der Wand-Folger-Algorithmus: Halte immer die Wand rechts von dir. Drehe rechts wenn frei, sonst geradeaus, sonst links. Ein berühmter Algorithmus!"
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
        2,
        0
      ],
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
        3,
        6
      ],
      [
        4,
        6
      ],
      [
        4,
        5
      ],
      [
        4,
        4
      ],
      [
        4,
        3
      ],
      [
        4,
        2
      ],
      [
        5,
        2
      ],
      [
        6,
        2
      ],
      [
        6,
        3
      ],
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
        7
      ],
      [
        6,
        8
      ],
      [
        5,
        8
      ],
      [
        4,
        8
      ],
      [
        3,
        8
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
        3,
        12
      ],
      [
        4,
        12
      ],
      [
        5,
        12
      ],
      [
        6,
        12
      ],
      [
        6,
        11
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
        10
      ],
      [
        8,
        11
      ],
      [
        8,
        12
      ],
      [
        8,
        13
      ],
      [
        9,
        13
      ],
      [
        10,
        13
      ],
      [
        10,
        12
      ],
      [
        10,
        11
      ],
      [
        10,
        10
      ],
      [
        10,
        9
      ],
      [
        10,
        8
      ],
      [
        9,
        8
      ],
      [
        8,
        8
      ],
      [
        8,
        7
      ],
      [
        8,
        6
      ],
      [
        8,
        5
      ],
      [
        8,
        4
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
        10,
        4
      ],
      [
        10,
        5
      ],
      [
        10,
        6
      ],
      [
        11,
        6
      ],
      [
        12,
        6
      ],
      [
        12,
        7
      ],
      [
        12,
        8
      ],
      [
        12,
        9
      ],
      [
        12,
        10
      ],
      [
        12,
        11
      ],
      [
        12,
        12
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
    "stashSecret": "nE0oF7",
    "stashText": "Pick up!"
  }
}