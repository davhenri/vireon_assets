# Vireon Assets - Lokale Moodle-Einbindung

## Übersicht

Das Vireon Missions-System wurde aktualisiert, um **alle Assets lokal aus Moodle zu laden** statt von externen CDNs. Dies ist die empfohlene Konfiguration für Produktionsumgebungen.

## Schnellstart

### Für Moodle-Nutzer

**Dateien hochladen:**
1. Lade alle Dateien aus `text_page_version/` in deine Moodle-Textseite hoch
2. Beachte die Ordnerstruktur: `missions/`, `briefings/`, `vireon/`

**HTML-Code einfügen:**
```html
<!-- Bootstrap-Script -->
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

<!-- CSS -->
<link data-rel-href="missions/mission.css" rel="stylesheet">

<!-- Mission Container -->
<div id="mission-container" data-default-mission="m1-01"></div>

<!-- Pyodide (externe Abhängigkeit) -->
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>

<!-- Mission Loader -->
<script data-rel-href="missions/mission-loader-menu.js"></script>
```

**Vollständiges Beispiel:**
Siehe `text_page_version/moodle-local-assets-example.html`

## Wichtige Änderungen

### Was wurde geändert?

1. **mission-loader-menu.js**
   - ✅ Dynamischer Pfad-Bootstrap hinzugefügt
   - ✅ Verwendet `window.VIREON_ASSET_BASE` statt hardcodierter CDN-URLs

2. **mission-core-menu.js**
   - ✅ Verwendet `window.VIREON_ASSET_BASE` für alle Asset-Pfade
   - ✅ Injiziert Basispfad in geladene missions.js Daten

3. **missions.js**
   - ✅ `baseAssets.basePath` von CDN-URL auf leeren String geändert
   - ✅ Ordnername `mission_briefings/` → `briefings/` vereinfacht

### Ordnerstruktur

```
missions/
  mission.css
  mission-loader-menu.js
  mission-core-menu.js
  missions.js
  engine.py

briefings/
  offizier_briefing_12s.gif
  bg.jpg

vireon/
  player.svg
  asteroid.png
  powerup.png
  alien.png
  ammo.png
  stationBlue.png
  stationRed.png
```

## Vorteile

✅ **Keine externen Abhängigkeiten** (außer Pyodide, ~30 MB)
✅ **Schnellere Ladezeiten** (lokale Dateien)
✅ **Keine Firewall-Probleme**
✅ **Export/Import-freundlich** (keine hardcodierte contextId)
✅ **Offline-fähig** (nach erstem Laden)

## Technische Details

### Dynamische Pfad-Ermittlung

Das System ermittelt zur Laufzeit:
1. **Moodle-Instanz-Basis** aus der URL
2. **Context-ID** aus dem HTML (von Moodle gerendert)
3. **Vollständiger Pfad** wird konstruiert und in `window.VIREON_ASSET_BASE` gespeichert

**Beispiel:**
```
URL: https://lms2.schulcampus-rlp.de/SN-41376/mod/page/view.php?id=123
HTML enthält: pluginfile.php/67890/mod_page/...

→ window.VIREON_ASSET_BASE = "https://lms2.schulcampus-rlp.de/SN-41376/pluginfile.php/67890/mod_page/content/0/"
```

### Keine hardcodierte contextId

**Problem (früher):**
```html
<!-- ❌ Funktioniert nicht nach Import -->
<script src="https://lms.example.com/pluginfile.php/12345/mod_page/content/0/script.js"></script>
```
Die contextId `12345` ändert sich bei jedem Kurs-Import.

**Lösung (jetzt):**
```html
<!-- ✅ Funktioniert überall -->
<script data-rel-href="missions/script.js"></script>
```
Bootstrap-Script ermittelt contextId automatisch.

## Dokumentation

- **Vollständige Anleitung:** `text_page_version/MOODLE_LOCAL_ASSETS_GUIDE.md`
- **Beispiel-HTML:** `text_page_version/moodle-local-assets-example.html`
- **Text Page Version Übersicht:** `TEXT_PAGE_VERSION_GUIDE.md`

## Migration von CDN zu lokal

Falls du bereits die CDN-Version verwendest:

**Vorher (CDN):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission.css">
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/text_page_version/mission-loader-menu.js"></script>
```

**Nachher (lokal):**
```html
<script>/* Bootstrap-Script */</script>
<link data-rel-href="missions/mission.css" rel="stylesheet">
<div id="mission-container" data-default-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>
<script data-rel-href="missions/mission-loader-menu.js"></script>
```

**Zusätzlich:**
1. Alle Dateien in Moodle hochladen
2. Bootstrap-Script hinzufügen
3. Testen

## Fehlerbehebung

### "missions.js nicht gefunden"
→ Prüfe, ob `missions/missions.js` hochgeladen wurde

### Bilder werden nicht angezeigt
→ Prüfe, ob alle Dateien in `vireon/` und `briefings/` hochgeladen wurden

### Nach Import funktioniert es nicht
→ Prüfe, ob beim Export "Dateien einschließen" aktiviert war

Mehr Details: `text_page_version/MOODLE_LOCAL_ASSETS_GUIDE.md`

## Support

- **Vollständige Dokumentation:** `text_page_version/MOODLE_LOCAL_ASSETS_GUIDE.md`
- **GitHub Issues:** https://github.com/davhenri/vireon_assets/issues

## Empfehlung

**Produktionsumgebung:** Verwende lokale Assets (diese Version)
**Entwicklung/Testing:** CDN-Version kann weiterhin genutzt werden

Die lokale Version ist:
- Zuverlässiger
- Schneller
- Export/Import-freundlich
- Firewall-sicher
