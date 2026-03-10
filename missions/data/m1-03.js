{
  "version": "2.0",
  "id": "m1-03",
  "number": "1.03",
  "title": "Mission 1.03 – Doppelwendung",
  "briefing": {
    "text": "Pilot! Neuer Befehl: turnLeft() dreht dein Schiff um 90° gegen den Uhrzeigersinn. Plane deinen Kurs mit move(), turnLeft() und turnRight()!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (12, 2) erreichen."
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
      "y": 7,
      "dir": "E"
    },
    "goal": {
      "x": 12,
      "y": 2
    },
    "asteroids": [
      [
        7,
        3
      ],
      [
        7,
        4
      ],
      [
        7,
        5
      ],
      [
        7,
        6
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
    "stashSecret": "iJ5kL6",
    "stashText": "Pick up!"
  }
}