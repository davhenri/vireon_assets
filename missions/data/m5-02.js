{
  "version": "2.0",
  "id": "m5-02",
  "number": "5.02",
  "title": "Mission 5.02 – Doppelziel",
  "briefing": {
    "text": "Pilot! Zwei Alienschiffe auf Kurs! Du brauchst zwei Schuss. Sammle Munition und zerstöre beide Ziele!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 2 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot()"
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
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        7,
        6
      ],
      [
        7,
        10
      ]
    ],
    "ammo": [
      [
        7,
        2
      ],
      [
        7,
        4
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
    "removeAmmo",
    "shoot"
  ],
  "reward": {
    "stashSecret": "lI6jK2",
    "stashText": "Pick up!"
  }
}