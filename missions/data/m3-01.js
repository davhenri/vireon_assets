{
  "version": "2.0",
  "id": "m3-01",
  "number": "3.01",
  "title": "Mission 3.01 – Nebelerkennung",
  "briefing": {
    "text": "Pilot! Im Nebel ist die Sicht eingeschränkt. Nutze wallAhead() und isAsteroid() um Hindernisse zu erkennen, bevor du fliegst!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), wallAhead(), freeAhead(), isAsteroid()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 7,
      "y": 2,
      "dir": "N"
    },
    "goal": {
      "x": 7,
      "y": 12
    },
    "asteroids": [
      [
        7,
        7
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
    "wallAhead",
    "freeAhead",
    "isAsteroid"
  ],
  "reward": {
    "stashSecret": "nB3cD1",
    "stashText": "Pick up!"
  }
}