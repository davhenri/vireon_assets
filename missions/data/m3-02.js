{
  "version": "2.0",
  "id": "m3-02",
  "number": "3.02",
  "title": "Mission 3.02 – Hindernis-Check",
  "briefing": {
    "text": "Pilot! Asteroiden blockieren den Weg in unregelmäßigen Abständen. Prüfe mit isAsteroid(), ob ein Hindernis voraus liegt, und weiche aus!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (5, 13) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 5,
      "y": 1,
      "dir": "N"
    },
    "goal": {
      "x": 5,
      "y": 13
    },
    "asteroids": [
      [
        5,
        3
      ],
      [
        5,
        5
      ],
      [
        5,
        7
      ],
      [
        5,
        9
      ],
      [
        5,
        11
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
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "oE4fG2",
    "stashText": "Pick up!"
  }
}