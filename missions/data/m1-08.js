{
  "version": "2.0",
  "id": "m1-08",
  "number": "1.08",
  "title": "Mission 1.08 – Munitionslager",
  "briefing": {
    "text": "Pilot! Auf dem Weg zum Ziel findest du Munitionskisten. Sammle sie mit removeAmmo() ein – du wirst sie bald brauchen! Sammle alle Munition und erreiche das Zielfeld."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (2, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow(), removeAmmo()"
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
      "x": 2,
      "y": 12
    },
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [
      [
        2,
        4
      ],
      [
        2,
        7
      ],
      [
        2,
        10
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
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow",
    "loadPow",
    "unloadPow",
    "removeAmmo"
  ],
  "reward": {
    "stashSecret": "yZ3aB4",
    "stashText": "Pick up!"
  }
}