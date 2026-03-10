{
  "version": "2.0",
  "id": "m6-06",
  "number": "6.06",
  "title": "Mission 6.06 – Ressourcenknappheit",
  "briefing": {
    "text": "Pilot! Die Station ist weit von den Sicherheitslücken entfernt. Plane deine Route effizient – jeder Umweg kostet Zeit und Treibstoff!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow(), scanForward(), freeAhead()"
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
        4
      ],
      [
        5,
        10
      ],
      [
        6,
        3
      ],
      [
        6,
        12
      ],
      [
        8,
        4
      ],
      [
        8,
        10
      ],
      [
        9,
        3
      ],
      [
        9,
        12
      ]
    ],
    "openings": [
      [
        7,
        5
      ],
      [
        7,
        9
      ],
      [
        7,
        11
      ]
    ],
    "powerups": [],
    "stations": [
      [
        1,
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
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "putPow",
    "scanForward",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "iT1uV6",
    "stashText": "Pick up!"
  }
}