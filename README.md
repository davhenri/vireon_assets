# vireon_assets

Dieses Verzeichnis enthält alle statischen Assets für das Vireon-Missions-System, die in der Moodle-Umgebung über GitHub Raw-URLs bereitgestellt werden.

## Struktur: 

```
vireon_assets/
  missions/           ← JavaScript, CSS und Python Engine
    mission.css       ← Styles für die Mission-UI
    mission-loader.js ← Template-Injektor für Moodle Textseiten
    mission-core.js   ← Hauptlogik für die Mission-Ausführung
    missions.js       ← Alle 60 Missions-Daten (aggregiert)
    engine.py         ← Python-Engine für die Simulation
    data/             ← Individuelle Missionsdaten (je eine Datei pro Mission)
      m1-01.js
      m1-02.js
      ... (60 Dateien insgesamt, m1 bis m6, je 10 Missionen)
      m6-10.js
  mission_briefings/  ← Briefing-Medien
    offizier_briefing_12s.gif
    bg.jpg
  argo/               ← Sprite-Grafiken
    player.svg
    asteroid.png
    powerup.png
    station.png
    alien.png
    ammo.png
```

## Verwendung in Moodle Textseiten

Für jede Mission wird eine Moodle-Textseite mit folgendem Code erstellt:

```html
<!-- Beispiel einer Moodle Textseite mit externem Mission-Loader -->
<!-- Diese Datei zeigt, wie man den mission-loader.js verwendet, um Inhalte extern zu laden -->

<link rel="stylesheet" href="https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/mission.css">

<div id="mission-container" data-mission="m1-01"></div>
<script src="https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/mission-loader.js"></script>
```

Das `data-mission` Attribut gibt die Mission-ID an (z.B. `m1-01`, `m2-05`, `m6-10`).

**Hinweis:** Das Pyodide-Script wird automatisch von mission-loader.js geladen, muss also nicht mehr manuell eingebunden werden. Falls gewünscht, kann es aber trotzdem vorab geladen werden:

```html
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>
```

## Quellen

Die Dateien in diesem Verzeichnis werden aus dem paceCoderProject-Repository synchronisiert:

| Datei in vireon_assets          | Quelle in paceCoderProject                     |
|---------------------------------|------------------------------------------------|
| `missions/mission.css`          | `moodle/alternative_embeds/mission.css`        |
| `missions/mission-loader.js`    | `moodle/alternative_embeds/mission-loader.js`  |
| `missions/mission-core.js`      | `moodle/alternative_embeds/mission-core.js`    |
| `missions/engine.py`            | `moodle/alternative_embeds/engine.py`          |
| `missions/missions.js`          | generiert aus `missions/m*/` JSON-Dateien      |
| `missions/data/*.js`            | generiert aus `missions/m*/` JSON-Dateien      |
| `mission_briefings/*.gif,*.jpg` | `resources/`                                   |
| `argo/*.svg,*.png`              | `resources/`                                   |

## Neue Mission hinzufügen

1. Neue JSON-Datei in `missions/mX/` im paceCoderProject anlegen
2. Der Sync-Workflow generiert automatisch die neue Mission in `missions.js` und `missions/data/`
3. Moodle-Textseite anlegen und `data-mission="mX-YY"` anpassen
