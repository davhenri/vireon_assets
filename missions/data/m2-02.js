{
  "version": "2.0",
  "id": "m2-02",
  "number": "2.02",
  "title": "Mission 2.02 – Quadratflug",
  "briefing": {
    "text": "Pilot! Fliege ein Quadrat mit 5 Feldern Seitenlänge. Nutze eine Schleife: for i in range(4): bewege und wende!"
  },
  "objectives": [
    {
      "type": "info",
      "text": "Befehle: move(), turnRight()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 3,
      "y": 3,
      "dir": "N"
    },
    "goal": null,
    "asteroids": [],
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
    "reachGoal": false,
    "closeOpenings": 0,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnRight"
  ],
  "reward": {
    "stashSecret": "qD3eF2",
    "stashText": "Pick up!"
  }
}