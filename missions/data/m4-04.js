{
  "version": "2.0",
  "id": "m4-04",
  "number": "4.04",
  "title": "Mission 4.04 – Energiesuche",
  "briefing": {
    "text": "Pilot! Fünf PowerUps sind im Sektor verstreut. Nutze scanForward() um sie zu finden. Speichere: gesammelt = 0 und zähle mit!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Sammle 5 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removePow(), scanForward(), freeAhead()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 7,
      "y": 1,
      "dir": "N"
    },
    "goal": {
      "x": 7,
      "y": 13
    },
    "asteroids": [
      [
        5,
        3
      ],
      [
        6,
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
        4,
        5
      ],
      [
        10,
        5
      ],
      [
        4,
        6
      ],
      [
        10,
        6
      ],
      [
        4,
        7
      ],
      [
        10,
        7
      ],
      [
        4,
        8
      ],
      [
        10,
        8
      ],
      [
        4,
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
        8,
        11
      ],
      [
        9,
        11
      ]
    ],
    "openings": [],
    "powerups": [
      [
        7,
        3
      ],
      [
        5,
        6
      ],
      [
        9,
        6
      ],
      [
        6,
        9
      ],
      [
        8,
        9
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
    "collectPowerups": 5,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "removePow",
    "scanForward",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "iY7jZ4",
    "stashText": "Pick up!"
  }
}