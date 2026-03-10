{
  "version": "2.0",
  "id": "m2-10",
  "number": "2.10",
  "title": "Mission 2.10 – Endlos-Patrouille",
  "briefing": {
    "text": "Pilot! Die Abschluss-Patrouille kombiniert alles: Navigation, Sammeln, Schließen. Zeige, dass du Schleifen meisterst!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 4 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow()"
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
        1
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
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
        3,
        3
      ],
      [
        4,
        3
      ],
      [
        1,
        5
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
        7,
        10
      ],
      [
        7,
        11
      ],
      [
        7,
        12
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
        11,
        13
      ],
      [
        12,
        13
      ],
      [
        14,
        12
      ],
      [
        14,
        13
      ]
    ],
    "openings": [
      [
        1,
        4
      ],
      [
        4,
        8
      ],
      [
        8,
        12
      ],
      [
        13,
        12
      ]
    ],
    "powerups": [
      [
        1,
        2
      ],
      [
        4,
        6
      ],
      [
        8,
        10
      ],
      [
        11,
        12
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
    "closeOpenings": 4,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow"
  ],
  "reward": {
    "stashSecret": "aB1cD0",
    "stashText": "Pick up!"
  }
}