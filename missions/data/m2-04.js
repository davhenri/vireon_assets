{
  "version": "2.0",
  "id": "m2-04",
  "number": "2.04",
  "title": "Mission 2.04 – Energiekette",
  "briefing": {
    "text": "Pilot! Entlang der Patrouillenstrecke müssen fünf Energiepunkte gesetzt werden. Nutze eine Schleife mit move() und putPow()!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Schließe 5 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), putPow()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 5,
      "y": 2,
      "dir": "N"
    },
    "goal": null,
    "asteroids": [
      [
        4,
        3
      ],
      [
        4,
        4
      ],
      [
        4,
        5
      ],
      [
        4,
        6
      ],
      [
        4,
        7
      ],
      [
        4,
        8
      ],
      [
        4,
        9
      ],
      [
        4,
        10
      ],
      [
        4,
        11
      ],
      [
        4,
        12
      ],
      [
        6,
        3
      ],
      [
        6,
        4
      ],
      [
        6,
        5
      ],
      [
        6,
        6
      ],
      [
        6,
        7
      ],
      [
        6,
        8
      ],
      [
        6,
        9
      ],
      [
        6,
        10
      ],
      [
        6,
        11
      ],
      [
        6,
        12
      ]
    ],
    "openings": [
      [
        5,
        4
      ],
      [
        5,
        6
      ],
      [
        5,
        8
      ],
      [
        5,
        10
      ],
      [
        5,
        12
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 5,
    "startAmmo": 0
  },
  "rules": {
    "reachGoal": false,
    "closeOpenings": 5,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "putPow"
  ],
  "reward": {
    "stashSecret": "sJ5kL4",
    "stashText": "Pick up!"
  }
}