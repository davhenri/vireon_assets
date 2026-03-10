{
  "version": "2.0",
  "id": "m6-08",
  "number": "6.08",
  "title": "Mission 6.08 – Komplexe Logistik",
  "briefing": {
    "text": "Pilot! Komplexe Logistik mit zwei Stationen: Lade, liefere, schließe Lücken und navigiere durch das Asteroidenfeld. Echte Raumfahrt-Logistik!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "primary",
      "text": "Liefere 2 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
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
        5,
        3
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
        7
      ],
      [
        5,
        8
      ],
      [
        5,
        9
      ],
      [
        5,
        10
      ],
      [
        5,
        11
      ],
      [
        8,
        3
      ],
      [
        8,
        4
      ],
      [
        8,
        5
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
      ]
    ],
    "openings": [
      [
        7,
        3
      ],
      [
        7,
        7
      ],
      [
        7,
        11
      ]
    ],
    "powerups": [],
    "stations": [
      [
        1,
        4,
        "blue"
      ],
      [
        9,
        10,
        "red"
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
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 2
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "unloadPow",
    "putPow",
    "removePow",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "kZ3aB8",
    "stashText": "Pick up!"
  }
}