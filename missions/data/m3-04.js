{
  "version": "2.0",
  "id": "m3-04",
  "number": "3.04",
  "title": "Mission 3.04 – Asteroiden-Slalom",
  "briefing": {
    "text": "Pilot! Der Slalomkurs erfordert schnelle Entscheidungen. Prüfe vor jedem Schritt die Sensoren und wähle die richtige Richtung!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 13) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead()"
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
      "x": 12,
      "y": 13
    },
    "asteroids": [
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
        5
      ],
      [
        3,
        5
      ],
      [
        4,
        5
      ],
      [
        5,
        5
      ],
      [
        6,
        5
      ],
      [
        7,
        5
      ],
      [
        8,
        5
      ],
      [
        9,
        5
      ],
      [
        10,
        5
      ],
      [
        5,
        7
      ],
      [
        6,
        7
      ],
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
        10,
        7
      ],
      [
        11,
        7
      ],
      [
        12,
        7
      ],
      [
        13,
        7
      ],
      [
        2,
        9
      ],
      [
        3,
        9
      ],
      [
        4,
        9
      ],
      [
        5,
        9
      ],
      [
        6,
        9
      ],
      [
        7,
        9
      ],
      [
        8,
        9
      ],
      [
        9,
        9
      ],
      [
        10,
        9
      ],
      [
        5,
        11
      ],
      [
        6,
        11
      ],
      [
        7,
        11
      ],
      [
        8,
        11
      ],
      [
        9,
        11
      ],
      [
        10,
        11
      ],
      [
        11,
        11
      ],
      [
        12,
        11
      ],
      [
        13,
        11
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
    "isAsteroid",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "qK6lM4",
    "stashText": "Pick up!"
  }
}