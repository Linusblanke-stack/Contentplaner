Löwenblut Blueprint App v3.1

Aktueller Stand:
- eigener Legenden-Reiter: P1 / P2 / BONUS, Shot, Take, Performance, B-Roll, Hero, BTS, Clean Plate, Top-down, MIC 0/1/S/D
- Browser-/Android-Zurück navigiert innerhalb der App statt sofort aus der PWA
- aktuelle Ansicht, Projekt, Tab, Filter, Suche und Scrollposition bleiben beim Reload erhalten
- konkrete Zeitbudgets pro Shot mit automatisch berechneten Start-/Endzeiten
- Puffer- und Überplanungsanzeige pro Location-Block
- Locations, Shots, Reihenfolge, Priorität, Kategorie, Mic, Equipment und Dauer bearbeitbar
- Google-Maps-Links direkt je Location
- lokale Versions-Backups + herunterladbare Backup-Dateien + Auto-Backup
- Auto-Backup vor Import, Reset und Löschaktionen
- JSON Import/Export als verlustfreies Strukturformat
- CSV, HTML, ODT und PDF/Drucken als Ausgabeformate
- Dokument-Manager für PDF, ODT, DOCX, Bilder und andere Dateien
- universeller Master + Schwerin als Referenztrip
- Field Recording / Foley und Mic-Logik integriert
- größeres, besser erkennbares LB-App-Logo

Deployment:
Das Repository ist für statisches Hosting ausgelegt. netlify.toml bleibt erhalten.
Bei installierter PWA nach größeren Updates ggf. App einmal schließen/neu öffnen; der Service-Worker-Cache ist auf v3.1 aktualisiert.

Backup:
JSON/Backup ist das verlustfreie Austauschformat. Browser-/Gerätespeicher kann gelöscht werden, daher regelmäßig eine Backup-Datei herunterladen.
