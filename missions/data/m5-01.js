{
  "version": "2.0",
  "id": "m5-01",
  "number": "5.01",
  "title": "Mission 5.01 – Erster Schuss",
  "briefing": {
    "text": "Pilot! Ein Alienschiff blockiert deinen Weg! Sammle Munition mit removeAmmo() und feuere mit shoot(). Der Zwillingslaser fliegt in Blickrichtung!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 13) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 1 Alien(s)."
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
        7
      ]
    ],
    "ammo": [
      [
        7,
        3
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
    "destroyAliens": 1,
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
    "stashSecret": "kF5gH1",
    "stashText": "Pick up!"
  }
}