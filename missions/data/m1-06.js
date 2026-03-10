{
  "version": "2.0",
  "id": "m1-06",
  "number": "1.06",
  "title": "Mission 1.06 – Andockmanöver",
  "briefing": {
    "text": "Pilot! Vor dir liegt eine Raumstation. Fliege zum Dock (rechtes mittleres Feld der Station) und lade mit loadPow() ein PowerUp. Stationen haben unendlich viele PowerUps! Dann lege es auf dem markierten Feld ab."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Schließe 1 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 2,
      "y": 7,
      "dir": "E"
    },
    "goal": null,
    "asteroids": [],
    "openings": [
      [
        10,
        7
      ]
    ],
    "powerups": [],
    "stations": [
      [
        5,
        7
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
    "reachGoal": false,
    "closeOpenings": 1,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow",
    "loadPow"
  ],
  "reward": {
    "stashSecret": "qR9sT0",
    "stashText": "Pick up!"
  }
}