{
  "version": "2.0",
  "id": "m6-02",
  "number": "6.02",
  "title": "Mission 6.02 – Zweistation-Route",
  "briefing": {
    "text": "Pilot! Transportiere ein PowerUp von Station Alpha zu Station Beta. Lade mit loadPow() am Dock von Alpha und liefere mit unloadPow() bei Beta ab!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 4) erreichen."
    },
    {
      "type": "primary",
      "text": "Liefere 1 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 4,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 4
    },
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [
      [
        2,
        3,
        "blue"
      ],
      [
        9,
        3,
        "red"
      ]
    ],
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
    "deliverPowerups": 1
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "unloadPow"
  ],
  "reward": {
    "stashSecret": "eH7iJ2",
    "stashText": "Pick up!"
  }
}