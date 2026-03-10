{
  "version": "2.0",
  "id": "m6-03",
  "number": "6.03",
  "title": "Mission 6.03 – Versorgungskette",
  "briefing": {
    "text": "Pilot! Drei Sicherheitslücken auf der Strecke. Du musst zurück zur Station fliegen um nachzuladen – eine Versorgungskette!"
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Primärziel: Zielfeld (13, 7) erreichen."
    },
    {
      "type": "primary",
      "text": "Schließe 3 Öffnung(en)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow()"
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
    "openings": [
      [
        7,
        7
      ],
      [
        9,
        7
      ],
      [
        11,
        7
      ]
    ],
    "powerups": [],
    "stations": [
      [
        1,
        9
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
    "closeOpenings": 3,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 0
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "loadPow",
    "putPow"
  ],
  "reward": {
    "stashSecret": "fK8lM3",
    "stashText": "Pick up!"
  }
}