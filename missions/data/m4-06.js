{
  "version": "2.0",
  "id": "m4-06",
  "number": "4.06",
  "title": "Mission 4.06 – Musteranalyse",
  "briefing": {
    "text": "Pilot! Das Feld hat ein wiederkehrendes Muster. Erkenne es mit Sensoren und nutze Variablen, um den Rhythmus zu verfolgen!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 4 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), isOpening(), scanForward(), freeAhead()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 7,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 7
    },
    "asteroids": [
      [
        2,
        7
      ],
      [
        5,
        7
      ],
      [
        8,
        7
      ],
      [
        11,
        7
      ],
      [
        2,
        6
      ],
      [
        5,
        6
      ],
      [
        8,
        6
      ],
      [
        11,
        6
      ],
      [
        2,
        8
      ],
      [
        5,
        8
      ],
      [
        8,
        8
      ],
      [
        11,
        8
      ]
    ],
    "openings": [
      [
        3,
        7
      ],
      [
        6,
        7
      ],
      [
        9,
        7
      ],
      [
        12,
        7
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 4,
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
    "isOpening",
    "scanForward",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "lC9mD6",
    "stashText": "Pick up!"
  }
}