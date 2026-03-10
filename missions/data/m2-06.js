{
  "version": "2.0",
  "id": "m2-06",
  "number": "2.06",
  "title": "Mission 2.06 – Doppelrunde",
  "briefing": {
    "text": "Pilot! Zwei Runden auf der Standardpatrouille. Die äußere Schleife zählt die Runden, die innere steuert die Strecke!"
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
    "stashSecret": "uP7qR6",
    "stashText": "Pick up!"
  }
}