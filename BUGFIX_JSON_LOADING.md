# Bugfix: JSON Content Loading Issues

## Problem Statement

Die Übergabe der JSON-Inhalte für die Website funktionierte nicht korrekt. Die Website lud zwar CSS und div-Container, aber nicht:
- Das Briefing-Text
- Das GIF des Offiziers (offizier_briefing_12s.gif)
- Die Python-Engine (engine.py)
- Die Objekte in der Simulation (Sprites wie player, asteroids, aliens, ammo, powerups, stations)

## Root Cause

Es gab eine **kritische Inkonsistenz** in den basePath-Konfigurationen über die verschiedenen Dateien hinweg:

1. **mission-loader.js** (Zeile 259): Verwendete `https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/` ✅
2. **mission-core.js** (Zeile 96): Verwendete `https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/` ❌
3. **missions.js** (Zeile 4): Verwendete `https://raw.githubusercontent.com/davhenri/vireon_assets/main/` ❌

### Warum war das ein Problem?

**raw.githubusercontent.com** hat mehrere Probleme:
- **Rate Limiting**: GitHub begrenzt die Anzahl der Anfragen pro IP-Adresse
- **Caching-Probleme**: Änderungen können bis zu 5 Minuten verzögert sein
- **Content-Type-Header**: Manchmal werden falsche MIME-Types gesendet
- **Firewall-Blockierung**: Viele Schulen/Universitäten blockieren raw.githubusercontent.com aus Sicherheitsgründen
- **Langsame Ladezeiten**: Besonders in manchen Netzwerken (z.B. Moodle-Umgebungen)

**jsDelivr CDN** ist besser, weil:
- ✅ Stabiler und zuverlässiger globaler CDN
- ✅ Korrekte Content-Type-Header garantiert
- ✅ Schnellere Ladezeiten durch Edge-Caching
- ✅ Keine Rate-Limiting-Probleme
- ✅ Seltener von Firewalls blockiert
- ✅ Kostenlos für Open-Source-Projekte

## Solution Implemented

Alle drei Dateien wurden aktualisiert, um **konsistent jsDelivr CDN** zu verwenden:

### 1. mission-core.js
```javascript
// VORHER (❌ raw.githubusercontent.com):
const basePath = 'https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/';

// NACHHER (✅ jsDelivr CDN):
const basePath = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/';
```

### 2. missions.js
```json
// VORHER (❌ raw.githubusercontent.com):
"basePath": "https://raw.githubusercontent.com/davhenri/vireon_assets/main/"

// NACHHER (✅ jsDelivr CDN):
"basePath": "https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/"
```

### 3. mission-loader.js
Bereits korrekt konfiguriert mit jsDelivr CDN (keine Änderung nötig).

## Expected Results

Nach diesem Fix sollten alle Inhalte korrekt laden:
- ✅ **Briefing-Text**: Wird aus missions.js geladen und animiert angezeigt
- ✅ **Offizier-GIF**: `mission_briefings/offizier_briefing_12s.gif` wird korrekt angezeigt
- ✅ **Python-Engine**: `engine.py` wird geladen und Pyodide initialisiert
- ✅ **Simulation-Sprites**: Alle Objekte (player, asteroids, aliens, ammo, powerups, stations) werden korrekt gerendert
- ✅ **CSS**: Bleibt unverändert funktionsfähig
- ✅ **Container**: Bleiben unverändert funktionsfähig

## Alternative Solutions for Moodle Stability

Für maximale Stabilität in Moodle-Umgebungen gibt es mehrere Ansätze:

### Option 1: Inline Embedding (Empfohlen für kritische Missionen)

**Vorteile:**
- Keine externen Abhängigkeiten
- Funktioniert auch offline
- Keine CDN- oder Netzwerkprobleme

**Nachteile:**
- Größere HTML-Dateien
- Schwieriger zu warten
- Updates müssen manuell propagiert werden

**Umsetzung:**
```html
<!-- Inline CSS -->
<style>
  /* Komplettes mission.css inline einfügen */
  .sbp-wrap { ... }
</style>

<!-- Inline HTML Template -->
<div id="mission-container" data-mission="m1-01">
  <!-- Template direkt hier einfügen statt via mission-loader.js -->
</div>

<!-- Inline JavaScript -->
<script>
  // Komplettes mission-core.js inline einfügen
  // missions.js als JSON-Objekt inline definieren
</script>
```

### Option 2: Moodle File System (Empfohlen für Moodle-integrierte Kurse)

**Vorteile:**
- Volle Kontrolle über Dateien
- Keine externen CDN-Abhängigkeiten
- Schneller Zugriff innerhalb von Moodle

**Nachteile:**
- Dateien müssen in Moodle hochgeladen werden
- Updates müssen manuell synchronisiert werden
- Größerer Speicherbedarf in Moodle

**Umsetzung:**
1. Alle Dateien in Moodle-Kurs hochladen (Dateiverwaltung)
2. URLs in den Scripts auf Moodle-Dateipfade ändern:
```javascript
const basePath = '/pluginfile.php/KURS_ID/mod_page/content/vireon_assets/missions/';
```

### Option 3: Hybrid Approach (Aktueller Ansatz - Empfohlen)

**Vorteile:**
- Beste Balance zwischen Wartbarkeit und Stabilität
- Nutzt jsDelivr für bessere Performance
- Einfache Updates über GitHub

**Nachteile:**
- Erfordert Internetverbindung
- Abhängigkeit von jsDelivr Verfügbarkeit (99.9% Uptime)

**Umsetzung:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission.css">
<div id="mission-container" data-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

### Option 4: Version Pinning (Für maximale Stabilität)

**Vorteile:**
- Garantiert, dass eine funktionierende Version nicht durch Updates kaputtgeht
- Volle Kontrolle über Versionierung

**Nachteile:**
- Bugfixes werden nicht automatisch übernommen
- Muss manuell auf neue Versionen aktualisiert werden

**Umsetzung:**
Statt `@main` einen spezifischen Commit-Hash verwenden:
```javascript
const basePath = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@272a497/missions/';
// @272a497 ist der Commit-Hash einer stabilen Version
```

## Testing Checklist

Um zu überprüfen, ob alles funktioniert:

- [ ] **CSS lädt**: Seite hat korrektes Styling (dunkler Hintergrund, Sci-Fi-Theme)
- [ ] **Container werden erstellt**: HTML-Struktur ist sichtbar
- [ ] **Briefing-Text erscheint**: Text wird animiert eingeblendet
- [ ] **Offizier-GIF wird angezeigt**: GIF läuft für 12 Sekunden, dann friert ein
- [ ] **Python-Status zeigt "Python 3 bereit"**: In der oberen rechten Ecke der Kommando-Konsole
- [ ] **Simulation-Board zeigt Hintergrund**: Weltraum-Hintergrund ist sichtbar
- [ ] **Player-Sprite ist sichtbar**: Blaues Raumschiff auf dem Grid
- [ ] **Andere Sprites laden** (falls in Mission vorhanden):
  - [ ] Asteroids (braune Felsen)
  - [ ] Aliens (grüne Schiffe)
  - [ ] Ammo (rote Munition)
  - [ ] Powerups (gelbe Power-Ups)
  - [ ] Stations (blaue/rote Stationen)
- [ ] **Code kann ausgeführt werden**: "Run"-Button funktioniert
- [ ] **Ziel-Marker ist sichtbar**: Grüner Kreis markiert das Zielfeld

## Browser Console Debugging

Falls Probleme weiterhin auftreten, folgende Browser-Console-Checks durchführen:

```javascript
// 1. Überprüfe, ob missions.js geladen wurde
console.log(allMissionsData);
// Sollte ein Objekt mit baseAssets und missions zeigen

// 2. Überprüfe basePath
console.log(allMissionsData.baseAssets.basePath);
// Sollte "https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/" sein

// 3. Überprüfe, ob Pyodide geladen ist
console.log(typeof loadPyodide);
// Sollte "function" sein

// 4. Überprüfe, ob Mission-Config geladen ist
console.log(config);
// Sollte die aktuelle Mission-Konfiguration zeigen
```

## Network Tab Debugging

In den Browser DevTools → Network Tab überprüfen:

**Erwartete erfolgreiche Requests (Status 200):**
1. `mission.css` von jsDelivr
2. `mission-loader.js` von jsDelivr
3. `pyodide.js` von jsDelivr
4. `mission-core.js` von jsDelivr
5. `missions.js` von jsDelivr
6. `engine.py` von jsDelivr
7. `offizier_briefing_12s.gif` von jsDelivr
8. `bg.jpg` von jsDelivr
9. `player.svg` von jsDelivr
10. Alle anderen Sprites (asteroid.png, alien.png, etc.)

**Fehlerhafte Requests (Status 4xx oder 5xx):**
- Wenn Status 429: Rate Limiting (sollte mit jsDelivr nicht mehr vorkommen)
- Wenn Status 404: Datei nicht gefunden (Pfad überprüfen)
- Wenn Status 403: Firewall blockiert (jsDelivr sollte seltener blockiert werden)
- Wenn Status 0 oder "CORS error": Same-Origin-Policy Problem (jsDelivr sollte korrekte CORS-Header setzen)

## Additional Recommendations

### 1. Cache-Busting für Entwicklung
Während der Entwicklung kann man Cache-Busting verwenden:
```javascript
const basePath = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/?t=' + Date.now();
```

### 2. Fallback Mechanism
Für maximale Robustheit könnte man einen Fallback implementieren:
```javascript
async function loadMissionsWithFallback() {
  const urls = [
    'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/missions.js',
    'https://raw.githubusercontent.com/davhenri/vireon_assets/main/missions/missions.js'
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
    } catch (err) {
      console.warn('Fallback: Trying next URL...', err);
    }
  }
  throw new Error('Could not load missions.js from any source');
}
```

### 3. Service Worker für Offline-Support
Für fortgeschrittene Anwendungsfälle könnte man einen Service Worker einsetzen, um die Dateien zu cachen.

## Commit Reference

Diese Fixes wurden implementiert in:
- Fix basePath in mission-core.js (jsDelivr statt raw.githubusercontent.com)
- Fix basePath in missions.js (jsDelivr statt raw.githubusercontent.com)
- Beide Dateien verwenden jetzt konsistent jsDelivr CDN

## Contact & Support

Bei weiteren Problemen:
1. Browser-Console-Logs überprüfen
2. Network Tab in DevTools überprüfen
3. GitHub Issues öffnen mit vollständigen Fehlerdetails
