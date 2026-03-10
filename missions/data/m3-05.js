{
  "version": "2.0",
  "id": "m3-05",
  "number": "3.05",
  "title": "Mission 3.05 – Sensorgesteuert",
  "briefing": {
    "text": "Pilot! scanForward() liefert detaillierte Informationen: 'asteroid', 'opening', 'empty'. Reagiere passend auf jeden Sensorwert!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), scanForward(), freeAhead()"
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
        7,
        5
      ],
      [
        7,
        9
      ]
    ],
    "openings": [
      [
        7,
        3
      ],
      [
        7,
        7
      ],
      [
        7,
        11
      ]
    ],
    "powerups": [],
    "stations": [],
    "aliens": [],
    "ammo": [],
    "alienPatrols": []
  },
  "player": {
    "startPowerups": 3,
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
    "putPow",
    "scanForward",
    "freeAhead"
  ],
  "reward": {
    "stashSecret": "rN7oP5",
    "stashText": "Pick up!"
  }
}