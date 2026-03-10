{
  "version": "2.0",
  "id": "m4-01",
  "number": "4.01",
  "title": "Mission 4.01 – Feldscan",
  "briefing": {
    "text": "Pilot! Speichere den Sensorwert in einer Variable: feld = scanForward(). Reagiere auf den Wert. Variablen helfen, Informationen zu merken!"
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
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), scanForward(), freeAhead(), isOpening()"
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
        6,
        3
      ],
      [
        8,
        3
      ],
      [
        6,
        5
      ],
      [
        8,
        5
      ],
      [
        6,
        7
      ],
      [
        8,
        7
      ],
      [
        6,
        9
      ],
      [
        8,
        9
      ],
      [
        6,
        11
      ],
      [
        8,
        11
      ]
    ],
    "openings": [
      [
        7,
        4
      ],
      [
        7,
        8
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
    "freeAhead",
    "isOpening"
  ],
  "reward": {
    "stashSecret": "fS4gT1",
    "stashText": "Pick up!"
  }
}