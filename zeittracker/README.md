# Löwenblut Zeittracker v1.0

Eigenständige Zeiterfassungs-App im Unterordner `/zeittracker/`. Die Löwenblut Blueprint App im Repository-Stamm bleibt unberührt.

## Benutzen

- https://contentplaner.vercel.app/zeittracker/ (sofern Vercel den main-Branch automatisch veröffentlicht)
- Auf Android: URL in Chrome öffnen und „App installieren“ wählen.
- Projekt und Tätigkeit wählen, Zeit starten, pausieren, beenden und speichern.

## Funktionen

Start/Pause/Stopp, Projekte/Tätigkeiten, Tages-/Wochen-/Monatsberichte, Historie, manuelle Nachträge, CSV-Export, JSON-Backup und Import.

## Daten & Sicherheit

Alle Daten werden ausschließlich im localStorage des jeweiligen Browsers gespeichert. Kein Account und **keine Synchronisierung** zwischen Geräten. Regelmäßig JSON-Backups exportieren. Bei Verlust der Website-Daten gehen ungesicherte Zeiteinträge verloren.

Die Dateien im Unterordner `zeittracker/` und der eigenständige Service Worker verändern die Blueprint-App nicht.
