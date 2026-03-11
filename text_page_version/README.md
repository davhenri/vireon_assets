# Vireon Missions - Text Page Version mit Mission-Selector

## Überblick

Diese Version ermöglicht es, **alle 60 Missionen** auf einer einzigen Moodle-Textseite darzustellen.
Der Benutzer kann zwischen den Missionen über ein Dropdown-Menü wechseln, ohne die Seite neu laden zu müssen.

## Hauptmerkmale

- **Alle Missionen auf einer Seite**: Eine einzige Textseite für alle 60 Missionen (m1-01 bis m6-10)
- **Mission-Selector**: Dropdown-Menü zum Wechseln zwischen Missionen
- **Standard-Mission**: m1-01 wird beim Laden standardmäßig angezeigt
- **Automatisches Code-Speichern**: Der eingegebene Code wird pro Mission im Browser gespeichert
- **Nahtloser Mission-Wechsel**: Wechsel zwischen Missionen ohne Seiten-Neuladung

## Verwendung in Moodle

### Minimale Textseiten-Einbindung

Füge folgenden Code in eine Moodle-Textseite ein (im HTML-Modus):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">

<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

### Mit Bootstrap (empfohlen)

Für besseres Layout mit Bootstrap:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">

<div class="container my-4">
    <h1>Vireon Missions-System</h1>
    <p class="lead">Wähle eine Mission aus dem Dropdown-Menü!</p>

    <div id="mission-container" data-default-mission="m1-01"></div>
    <script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
</div>
```

### Standard-Mission ändern

Du kannst eine andere Mission als Standard festlegen:

```html
<!-- Startet mit Mission 2.05 statt m1-01 -->
<div id="mission-container" data-default-mission="m2-05"></div>
```

## Ordnerstruktur

```
text_page_version/
├── README.md                     ← Diese Datei
├── example-text-page.html        ← Vollständiges HTML-Beispiel
├── mission-loader-menu.js        ← Template-Injektor mit Mission-Selector
├── mission-core-menu.js          ← Hauptlogik mit Mission-Wechsel-Funktion
├── mission.css                   ← Styles für die Mission-UI
├── missions.js                   ← Alle 60 Missions-Daten (aggregiert)
└── engine.py                     ← Python-Engine für die Simulation
```

## Datei-Beschreibungen

### mission-loader-menu.js
- Injiziert das HTML-Template mit Mission-Selector in den Container
- Lädt Pyodide (Python im Browser)
- Lädt mission-core-menu.js
- Zeigt Fehler an, falls etwas schiefgeht

### mission-core-menu.js
- Hauptlogik für die Mission-Ausführung
- Lädt missions.js mit allen Missions-Daten
- Initialisiert den Mission-Selector (Dropdown)
- Ermöglicht nahtlosen Wechsel zwischen Missionen
- Verwaltet Code-Speicherung pro Mission
- Steuert Pyodide-Engine

### mission.css
- Komplettes Styling für die Mission-UI
- Responsive Design (Desktop & Mobile)
- Dunkles Space-Theme

### missions.js
- JSON-Datei mit allen 60 Missionen
- Enthält Basis-Assets (Bilder, Sprites)
- Missions-Konfigurationen (Grid, Ziele, Briefings, etc.)

### engine.py
- Python-Code für die Missions-Simulation
- Läuft im Browser über Pyodide
- Validiert Benutzer-Code
- Simuliert Raumschiff-Bewegungen

## Unterschiede zur Original-Version

### Original (`missions/`)
- **Eine Datei pro Mission**: Jede Mission hat eine eigene Moodle-Textseite
- **Statische Mission-ID**: `data-mission="m1-01"` fest codiert
- **60 separate Textseiten**: Eine für jede Mission

Beispiel:
```html
<div id="mission-container" data-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

### Text Page Version (`text_page_version/`)
- **Eine Seite für alle Missionen**: Alle 60 Missionen auf einer Textseite
- **Mission-Selector**: Dropdown-Menü zum Wechseln
- **Standard-Mission**: `data-default-mission="m1-01"` als Startpunkt
- **Dynamischer Wechsel**: Missionen wechseln ohne Seiten-Neuladung

Beispiel:
```html
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

## Vorteile der Text Page Version

1. **Weniger Seiten verwalten**: Nur eine Textseite statt 60
2. **Einfachere Navigation**: Dropdown statt Link-Klicks
3. **Schnellerer Wechsel**: Keine Seiten-Neuladungen
4. **Konsistenz**: Gleiche Oberfläche für alle Missionen
5. **Wartung**: Nur eine Seite zum Aktualisieren

## Technische Details

### Wie funktioniert der Mission-Wechsel?

1. Beim ersten Laden:
   - mission-loader-menu.js injiziert das HTML-Template
   - mission-core-menu.js lädt missions.js mit allen Missionen
   - Standard-Mission (m1-01) wird geladen und angezeigt
   - Dropdown wird mit allen verfügbaren Missionen gefüllt

2. Beim Mission-Wechsel (über Dropdown):
   - Aktueller Code wird gespeichert
   - Neue Mission-Konfiguration wird geladen
   - UI wird aktualisiert (Briefing, Ziele, Grid)
   - Pyodide-Engine wird mit neuen Parametern initialisiert
   - Gespeicherter Code der neuen Mission wird geladen

### Code-Speicherung

- Code wird pro Mission im Browser-LocalStorage gespeichert
- Storage-Key: `sbp:code:m1-01`, `sbp:code:m2-05`, etc.
- Automatisches Speichern nach 150ms Inaktivität
- Persistiert auch nach Browser-Neustart

### Asset-Loading

- Alle Assets (Bilder, Sprites) werden von GitHub CDN geladen
- Basis-Pfad: `https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/`
- Gemeinsame Assets (Background, Officer-GIF) werden nur einmal geladen
- Mission-spezifische Daten aus missions.js

## Fehlerbehebung

### "Keine Mission-ID gefunden"
- Stelle sicher, dass `data-default-mission` Attribut vorhanden ist
- Beispiel: `<div id="mission-container" data-default-mission="m1-01"></div>`

### "missions.js nicht gefunden"
- Überprüfe Internetverbindung
- Stelle sicher, dass GitHub CDN erreichbar ist
- URL: https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/missions.js

### "Python konnte nicht geladen werden"
- Pyodide wird von CDN geladen (ca. 5-10 MB)
- Langsame Verbindung kann zu Timeouts führen
- Warte einige Sekunden und lade die Seite neu

### Mission-Selector zeigt keine Missionen
- Öffne Browser-Konsole (F12)
- Suche nach Fehlermeldungen
- Prüfe, ob missions.js erfolgreich geladen wurde

## Browser-Kompatibilität

- ✅ Chrome / Chromium (empfohlen)
- ✅ Firefox
- ✅ Edge
- ✅ Safari (macOS / iOS)
- ⚠️ Internet Explorer wird nicht unterstützt

## Performance

- **Erste Ladung**: 5-10 Sekunden (Pyodide Download)
- **Mission-Wechsel**: < 1 Sekunde
- **Code-Ausführung**: Nahezu Echtzeit
- **Speicherbedarf**: ~50 MB (Pyodide + Assets)

## Zukünftige Erweiterungen

- Fortschritts-Tracking über Missionen hinweg
- Achievements / Badges
- Bestenliste (Time-to-Complete)
- Zusätzliche Schwierigkeitsgrade
- Mehr Missions-Kategorien

## Support

Bei Fragen oder Problemen:
- Siehe `MOODLE_INTEGRATION_GUIDE.md` im Hauptverzeichnis
- GitHub Issues: https://github.com/davhenri/vireon_assets/issues

## Lizenz

Siehe Hauptverzeichnis des Repositories.
