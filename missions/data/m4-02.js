{
  "version": "2.0",
  "id": "m4-02",
  "number": "4.02",
  "title": "Mission 4.02 – Hinderniszähler",
  "briefing": {
    "text": "Pilot! Zähle die Hindernisse auf deiner Route: zaehler = 0 und zaehler = zaehler + 1 bei jedem Asteroidenkontakt. Variablen speichern Werte!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead(), scanForward()"
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
        3,
        7
      ],
      [
        3,
        6
      ],
      [
        3,
        8
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
        7,
        7
      ],
      [
        7,
        6
      ],
      [
        9,
        8
      ],
      [
        9,
        9
      ],
      [
        11,
        7
      ],
      [
        11,
        6
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
    "freeAhead",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "gU5hV2",
    "stashText": "Pick up!"
  }
}