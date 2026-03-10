{
  "version": "2.0",
  "id": "m2-08",
  "number": "2.08",
  "title": "Mission 2.08 – Zickzack-Patrouille",
  "briefing": {
    "text": "Pilot! Die Zickzack-Route scannt einen breiten Bereich. Das Muster wiederholt sich – erkennst du die Schleife?"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (8, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight()"
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
    "goal": {
      "x": 8,
      "y": 12
    },
    "asteroids": [
      [
        1,
        3
      ],
      [
        1,
        5
      ],
      [
        1,
        7
      ],
      [
        1,
        9
      ],
      [
        1,
        11
      ],
      [
        4,
        3
      ],
      [
        5,
        5
      ],
      [
        6,
        7
      ],
      [
        7,
        9
      ],
      [
        8,
        11
      ],
      [
        3,
        2
      ],
      [
        4,
        4
      ],
      [
        5,
        6
      ],
      [
        6,
        8
      ],
      [
        9,
        12
      ],
      [
        9,
        11
      ],
      [
        9,
        10
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
    "turnRight"
  ],
  "reward": {
    "stashSecret": "wV9xW8",
    "stashText": "Pick up!"
  }
}