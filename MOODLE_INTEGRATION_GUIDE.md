# Moodle Integration Guide - Vireon Missionen

## Schnellstart: Mission in Moodle einbetten

### Einfachste Methode (Empfohlen)

Füge folgenden Code in eine Moodle-Textseite ein (HTML-Modus):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission.css">

<div id="mission-container" data-mission="m1-01"></div>

<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

**Wichtig:** Ändere `data-mission="m1-01"` zur gewünschten Mission (z.B. `m1-02`, `m2-05`, etc.).

### Verfügbare Missionen

Die Missionen sind nach Schwierigkeit geordnet:

**Kapitel 1: Grundlagen (m1-01 bis m1-10)**
- m1-01: Geradflug
- m1-02: Kurskorrektur
- m1-03: Zickzack
- m1-04: Erste Schleife
- m1-05: Hindernisfeld
- m1-06: Enge Passage
- m1-07: Doppelkurve
- m1-08: Spirale
- m1-09: Labyrinth
- m1-10: Finale Grundlagen

**Kapitel 2: Schleifen (m2-01 bis m2-10)**
- m2-01 bis m2-10: Fortgeschrittene Schleifen und Wiederholungen

**Kapitel 3: Funktionen (m3-01 bis m3-10)**
- m3-01 bis m3-10: Funktionsdefinitionen und Modularisierung

**Kapitel 4: Listen (m4-01 bis m4-10)**
- m4-01 bis m4-10: Listenoperationen

**Kapitel 5: Bedingte Anweisungen (m5-01 bis m5-10)**
- m5-01 bis m5-10: If-Else-Bedingungen

**Kapitel 6: Fortgeschrittene Konzepte (m6-01 bis m6-10)**
- m6-01 bis m6-10: Komplexe Programmierkonzepte

## Moodle-Editor Einstellungen

### HTML-Modus aktivieren

1. Öffne die Moodle-Textseite im Bearbeitungsmodus
2. Klicke auf das **"<>"** Symbol (HTML-Ansicht) im Editor
3. Füge den obigen Code ein
4. Speichern

### Atto Editor (Moodle Standard)

Im Atto-Editor:
1. Klicke auf "HTML" Button in der Symbolleiste
2. Füge den Code ein
3. Klicke erneut auf "HTML" um zurückzukehren
4. Speichern

### TinyMCE Editor

Im TinyMCE-Editor:
1. Klicke auf "Tools" → "Source code"
2. Füge den Code ein
3. OK klicken
4. Speichern

## Fehlerbehebung

### Problem: Mission lädt nicht

**Symptom:** Leere Seite oder nur CSS ohne Inhalt

**Lösung:**
1. Überprüfe die Browser-Konsole (F12 → Console)
2. Stelle sicher, dass `data-mission` korrekt gesetzt ist
3. Überprüfe, ob das Script-Tag nach dem Container-div steht

### Problem: Python lädt nicht

**Symptom:** Status zeigt "Python lädt..." dauerhaft

**Lösung:**
1. Überprüfe Internetverbindung
2. Stelle sicher, dass Pyodide von jsDelivr geladen werden kann
3. Manche Firewalls blockieren externe Scripts - kontaktiere IT-Admin

### Problem: Bilder/Sprites laden nicht

**Symptom:** Briefing-Text erscheint, aber kein GIF oder keine Sprites

**Lösung:**
1. Überprüfe Network-Tab in Browser-DevTools (F12 → Network)
2. Suche nach fehlgeschlagenen Requests (rot markiert)
3. Stelle sicher, dass jsDelivr-CDN erreichbar ist

### Problem: CORS-Fehler

**Symptom:** "Cross-Origin Request Blocked" in Console

**Lösung:**
- jsDelivr sollte korrekte CORS-Header setzen
- Falls Problem weiterhin besteht, kontaktiere Moodle-Administrator
- Alternative: Verwende lokale Dateien (siehe unten)

## Alternative: Lokale Moodle-Dateien

Für maximale Stabilität können die Dateien in Moodle hochgeladen werden:

### Schritt 1: Dateien vorbereiten

Lade folgende Dateien von GitHub herunter:
- `missions/mission.css`
- `missions/mission-loader.js`
- `missions/mission-core.js`
- `missions/missions.js`
- `missions/engine.py`
- `mission_briefings/offizier_briefing_12s.gif`
- `mission_briefings/bg.jpg`
- Alle Dateien aus `vireon/` Ordner

### Schritt 2: In Moodle hochladen

1. Gehe zu Kurs → Dateien
2. Erstelle Ordnerstruktur:
   ```
   vireon_assets/
   ├── missions/
   │   ├── mission.css
   │   ├── mission-loader.js
   │   ├── mission-core.js
   │   ├── missions.js
   │   └── engine.py
   ├── mission_briefings/
   │   ├── offizier_briefing_12s.gif
   │   └── bg.jpg
   └── vireon/
       ├── player.svg
       ├── asteroid.png
       └── ... (alle anderen Sprites)
   ```

### Schritt 3: Pfade anpassen

In `mission-loader.js` und `mission-core.js`, ändere `basePath`:

```javascript
// Vorher:
const basePath = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/';

// Nachher (Moodle-Pfad):
const basePath = '@@PLUGINFILE@@/vireon_assets/missions/';
```

In `missions.js`, ändere `baseAssets.basePath`:

```json
{
  "baseAssets": {
    "basePath": "@@PLUGINFILE@@/vireon_assets/"
  }
}
```

**Hinweis:** `@@PLUGINFILE@@` wird von Moodle automatisch zum korrekten Pfad aufgelöst.

### Schritt 4: Einbetten

```html
<link rel="stylesheet" href="@@PLUGINFILE@@/vireon_assets/missions/mission.css">

<div id="mission-container" data-mission="m1-01"></div>

<script src="@@PLUGINFILE@@/vireon_assets/missions/mission-loader.js"></script>
```

## Performance-Tipps

### 1. Browser-Caching nutzen

jsDelivr cached Dateien automatisch. Schüler sollten beim zweiten Besuch schnellere Ladezeiten erleben.

### 2. Mehrere Missionen auf einer Seite

Möglich, aber jede Mission benötigt einen eindeutigen Container:

```html
<div id="mission-container-1" data-mission="m1-01"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>

<div id="mission-container-2" data-mission="m1-02"></div>
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

**Achtung:** Das lädt Pyodide mehrfach - kann langsam sein!

### 3. Progressive Loading

Für lange Seiten mit vielen Missionen, verwende Lazy Loading:

```html
<div id="mission-container" data-mission="m1-01" style="min-height: 600px;">
  <p>Mission lädt...</p>
</div>

<script>
  // Lade Script nur wenn sichtbar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js';
        document.body.appendChild(script);
        observer.disconnect();
      }
    });
  });
  observer.observe(document.getElementById('mission-container'));
</script>
```

## Barrierefreiheit

### Screen Reader Support

Die Missionen verwenden semantisches HTML und ARIA-Labels. Für Screen-Reader-Nutzer:
- Briefing-Text ist als Text verfügbar
- Simulation-Status wird vorgelesen
- Tastatur-Navigation ist möglich (Tab, Enter)

### Kontrast-Modus

Reduzierte Animation kann aktiviert werden:
- Button "Motion: Ein/Aus" nutzen
- Oder systemweite Präferenz wird respektiert (`prefers-reduced-motion`)

### Tastatur-Only Bedienung

Alle Funktionen sind per Tastatur erreichbar:
- Tab: Navigation zwischen Elementen
- Enter: Buttons aktivieren
- Arrow Keys: Im Code-Editor navigieren

## Datenschutz & DSGVO

### Datenerhebung

Die Vireon-Missionen:
- ✅ Speichern Code lokal im Browser (localStorage)
- ✅ Senden KEINE Daten an externe Server
- ✅ Verwenden KEINE Tracking-Cookies
- ✅ Erheben KEINE personenbezogenen Daten

### Externe Ressourcen

Folgende externe CDNs werden verwendet:
- **jsDelivr CDN**: Für Scripts, CSS und Assets (EU-Server verfügbar)
- **Pyodide CDN**: Für Python-Runtime (vom Pyodide-Projekt gehostet)

Beide CDNs sind DSGVO-konform und loggen keine personenbezogenen Daten.

### Offline-Nutzung

Für vollständige Datensouveränität: Verwende die lokale Moodle-Dateien-Option (siehe oben).

## Lizenz

Vireon Assets ist unter MIT-Lizenz verfügbar. Nutzung in Bildungseinrichtungen ist kostenfrei.

## Support

Bei Problemen oder Fragen:
1. Überprüfe BUGFIX_JSON_LOADING.md für häufige Probleme
2. Öffne ein Issue auf GitHub: https://github.com/davhenri/vireon_assets/issues
3. Kontaktiere: davhenri@github

## Updates

### Automatische Updates (Empfohlen)

Bei Verwendung von `@main` in den URLs werden Updates automatisch übernommen:
```html
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>
```

jsDelivr cached für ~7 Tage, danach werden neue Versionen automatisch geladen.

### Feste Version (Stabil)

Für produktive Umgebungen kann eine spezifische Version gepinnt werden:
```html
<script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@43bcadd/missions/mission-loader.js"></script>
```

Ersetze `43bcadd` mit dem gewünschten Commit-Hash.

### Cache Purging

Falls sofortige Updates benötigt werden:
1. Verwende einen Query-Parameter: `?v=2` am Ende der URL
2. Oder verwende einen spezifischen Commit-Hash statt `@main`

## Beispiel: Vollständige Moodle-Seite

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mission 1.01 - Geradflug</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission.css">
</head>
<body>
  <h1>Programmieren lernen mit Vireon</h1>

  <p>
    Willkommen zur ersten Mission! In dieser Mission lernst du den Grundbefehl
    <code>move()</code> kennen. Dein Ziel ist es, das Raumschiff geradeaus zum
    grünen Zielfeld zu fliegen.
  </p>

  <div id="mission-container" data-mission="m1-01"></div>

  <script src="https://cdn.jsdelivr.net/gh/davhenri/vireon_assets@main/missions/mission-loader.js"></script>

  <h2>Hinweise</h2>
  <ul>
    <li>Verwende <code>move()</code> um einen Schritt nach vorne zu fliegen</li>
    <li>Du brauchst 10 move()-Befehle für diese Mission</li>
    <li>Klicke auf "Run" um dein Programm auszuführen</li>
    <li>Klicke auf "Reset" um von vorne zu beginnen</li>
  </ul>

  <h2>Lösung</h2>
  <details>
    <summary>Klicke hier für die Lösung</summary>
    <pre><code>move()
move()
move()
move()
move()
move()
move()
move()
move()
move()</code></pre>
  </details>
</body>
</html>
```

## Best Practices

### ✅ Empfohlen

- Verwende jsDelivr CDN für einfache Integration
- Teste Missionen vor dem Veröffentlichen
- Gib Schülern klare Anweisungen (siehe Beispiel oben)
- Verwende eine Mission pro Moodle-Seite
- Aktiviere "Motion: Aus" für langsamere Geräte

### ❌ Nicht empfohlen

- Mehrere Missionen auf einer Seite (Performance)
- raw.githubusercontent.com verwenden (instabil)
- Scripts im Moodle-Editor visuell bearbeiten (HTML-Modus nutzen)
- Inline-Styles ändern (könnte überschrieben werden)

## Checkliste: Mission einrichten

- [ ] HTML-Modus im Moodle-Editor aktiviert
- [ ] CSS-Link eingefügt (vor dem Container)
- [ ] Container-div mit korrekter `data-mission` eingefügt
- [ ] Script-Tag eingefügt (nach dem Container)
- [ ] Seite gespeichert
- [ ] Vorschau überprüft
- [ ] Browser-Console auf Fehler überprüft (F12)
- [ ] Briefing-Text wird angezeigt
- [ ] Offizier-GIF wird angezeigt
- [ ] Simulation-Board ist sichtbar
- [ ] Python-Status zeigt "Python 3 bereit"
- [ ] Code kann ausgeführt werden (Run-Button)
- [ ] Sprites werden korrekt dargestellt

Viel Erfolg beim Einsatz von Vireon in deinem Kurs! 🚀
