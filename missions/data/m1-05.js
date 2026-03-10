{
  "version": "2.0",
  "id": "m1-05",
  "number": "1.05",
  "title": "Mission 1.05 – Bergungsmission",
  "briefing": {
    "text": "Pilot! Im Sektor treiben verlorene PowerUps. Mit removePow() sammelst du ein PowerUp von deiner aktuellen Position in dein Schiff ein. Sammle alle 3 PowerUps ein und fliege zum Zielfeld!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 2) erreichen."
    },
    {
      "type": "primary",
      "text": "Sammle 3 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow()"
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
      "y": 2
    },
    "asteroids": [],
    "openings": [],
    "powerups": [
      [
        5,
        2
      ],
      [
        8,
        2
      ],
      [
        11,
        2
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
    "collectPowerups": 3,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow"
  ],
  "reward": {
    "stashSecret": "mN7oP8",
    "stashText": "Pick up!"
  }
}