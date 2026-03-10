{
  "version": "2.0",
  "id": "m6-10",
  "number": "6.10",
  "title": "Mission 6.10 – Letzte Mission",
  "briefing": {
    "text": "Pilot! Die letzte Mission der Vireon! Alles kommt zusammen: Stationen, Aliens, Sensoren, Schleifen, Bedingungen. Zeige, dass du ein wahrer Captain bist! Die Crew zählt auf dich – zum letzten Mal!"
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
      "text": "Zerstöre 2 Alien(s)."
    },
    {
      "type": "primary",
      "text": "Liefere 1 PowerUp(s)."
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
        7,
        7
      ],
      [
        13,
        11
      ]
    ],
    "powerups": [
      [
        5,
        3
      ]
    ],
    "stations": [
      [
        1,
        5,
        "blue"
      ],
      [
        9,
        10,
        "red"
      ]
    ],
    "aliens": [
      [
        7,
        9
      ],
      [
        10,
        3
      ]
    ],
    "ammo": [
      [
        3,
        1
      ],
      [
        7,
        1
      ]
    ],
    "alienPatrols": [
      {
        "pattern": [
          [
            10,
            3
          ],
          [
            10,
            4
          ],
          [
            10,
            5
          ],
          [
            10,
            4
          ]
        ],
        "dir": "N",
        "shoots": true
      }
    ]
  },
  "player": {
    "startPowerups": 0,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": true,
    "closeOpenings": 2,
    "destroyAliens": 2,
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
    "removeAmmo",
    "shoot",
    "freeAhead",
    "isAsteroid",
    "isOpening",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "mF5gH0",
    "stashText": "Pick up!"
  }
}