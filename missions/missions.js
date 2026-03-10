{
  "version": "2.0",
  "baseAssets": {
    "basePath": "https://raw.githubusercontent.com/davhenri/vireon_assets/main/",
    "officerGif": "mission_briefings/offizier_briefing_12s.gif",
    "background": "mission_briefings/bg.jpg",
    "sprites": {
      "player": "vireon/player.svg",
      "asteroid": "vireon/asteroid.png",
      "powerup": "vireon/powerup.png",
      "station": "vireon/stationBlue.png",
      "alien": "vireon/alien.png",
      "stationBlue": "vireon/stationBlue.png",
      "stationRed": "vireon/stationRed.png",
      "ammo": "vireon/ammo.png"
    }
  },
  "missions": {
  "m1-01": {
    "number": "1.01",
    "title": "Mission 1.01 \u2013 Geradflug",
    "briefing": {
      "text": "Pilot! Willkommen an Bord der Vireon! Dein erster Befehl: move(). Damit fliegt dein Schiff einen Schritt vorw\u00e4rts. Fliege geradeaus zum Zielfeld \u2013 zehn Schritte nach vorne!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 12) erreichen."
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
  },
  "m1-02": {
    "number": "1.02",
    "title": "Mission 1.02 \u2013 Kurskorrektur",
    "briefing": {
      "text": "Pilot! Das Zielfeld liegt nicht geradeaus. Mit turnRight() drehst du dein Schiff um 90\u00b0 im Uhrzeigersinn. Kombiniere move() und turnRight() geschickt!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 7) erreichen."
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
  },
  "m1-03": {
    "number": "1.03",
    "title": "Mission 1.03 \u2013 Doppelwendung",
    "briefing": {
      "text": "Pilot! Neuer Befehl: turnLeft() dreht dein Schiff um 90\u00b0 gegen den Uhrzeigersinn. Plane deinen Kurs mit move(), turnLeft() und turnRight()!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 2) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight()"
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
      "goal": {
        "x": 12,
        "y": 2
      },
      "asteroids": [
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ]
      ],
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
      "turnLeft",
      "turnRight"
    ],
    "reward": {
      "stashSecret": "iJ5kL6",
      "stashText": "Pick up!"
    }
  },
  "m1-04": {
    "number": "1.04",
    "title": "Mission 1.04 \u2013 Schutzschild",
    "briefing": {
      "text": "Pilot! Drei Sicherheitsl\u00fccken m\u00fcssen mit Energieschilden geschlossen werden. Nutze putPow() um ein PowerUp auf deiner aktuellen Position abzulegen. Du hast 3 PowerUps im Laderaum."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (3, 12) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 3,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 3,
        "y": 12
      },
      "asteroids": [
        [
          2,
          3
        ],
        [
          4,
          3
        ],
        [
          2,
          4
        ],
        [
          4,
          4
        ],
        [
          2,
          5
        ],
        [
          4,
          5
        ],
        [
          2,
          6
        ],
        [
          4,
          6
        ],
        [
          2,
          7
        ],
        [
          4,
          7
        ],
        [
          2,
          8
        ],
        [
          4,
          8
        ],
        [
          2,
          9
        ],
        [
          4,
          9
        ],
        [
          2,
          10
        ],
        [
          4,
          10
        ],
        [
          2,
          11
        ],
        [
          4,
          11
        ]
      ],
      "openings": [
        [
          3,
          4
        ],
        [
          3,
          7
        ],
        [
          3,
          10
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 3,
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
      "putPow"
    ],
    "reward": {
      "stashSecret": "U0Y7tS",
      "stashText": "Pick up!"
    }
  },
  "m1-05": {
    "number": "1.05",
    "title": "Mission 1.05 \u2013 Bergungsmission",
    "briefing": {
      "text": "Pilot! Im Sektor treiben verlorene PowerUps. Mit removePow() sammelst du ein PowerUp von deiner aktuellen Position in dein Schiff ein. Sammle alle 3 PowerUps ein und fliege zum Zielfeld!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 2) erreichen."
      },
      {
        "type": "primary",
        "text": "Sammle 3 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "E"
      },
      "goal": {
        "x": 12,
        "y": 2
      },
      "asteroids": [],
      "openings": [],
      "powerups": [
        [
          5,
          2
        ],
        [
          8,
          2
        ],
        [
          11,
          2
        ]
      ],
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
      "collectPowerups": 3,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "putPow",
      "removePow"
    ],
    "reward": {
      "stashSecret": "mN7oP8",
      "stashText": "Pick up!"
    }
  },
  "m1-06": {
    "number": "1.06",
    "title": "Mission 1.06 \u2013 Andockman\u00f6ver",
    "briefing": {
      "text": "Pilot! Vor dir liegt eine Raumstation. Fliege zum Dock (rechtes mittleres Feld der Station) und lade mit loadPow() ein PowerUp. Stationen haben unendlich viele PowerUps! Dann lege es auf dem markierten Feld ab."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Schlie\u00dfe 1 \u00d6ffnung(en)."
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
          7,
          "blue"
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
  },
  "m1-07": {
    "number": "1.07",
    "title": "Mission 1.07 \u2013 Versorgungsflug",
    "briefing": {
      "text": "Pilot! Zwei Stationen brauchen Nachschub. Lade PowerUps an der Versorgungsstation und liefere sie an die Au\u00dfenposten. loadPow() l\u00e4dt ein PowerUp, unloadPow() entl\u00e4dt eins an einer Station."
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
          7,
          "blue"
        ],
        [
          10,
          7,
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
  },
  "m1-08": {
    "number": "1.08",
    "title": "Mission 1.08 \u2013 Munitionslager",
    "briefing": {
      "text": "Pilot! Auf dem Weg zum Ziel findest du Munitionskisten. Sammle sie mit removeAmmo() ein \u2013 du wirst sie bald brauchen! Sammle alle Munition und erreiche das Zielfeld."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (2, 12) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow(), removeAmmo()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "N"
      },
      "goal": {
        "x": 2,
        "y": 12
      },
      "asteroids": [],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [
        [
          2,
          4
        ],
        [
          2,
          7
        ],
        [
          2,
          10
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
      "loadPow",
      "unloadPow",
      "removeAmmo"
    ],
    "reward": {
      "stashSecret": "yZ3aB4",
      "stashText": "Pick up!"
    }
  },
  "m1-09": {
    "number": "1.09",
    "title": "Mission 1.09 \u2013 Feuertaufe",
    "briefing": {
      "text": "Pilot! Alienschiffe blockieren den Kurs! Sammle Munition mit removeAmmo() und vernichte die Aliens mit shoot(). Der Laser feuert zwei Strahlen in Blickrichtung bis zum n\u00e4chsten Hindernis."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (2, 12) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 2 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow(), removeAmmo(), shoot()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "N"
      },
      "goal": {
        "x": 2,
        "y": 12
      },
      "asteroids": [],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          2,
          5
        ],
        [
          2,
          9
        ]
      ],
      "ammo": [
        [
          2,
          3
        ],
        [
          2,
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
      "destroyAliens": 2,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "putPow",
      "removePow",
      "loadPow",
      "unloadPow",
      "removeAmmo",
      "shoot"
    ],
    "reward": {
      "stashSecret": "cD5eF6",
      "stashText": "Pick up!"
    }
  },
  "m1-10": {
    "number": "1.10",
    "title": "Mission 1.10 \u2013 Abschlussman\u00f6ver",
    "briefing": {
      "text": "Pilot! Die Abschlussmission: Sammle Munition und PowerUps, vernichte Aliens, lade an der Station nach und schlie\u00dfe die Sicherheitsl\u00fccke. Nutze alle gelernten Befehle! Viel Erfolg!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 5) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 1 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), loadPow(), unloadPow(), removeAmmo(), shoot()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 5
      },
      "asteroids": [
        [
          11,
          4
        ],
        [
          11,
          6
        ],
        [
          13,
          4
        ],
        [
          13,
          6
        ]
      ],
      "openings": [
        [
          12,
          5
        ]
      ],
      "powerups": [
        [
          10,
          1
        ]
      ],
      "stations": [
        [
          5,
          5,
          "blue"
        ]
      ],
      "aliens": [
        [
          7,
          1
        ]
      ],
      "ammo": [
        [
          4,
          1
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
      "closeOpenings": 1,
      "destroyAliens": 1,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "putPow",
      "removePow",
      "loadPow",
      "unloadPow",
      "removeAmmo",
      "shoot"
    ],
    "reward": {
      "stashSecret": "gH7iJ8",
      "stashText": "Pick up!"
    }
  },
  "m2-01": {
    "number": "2.01",
    "title": "Mission 2.01 \u2013 Patrouillenstart",
    "briefing": {
      "text": "Pilot! Die Patrouille beginnt. Zehn Sektoren geradeaus! Tipp: Mit einer for-Schleife sparst du viel Schreibarbeit: for i in range(10): move()"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 12) erreichen."
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
      "stashSecret": "pA2bC1",
      "stashText": "Pick up!"
    }
  },
  "m2-02": {
    "number": "2.02",
    "title": "Mission 2.02 \u2013 Quadratflug",
    "briefing": {
      "text": "Pilot! Fliege ein Quadrat mit 5 Feldern Seitenl\u00e4nge. Nutze eine Schleife: for i in range(4): bewege und wende!"
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
  },
  "m2-03": {
    "number": "2.03",
    "title": "Mission 2.03 \u2013 Spiralpatrouille",
    "briefing": {
      "text": "Pilot! Die Spiralroute f\u00fchrt ins Zentrum des Sektors. Bewege dich in immer kleineren Bahnen zum Zielfeld."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (5, 5) erreichen."
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
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 5,
        "y": 5
      },
      "asteroids": [
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          2,
          8
        ],
        [
          1,
          10
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          8,
          5
        ],
        [
          8,
          6
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          8,
          9
        ],
        [
          8,
          10
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          6
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ]
      ],
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
      "stashSecret": "rG4hI3",
      "stashText": "Pick up!"
    }
  },
  "m2-04": {
    "number": "2.04",
    "title": "Mission 2.04 \u2013 Energiekette",
    "briefing": {
      "text": "Pilot! Entlang der Patrouillenstrecke m\u00fcssen f\u00fcnf Energiepunkte gesetzt werden. Nutze eine Schleife mit move() und putPow()!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Schlie\u00dfe 5 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), putPow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 5,
        "y": 2,
        "dir": "N"
      },
      "goal": null,
      "asteroids": [
        [
          4,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          4,
          8
        ],
        [
          4,
          9
        ],
        [
          4,
          10
        ],
        [
          4,
          11
        ],
        [
          4,
          12
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          6,
          6
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          6,
          9
        ],
        [
          6,
          10
        ],
        [
          6,
          11
        ],
        [
          6,
          12
        ]
      ],
      "openings": [
        [
          5,
          4
        ],
        [
          5,
          6
        ],
        [
          5,
          8
        ],
        [
          5,
          10
        ],
        [
          5,
          12
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 5,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": false,
      "closeOpenings": 5,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "putPow"
    ],
    "reward": {
      "stashSecret": "sJ5kL4",
      "stashText": "Pick up!"
    }
  },
  "m2-05": {
    "number": "2.05",
    "title": "Mission 2.05 \u2013 Asteroidenumrundung",
    "briefing": {
      "text": "Pilot! Ein Asteroidenfeld blockiert den direkten Weg. Umrunde es mit einem geschickten Schleifenmuster!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (4, 10) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 4,
        "y": 4,
        "dir": "N"
      },
      "goal": {
        "x": 4,
        "y": 10
      },
      "asteroids": [
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          3,
          8
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          4,
          8
        ],
        [
          5,
          6
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          6,
          6
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          6
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ]
      ],
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
      "turnLeft",
      "turnRight"
    ],
    "reward": {
      "stashSecret": "tM6nO5",
      "stashText": "Pick up!"
    }
  },
  "m2-06": {
    "number": "2.06",
    "title": "Mission 2.06 \u2013 Doppelrunde",
    "briefing": {
      "text": "Pilot! Zwei Runden auf der Standardpatrouille. Die \u00e4u\u00dfere Schleife z\u00e4hlt die Runden, die innere steuert die Strecke!"
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
  },
  "m2-07": {
    "number": "2.07",
    "title": "Mission 2.07 \u2013 Sammelroute",
    "briefing": {
      "text": "Pilot! Auf der Sammelroute liegen regelm\u00e4\u00dfig PowerUps. Sammle alle vier ein und fliege zum Ziel. Die Abst\u00e4nde sind immer gleich \u2013 perfekt f\u00fcr eine Schleife!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 2) erreichen."
      },
      {
        "type": "primary",
        "text": "Sammle 4 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), removePow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "E"
      },
      "goal": {
        "x": 12,
        "y": 2
      },
      "asteroids": [
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          12,
          3
        ]
      ],
      "openings": [],
      "powerups": [
        [
          4,
          2
        ],
        [
          6,
          2
        ],
        [
          8,
          2
        ],
        [
          10,
          2
        ]
      ],
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
      "collectPowerups": 4,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "removePow"
    ],
    "reward": {
      "stashSecret": "vS8tU7",
      "stashText": "Pick up!"
    }
  },
  "m2-08": {
    "number": "2.08",
    "title": "Mission 2.08 \u2013 Zickzack-Patrouille",
    "briefing": {
      "text": "Pilot! Die Zickzack-Route scannt einen breiten Bereich. Das Muster wiederholt sich \u2013 erkennst du die Schleife?"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (8, 12) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "N"
      },
      "goal": {
        "x": 8,
        "y": 12
      },
      "asteroids": [
        [
          1,
          3
        ],
        [
          1,
          5
        ],
        [
          1,
          7
        ],
        [
          1,
          9
        ],
        [
          1,
          11
        ],
        [
          4,
          3
        ],
        [
          5,
          5
        ],
        [
          6,
          7
        ],
        [
          7,
          9
        ],
        [
          8,
          11
        ],
        [
          3,
          2
        ],
        [
          4,
          4
        ],
        [
          5,
          6
        ],
        [
          6,
          8
        ],
        [
          9,
          12
        ],
        [
          9,
          11
        ],
        [
          9,
          10
        ]
      ],
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
      "turnLeft",
      "turnRight"
    ],
    "reward": {
      "stashSecret": "wV9xW8",
      "stashText": "Pick up!"
    }
  },
  "m2-09": {
    "number": "2.09",
    "title": "Mission 2.09 \u2013 Verschachtelte Muster",
    "briefing": {
      "text": "Pilot! Die Route hat ein verschachteltes Muster. Eine Schleife in der Schleife \u2013 verschachtelte for-Schleifen!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Schlie\u00dfe 6 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnRight(), putPow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "N"
      },
      "goal": null,
      "asteroids": [
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          2,
          9
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          9
        ],
        [
          9,
          9
        ],
        [
          9,
          8
        ]
      ],
      "openings": [
        [
          2,
          4
        ],
        [
          2,
          6
        ],
        [
          2,
          8
        ],
        [
          4,
          8
        ],
        [
          6,
          8
        ],
        [
          8,
          8
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 6,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": false,
      "closeOpenings": 6,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnRight",
      "putPow"
    ],
    "reward": {
      "stashSecret": "xY0zA9",
      "stashText": "Pick up!"
    }
  },
  "m2-10": {
    "number": "2.10",
    "title": "Mission 2.10 \u2013 Endlos-Patrouille",
    "briefing": {
      "text": "Pilot! Die Abschluss-Patrouille kombiniert alles: Navigation, Sammeln, Schlie\u00dfen. Zeige, dass du Schleifen meisterst!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 4 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          0,
          4
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          3,
          8
        ],
        [
          5,
          5
        ],
        [
          5,
          6
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          7,
          9
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          7,
          12
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          10,
          11
        ],
        [
          11,
          11
        ],
        [
          12,
          11
        ],
        [
          13,
          11
        ],
        [
          8,
          13
        ],
        [
          9,
          13
        ],
        [
          10,
          13
        ],
        [
          11,
          13
        ],
        [
          12,
          13
        ],
        [
          14,
          12
        ],
        [
          14,
          13
        ]
      ],
      "openings": [
        [
          1,
          4
        ],
        [
          4,
          8
        ],
        [
          8,
          12
        ],
        [
          13,
          12
        ]
      ],
      "powerups": [
        [
          1,
          2
        ],
        [
          4,
          6
        ],
        [
          8,
          10
        ],
        [
          11,
          12
        ]
      ],
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
      "closeOpenings": 4,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "putPow",
      "removePow"
    ],
    "reward": {
      "stashSecret": "aB1cD0",
      "stashText": "Pick up!"
    }
  },
  "m3-01": {
    "number": "3.01",
    "title": "Mission 3.01 \u2013 Nebelerkennung",
    "briefing": {
      "text": "Pilot! Im Nebel ist die Sicht eingeschr\u00e4nkt. Nutze wallAhead() und isAsteroid() um Hindernisse zu erkennen, bevor du fliegst!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 12) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), wallAhead(), freeAhead(), isAsteroid()"
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
      "asteroids": [
        [
          7,
          7
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "wallAhead",
      "freeAhead",
      "isAsteroid"
    ],
    "reward": {
      "stashSecret": "nB3cD1",
      "stashText": "Pick up!"
    }
  },
  "m3-02": {
    "number": "3.02",
    "title": "Mission 3.02 \u2013 Hindernis-Check",
    "briefing": {
      "text": "Pilot! Asteroiden blockieren den Weg in unregelm\u00e4\u00dfigen Abst\u00e4nden. Pr\u00fcfe mit isAsteroid(), ob ein Hindernis voraus liegt, und weiche aus!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (5, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 5,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 5,
        "y": 13
      },
      "asteroids": [
        [
          5,
          3
        ],
        [
          5,
          5
        ],
        [
          5,
          7
        ],
        [
          5,
          9
        ],
        [
          5,
          11
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "isAsteroid",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "oE4fG2",
      "stashText": "Pick up!"
    }
  },
  "m3-03": {
    "number": "3.03",
    "title": "Mission 3.03 \u2013 Rettungspfad",
    "briefing": {
      "text": "Pilot! Fliege durch den Korridor. Wenn du eine \u00d6ffnung erkennst \u2013 isOpening() \u2013 setze sofort ein PowerUp! Nicht jedes Feld hat eine \u00d6ffnung."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (3, 12) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), putPow(), isOpening()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 3,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 3,
        "y": 12
      },
      "asteroids": [
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          2,
          7
        ],
        [
          2,
          8
        ],
        [
          2,
          9
        ],
        [
          2,
          10
        ],
        [
          2,
          11
        ],
        [
          2,
          12
        ],
        [
          4,
          1
        ],
        [
          4,
          2
        ],
        [
          4,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          4,
          8
        ],
        [
          4,
          9
        ],
        [
          4,
          10
        ],
        [
          4,
          11
        ],
        [
          4,
          12
        ]
      ],
      "openings": [
        [
          3,
          3
        ],
        [
          3,
          6
        ],
        [
          3,
          9
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 3,
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
      "putPow",
      "isOpening"
    ],
    "reward": {
      "stashSecret": "pH5iJ3",
      "stashText": "Pick up!"
    }
  },
  "m3-04": {
    "number": "3.04",
    "title": "Mission 3.04 \u2013 Asteroiden-Slalom",
    "briefing": {
      "text": "Pilot! Der Slalomkurs erfordert schnelle Entscheidungen. Pr\u00fcfe vor jedem Schritt die Sensoren und w\u00e4hle die richtige Richtung!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 12,
        "y": 13
      },
      "asteroids": [
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          12,
          3
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          11,
          7
        ],
        [
          12,
          7
        ],
        [
          13,
          7
        ],
        [
          2,
          9
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          9
        ],
        [
          9,
          9
        ],
        [
          10,
          9
        ],
        [
          5,
          11
        ],
        [
          6,
          11
        ],
        [
          7,
          11
        ],
        [
          8,
          11
        ],
        [
          9,
          11
        ],
        [
          10,
          11
        ],
        [
          11,
          11
        ],
        [
          12,
          11
        ],
        [
          13,
          11
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "isAsteroid",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "qK6lM4",
      "stashText": "Pick up!"
    }
  },
  "m3-05": {
    "number": "3.05",
    "title": "Mission 3.05 \u2013 Sensorgesteuert",
    "briefing": {
      "text": "Pilot! scanForward() liefert detaillierte Informationen: 'asteroid', 'opening', 'empty'. Reagiere passend auf jeden Sensorwert!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), scanForward(), freeAhead()"
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
      "asteroids": [
        [
          7,
          5
        ],
        [
          7,
          9
        ]
      ],
      "openings": [
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          7,
          11
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 3,
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
      "putPow",
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "rN7oP5",
      "stashText": "Pick up!"
    }
  },
  "m3-06": {
    "number": "3.06",
    "title": "Mission 3.06 \u2013 Nebellabyrinth",
    "briefing": {
      "text": "Pilot! Im Nebellabyrinth kannst du nur den n\u00e4chsten Schritt sehen. Nutze freeAhead() und Bedingungen, um den Weg zu finden!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), wallAhead(), isAsteroid()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          0,
          6
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          5,
          4
        ],
        [
          5,
          5
        ],
        [
          5,
          6
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          9,
          12
        ],
        [
          8,
          14
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "wallAhead",
      "isAsteroid"
    ],
    "reward": {
      "stashSecret": "sQ8rS6",
      "stashText": "Pick up!"
    }
  },
  "m3-07": {
    "number": "3.07",
    "title": "Mission 3.07 \u2013 Bedingte Schleife",
    "briefing": {
      "text": "Pilot! Auf der Route liegen PowerUps und \u00d6ffnungen gemischt. Sammle PowerUps mit removePow() und schlie\u00dfe \u00d6ffnungen mit putPow(). Nutze Bedingungen in der Schleife!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 2) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 2 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), removePow(), putPow(), isOpening(), scanForward()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "E"
      },
      "goal": {
        "x": 12,
        "y": 2
      },
      "asteroids": [
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          12,
          3
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ]
      ],
      "openings": [
        [
          6,
          2
        ],
        [
          10,
          2
        ]
      ],
      "powerups": [
        [
          4,
          2
        ],
        [
          8,
          2
        ]
      ],
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
      "closeOpenings": 2,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "removePow",
      "putPow",
      "isOpening",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "tT9uV7",
      "stashText": "Pick up!"
    }
  },
  "m3-08": {
    "number": "3.08",
    "title": "Mission 3.08 \u2013 Adaptive Route",
    "briefing": {
      "text": "Pilot! An jeder Kreuzung f\u00fchrt nur ein Weg weiter. Nutze freeAhead() um die richtige Abzweigung zu finden!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), wallAhead()"
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
      "asteroids": [
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          4,
          7
        ],
        [
          3,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          8,
          7
        ],
        [
          7,
          8
        ],
        [
          9,
          6
        ],
        [
          9,
          8
        ],
        [
          10,
          6
        ],
        [
          11,
          7
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "isAsteroid",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "uW0xY8",
      "stashText": "Pick up!"
    }
  },
  "m3-09": {
    "number": "3.09",
    "title": "Mission 3.09 \u2013 Sensormatrix",
    "briefing": {
      "text": "Pilot! Die Sensormatrix zeigt ein komplexes Feld. Sammle PowerUps, schlie\u00dfe \u00d6ffnungen und navigiere zum Ziel. Alle Sensoren stehen dir zur Verf\u00fcgung!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          1,
          6
        ],
        [
          5,
          5
        ],
        [
          4,
          10
        ],
        [
          8,
          9
        ],
        [
          7,
          14
        ]
      ],
      "openings": [
        [
          4,
          7
        ],
        [
          7,
          11
        ],
        [
          10,
          13
        ]
      ],
      "powerups": [
        [
          1,
          3
        ],
        [
          4,
          5
        ],
        [
          7,
          9
        ]
      ],
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
      "closeOpenings": 3,
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
      "scanForward",
      "freeAhead",
      "isAsteroid",
      "isOpening"
    ],
    "reward": {
      "stashSecret": "vZ1aB9",
      "stashText": "Pick up!"
    }
  },
  "m3-10": {
    "number": "3.10",
    "title": "Mission 3.10 \u2013 Nebelmission",
    "briefing": {
      "text": "Pilot! Die Abschlussmission im Nebel: Nutze alle Sensoren, Schleifen und Bedingungen. Sammle, schlie\u00dfe und navigiere \u2013 der Nebel lichtet sich nur f\u00fcr die Besten!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 4 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          4,
          1
        ],
        [
          3,
          5
        ],
        [
          8,
          4
        ],
        [
          7,
          9
        ],
        [
          12,
          8
        ],
        [
          11,
          13
        ],
        [
          14,
          12
        ]
      ],
      "openings": [
        [
          5,
          4
        ],
        [
          7,
          4
        ],
        [
          9,
          8
        ],
        [
          11,
          8
        ]
      ],
      "powerups": [
        [
          2,
          1
        ],
        [
          3,
          3
        ],
        [
          7,
          5
        ],
        [
          7,
          8
        ]
      ],
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
      "closeOpenings": 4,
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
      "scanForward",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "wC2dE0",
      "stashText": "Pick up!"
    }
  },
  "m4-01": {
    "number": "4.01",
    "title": "Mission 4.01 \u2013 Feldscan",
    "briefing": {
      "text": "Pilot! Speichere den Sensorwert in einer Variable: feld = scanForward(). Reagiere auf den Wert. Variablen helfen, Informationen zu merken!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), scanForward(), freeAhead(), isOpening()"
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
      "asteroids": [
        [
          6,
          3
        ],
        [
          8,
          3
        ],
        [
          6,
          5
        ],
        [
          8,
          5
        ],
        [
          6,
          7
        ],
        [
          8,
          7
        ],
        [
          6,
          9
        ],
        [
          8,
          9
        ],
        [
          6,
          11
        ],
        [
          8,
          11
        ]
      ],
      "openings": [
        [
          7,
          4
        ],
        [
          7,
          8
        ],
        [
          7,
          11
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 3,
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
      "putPow",
      "scanForward",
      "freeAhead",
      "isOpening"
    ],
    "reward": {
      "stashSecret": "fS4gT1",
      "stashText": "Pick up!"
    }
  },
  "m4-02": {
    "number": "4.02",
    "title": "Mission 4.02 \u2013 Hindernisz\u00e4hler",
    "briefing": {
      "text": "Pilot! Z\u00e4hle die Hindernisse auf deiner Route: zaehler = 0 und zaehler = zaehler + 1 bei jedem Asteroidenkontakt. Variablen speichern Werte!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), isAsteroid(), freeAhead(), scanForward()"
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
      "asteroids": [
        [
          3,
          7
        ],
        [
          3,
          6
        ],
        [
          3,
          8
        ],
        [
          5,
          8
        ],
        [
          5,
          9
        ],
        [
          7,
          7
        ],
        [
          7,
          6
        ],
        [
          9,
          8
        ],
        [
          9,
          9
        ],
        [
          11,
          7
        ],
        [
          11,
          6
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "isAsteroid",
      "freeAhead",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "gU5hV2",
      "stashText": "Pick up!"
    }
  },
  "m4-03": {
    "number": "4.03",
    "title": "Mission 4.03 \u2013 Routenplanung",
    "briefing": {
      "text": "Pilot! Plane deine Route! Nutze Variablen um deinen Fortschritt zu verfolgen: schritt = 0 und erh\u00f6he bei jedem move(). So wei\u00dft du immer, wo du bist!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 12) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), scanForward(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "N"
      },
      "goal": {
        "x": 12,
        "y": 12
      },
      "asteroids": [
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          2,
          8
        ],
        [
          2,
          9
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          6,
          9
        ],
        [
          6,
          8
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          8,
          9
        ],
        [
          8,
          10
        ],
        [
          8,
          11
        ],
        [
          8,
          12
        ],
        [
          9,
          12
        ],
        [
          10,
          12
        ],
        [
          10,
          11
        ],
        [
          10,
          10
        ],
        [
          10,
          9
        ],
        [
          11,
          9
        ],
        [
          12,
          9
        ],
        [
          12,
          10
        ],
        [
          12,
          11
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "isAsteroid",
      "scanForward",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "hW6iX3",
      "stashText": "Pick up!"
    }
  },
  "m4-04": {
    "number": "4.04",
    "title": "Mission 4.04 \u2013 Energiesuche",
    "briefing": {
      "text": "Pilot! F\u00fcnf PowerUps sind im Sektor verstreut. Nutze scanForward() um sie zu finden. Speichere: gesammelt = 0 und z\u00e4hle mit!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Sammle 5 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removePow(), scanForward(), freeAhead()"
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
      "asteroids": [
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          4,
          5
        ],
        [
          10,
          5
        ],
        [
          4,
          6
        ],
        [
          10,
          6
        ],
        [
          4,
          7
        ],
        [
          10,
          7
        ],
        [
          4,
          8
        ],
        [
          10,
          8
        ],
        [
          4,
          9
        ],
        [
          10,
          9
        ],
        [
          5,
          11
        ],
        [
          6,
          11
        ],
        [
          8,
          11
        ],
        [
          9,
          11
        ]
      ],
      "openings": [],
      "powerups": [
        [
          7,
          3
        ],
        [
          5,
          6
        ],
        [
          9,
          6
        ],
        [
          6,
          9
        ],
        [
          8,
          9
        ]
      ],
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
      "collectPowerups": 5,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "removePow",
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "iY7jZ4",
      "stashText": "Pick up!"
    }
  },
  "m4-05": {
    "number": "4.05",
    "title": "Mission 4.05 \u2013 Asteroidenkartierung",
    "briefing": {
      "text": "Pilot! Kartiere das Asteroidenfeld! Pr\u00fcfe alle Richtungen mit scanForward() und finde den sicheren Weg. Speichere deine Beobachtungen in Variablen!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), scanForward(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          0,
          3
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          9,
          7
        ],
        [
          9,
          6
        ],
        [
          9,
          5
        ],
        [
          9,
          4
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          10,
          9
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          10,
          11
        ],
        [
          11,
          11
        ],
        [
          12,
          11
        ],
        [
          13,
          11
        ],
        [
          13,
          10
        ],
        [
          13,
          9
        ],
        [
          13,
          8
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "isAsteroid",
      "scanForward",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "kA8lB5",
      "stashText": "Pick up!"
    }
  },
  "m4-06": {
    "number": "4.06",
    "title": "Mission 4.06 \u2013 Musteranalyse",
    "briefing": {
      "text": "Pilot! Das Feld hat ein wiederkehrendes Muster. Erkenne es mit Sensoren und nutze Variablen, um den Rhythmus zu verfolgen!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 4 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), isOpening(), scanForward(), freeAhead()"
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
      "asteroids": [
        [
          2,
          7
        ],
        [
          5,
          7
        ],
        [
          8,
          7
        ],
        [
          11,
          7
        ],
        [
          2,
          6
        ],
        [
          5,
          6
        ],
        [
          8,
          6
        ],
        [
          11,
          6
        ],
        [
          2,
          8
        ],
        [
          5,
          8
        ],
        [
          8,
          8
        ],
        [
          11,
          8
        ]
      ],
      "openings": [
        [
          3,
          7
        ],
        [
          6,
          7
        ],
        [
          9,
          7
        ],
        [
          12,
          7
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [],
      "ammo": [],
      "alienPatrols": []
    },
    "player": {
      "startPowerups": 4,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": true,
      "closeOpenings": 4,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "putPow",
      "isOpening",
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "lC9mD6",
      "stashText": "Pick up!"
    }
  },
  "m4-07": {
    "number": "4.07",
    "title": "Mission 4.07 \u2013 Wand-Folger",
    "briefing": {
      "text": "Pilot! Der Wand-Folger-Algorithmus: Halte immer die Wand rechts von dir. Drehe rechts wenn frei, sonst geradeaus, sonst links. Ein ber\u00fchmter Algorithmus!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), wallAhead(), isAsteroid()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          2,
          0
        ],
        [
          2,
          1
        ],
        [
          2,
          2
        ],
        [
          2,
          3
        ],
        [
          2,
          4
        ],
        [
          2,
          5
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          4,
          5
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          6,
          6
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          2,
          9
        ],
        [
          2,
          10
        ],
        [
          2,
          11
        ],
        [
          2,
          12
        ],
        [
          3,
          12
        ],
        [
          4,
          12
        ],
        [
          5,
          12
        ],
        [
          6,
          12
        ],
        [
          6,
          11
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          8,
          10
        ],
        [
          8,
          11
        ],
        [
          8,
          12
        ],
        [
          8,
          13
        ],
        [
          9,
          13
        ],
        [
          10,
          13
        ],
        [
          10,
          12
        ],
        [
          10,
          11
        ],
        [
          10,
          10
        ],
        [
          10,
          9
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          8,
          7
        ],
        [
          8,
          6
        ],
        [
          8,
          5
        ],
        [
          8,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          10,
          4
        ],
        [
          10,
          5
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          12,
          7
        ],
        [
          12,
          8
        ],
        [
          12,
          9
        ],
        [
          12,
          10
        ],
        [
          12,
          11
        ],
        [
          12,
          12
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "wallAhead",
      "isAsteroid"
    ],
    "reward": {
      "stashSecret": "nE0oF7",
      "stashText": "Pick up!"
    }
  },
  "m4-08": {
    "number": "4.08",
    "title": "Mission 4.08 \u2013 Optimaler Pfad",
    "briefing": {
      "text": "Pilot! Finde den k\u00fcrzesten Weg! Z\u00e4hle deine Schritte: schritte = 0. Je weniger Schritte, desto effizienter dein Algorithmus!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), freeAhead(), isAsteroid(), scanForward(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          5,
          2
        ],
        [
          5,
          1
        ],
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          9,
          7
        ],
        [
          9,
          6
        ],
        [
          9,
          5
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          11,
          10
        ],
        [
          10,
          10
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          9,
          12
        ],
        [
          9,
          13
        ]
      ],
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
      "turnLeft",
      "turnRight",
      "freeAhead",
      "isAsteroid",
      "scanForward",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "pG1qH8",
      "stashText": "Pick up!"
    }
  },
  "m4-09": {
    "number": "4.09",
    "title": "Mission 4.09 \u2013 Sektorerkundung",
    "briefing": {
      "text": "Pilot! Erkunde den gesamten Sektor! Sammle PowerUps, schlie\u00dfe \u00d6ffnungen und finde den Weg zum Ziel. Alle Sensoren und Variablen stehen dir zur Verf\u00fcgung!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          0,
          4
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          9,
          6
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          10,
          9
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          10,
          11
        ],
        [
          11,
          11
        ],
        [
          12,
          11
        ],
        [
          12,
          10
        ]
      ],
      "openings": [
        [
          3,
          3
        ],
        [
          7,
          8
        ],
        [
          12,
          12
        ]
      ],
      "powerups": [
        [
          2,
          2
        ],
        [
          6,
          5
        ],
        [
          10,
          8
        ]
      ],
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
      "closeOpenings": 3,
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
      "scanForward",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "rI2sJ9",
      "stashText": "Pick up!"
    }
  },
  "m4-10": {
    "number": "4.10",
    "title": "Mission 4.10 \u2013 Kartierung",
    "briefing": {
      "text": "Pilot! Die Abschluss-Kartierung: Ein riesiges Feld voller Geheimnisse. Nutze alles, was du gelernt hast \u2013 Schleifen, Bedingungen, Sensoren, Variablen. Der Sektor wartet auf seine Kartierung!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 4 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), putPow(), removePow(), scanForward(), freeAhead(), isAsteroid(), isOpening(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          3,
          0
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          2
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          5,
          9
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          9,
          8
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ],
        [
          9,
          11
        ],
        [
          10,
          11
        ],
        [
          11,
          11
        ],
        [
          11,
          10
        ],
        [
          11,
          9
        ],
        [
          11,
          8
        ],
        [
          11,
          7
        ],
        [
          11,
          6
        ],
        [
          11,
          5
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          9,
          4
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          2
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          13,
          1
        ]
      ],
      "openings": [
        [
          3,
          4
        ],
        [
          5,
          6
        ],
        [
          7,
          6
        ],
        [
          9,
          6
        ]
      ],
      "powerups": [
        [
          4,
          2
        ],
        [
          4,
          6
        ],
        [
          6,
          8
        ],
        [
          10,
          8
        ]
      ],
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
      "closeOpenings": 4,
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
      "scanForward",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "tK3uL0",
      "stashText": "Pick up!"
    }
  },
  "m5-01": {
    "number": "5.01",
    "title": "Mission 5.01 \u2013 Erster Schuss",
    "briefing": {
      "text": "Pilot! Ein Alienschiff blockiert deinen Weg! Sammle Munition mit removeAmmo() und feuere mit shoot(). Der Zwillingslaser fliegt in Blickrichtung!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
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
  },
  "m5-02": {
    "number": "5.02",
    "title": "Mission 5.02 \u2013 Doppelziel",
    "briefing": {
      "text": "Pilot! Zwei Alienschiffe auf Kurs! Du brauchst zwei Schuss. Sammle Munition und zerst\u00f6re beide Ziele!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 2 Alien(s)."
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
          6
        ],
        [
          7,
          10
        ]
      ],
      "ammo": [
        [
          7,
          2
        ],
        [
          7,
          4
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
      "destroyAliens": 2,
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
      "stashSecret": "lI6jK2",
      "stashText": "Pick up!"
    }
  },
  "m5-03": {
    "number": "5.03",
    "title": "Mission 5.03 \u2013 Flankenangriff",
    "briefing": {
      "text": "Pilot! Das Alien ist hinter Asteroiden verschanzt. Greife von der Flanke an! Positioniere dich und feuere von der Seite!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (12, 12) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), freeAhead(), isAlien()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 2,
        "dir": "E"
      },
      "goal": {
        "x": 12,
        "y": 12
      },
      "asteroids": [
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          8,
          6
        ],
        [
          8,
          8
        ],
        [
          9,
          6
        ],
        [
          9,
          8
        ]
      ],
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
          2,
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
      "destroyAliens": 1,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "removeAmmo",
      "shoot",
      "freeAhead",
      "isAlien"
    ],
    "reward": {
      "stashSecret": "mL7nM3",
      "stashText": "Pick up!"
    }
  },
  "m5-04": {
    "number": "5.04",
    "title": "Mission 5.04 \u2013 Munitionsknappheit",
    "briefing": {
      "text": "Pilot! Munition ist knapp \u2013 genau drei Schuss f\u00fcr drei Feinde. Kein Schuss darf daneben gehen! Nutze scanForward() um den richtigen Moment abzupassen."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 3 Alien(s)."
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
  },
  "m5-05": {
    "number": "5.05",
    "title": "Mission 5.05 \u2013 Bewegte Ziele",
    "briefing": {
      "text": "Pilot! Achtung \u2013 das Alien bewegt sich! Es patrouilliert auf und ab. Warte auf den richtigen Moment und feuere, wenn es in der Schusslinie ist!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (2, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 2,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 2,
        "y": 13
      },
      "asteroids": [
        [
          4,
          3
        ],
        [
          4,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          6
        ],
        [
          4,
          8
        ],
        [
          4,
          9
        ],
        [
          4,
          10
        ],
        [
          4,
          11
        ]
      ],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          7,
          5
        ]
      ],
      "ammo": [
        [
          2,
          3
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              7,
              5
            ],
            [
              7,
              6
            ],
            [
              7,
              7
            ],
            [
              7,
              8
            ],
            [
              7,
              7
            ],
            [
              7,
              6
            ]
          ],
          "dir": "N",
          "shoots": false
        }
      ]
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
      "shoot",
      "isAlien",
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "qP9rQ5",
      "stashText": "Pick up!"
    }
  },
  "m5-06": {
    "number": "5.06",
    "title": "Mission 5.06 \u2013 Hinterhalt",
    "briefing": {
      "text": "Pilot! WARNUNG: Das Alien schie\u00dft zur\u00fcck! Gr\u00fcne Zwillingslaser! Nutze Asteroiden als Deckung und greife im richtigen Moment an!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          6,
          5
        ],
        [
          6,
          6
        ],
        [
          8,
          5
        ],
        [
          8,
          6
        ],
        [
          5,
          3
        ],
        [
          9,
          3
        ],
        [
          3,
          10
        ],
        [
          11,
          10
        ]
      ],
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
          1,
          5
        ],
        [
          1,
          9
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              7,
              7
            ],
            [
              8,
              7
            ],
            [
              9,
              7
            ],
            [
              8,
              7
            ]
          ],
          "dir": "E",
          "shoots": true
        }
      ]
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
      "shoot",
      "isAlien",
      "scanForward",
      "freeAhead",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "sR0tS6",
      "stashText": "Pick up!"
    }
  },
  "m5-07": {
    "number": "5.07",
    "title": "Mission 5.07 \u2013 Verteidigung",
    "briefing": {
      "text": "Pilot! Zwei feindliche Schiffe n\u00e4hern sich von verschiedenen Seiten! Sammle Munition, drehe dich schnell und feuere! Lass dich nicht treffen!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Zerst\u00f6re 2 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 7,
        "y": 7,
        "dir": "N"
      },
      "goal": {
        "x": 7,
        "y": 13
      },
      "asteroids": [
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          8,
          9
        ],
        [
          9,
          9
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          3,
          7
        ],
        [
          11,
          7
        ]
      ],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          3,
          12
        ],
        [
          11,
          12
        ]
      ],
      "ammo": [
        [
          7,
          6
        ],
        [
          7,
          8
        ],
        [
          6,
          7
        ],
        [
          8,
          7
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              3,
              12
            ],
            [
              4,
              12
            ],
            [
              5,
              12
            ],
            [
              4,
              12
            ]
          ],
          "dir": "E",
          "shoots": true
        },
        {
          "pattern": [
            [
              11,
              12
            ],
            [
              10,
              12
            ],
            [
              9,
              12
            ],
            [
              10,
              12
            ]
          ],
          "dir": "W",
          "shoots": true
        }
      ]
    },
    "player": {
      "startPowerups": 0,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": false,
      "closeOpenings": 0,
      "destroyAliens": 2,
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
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "uT1vU7",
      "stashText": "Pick up!"
    }
  },
  "m5-08": {
    "number": "5.08",
    "title": "Mission 5.08 \u2013 Raumgefecht",
    "briefing": {
      "text": "Pilot! Raumgefecht! Drei Alienschiffe in verschiedenen Formationen \u2013 manche bewegen sich, manche schie\u00dfen. Plane deine Angriffsstrategie sorgf\u00e4ltig!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 3 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), isAsteroid(), wallAhead()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          6,
          3
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          9,
          9
        ],
        [
          9,
          10
        ]
      ],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          5,
          5
        ],
        [
          10,
          5
        ],
        [
          7,
          11
        ]
      ],
      "ammo": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ],
        [
          7,
          7
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              10,
              5
            ],
            [
              10,
              6
            ],
            [
              10,
              7
            ],
            [
              10,
              6
            ]
          ],
          "dir": "N",
          "shoots": false
        },
        {
          "pattern": [
            [
              7,
              11
            ],
            [
              8,
              11
            ],
            [
              9,
              11
            ],
            [
              8,
              11
            ]
          ],
          "dir": "E",
          "shoots": true
        }
      ]
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
      "scanForward",
      "freeAhead",
      "isAsteroid",
      "wallAhead"
    ],
    "reward": {
      "stashSecret": "wV2xW8",
      "stashText": "Pick up!"
    }
  },
  "m5-09": {
    "number": "5.09",
    "title": "Mission 5.09 \u2013 Endkampf-Vorbereitung",
    "briefing": {
      "text": "Pilot! Die Vorbereitung zum Endkampf: Sicherheitsl\u00fccken schlie\u00dfen UND Aliens vernichten. Du brauchst alle F\u00e4higkeiten!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 2 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 2 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), putPow(), isAlien(), scanForward(), freeAhead(), isOpening(), wallAhead(), isAsteroid()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          4,
          6
        ],
        [
          6,
          6
        ],
        [
          4,
          8
        ],
        [
          6,
          8
        ],
        [
          9,
          9
        ],
        [
          9,
          11
        ],
        [
          12,
          9
        ],
        [
          12,
          11
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ]
      ],
      "openings": [
        [
          3,
          5
        ],
        [
          11,
          12
        ]
      ],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          5,
          7
        ],
        [
          10,
          10
        ]
      ],
      "ammo": [
        [
          1,
          3
        ],
        [
          1,
          6
        ],
        [
          8,
          1
        ],
        [
          13,
          5
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              5,
              7
            ],
            [
              5,
              8
            ],
            [
              5,
              9
            ],
            [
              5,
              8
            ]
          ],
          "dir": "N",
          "shoots": true
        },
        {
          "pattern": [
            [
              10,
              10
            ],
            [
              11,
              10
            ],
            [
              12,
              10
            ],
            [
              11,
              10
            ]
          ],
          "dir": "E",
          "shoots": true
        }
      ]
    },
    "player": {
      "startPowerups": 2,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": true,
      "closeOpenings": 2,
      "destroyAliens": 2,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "removeAmmo",
      "shoot",
      "putPow",
      "isAlien",
      "scanForward",
      "freeAhead",
      "isOpening",
      "wallAhead",
      "isAsteroid"
    ],
    "reward": {
      "stashSecret": "yX3zA9",
      "stashText": "Pick up!"
    }
  },
  "m5-10": {
    "number": "5.10",
    "title": "Mission 5.10 \u2013 Alien-Konfrontation",
    "briefing": {
      "text": "Pilot! Die finale Konfrontation! Drei Alien-J\u00e4ger \u2013 bewaffnet und in Bewegung. Zeige alles, was du gelernt hast. Die Vireon-Crew z\u00e4hlt auf dich!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 3 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), removeAmmo(), shoot(), isAlien(), scanForward(), freeAhead(), wallAhead(), isAsteroid()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          8,
          5
        ],
        [
          8,
          6
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          4,
          9
        ],
        [
          4,
          10
        ],
        [
          4,
          11
        ],
        [
          8,
          9
        ],
        [
          8,
          10
        ],
        [
          11,
          9
        ],
        [
          11,
          10
        ],
        [
          11,
          11
        ],
        [
          5,
          12
        ],
        [
          5,
          13
        ]
      ],
      "openings": [],
      "powerups": [],
      "stations": [],
      "aliens": [
        [
          5,
          3
        ],
        [
          10,
          7
        ],
        [
          7,
          12
        ]
      ],
      "ammo": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          1,
          7
        ],
        [
          7,
          9
        ],
        [
          13,
          5
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              5,
              3
            ],
            [
              5,
              4
            ],
            [
              5,
              5
            ],
            [
              5,
              4
            ]
          ],
          "dir": "N",
          "shoots": false
        },
        {
          "pattern": [
            [
              10,
              7
            ],
            [
              11,
              7
            ],
            [
              12,
              7
            ],
            [
              11,
              7
            ]
          ],
          "dir": "E",
          "shoots": true
        },
        {
          "pattern": [
            [
              7,
              12
            ],
            [
              8,
              12
            ],
            [
              9,
              12
            ],
            [
              8,
              12
            ]
          ],
          "dir": "E",
          "shoots": true
        }
      ]
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
      "scanForward",
      "freeAhead",
      "wallAhead",
      "isAsteroid"
    ],
    "reward": {
      "stashSecret": "aB4cD0",
      "stashText": "Pick up!"
    }
  },
  "m6-01": {
    "number": "6.01",
    "title": "Mission 6.01 \u2013 Erste Lieferung",
    "briefing": {
      "text": "Pilot! Raumstation Omega braucht Versorgung. Fliege zum Dock (rechtes mittleres Feld), lade ein PowerUp mit loadPow() und setze es an der markierten Stelle ab!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 1 \u00d6ffnung(en)."
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
          10,
          7
        ]
      ],
      "powerups": [],
      "stations": [
        [
          2,
          6,
          "blue"
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
      "closeOpenings": 1,
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
      "stashSecret": "dE6fG1",
      "stashText": "Pick up!"
    }
  },
  "m6-02": {
    "number": "6.02",
    "title": "Mission 6.02 \u2013 Zweistation-Route",
    "briefing": {
      "text": "Pilot! Transportiere ein PowerUp von Station Alpha zu Station Beta. Lade mit loadPow() am Dock von Alpha und liefere mit unloadPow() bei Beta ab!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 4) erreichen."
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
  },
  "m6-03": {
    "number": "6.03",
    "title": "Mission 6.03 \u2013 Versorgungskette",
    "briefing": {
      "text": "Pilot! Drei Sicherheitsl\u00fccken auf der Strecke. Du musst zur\u00fcck zur Station fliegen um nachzuladen \u2013 eine Versorgungskette!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 7) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
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
          9,
          "blue"
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
  },
  "m6-04": {
    "number": "6.04",
    "title": "Mission 6.04 \u2013 Lagerlogistik",
    "briefing": {
      "text": "Pilot! Lade zwei PowerUps an Station Alpha und transportiere sie durch das Asteroidenfeld zu Station Beta. Effiziente Logistik ist gefragt!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Liefere 2 PowerUp(s)."
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
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          6,
          6
        ],
        [
          6,
          9
        ],
        [
          6,
          10
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          10,
          7
        ],
        [
          10,
          8
        ]
      ],
      "openings": [],
      "powerups": [],
      "stations": [
        [
          1,
          4,
          "blue"
        ],
        [
          9,
          11,
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
      "deliverPowerups": 2
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "loadPow",
      "unloadPow"
    ],
    "reward": {
      "stashSecret": "gN9oP4",
      "stashText": "Pick up!"
    }
  },
  "m6-05": {
    "number": "6.05",
    "title": "Mission 6.05 \u2013 Schutzlieferung",
    "briefing": {
      "text": "Pilot! Lade an der Station und schlie\u00dfe drei Sicherheitsl\u00fccken \u2013 aber Vorsicht vor Asteroiden! Nutze Sensoren f\u00fcr die Navigation."
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          3,
          3
        ],
        [
          5,
          5
        ],
        [
          7,
          8
        ],
        [
          9,
          7
        ],
        [
          11,
          9
        ],
        [
          6,
          11
        ],
        [
          8,
          13
        ]
      ],
      "openings": [
        [
          8,
          6
        ],
        [
          10,
          8
        ],
        [
          12,
          10
        ]
      ],
      "powerups": [],
      "stations": [
        [
          1,
          5,
          "blue"
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
      "putPow",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "hQ0rS5",
      "stashText": "Pick up!"
    }
  },
  "m6-06": {
    "number": "6.06",
    "title": "Mission 6.06 \u2013 Ressourcenknappheit",
    "briefing": {
      "text": "Pilot! Die Station ist weit von den Sicherheitsl\u00fccken entfernt. Plane deine Route effizient \u2013 jeder Umweg kostet Zeit und Treibstoff!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (7, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), putPow(), scanForward(), freeAhead()"
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
      "asteroids": [
        [
          5,
          4
        ],
        [
          5,
          10
        ],
        [
          6,
          3
        ],
        [
          6,
          12
        ],
        [
          8,
          4
        ],
        [
          8,
          10
        ],
        [
          9,
          3
        ],
        [
          9,
          12
        ]
      ],
      "openings": [
        [
          7,
          5
        ],
        [
          7,
          9
        ],
        [
          7,
          11
        ]
      ],
      "powerups": [],
      "stations": [
        [
          1,
          6,
          "blue"
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
      "putPow",
      "scanForward",
      "freeAhead"
    ],
    "reward": {
      "stashSecret": "iT1uV6",
      "stashText": "Pick up!"
    }
  },
  "m6-07": {
    "number": "6.07",
    "title": "Mission 6.07 \u2013 Mehrziel-Route",
    "briefing": {
      "text": "Pilot! Mehrziel-Mission: Sammle PowerUps, schlie\u00dfe \u00d6ffnungen UND liefere an die Station. Planung ist alles!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 2 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Liefere 1 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), scanForward(), freeAhead(), isOpening()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [],
      "openings": [
        [
          7,
          5
        ],
        [
          9,
          9
        ]
      ],
      "powerups": [
        [
          3,
          1
        ],
        [
          5,
          1
        ]
      ],
      "stations": [
        [
          8,
          6,
          "blue"
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
      "closeOpenings": 2,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 1
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "loadPow",
      "unloadPow",
      "putPow",
      "removePow",
      "scanForward",
      "freeAhead",
      "isOpening"
    ],
    "reward": {
      "stashSecret": "jW2xY7",
      "stashText": "Pick up!"
    }
  },
  "m6-08": {
    "number": "6.08",
    "title": "Mission 6.08 \u2013 Komplexe Logistik",
    "briefing": {
      "text": "Pilot! Komplexe Logistik mit zwei Stationen: Lade, liefere, schlie\u00dfe L\u00fccken und navigiere durch das Asteroidenfeld. Echte Raumfahrt-Logistik!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 3 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Liefere 2 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "N"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          5,
          5
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          5,
          9
        ],
        [
          5,
          10
        ],
        [
          5,
          11
        ],
        [
          8,
          3
        ],
        [
          8,
          4
        ],
        [
          8,
          5
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          8,
          9
        ]
      ],
      "openings": [
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          7,
          11
        ]
      ],
      "powerups": [],
      "stations": [
        [
          1,
          4,
          "blue"
        ],
        [
          9,
          10,
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
      "closeOpenings": 3,
      "destroyAliens": 0,
      "collectPowerups": 0,
      "deliverPowerups": 2
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "loadPow",
      "unloadPow",
      "putPow",
      "removePow",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "kZ3aB8",
      "stashText": "Pick up!"
    }
  },
  "m6-09": {
    "number": "6.09",
    "title": "Mission 6.09 \u2013 Omega-Versorgung",
    "briefing": {
      "text": "Pilot! Die Omega-Versorgung wird durch ein Alienschiff bedroht! Vernichte es, sichere die Station und schlie\u00dfe alle L\u00fccken!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 2 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 1 Alien(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), removeAmmo(), shoot(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [],
      "openings": [
        [
          10,
          10
        ],
        [
          12,
          12
        ]
      ],
      "powerups": [],
      "stations": [
        [
          1,
          5,
          "blue"
        ]
      ],
      "aliens": [
        [
          10,
          6
        ]
      ],
      "ammo": [
        [
          7,
          1
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
      "closeOpenings": 2,
      "destroyAliens": 1,
      "collectPowerups": 0,
      "deliverPowerups": 0
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "loadPow",
      "unloadPow",
      "putPow",
      "removePow",
      "removeAmmo",
      "shoot",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "lC4dE9",
      "stashText": "Pick up!"
    }
  },
  "m6-10": {
    "number": "6.10",
    "title": "Mission 6.10 \u2013 Letzte Mission",
    "briefing": {
      "text": "Pilot! Die letzte Mission der Vireon! Alles kommt zusammen: Stationen, Aliens, Sensoren, Schleifen, Bedingungen. Zeige, dass du ein wahrer Captain bist! Die Crew z\u00e4hlt auf dich \u2013 zum letzten Mal!"
    },
    "objectives": [
      {
        "type": "primary",
        "text": "Prim\u00e4rziel: Zielfeld (13, 13) erreichen."
      },
      {
        "type": "primary",
        "text": "Schlie\u00dfe 2 \u00d6ffnung(en)."
      },
      {
        "type": "primary",
        "text": "Zerst\u00f6re 2 Alien(s)."
      },
      {
        "type": "primary",
        "text": "Liefere 1 PowerUp(s)."
      },
      {
        "type": "info",
        "text": "Befehle: move(), turnLeft(), turnRight(), loadPow(), unloadPow(), putPow(), removePow(), removeAmmo(), shoot(), freeAhead(), isAsteroid(), isOpening(), scanForward()"
      }
    ],
    "grid": {
      "width": 15,
      "height": 15
    },
    "world": {
      "start": {
        "x": 1,
        "y": 1,
        "dir": "E"
      },
      "goal": {
        "x": 13,
        "y": 13
      },
      "asteroids": [],
      "openings": [
        [
          7,
          7
        ],
        [
          13,
          11
        ]
      ],
      "powerups": [
        [
          5,
          3
        ]
      ],
      "stations": [
        [
          1,
          5,
          "blue"
        ],
        [
          9,
          10,
          "red"
        ]
      ],
      "aliens": [
        [
          7,
          9
        ],
        [
          10,
          3
        ]
      ],
      "ammo": [
        [
          3,
          1
        ],
        [
          7,
          1
        ]
      ],
      "alienPatrols": [
        {
          "pattern": [
            [
              10,
              3
            ],
            [
              10,
              4
            ],
            [
              10,
              5
            ],
            [
              10,
              4
            ]
          ],
          "dir": "N",
          "shoots": true
        }
      ]
    },
    "player": {
      "startPowerups": 0,
      "startAmmo": 0
    },
    "rules": {
      "reachGoal": true,
      "closeOpenings": 2,
      "destroyAliens": 2,
      "collectPowerups": 0,
      "deliverPowerups": 1
    },
    "allowedCommands": [
      "move",
      "turnLeft",
      "turnRight",
      "loadPow",
      "unloadPow",
      "putPow",
      "removePow",
      "removeAmmo",
      "shoot",
      "freeAhead",
      "isAsteroid",
      "isOpening",
      "scanForward"
    ],
    "reward": {
      "stashSecret": "mF5gH0",
      "stashText": "Pick up!"
    }
  }
}
}
