{
  "version": "2.0",
  "id": "m1-09",
  "number": "1.09",
  "title": "Mission 1.09 – Feuertaufe",
  "briefing": {
    "text": "Pilot! Alienschiffe blockieren den Kurs! Sammle Munition mit removeAmmo() und vernichte die Aliens mit shoot(). Der Laser feuert zwei Strahlen in Blickrichtung bis zum nächsten Hindernis."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (2, 12) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 2 Alien(s)."
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
    "aliens": [
      [
        2,
        5
      ],
      [
        2,
        9
      ]
    ],
    "ammo": [
      [
        2,
        3
      ],
      [
        2,
        7
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
    "destroyAliens": 2,
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
    "stashSecret": "cD5eF6",
    "stashText": "Pick up!"
  }
}