{
  "version": "2.0",
  "id": "m5-03",
  "number": "5.03",
  "title": "Mission 5.03 – Flankenangriff",
  "briefing": {
    "text": "Pilot! Das Alien ist hinter Asteroiden verschanzt. Greife von der Flanke an! Positioniere dich und feuere von der Seite!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 12) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), freeAhead(), isAlien()"
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
      "y": 12
    },
    "asteroids": [
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
        8,
        6
      ],
      [
        8,
        8
      ],
      [
        9,
        6
      ],
      [
        9,
        8
      ]
    ],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        7,
        7
      ]
    ],
    "ammo": [
      [
        2,
        7
      ]
    ],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 0,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 0,
    "destroyAliens": 1,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "removeAmmo",
    "shoot",
    "freeAhead",
    "isAlien"
  ],
  "reward": {
    "stashSecret": "mL7nM3",
    "stashText": "Pick up!"
  }
}