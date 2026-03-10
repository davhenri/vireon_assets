{
  "version": "2.0",
  "id": "m2-09",
  "number": "2.09",
  "title": "Mission 2.09 – Verschachtelte Muster",
  "briefing": {
    "text": "Pilot! Die Route hat ein verschachteltes Muster. Eine Schleife in der Schleife – verschachtelte for-Schleifen!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Schließe 6 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnRight(), putPow()"
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
      "dir": "N"
    },
    "goal": null,
    "asteroids": [
      [
        1,
        3
      ],
      [
        1,
        4
      ],
      [
        1,
        5
      ],
      [
        1,
        6
      ],
      [
        1,
        7
      ],
      [
        1,
        8
      ],
      [
        1,
        9
      ],
      [
        3,
        3
      ],
      [
        3,
        4
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
        4,
        7
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
        9,
        7
      ],
      [
        2,
        9
      ],
      [
        3,
        9
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
        8,
        9
      ],
      [
        9,
        9
      ],
      [
        9,
        8
      ]
    ],
    "openings": [
      [
        2,
        4
      ],
      [
        2,
        6
      ],
      [
        2,
        8
      ],
      [
        4,
        8
      ],
      [
        6,
        8
      ],
      [
        8,
        8
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 6,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": false,
    "closeOpenings": 6,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnRight",
    "putPow"
  ],
  "reward": {
    "stashSecret": "xY0zA9",
    "stashText": "Pick up!"
  }
}