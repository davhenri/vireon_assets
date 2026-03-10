{
  "version": "2.0",
  "id": "m6-07",
  "number": "6.07",
  "title": "Mission 6.07 – Mehrziel-Route",
  "briefing": {
    "text": "Pilot! Mehrziel-Mission: Sammle PowerUps, schließe Öffnungen UND liefere an die Station. Planung ist alles!"
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
      "text": "Liefere 1 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), scanForward(), freeAhead(), isOpening()"
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
        7,
        5
      ],
      [
        9,
        9
      ]
    ],
    "powerups": [
      [
        3,
        1
      ],
      [
        5,
        1
      ]
    ],
    "stations": [
      [
        8,
        6,
        "blue"
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
    "closeOpenings": 2,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 1
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "unloadPow",
    "putPow",
    "removePow",
    "scanForward",
    "freeAhead",
    "isOpening"
  ],
  "reward": {
    "stashSecret": "jW2xY7",
    "stashText": "Pick up!"
  }
}