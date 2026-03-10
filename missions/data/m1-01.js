{
  "version": "2.0",
  "id": "m1-01",
  "number": "1.01",
  "title": "Mission 1.01 – Geradflug",
  "briefing": {
    "text": "Pilot! Willkommen an Bord der Vireon! Dein erster Befehl: move(). Damit fliegt dein Schiff einen Schritt vorwärts. Fliege geradeaus zum Zielfeld – zehn Schritte nach vorne!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 12) erreichen."
    },
    {
      "type": "info",
      "text": "Befehle: move()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 7,
      "y": 2,
      "dir": "N"
    },
    "goal": {
      "x": 7,
      "y": 12
    },
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
    "reachGoal": true,
    "closeOpenings": 0,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move"
  ],
  "reward": {
    "stashSecret": "aB1cD2",
    "stashText": "Pick up!"
  }
}