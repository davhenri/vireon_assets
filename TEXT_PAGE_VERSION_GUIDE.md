# Text Page Version - Alternative Ansatz

## Überblick

Dieser neue Ansatz ermöglicht es, **alle 60 Missionen auf einer einzigen Moodle-Textseite** darzustellen.
Statt 60 separate Textseiten zu erstellen, bietet diese Version einen Mission-Selector (Dropdown-Menü),
mit dem Benutzer zwischen Missionen wechseln können, ohne die Seite neu laden zu müssen.

## Unterschiede zum Original-Ansatz

### Original-Ansatz (`missions/` Verzeichnis)

**Konzept**: Eine Moodle-Textseite pro Mission

```html
<!-- 60 separate Textseiten erforderlich -->
<div id="mission-container" data-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

**Eigenschaften**:
- ✅ Einfache, statische Integration
- ✅ Jede Mission ist eine separate Ressource in Moodle
- ❌ 60 Textseiten müssen erstellt und verwaltet werden
- ❌ Navigation zwischen Missionen erfordert Seiten-Wechsel
- ❌ Zeitaufwendige Wartung bei Änderungen

### Text Page Version (`text_page_version/` Verzeichnis)

**Konzept**: Eine Moodle-Textseite für alle Missionen mit Dropdown-Menü

```html
<!-- Nur EINE Textseite für alle 60 Missionen -->
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

**Eigenschaften**:
- ✅ Nur eine einzige Textseite erforderlich
- ✅ Dropdown-Menü für Mission-Auswahl
- ✅ Nahtloser Wechsel ohne Seiten-Neuladung
- ✅ Einfache Wartung (nur eine Seite)
- ✅ Schnellere Navigation
- ⚠️ Etwas komplexer in der Implementierung

## Ordnerstruktur

```
vireon_assets/
├── missions/                      ← Original-Ansatz
│   ├── mission-loader.js          ← Statischer Loader (eine Mission pro Seite)
│   ├── mission-core.js            ← Core-Logik (statisch)
│   └── ...
│
└── text_page_version/             ← Neuer Ansatz ⭐
    ├── README.md                  ← Detaillierte Dokumentation
    ├── mission-loader-menu.js     ← Loader mit Mission-Selector
    ├── mission-core-menu.js       ← Core-Logik mit Mission-Wechsel
    ├── mission.css                ← Identisches Styling
    ├── missions.js                ← Alle 60 Missions-Daten
    ├── engine.py                  ← Python-Engine
    ├── example-text-page.html     ← Einfaches Beispiel
    └── moodle-text-page-example.html  ← Vollständiges Moodle-Beispiel
```

## Verwendung

### Minimale Integration

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">

<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

### Mit Bootstrap und Beschreibung

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">

<div class="container my-4">
    <h1>Vireon Missions-System</h1>
    <p class="lead">Wähle eine Mission aus dem Dropdown-Menü!</p>

    <div id="mission-container" data-default-mission="m1-01"></div>
    <script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
</div>
```

## Standard-Mission ändern

Die Standard-Mission (beim ersten Laden) kann über das `data-default-mission` Attribut festgelegt werden:

```html
<!-- Startet mit Mission 1.01 (Standard) -->
<div id="mission-container" data-default-mission="m1-01"></div>

<!-- Startet mit Mission 2.05 -->
<div id="mission-container" data-default-mission="m2-05"></div>

<!-- Startet mit Mission 6.10 (letzte Mission) -->
<div id="mission-container" data-default-mission="m6-10"></div>
```

Verfügbare Missionen: `m1-01` bis `m6-10` (insgesamt 60 Missionen)

## Funktionsweise

### 1. Beim ersten Laden

```
Moodle-Textseite
    ↓
mission-loader-menu.js wird geladen
    ↓
HTML-Template mit Mission-Selector wird injiziert
    ↓
Pyodide (Python im Browser) wird geladen
    ↓
mission-core-menu.js wird geladen
    ↓
missions.js (alle 60 Missionen) wird geladen
    ↓
Standard-Mission (z.B. m1-01) wird initialisiert
    ↓
Dropdown-Menü wird mit allen Missionen gefüllt
    ↓
Bereit zur Verwendung ✅
```

### 2. Beim Mission-Wechsel (via Dropdown)

```
Benutzer wählt neue Mission im Dropdown
    ↓
Aktueller Code wird im LocalStorage gespeichert
    ↓
Neue Mission-Konfiguration wird aus missions.js geladen
    ↓
UI wird aktualisiert (Briefing, Ziele, Grid, etc.)
    ↓
Pyodide-Engine wird mit neuen Parametern initialisiert
    ↓
Gespeicherter Code der neuen Mission wird geladen (falls vorhanden)
    ↓
Neue Mission ist bereit ✅
```

## Code-Speicherung

- Der eingegebene Code wird **pro Mission** im Browser-LocalStorage gespeichert
- Storage-Keys: `sbp:code:m1-01`, `sbp:code:m2-05`, etc.
- Automatisches Speichern nach 150ms Inaktivität
- Code bleibt auch nach Browser-Neustart erhalten
- Beim Wechsel zwischen Missionen wird der Code automatisch geladen

## Technische Details

### Mission-Selector (Dropdown)

Der Mission-Selector wird in `mission-core-menu.js` dynamisch generiert:

```javascript
function initMissionSelector() {
    const missionSelect = document.getElementById('missionSelect');
    // Missionen aus missions.js laden
    const missionIds = Object.keys(allMissionsData.missions).sort();

    // Dropdown füllen
    missionIds.forEach(mid => {
        const mission = allMissionsData.missions[mid];
        const option = document.createElement('option');
        option.value = mid;
        option.textContent = `${mission.number} - ${mission.title}`;
        missionSelect.appendChild(option);
    });

    // Event-Handler für Mission-Wechsel
    missionSelect.addEventListener('change', async function() {
        await switchMission(this.value);
    });
}
```

### Mission-Wechsel-Funktion

```javascript
async function switchMission(newMissionId) {
    // Aktuellen Code speichern
    persistCodeNow();

    // Neue Mission laden
    selectMission(newMissionId);
    initUI();
    drawStartWorld();

    // Pyodide mit neuer Mission initialisieren
    await initPyodide();

    // State zurücksetzen
    programLoaded = false;
    lastCodeHash = '';
    setConsole('(leer)');
}
```

## Vorteile

1. **Weniger Verwaltungsaufwand**: Nur eine Textseite statt 60
2. **Schnellere Navigation**: Kein Seiten-Reload beim Mission-Wechsel
3. **Bessere User Experience**: Dropdown ist intuitiver als Links
4. **Konsistentes Layout**: Alle Missionen haben die gleiche Oberfläche
5. **Einfachere Updates**: Änderungen müssen nur an einer Stelle gemacht werden
6. **Fortschritts-Tracking**: Code bleibt pro Mission gespeichert

## Nachteile

1. **Komplexere Implementierung**: Mehr JavaScript-Logik
2. **Höherer Initial-Load**: Alle 60 Missionen werden beim ersten Laden heruntergeladen (~140 KB missions.js)
3. **Keine separate URL pro Mission**: Schwieriger zu verlinken (ohne zusätzliche URL-Parameter)
4. **Browser-Abhängigkeit**: Benötigt LocalStorage für Code-Speicherung

## Wann welchen Ansatz verwenden?

### Verwende den **Original-Ansatz** (`missions/`) wenn:

- ✅ Du separate Moodle-Ressourcen pro Mission benötigst
- ✅ Du Missionen einzeln freischalten willst (sequenzieller Zugriff)
- ✅ Du separate URLs für Missionen benötigst
- ✅ Du die Missionen in verschiedenen Kursen/Modulen verteilen willst

### Verwende die **Text Page Version** (`text_page_version/`) wenn:

- ✅ Du alle Missionen auf einer Seite anbieten willst
- ✅ Du schnelle Navigation zwischen Missionen ermöglichen willst
- ✅ Du weniger Seiten verwalten möchtest
- ✅ Du eine "Mission-Hub" Seite erstellen willst

## Migration vom Original-Ansatz

Falls du bereits den Original-Ansatz verwendest und zur Text Page Version wechseln möchtest:

1. **Code-Kompatibilität**: Beide Versionen verwenden die gleiche missions.js Datei
2. **Gespeicherter Code**: LocalStorage-Keys sind identisch → Code bleibt erhalten
3. **CSS**: Identisch → Kein visueller Unterschied
4. **Assets**: Gleiche GitHub CDN URLs

**Schritt-für-Schritt Migration**:

```html
<!-- VORHER: Original-Ansatz -->
<div id="mission-container" data-mission="m1-01"></div>
<script src=".../missions/mission-loader.js"></script>

<!-- NACHHER: Text Page Version -->
<div id="mission-container" data-default-mission="m1-01"></div>
<script src=".../text_page_version/mission-loader-menu.js"></script>
```

Nur zwei Änderungen erforderlich:
1. `data-mission` → `data-default-mission`
2. `.../missions/mission-loader.js` → `.../text_page_version/mission-loader-menu.js`

## Beispiele

Vollständige Beispiele findest du in:
- `text_page_version/example-text-page.html` - Einfaches Beispiel
- `text_page_version/moodle-text-page-example.html` - Vollständiges Moodle-Beispiel mit Kommentaren

## Support & Dokumentation

- **Detaillierte Dokumentation**: `text_page_version/README.md`
- **Moodle Integration Guide**: `MOODLE_INTEGRATION_GUIDE.md`
- **GitHub Issues**: https://github.com/davhenri/vireon_assets/issues

## Fazit

Die Text Page Version bietet eine moderne, effiziente Alternative zum Original-Ansatz.
Beide Ansätze sind vollständig funktionsfähig und können je nach Anforderung gewählt werden.
Die Text Page Version eignet sich besonders für Szenarien, in denen alle Missionen
zentral auf einer Seite angeboten werden sollen.
