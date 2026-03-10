{
  "version": "2.0",
  "id": "m5-04",
  "number": "5.04",
  "title": "Mission 5.04 – Munitionsknappheit",
  "briefing": {
    "text": "Pilot! Munition ist knapp – genau drei Schuss für drei Feinde. Kein Schuss darf daneben gehen! Nutze scanForward() um den richtigen Moment abzupassen."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "primary",
      "text": "Zerstöre 3 Alien(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward()"
    }
  ],
  "grid": {
    "width": 15,
    "height": 15
  },
  "world": {
    "start": {
      "x": 1,
      "y": 7,
      "dir": "E"
    },
    "goal": {
      "x": 13,
      "y": 7
    },
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [],
    "aliens": [
      [
        4,
        7
      ],
      [
        8,
        7
      ],
      [
        12,
        7
      ]
    ],
    "ammo": [
      [
        2,
        7
      ],
      [
        5,
        7
      ],
      [
        9,
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
    "destroyAliens": 3,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "removeAmmo",
    "shoot",
    "isAlien",
    "scanForward"
  ],
  "reward": {
    "stashSecret": "oN8pO4",
    "stashText": "Pick up!"
  }
}