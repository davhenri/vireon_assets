{
  "version": "2.0",
  "id": "m6-09",
  "number": "6.09",
  "title": "Mission 6.09 – Omega-Versorgung",
  "briefing": {
    "text": "Pilot! Die Omega-Versorgung wird durch ein Alienschiff bedroht! Vernichte es, sichere die Station und schließe alle Lücken!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 2 Öffnung(en)."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), removeAmmo(), shoot(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
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
    "asteroids": [],
    "openings": [
      [
        10,
        10
      ],
      [
        12,
        12
      ]
    ],
    "powerups": [],
    "stations": [
      [
        1,
        5
      ]
    ],
    "aliens": [
      [
        10,
        6
      ]
    ],
    "ammo": [
      [
        7,
        1
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
    "closeOpenings": 2,
    "destroyAliens": 1,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "unloadPow",
    "putPow",
    "removePow",
    "removeAmmo",
    "shoot",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "lC4dE9",
    "stashText": "Pick up!"
  }
}