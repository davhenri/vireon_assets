{
  "version": "2.0",
  "id": "m3-10",
  "number": "3.10",
  "title": "Mission 3.10 – Nebelmission",
  "briefing": {
    "text": "Pilot! Die Abschlussmission im Nebel: Nutze alle Sensoren, Schleifen und Bedingungen. Sammle, schließe und navigiere – der Nebel lichtet sich nur für die Besten!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening(), wallAhead()"
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
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 13
    },
    "asteroids": [
      [
        4,
        1
      ],
      [
        3,
        5
      ],
      [
        8,
        4
      ],
      [
        7,
        9
      ],
      [
        12,
        8
      ],
      [
        11,
        13
      ],
      [
        14,
        12
      ]
    ],
    "openings": [
      [
        5,
        4
      ],
      [
        7,
        4
      ],
      [
        9,
        8
      ],
      [
        11,
        8
      ]
    ],
    "powerups": [
      [
        2,
        1
      ],
      [
        3,
        3
      ],
      [
        7,
        5
      ],
      [
        7,
        8
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
    "removePow",
    "scanForward",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "wallAhead"
  ],
  "reward": {
    "stashSecret": "wC2dE0",
    "stashText": "Pick up!"
  }
}