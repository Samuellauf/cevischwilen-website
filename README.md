# Website Cevi Schönholzerswilen-Wuppenau

Statische Website aus reinem HTML, CSS und JavaScript. Kein Baukasten, keine Datenbank.
Bewusst wartungsarm gehalten.

## Was im Alltag zu pflegen ist

| Was | Wo | Wie oft |
|---|---|---|
| **Termine** | Google-Kalender «Cevi Daten für Teilnehmer/-innen» | laufend, die Website zeigt sie automatisch |
| **Leiterteam** | `leiterteam.html` | wenn jemand kommt oder geht |
| **Jahresbeitrag, Zeiten** | Suchen/Ersetzen über alle `.html`-Dateien | selten |

Alles andere (Jahreszahl in der Fusszeile, Kalenderansicht) aktualisiert sich selbst.

## 1. Einmalig: Kalender öffentlich freigeben

Der eingebettete Kalender ist nur sichtbar, wenn er öffentlich ist:

1. Google Kalender öffnen → beim Kalender «Cevi Daten für Teilnehmer/-innen» auf die drei Punkte → **Einstellungen und Freigabe**.
2. Unter **Zugriffsberechtigungen für Termine** das Häkchen **Öffentlich freigeben** setzen
   («Alle Termindetails anzeigen»).

Danach sehen Besucher die Termine, können den Kalender abonnieren und nichts verändern.
Achtung: Alles, was in diesem Kalender steht, ist öffentlich. Interne Termine gehören in einen anderen Kalender.

Soll ein anderer Kalender angezeigt werden: in `index.html` und `daten-und-orte.html` die
Kalender-ID (lange Zeichenfolge vor `%40group.calendar.google.com`) per Suchen/Ersetzen austauschen.

## 2. Bilder

Alle Bilder liegen im Ordner `bilder/`. Wer ein Bild austauschen will, ersetzt die Datei unter gleichem Namen.

| Datei | Verwendung |
|---|---|
| `logo.svg`, `favicon.png` | Logo oben links und Symbol im Browser-Tab |
| `cevi-schweiz.png` | Logo Cevi Schweiz in der Fusszeile |
| `header.jpg` | Titelbild Startseite (2000 × 1125 px) |
| `spiel.jpg`, `kochen.jpg`, `theater.jpg`, `zelt.jpg` | «Eindrücke» auf der Startseite (900 × 675 px) |
| `geschichte.jpg`, `gruppe.jpg` | Seite «Programm» (900 × 675 px) |
| `leiter/<cevi-name>.jpg` | Porträts im Leiterteam (freiwillig, quadratisch, ca. 300 px, z. B. `fumbo.jpg`) |

Das Repository ist öffentlich: Hier gehören nur Bilder hinein, die jeder sehen darf und für die
die Einwilligung der abgebildeten Personen bzw. der Eltern vorliegt. Das Fotoarchiv bleibt auf OneDrive.

## 3. Hosting

Die Website liegt in diesem GitHub-Repository und wird über **GitHub Pages** ausgeliefert.
Jede Änderung im Branch `main` ist nach ein bis zwei Minuten online.

- Einschalten: **Settings → Pages → Source: Deploy from a branch → Branch `main`, Ordner `/ (root)`**.
- Eigene Domain: in **Settings → Pages → Custom domain** `cevischwilen.ch` eintragen und beim
  Domain-Anbieter die DNS-Einträge auf GitHub Pages umstellen. Danach **Enforce HTTPS** aktivieren.
- Lokal testen: `index.html` per Doppelklick im Browser öffnen.

## 4. Gut zu wissen

- **Texte ändern:** direkt in den `.html`-Dateien (Editor wie VS Code oder Notepad++).
  Menü und Fusszeile stehen in jeder Datei; Änderungen per Suchen/Ersetzen über den ganzen Ordner.
- **Farben:** Cevi-Blau `#323394` und Cevi-Rot `#C41333` gemäss Corporate Design Manual Cevi Schweiz; definiert ganz oben in `css/style.css`.
- **Kontaktformular:** öffnet das E-Mail-Programm der Besucher mit der vorbereiteten Nachricht. Braucht keinen Server.
- **Anmeldung:** verlinkt auf das bestehende Google-Formular.
- **Datenschutz:** Der Hinweis zu Google Kalender und Google Forms steht in `impressum.html`.
- **Alte Links:** Die bisherigen Wix-Adressen funktionieren weiter. `kopie-von-daten-und-orte.html`, `die-gruppen.html`, `galerie.html` und `anmeldeformular.html` sind reine Weiterleitungen und sollen nicht gelöscht werden.
