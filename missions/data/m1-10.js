{
  "version": "2.0",
  "id": "m1-10",
  "number": "1.10",
  "title": "Mission 1.10 – Abschlussmanöver",
  "briefing": {
    "text": "Pilot! Die Abschlussmission: Sammle Munition und PowerUps, vernichte Aliens, lade an der Station nach und schließe die Sicherheitslücke. Nutze alle gelernten Befehle! Viel Erfolg!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 5) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 1 Öffnung(en)."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow(), removeAmmo(), shoot()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 1,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 5
    },
    "asteroids": [
      [
        11,
        4
      ],
      [
        11,
        6
      ],
      [
        13,
        4
      ],
      [
        13,
        6
      ]
    ],
    "openings": [
      [
        12,
        5
      ]
    ],
    "powerups": [
      [
        10,
        1
      ]
    ],
    "stations": [
      [
        5,
        5,
        "blue"
      ]
    ],
    "aliens": [
      [
        7,
        1
      ]
    ],
    "ammo": [
      [
        4,
        1
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
    "closeOpenings": 1,
    "destroyAliens": 1,
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
    "removeAmmo",
    "shoot"
  ],
  "reward": {
    "stashSecret": "gH7iJ8",
    "stashText": "Pick up!"
  }
}