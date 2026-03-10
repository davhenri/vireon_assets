{
  "version": "2.0",
  "id": "m1-04",
  "number": "1.04",
  "title": "Mission 1.04 – Schutzschild",
  "briefing": {
    "text": "Pilot! Drei Sicherheitslücken müssen mit Energieschilden geschlossen werden. Nutze putPow() um ein PowerUp auf deiner aktuellen Position abzulegen. Du hast 3 PowerUps im Laderaum."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (3, 12) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 3,
      "y": 1,
      "dir": "N"
    },
    "goal": {
      "x": 3,
      "y": 12
    },
    "asteroids": [
      [
        2,
        3
      ],
      [
        4,
        3
      ],
      [
        2,
        4
      ],
      [
        4,
        4
      ],
      [
        2,
        5
      ],
      [
        4,
        5
      ],
      [
        2,
        6
      ],
      [
        4,
        6
      ],
      [
        2,
        7
      ],
      [
        4,
        7
      ],
      [
        2,
        8
      ],
      [
        4,
        8
      ],
      [
        2,
        9
      ],
      [
        4,
        9
      ],
      [
        2,
        10
      ],
      [
        4,
        10
      ],
      [
        2,
        11
      ],
      [
        4,
        11
      ]
    ],
    "openings": [
      [
        3,
        4
      ],
      [
        3,
        7
      ],
      [
        3,
        10
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
    "putPow"
  ],
  "reward": {
    "stashSecret": "U0Y7tS",
    "stashText": "Pick up!"
  }
}