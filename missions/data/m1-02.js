{
  "version": "2.0",
  "id": "m1-02",
  "number": "1.02",
  "title": "Mission 1.02 – Kurskorrektur",
  "briefing": {
    "text": "Pilot! Das Zielfeld liegt nicht geradeaus. Mit turnRight() drehst du dein Schiff um 90° im Uhrzeigersinn. Kombiniere move() und turnRight() geschickt!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (7, 7) erreichen."
    },
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
      "x": 2,
      "y": 12,
      "dir": "E"
    },
    "goal": {
      "x": 7,
      "y": 7
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
    "move",
    "turnRight"
  ],
  "reward": {
    "stashSecret": "eF3gH4",
    "stashText": "Pick up!"
  }
}