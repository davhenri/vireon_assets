{
  "version": "2.0",
  "id": "m1-07",
  "number": "1.07",
  "title": "Mission 1.07 – Versorgungsflug",
  "briefing": {
    "text": "Pilot! Zwei Stationen brauchen Nachschub. Lade PowerUps an der Versorgungsstation und liefere sie an die Außenposten. loadPow() lädt ein PowerUp, unloadPow() entlädt eins an einer Station."
  },
  "objectives": [
    {
      "type": "primary",
      "text": "Liefere 2 PowerUp(s)."
    },
    {
      "type": "info",
      "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow()"
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
    "goal": null,
    "asteroids": [],
    "openings": [],
    "powerups": [],
    "stations": [
      [
        3,
        7
      ],
      [
        10,
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
    "closeOpenings": 0,
    "destroyAliens": 0,
    "collectPowerups": 0,
    "deliverPowerups": 2
  },
  "allowedCommands": [
    "move",
    "turnLeft",
    "turnRight",
    "putPow",
    "removePow",
    "loadPow",
    "unloadPow"
  ],
  "reward": {
    "stashSecret": "uV1wX2",
    "stashText": "Pick up!"
  }
}