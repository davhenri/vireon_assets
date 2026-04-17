# Vireon Missionen - Lokale Asset-Einbindung in Moodle

## Überblick

Dieses Dokument beschreibt, wie das Vireon Missions-System so konfiguriert wird, dass **alle Assets lokal aus Moodle geladen werden** statt von einem externen GitHub CDN. Dies ist die empfohlene Konfiguration für Produktionsumgebungen.

## Warum lokale Assets?

### Vorteile

✅ **Keine externen Abhängigkeiten** (außer Pyodide)
✅ **Schnellere Ladezeiten** (Assets vom gleichen Server)
✅ **Offline-fähig** (funktioniert ohne Internet, sobald geladen)
✅ **Keine Firewall-Probleme** (kein Zugriff auf externe CDNs nötig)
✅ **Vollständige Kontrolle** (keine Abhängigkeit von GitHub/jsDelivr)
✅ **Export-/Import-freundlich** (Kurse können problemlos exportiert/importiert werden)

### Einzige externe Abhängigkeit: Pyodide

Pyodide (Python im Browser) bleibt als externe CDN-Abhängigkeit bestehen, da:
- Die Bibliothek ~30 MB groß ist
- Moodle-Dateianhänge typischerweise auf wenige MB begrenzt sind
- Pyodide von einem hochverfügbaren CDN bereitgestellt wird

## Technische Umsetzung

### Dynamischer Pfad-Bootstrap

Das System ermittelt zur Laufzeit automatisch den korrekten Basispfad für Assets:

1. **Moodle-Instanz-Basis** wird aus der aktuellen URL extrahiert
2. **Context-ID** wird aus dem HTML der Seite extrahiert (Moodle rendert diese ID in `pluginfile.php`-Links)
3. **Vollständiger Basispfad** wird konstruiert: `{instanz}/pluginfile.php/{contextId}/mod_page/content/0/`

Dieser Pfad wird in `window.VIREON_ASSET_BASE` gespeichert und von allen Komponenten verwendet.

### Wie es funktioniert

```javascript
// 1. Bootstrap-Script ermittelt den Basispfad (in mission-loader-menu.js)
(function() {
  var baseMatch = window.location.href.match(/^(https?:\/\/[^\/]+\/[^\/]+\/)/);
  if (!baseMatch) return;
  var instanceBase = baseMatch[1];

  var ctxMatch = document.documentElement.innerHTML.match(/pluginfile\.php\/(\d+)\/mod_page/);
  if (!ctxMatch) return;
  var contextId = ctxMatch[1];

  window.VIREON_ASSET_BASE = instanceBase + 'pluginfile.php/' + contextId + '/mod_page/content/0/';
})();

// 2. Alle Asset-Pfade verwenden diesen Basispfad
const assetUrl = window.VIREON_ASSET_BASE + 'missions/mission.css';
```

### HTML-Seiten-Bootstrap

Für das initiale Laden von CSS und JavaScript wird ein kleines Bootstrap-Script verwendet, das `data-rel-href` Attribute in echte `href`/`src` Attribute umwandelt:

```html
<script>
(function() {
  var m = window.location.href.match(/^(https?:\/\/[^\/]+\/[^\/]+\/)/);
  if (!m) return;
  var base = m[1];

  function apply() {
    var ctxMatch = document.documentElement.innerHTML.match(/pluginfile\.php\/(\d+)\/mod_page/);
    if (!ctxMatch) return;
    var assetBase = base + 'pluginfile.php/' + ctxMatch[1] + '/mod_page/content/0/';
    document.querySelectorAll('[data-rel-href]').forEach(function(el) {
      var rel = el.getAttribute('data-rel-href').replace(/^\/+/, '');
      var full = assetBase + rel;
      el.tagName === 'LINK' ? el.setAttribute('href', full) : el.setAttribute('src', full);
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', apply)
    : apply();
})();
</script>

<!-- CSS mit data-rel-href statt href -->
<link data-rel-href="missions/mission.css" rel="stylesheet">

<!-- JavaScript mit data-rel-href statt src -->
<script data-rel-href="missions/mission-loader-menu.js"></script>
```

## Installation

### Schritt 1: Dateien vorbereiten

Erstelle folgende Ordnerstruktur lokal auf deinem Computer:

```
vireon-assets/
├── missions/
│   ├── mission.css
│   ├── mission-loader-menu.js
│   ├── mission-core-menu.js
│   ├── missions.js
│   └── engine.py
├── briefings/
│   ├── offizier_briefing_12s.gif
│   └── bg.jpg
└── vireon/
    ├── player.svg
    ├── asteroid.png
    ├── powerup.png
    ├── alien.png
    ├── ammo.png
    ├── stationBlue.png
    └── stationRed.png
```

**Wichtig:** Die Ordner `missions/`, `briefings/` und `vireon/` müssen genau so heißen!

### Schritt 2: Moodle-Textseite erstellen

1. In Moodle: **Aktivität hinzufügen** → **Textseite**
2. Titel eingeben: z.B. "Vireon Missions-System"

### Schritt 3: Dateien hochladen

1. Klicke auf **Dateien hinzufügen** (im Textseiten-Editor)
2. Lade **alle Dateien** mit ihrer Ordnerstruktur hoch:
   - Ziehe die drei Ordner (`missions`, `briefings`, `vireon`) in den Datei-Upload-Bereich
   - Moodle behält die Ordnerstruktur bei

### Schritt 4: HTML-Code einfügen

1. Wechsle in den **HTML-Modus** (Button `</>`)
2. Füge folgenden Code ein:

```html
<!-- Bootstrap-Script: Konvertiert data-rel-href zu echten Pfaden -->
<script>
(function() {
  var m = window.location.href.match(/^(https?:\/\/[^\/]+\/[^\/]+\/)/);
  if (!m) return;
  var base = m[1];

  function apply() {
    var ctxMatch = document.documentElement.innerHTML.match(/pluginfile\.php\/(\d+)\/mod_page/);
    if (!ctxMatch) return;
    var assetBase = base + 'pluginfile.php/' + ctxMatch[1] + '/mod_page/content/0/';
    document.querySelectorAll('[data-rel-href]').forEach(function(el) {
      var rel = el.getAttribute('data-rel-href').replace(/^\/+/, '');
      var full = assetBase + rel;
      el.tagName === 'LINK' ? el.setAttribute('href', full) : el.setAttribute('src', full);
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', apply)
    : apply();
})();
</script>

<!-- Mission CSS (lokal aus Moodle) -->
<link data-rel-href="missions/mission.css" rel="stylesheet">

<div class="container my-4">
    <div class="alert alert-info" role="alert">
        <h4 class="alert-heading">🚀 Willkommen beim Vireon Missions-System!</h4>
        <p>Wähle eine Mission aus dem Dropdown-Menü unten.</p>
    </div>

    <!-- Mission Container -->
    <div id="mission-container" data-default-mission="m1-01"></div>

    <!-- Pyodide von CDN (einzige externe Abhängigkeit) -->
    <script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>

    <!-- Mission-Loader Script (lokal aus Moodle) -->
    <script data-rel-href="missions/mission-loader-menu.js"></script>
</div>
```

3. **Speichern**

### Schritt 5: Testen

1. Öffne die Textseite
2. Nach ~10 Sekunden sollte das Missions-System geladen sein
3. Wähle eine Mission aus dem Dropdown
4. Schreibe Python-Code und drücke "Run"

## Kurs-Export/Import

### Problem bei hardcodierten Pfaden

Früher (mit CDN-URLs):
```html
<!-- ❌ Funktioniert nicht nach Import -->
<link href="https://lms2.schulcampus-rlp.de/SN-41376/pluginfile.php/12345/..." rel="stylesheet">
```

Die `contextId` (hier: `12345`) ändert sich bei jedem Import → Link funktioniert nicht mehr.

### Lösung: Dynamische Pfade

Jetzt (mit lokalem Asset-Loading):
```html
<!-- ✅ Funktioniert nach Export/Import -->
<link data-rel-href="missions/mission.css" rel="stylesheet">
```

Der Bootstrap-Script ermittelt die `contextId` automatisch → funktioniert überall!

### Export-Workflow

1. **Kurs exportieren** (Moodle: Kursadministration → Sicherung)
2. **Auf anderer Instanz importieren**
3. **Keine manuelle Anpassung nötig** ✅

## Unterschiede zur CDN-Version

| Aspekt | CDN-Version | Lokale Version |
|--------|-------------|----------------|
| CSS Einbindung | `<link href="https://cdn.jsdelivr.net/...">` | `<link data-rel-href="missions/mission.css">` |
| JS Einbindung | `<script src="https://cdn.jsdelivr.net/...">` | `<script data-rel-href="missions/mission-loader-menu.js">` |
| Asset-Pfade | Hardcodiert in JS-Dateien | Dynamisch via `window.VIREON_ASSET_BASE` |
| Datei-Uploads | Nicht nötig (CDN) | Alle Assets hochladen |
| Export/Import | Funktioniert | Funktioniert |
| Offline | Nur beim ersten Laden | Vollständig (nach erstem Laden) |
| Firewall | Kann blockiert werden | Kein Problem |

## Geänderte Dateien

Folgende Dateien wurden angepasst, um lokale Assets zu unterstützen:

### mission-loader-menu.js
```javascript
// NEU: Dynamischer Pfad-Bootstrap am Anfang
(function() {
  var baseMatch = window.location.href.match(/^(https?:\/\/[^\/]+\/[^\/]+\/)/);
  if (!baseMatch) return;
  var instanceBase = baseMatch[1];

  var ctxMatch = document.documentElement.innerHTML.match(/pluginfile\.php\/(\d+)\/mod_page/);
  if (!ctxMatch) return;
  var contextId = ctxMatch[1];

  window.VIREON_ASSET_BASE = instanceBase + 'pluginfile.php/' + contextId + '/mod_page/content/0/';
})();

// Geändert: CDN-Pfad → lokaler Pfad
function loadMissionCore() {
  const basePath = window.VIREON_ASSET_BASE || ''; // ← NEU
  script.src = basePath + 'missions/mission-core-menu.js'; // ← Geändert
}
```

### mission-core-menu.js
```javascript
// Geändert: CDN-Pfad → lokaler Pfad
const basePath = window.VIREON_ASSET_BASE || ''; // ← NEU

// Geändert: missions.js und engine.py Pfade
async function loadAllMissions() {
  const missionsUrl = basePath + 'missions/missions.js'; // ← Geändert
  // ...
  // NEU: Injiziere lokalen Basispfad in geladene Daten
  if (allMissionsData.baseAssets && window.VIREON_ASSET_BASE) {
    allMissionsData.baseAssets.basePath = window.VIREON_ASSET_BASE;
  }
}

async function initPyodide() {
  const engineResponse = await fetch(basePath + 'missions/engine.py'); // ← Geändert
}
```

### missions.js
```json
{
  "version": "2.0",
  "baseAssets": {
    "basePath": "",
    "officerGif": "briefings/offizier_briefing_12s.gif",
    "background": "briefings/bg.jpg",
    "sprites": {
      "player": "vireon/player.svg",
      ...
    }
  }
}
```

**Änderungen:**
- `basePath` von CDN-URL auf leeren String geändert
- Wird zur Laufzeit mit `window.VIREON_ASSET_BASE` gefüllt
- `mission_briefings/` → `briefings/` (kürzer)

## Fehlerbehebung

### Problem: "missions.js nicht gefunden"

**Ursache:** Datei nicht hochgeladen oder falsche Ordnerstruktur

**Lösung:**
1. Prüfe, ob `missions/missions.js` hochgeladen wurde
2. Achte auf korrekte Ordnerstruktur (Ordner `missions/` muss existieren)
3. Öffne Browser-Konsole (F12) und prüfe die genaue URL, die geladen werden soll

### Problem: Bilder werden nicht angezeigt

**Ursache:** Bilddateien nicht hochgeladen oder falsche Dateinamen

**Lösung:**
1. Prüfe, ob alle Dateien in `vireon/` und `briefings/` hochgeladen wurden
2. Achte auf Groß-/Kleinschreibung der Dateinamen
3. Dateinamen müssen exakt übereinstimmen (z.B. `player.svg`, nicht `Player.svg`)

### Problem: Nach Kurs-Import funktioniert es nicht

**Ursache:** Dateien wurden nicht mit exportiert

**Lösung:**
1. Bei Kurs-Sicherung: Option "Dateien einschließen" aktivieren
2. Nach Import: Prüfe, ob alle Dateien vorhanden sind
3. Falls nötig: Dateien manuell erneut hochladen

### Problem: "window.VIREON_ASSET_BASE ist undefined"

**Ursache:** Bootstrap-Script konnte contextId nicht ermitteln

**Lösung:**
1. Prüfe, ob das Bootstrap-Script ganz oben im HTML steht
2. Prüfe, ob bereits andere pluginfile.php-Links auf der Seite existieren
3. Lade die Seite neu (manchmal braucht Moodle einen Moment zum Rendern)

## Migration von CDN zu lokal

Falls du bereits die CDN-Version verwendest und auf lokale Assets umstellen möchtest:

### 1. Dateien herunterladen

Lade alle Assets von GitHub:
```bash
git clone https://github.com/davhenri/vireon_assets.git
cd vireon_assets/text_page_version
```

### 2. Ordnerstruktur vorbereiten

Erstelle die Ordner wie oben beschrieben.

### 3. HTML-Code aktualisieren

**Vorher (CDN):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

**Nachher (lokal):**
```html
<script>/* Bootstrap-Script hier einfügen */</script>
<link data-rel-href="missions/mission.css" rel="stylesheet">
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>
<script data-rel-href="missions/mission-loader-menu.js"></script>
```

### 4. Testen

Öffne die Seite und prüfe:
- Werden alle Bilder angezeigt?
- Lädt das Missions-System?
- Funktioniert der Mission-Selector?
- Funktioniert Code-Ausführung?

## Vollständiges Beispiel

Siehe: `text_page_version/moodle-local-assets-example.html`

Dieses Beispiel enthält:
- Bootstrap-Script
- Komplettes HTML
- Alle Kommentare und Anweisungen
- Fehlerbehebungs-Hinweise

## Support

Bei Problemen:
1. Prüfe dieses Dokument
2. Prüfe `text_page_version/README.md`
3. Prüfe Browser-Konsole (F12) auf Fehlermeldungen
4. Erstelle ein Issue auf GitHub

## Zusammenfassung

**Das neue System:**
- ✅ Lädt alle Assets lokal aus Moodle
- ✅ Ermittelt Pfade automatisch (keine hardcodierte contextId)
- ✅ Funktioniert nach Kurs-Export/Import
- ✅ Keine externen CDN-Abhängigkeiten (außer Pyodide)
- ✅ Schneller und zuverlässiger
- ✅ Firewall-freundlich

**Einziger Nachteil:**
- Dateien müssen manuell hochgeladen werden (einmalig bei Erstinstallation)

**Empfehlung:**
Verwende die lokale Asset-Version für **Produktionsumgebungen**.
Die CDN-Version kann für **Entwicklung/Testing** weiterhin genutzt werden.
