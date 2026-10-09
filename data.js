(function(){
const t=(text,priority='P2',category='Shot',minutes=4,mic='MIC 0',gear='S24 + Stativ')=>({text,priority,category,minutes,mic,gear});
const loc=(id,date,time,name,address,type,notes,fieldrec,tasks)=>({id,date,time,name,address,type,notes,fieldrec,tasks});
window.BLUEPRINT_SEED={
version:10,
master:{
 name:'Universal Content-Trip Blueprint',
 description:'Wiederverwendbarer Master für City-/Location-Drehs. Locations, Adressen, Route, Licht, Saison, Outfits und lokale Drohnenlage werden angepasst; die Produktionslogik bleibt.',
 locationCriteria:[
  'Mindestens zwei starke Kriterien: Tiefe, Licht, Architektur/Natur, Linien/Symmetrie, Spiegelung/Textur, Bewegung oder 5-15 m sichere Kameradistanz.',
  'Kernshots müssen ohne Gimbal und ohne Drohne funktionieren.',
  'Hero-Shots wenn sinnvoll in 16:9 und 9:16 separat komponieren.',
  'Jede Hauptlocation bekommt BTS, Thumbnail/Foto, Clean Plate, Atmosphäre und Field Recording.',
  'Location erst verlassen, wenn P1, BTS, Foto, Clean Plate, Audio und Materialcheck erledigt sind.',
  'Zwischen zwei Locations immer Abbau-, Lauf-/Fahrt- und Aufbauzeit einplanen; keine Null-Minuten-Übergänge.',
  'Bei langen Drehtagen Essen und echte Pausen als feste Zeitblöcke einplanen, nicht nur als Restzeit.',
  'Outfitwechsel ausschließlich in der Unterkunft einplanen. Keine Outdoor-Wechsel; Drehcluster nach Outfit bündeln und Wechsel mit Essen, Backup oder Ladepause kombinieren.'
 ],
 technicalRules:[
  'Normale Master-Takes: 4K/30 fps',
  'Bewegung/Detail: 4K/60 fps',
  'Hero-Shots: 16:9 + 9:16 separat komponieren',
  'Longform/BTS: 16:9',
  'Reels/Shorts: 9:16',
  'Master-Take 15-25 s; 2-3 s vor/nach Aktion halten',
  'Bei Regen Linse ständig kontrollieren',
  'Originale behalten + Kopie auf exFAT-SSD'
 ],
 standardTasks:[
  t('Establishing Wide / Clean Plate ohne dich','P1','Clean Plate',3),
  t('Wide mit dir','P1','Shot',5),
  t('Medium Performance','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
  t('Close-up','P1','Close-up',4),
  t('Mindestens 3 Detailshots','P1','B-Roll',6),
  t('Low Angle oder Foreground Shot','P2','Shot',4),
  t('Walk In / Walk Out / Cross Frame','P2','Shot',5),
  t('Hero 16:9','P1','Hero',5),
  t('Hero 9:16','P1','Hero',5),
  t('Outfit A an stärksten 1-2 Hintergründen','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
  t('Outfit B an stärksten 1-2 Hintergründen','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
  t('Foto / Thumbnail','P1','Foto',3,'MIC 0','S24'),
  t('20 s Umgebungsatmo','P1','Audio',4,'MIC S','S24 Stereo'),
  t('BTS: Ankunft / Plan / Prozess / Ergebnis / Fazit','P1','BTS',5,'MIC 1','S24 + DJI Mic Mini'),
  t('Field Recording: mindestens 2 Sounds + 1 Stereo-Atmo','P1','Audio',7,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz'),
  t('Material kurz prüfen: Fokus, Tropfen, Belichtung, Ton','P1','QC',3,'MIC 0','S24')
 ],
 universalShotlist:[
  'Clean Plate / Establishing 8-15 s','Extreme Wide mit dir 15-25 s','Wide 15-25 s','Medium Performance 15-25 s','Close 8-15 s',
  'Detail x3: Hände, Schuhe, Stoff, Objekt/Oberfläche','Low Angle 10-20 s','Foreground 10-20 s','Walk In / Out 15-20 s','Cross Frame 15-20 s',
  'Stillness 15-25 s','Reflection / Texture 10-20 s','Hero 16:9 15-25 s','Hero 9:16 15-25 s','BTS + Atmo 20-40 s'
 ],
 soundIdeas:[
  'Stereo-Atmo 30-60 s: Stadt, Wald, Wasser, Regen, Bahnhof/Verkehr aus sicherem Bereich',
  'Isoliertes Geräusch: DJI Mic Mini 10-40 cm an Quelle; Windschutz',
  'Jedes gute Geräusch 3x: normal, leise/langsam, kräftig/schnell',
  'Vor/nach Sound 2-3 s Ruhe aufnehmen',
  'Keine identifizierbaren Privatgespräche/fremde Musik als Sample einplanen'
 ],
 walkingCollage:[
  'Ein Outfit pro fertiger Collage konstant halten','Kamera ca. 1,1-1,3 m hoch; seitlich; 6-8 m Abstand als Startwert',
  '1x Brennweite beibehalten; Körpergröße im Bild angleichen','Immer gleiche Laufrichtung','Gleiches Tempo; pro Spot 2-3 Takes',
  '2 s vor Eintritt starten, 2 s nach Verlassen weiterlaufen lassen'
 ],
 topDownCollage:[
  'Gleiche Körperposition im Frame; Untergrund wechselt','Pflaster, Laub, Gras, Uferweg, Sand als Texturen',
  'Drohne nur sicher/frei; urban lieber feste erhöhte Position','Je Spot 10-15 s still + kleine Bewegung'
 ],
 btsChecklist:[
  'Ankunft 10-20 s: Wo bist du, was willst du drehen?','Plan 10-20 s: konkretes Problem/Ziel (Licht, Regen, Wind, Perspektive, Outfit)',
  'Prozess optional 10-20 s: Stativ, Outfit, Testframe','Ergebnis 10-20 s: fertiger Shot direkt im Anschluss',
  'Fazit 10-20 s: funktioniert? was fehlt?','Atmo 20 s: Kamera ruhig, kein Sprechen'
 ],
 closeUpMaster:[
  'Gesicht: Augenhöhe/leicht darunter, Seitenlicht, 8-15 s','Augen/Blick: Blick Kamera -> weg, Highlights schützen',
  'Hände/Handschuhe: anziehen, Jacke schließen, Ärmel richten, 60 fps','Schuhe: 10-20 cm Höhe, Schritt durch Laub/Pfütze, 60 fps',
  'Mantel/Jacke: Saum/Kragen im Wind, Gegen-/Seitenlicht','Blätter: tief, Wind oder Schritt durchs Bild, 60 fps',
  'Pfütze: Linse knapp über Boden, Fokus auf Spiegelbild','Laterne: seitlich im Frame, du dahinter, Blue Hour/Nacht',
  'Fassade: 45° nach oben, Verzerrung minimieren','Schilf: durch Halme auf dich/Architektur, Vordergrund unscharf',
  'Wasser: tief am Ufer, 30 fps ruhig oder 60 fps Wellen'
 ],
 dataRoutine:[
  'Nach Haupt-Cluster Material kurz prüfen; nichts löschen','Abends Handy/Drohnenkarte -> SSD kopieren; Originale behalten',
  'Mittags Speicher/Akkus prüfen; Powerbank/Controller/Mic laden','Vor Abreise mehrere große Dateien von SSD testweise öffnen'
 ],
 micDecision:[
  'Lip-Sync/Rap zu fertigem Song: MIC 0, Master später unterlegen','Live-Rap hörbar: MIC 1, DJI Mic Mini + Windschutz',
  'BTS/Talking/Intro/Outro: MIC 1','Breite Stadt-/Natur-Atmo: S24 Stereo / Voice Recorder','Isoliertes Foley: MIC D, DJI Mic Mini nah an Quelle'
 ],
 season:[
  'Herbst: Blätter, Wind, Regen, Pfützen, frühe Blue Hour','Sommer: längere Golden Hour, Wasser, Gegenlicht/Silhouetten, harte Mittagssonne meiden',
  'Winter: frühe Nacht, Atem/Kälte, Lichtquellen, Akku-Management','Frühling: Blüte, frisches Grün, Regen/Reflexionen, längere Tage',
  'Bekannte Stadt erneut: gleiche Pflichtstruktur, neue Saison-/Licht-/Outfitmodule'
 ],
 micLegend:{
  'MIC 0':'Kein Mikro: Lip-Sync / reine Bildaufnahme.',
  'MIC 1':'DJI Mic Mini: Talking, BTS, Live-Rap.',
  'MIC S':'Samsung S24 Stereo: breite Stadt-/Natur-Atmosphäre.',
  'MIC D':'DJI Mic Mini nah an Quelle: isoliertes Foley/Detail.'
 }
},
projects:[{
 id:'schwerin-2026-10',name:'Schwerin 48H Content',city:'Schwerin',dates:'09.10.2026 - 11.10.2026',
 subtitle:'Ich hatte nur 48 Stunden für einen Monat Content',pdf:'Schwerin_48H_Blueprint_TIMED_MOBILE.pdf',
 notes:'Timed-Mobile-PDF ist die Referenz. Keine unnötigen Doppelbesuche; Rückkehr nur für fehlende P1, echten Tag/Nacht-Mehrwert oder sicheres Drohnenfenster.',
 outfits:{A:'Anzug',B:'Pulli + Hose (Casual)'},
 accommodation:{
   name:'The Avalon Hotel',
   address:'Bürgermeister-Bade-Platz 8, 19055 Schwerin',
   checkIn:'',
   checkOut:'',
   notes:'Feste Basis für Hin-/Rückwege im Schwerin-Blueprint.'
 },
 locations:[
  loc('media-markt','Fr 09.10.2026','12:00-12:45','Ausrüstung holen','Marienplatz 5-7, 19053 Schwerin','Logistik','MediaMarkt Schwerin.','',[
   t('Stativ + mechanische Handyhalterung besorgen','P1','Organisation',14,'MIC 0','—'),
   t('Optional: 20.000-mAh-Powerbank mit USB-C PD 25-45 W','P2','Organisation',12,'MIC 0','—'),
   t('USB-C-Kabel / Speicher / Akkustand prüfen','P1','Organisation',14,'MIC 0','—')
  ]),
  loc('fri-lunch-transfer','Fr 09.10.2026','12:45-13:30','Mittagessen + Weg zum Schloss-Cluster','MediaMarkt → Alter Garten','Pause / Transfer',
   '45 Minuten bewusst blockiert: kurz essen, Ausrüstung verstauen und ohne Hektik zum ersten Hauptspot wechseln. Wenn der Weg schneller geht, bleibt der Rest als Puffer.','',[
   t('Ausrüstung nach dem Kauf vollständig verstauen und kurz prüfen','P1','Organisation',5,'MIC 0','—'),
   t('Mittagessen / Getränk','P1','Pause',20,'MIC 0','—'),
   t('Weg MediaMarkt → Alter Garten / Schlossbrücke','P1','Transfer',15,'MIC 0','zu Fuß / ÖPNV je nach Lage'),
   t('5 Minuten Ankunfts-/Aufbaupuffer','P1','Puffer',5,'MIC 0','—')
  ]),
  loc('alter-garten','Fr 09.10.2026','13:30-14:30','Alter Garten + Schlossbrücke','Alter Garten, 19055 Schwerin','Schloss-Cluster',
   'Schloss direkt gegenüber: Lennéstraße 1, 19053 Schwerin. Start des Schloss-Clusters.',
   'Schritte auf Brücke/Pflaster, Wind an Geländer/Bäumen, Wasser/Umgebung, ggf. einzelne Fahrzeuge aus sicherem Standpunkt.',[
   t("BTS: 10-20 s Selfie - 'Erster Hauptspot, Ziel ist heute Schloss komplett abzuhaken.'",'P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate: Brücke / Schloss 16:9, mindestens 10 s ohne dich','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Wide: du klein auf/nahe der Brücke, Schloss dominant','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Walking: auf Kamera zu + von Kamera weg; Leading Lines der Brücke nutzen','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich, 6-8 m Abstand, Körper fast komplett sichtbar, gleiche Laufrichtung','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: Wide + Medium, frontal oder 20-30° seitlich','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Outfit B hier bewusst NICHT drehen: kein Hotel-Rückweg nur für diesen Spot; Casual wird im Nacht-Cluster/Zippendorf abgedeckt','P2','Organisation',1,'MIC 0','—'),
   t('B-Roll: Geländer tief entlang, Schlosstürme, Pferdebändiger/Details, nasses Pflaster/Pfütze','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Close-ups: Gesicht, Mantelkragen, Handschuhe, Schuhe auf Pflaster','P2','Close-up',4,'MIC 0','S24 + Stativ'),
   t('Thumbnail/Foto: Schloss klar erkennbar; nicht mittig vor Hauptturm','P1','Foto',3,'MIC 0','S24'),
   t('Field Recording: 2 saubere Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-1','Fr 09.10.2026','14:30-14:40','Transfer: Alter Garten → Schlossinsel','Alter Garten → Schloss Schwerin','Transfer',
   'Abbau, kurzer Fußweg und neues Setup. Die Orte liegen nah beieinander, aber Null-Minuten-Übergänge sind unrealistisch.','',[
   t('Stativ abbauen / Equipment sichern','P1','Organisation',3,'MIC 0','—'),
   t('Zur Schlossinsel gehen','P1','Transfer',4,'MIC 0','zu Fuß'),
   t('Neues Setup / Linse kurz prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('schlossinsel','Fr 09.10.2026','14:40-15:40','Schlossinsel / Burggarten','Lennéstraße 1, 19053 Schwerin','Schloss-Cluster','',
   'Laubrascheln, Schritte auf unterschiedlichen Untergründen, Wind in Bäumen, ruhige Schloss-/Park-Atmo.',[
   t('BTS: Weg/Eingang zeigen + sagen, welche Perspektive du suchst','P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Architektur: Türme, Türen, Fassadendetails, Statuen, Geländer, Treppen','P2','B-Roll',7,'MIC 0','S24 + Stativ'),
   t('Low Angle: Schlossfassade nach oben; Vertikalen möglichst gerade halten','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Foreground: durch Geländer/Blätter/Torbogen; du im Hintergrund','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A an 1-2 stärksten Winkeln: Medium + Close','P1','Performance',8,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Outfit B hier bewusst NICHT drehen: kein Umziehen draußen und kein separater Hotel-Rückweg','P2','Organisation',1,'MIC 0','—'),
   t('Stillness: 15-20 s, du fast still; Wind/Blätter/Umgebung bewegen sich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Vogelperspektive ohne Drohne: sichere erhöhte Position suchen','P2','Top-down',4,'MIC 0','S24 + Stativ'),
   t('Clean Plate + 20 s Atmo','P1','Clean Plate',4,'MIC 0','S24 + Stativ'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',7,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-2','Fr 09.10.2026','15:40-15:50','Transfer: Schlossinsel → Schlossgarten','Schloss Schwerin → Schlossgarten','Transfer',
   'Kurzer Fußweg plus Abbau/Aufbau.','',[
   t('Equipment sichern und Standort wechseln','P1','Transfer',6,'MIC 0','zu Fuß'),
   t('Aufbau / Testframe / Linse prüfen','P1','Puffer',4,'MIC 0','S24 + Stativ')
  ]),
  loc('schlossgarten','Fr 09.10.2026','15:50-16:55','Schlossgarten / Kreuzkanal','Lennéstraße, 19053 Schwerin','Schloss-Cluster','',
   'Wind in Baumkronen, Blätter am Boden, Schritte, Wasser am Kanal; 30-60 s Clean Atmo.',[
   t('BTS: Setup + symmetrische Sichtachse + kurzer Vorher/Nachher-Kommentar','P1','BTS',5,'MIC 1','S24 + DJI Mic Mini'),
   t('Wide symmetrisch: du mittig oder leicht off-center','P1','Shot',6,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich auf Weg/Allee; gleiche Kamerahöhe und Laufrichtung','P1','Shot',6,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: P1 - Anzug/Mantel an stärkster Sichtachse','P1','Performance',9,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Outfit B hier bewusst NICHT drehen: Tagescluster bleibt komplett im Anzug','P2','Organisation',1,'MIC 0','—'),
   t('B-Roll: Bäume im Wind, Blätter, Schuh durch Blätter, Kreuzkanal, Wasser, Statuen','P2','B-Roll',7,'MIC 0','S24 + Stativ'),
   t('Pfützenspiegelung: Kamera 10-20 cm hoch; 60 fps bei Schritt durchs Bild','P1','Reflection',6,'MIC 0','S24 + Stativ'),
   t('Clean Plate + Foto/Thumbnail','P1','Foto',4,'MIC 0','S24'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',7,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-3','Fr 09.10.2026','16:55-17:05','Transfer: Schlossgarten → Burgsee-Ufer','Schlossgarten → Bertha-Klingberg-Platz','Transfer',
   'Kurzer Standortwechsel; bewusst 10 Minuten statt direkt nahtlos weiter.','',[
   t('Abbau + Equipment sichern','P1','Organisation',3,'MIC 0','—'),
   t('Zum Burgsee-Ufer / Schwimmende Wiese gehen','P1','Transfer',5,'MIC 0','zu Fuß'),
   t('Ufer-Setup / Linse / Windschutz prüfen','P1','Puffer',2,'MIC 0','S24 + Stativ')
  ]),
  loc('burgsee','Fr 09.10.2026','17:05-19:00','Schwimmende Wiese + Burgsee-Ufer','Bertha-Klingberg-Platz, 19053 Schwerin','Schloss-Cluster','',
   'Schilfrascheln, Wasserplätschern/Wellen, Vögel, Wind, ferne Stadt. Nahgeräusche mit DJI Mic windgeschützt.',[
   t("BTS: Ufer/Schlossblick + 'Jetzt kommen die klein-im-Bild-Shots'",'P1','BTS',6,'MIC 1','S24 + DJI Mic Mini'),
   t('P1 Hero: Schloss vom Ufer mit Schilf unscharf im Vordergrund','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('P1 Hero: du am Ufer klein im Bild (ca. 10-20 % Bildhöhe), Schloss hinten','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Wide: Rücken zur Kamera, Blick aufs Schloss/Wasser','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich ca. 7 m entfernt, fast Ganzkörper; See/Schloss hinten','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: Wide + Medium an stärkstem Uferwinkel','P1','Performance',13,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Outfit B am Burgsee bewusst NICHT separat drehen: Casual-P1 wird im Nacht-Cluster und am Zippendorfer Strand abgedeckt','P1','Organisation',1,'MIC 0','—'),
   t('B-Roll: Schilf, Wasser/Wellen, Schlossreflexion, Hände am Geländer, Wind im Mantel, Silhouette','P2','B-Roll',11,'MIC 0','S24 + Stativ'),
   t('Close-ups: Augen/Gesicht 2x, Hände/Handschuhe, Schuhe, Mantel-/Jackenstoff','P2','Close-up',7,'MIC 0','S24 + Stativ'),
   t('Hero 16:9 + Hero 9:16 + Thumbnail','P1','Hero',11,'MIC 0','S24 + Stativ'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',10,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('drone-castle','Fr/Sa/So','nur bei sicherem Fenster','Drohnenblock Schloss','Vor Start DIPUL-Geozone und tatsächliche Bedingungen prüfen','BONUS',
   'BONUS. Abbruch bei Regen/Niesel, starken Böen, Menschenmenge, rechtlicher Unklarheit oder schlechtem Start-/Landeplatz.','',[
   t('Ruhiger 1/4- bis 1/2-Orbit um das Schloss','BONUS','Drohne',7,'MIC 0','DJI Mini 4 Pro'),
   t('Schloss/Insel Top-down','BONUS','Drohne',7,'MIC 0','DJI Mini 4 Pro'),
   t('Park/Schlossgarten Top-down oder 45° schräg','BONUS','Drohne',7,'MIC 0','DJI Mini 4 Pro'),
   t('Du aus Vogelperspektive auf freier Fläche; gleiche Pose für Collage','BONUS','Drohne',7,'MIC 0','DJI Mini 4 Pro'),
   t('Ein vertikaler Drohnen-Hero zusätzlich zum Querformat','BONUS','Drohne',7,'MIC 0','DJI Mini 4 Pro')
  ]),
  loc('fri-dinner-transfer','Fr 09.10.2026','19:00-20:25','Hotelpause: Backup + Essen + Outfit A→B','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Pause / Hotel / Outfitwechsel',
   'Pflicht-Rückkehr ins Hotel. Der komplette Tagescluster endet im Anzug. Erst im Hotel auf Casual wechseln; danach bleibt Outfit B für den gesamten Nachtcluster an.','',[
   t('Burgsee → Avalon Hotel; Equipment sicher verstauen','P1','Transfer',15,'MIC 0','zu Fuß / ÖPNV je nach Lage'),
   t('S24 / wichtige Dateien auf SSD kopieren und 2–3 Dateien testweise öffnen','P1','Daten',15,'MIC 0','SSD + S24'),
   t('OUTFITWECHSEL IM HOTEL: Anzug (A) → Pulli + Hose / Casual (B); Haare/Kragen/Kontinuität kurz prüfen','P1','Outfit',10,'MIC 0','Outfit B / Spiegelcheck'),
   t('Abendessen + Getränk','P1','Pause',20,'MIC 0','—'),
   t('Akkus / Mic / Powerbank prüfen und kurz nachladen','P1','Organisation',10,'MIC 0','Ladegeräte / Powerbank'),
   t('Avalon Hotel → Altstädtischer Markt; Outfit B bleibt bis Tagesende an','P1','Transfer',15,'MIC 0','zu Fuß')
  ]),
  loc('markt','Fr 09.10.2026','20:25-21:15','Altstädtischer Markt - Nacht','Am Markt, 19055 Schwerin','Nacht-Cluster','',
   'Regen auf Pflaster, Schritte durch Pfützen, einzelne Auto-Pass-bys vom sicheren Gehweg, Stadt-Hall/Markt-Atmo. Keine privaten Gespräche/fremde Musik als Hauptsample.',[
   t('BTS: Night-Setup + Satz über Regen/Reflexionen','P1','BTS',3,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate: Markt/Fassaden 10 s','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Wide: du klein im Platz, Architektur dominant','P1','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance Outfit B P1 am besten Hintergrund: Casual als durchgehender Nachtlook','P1','Performance',5,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Zweites Performance-Framing in Outfit B nur wenn klar anderer Bildwinkel; kein Outfitwechsel','P2','Performance',5,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Walking-Collage: seitlich entlang Häuserfront/Laternen','P1','Shot',4,'MIC 0','S24 + Stativ'),
   t('B-Roll: Fassaden, Fenster, Pflaster, Pfützen, Laternen, Blätter, Regenrinne','P2','B-Roll',5,'MIC 0','S24 + Stativ'),
   t('Pfützenspiegelung: Kamera extrem tief; du/Laterne/Fassade in Reflexion','P1','Reflection',4,'MIC 0','S24 + Stativ'),
   t('Close: Gesicht mit Seitenlicht, Highlights schützen','P2','Close-up',3,'MIC 0','S24 + Stativ'),
   t('Thumbnail: nasses Pflaster + Architektur + du','P1','Foto',3,'MIC 0','S24'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',5,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-night-1','Fr 09.10.2026','21:15-21:30','Transfer: Altstädtischer Markt → Schelfstadt','Am Markt → Puschkinstraße 3','Transfer',
   'Fußweg, Abbau und kurzes neues Setup.','',[
   t('Equipment sichern / Standort verlassen','P1','Organisation',3,'MIC 0','—'),
   t('Zur Schelfkirche / Schelfstadt gehen','P1','Transfer',9,'MIC 0','zu Fuß'),
   t('Testframe / Nachtbelichtung prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('schelfstadt','Fr 09.10.2026','21:30-22:20','Schelfstadt / Schelfkirche','Puschkinstraße 3, 19055 Schwerin','Nacht-Cluster','',
   'Kopfsteinpflaster-Schritte, Regenrinne/Tropfen, Wind in Gassen, Tür-/Torgeräusch nur öffentlich und ohne Personen zu stören.',[
   t("BTS: 10 s Gasse + 'enge Gassen / Fachwerk / Nachtlook'",'P1','BTS',3,'MIC 1','S24 + DJI Mic Mini'),
   t('Walking-Collage: seitlich 5-7 m, Körper fast komplett sichtbar','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Performance Outfit B P1: Kopfsteinpflaster/Backstein/enge Gasse','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Zweites Casual-Performance-Framing nur wenn Laterne/Fassade deutlich stärker wirkt; kein Outfitwechsel','P2','Performance',6,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Fachwerk, Backstein, Fenster, Laternen, Äste, Blätter','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Low Angle: Schuhe auf Kopfsteinpflaster, 60 fps','P2','Close-up',4,'MIC 0','S24 + Stativ'),
   t('Foreground: durch Tor/Geländer/Äste auf dich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Clean Plate + Atmo 20 s','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-night-2','Fr 09.10.2026','22:20-22:30','Transfer: Schelfstadt → Pfaffenteich','Puschkinstraße 3 → Pfaffenteich','Transfer',
   'Kurzer Fußweg plus Abbau/Aufbau.','',[
   t('Equipment sichern und zum Pfaffenteich wechseln','P1','Transfer',7,'MIC 0','zu Fuß'),
   t('Wasser-/Licht-Setup kurz prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('pfaffenteich','Fr 09.10.2026','22:30-23:20','Pfaffenteich - Nacht','Pfaffenteich, 19055 Schwerin','Nacht-Cluster','',
   'Wasser, Wind, Vögel, ferne Stadt/Verkehr; ggf. Straßenbahn-Sound aus sicherem öffentlichen Bereich.',[
   t('BTS: Wasser/Häuser zeigen + sagen, was noch fehlt','P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Wide: du am Wasser, Häuser/Lichter im Hintergrund','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: Promenade/Laternen, gleiche Laufrichtung','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Stillness: du sitzt/stehst, Wasser bewegt sich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance: genau 1 starkes Setup in Outfit B; kein Outfitwechsel am Pfaffenteich','P2','Performance',6,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Wasser, Reflexionen, Lichter, Geländer, Bäume im Wind, Regentropfen','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Silhouette gegen helle Häuser/Wasserreflexion','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t("Clean Plate + 20 s Atmo + Abschluss-BTS 'Nacht-Cluster geschafft'",'P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-return','Fr 09.10.2026','23:20-23:50','Rückweg zum Avalon Hotel + Tagesabschluss','Bürgermeister-Bade-Platz, Schwerin','Rückfahrt / Abschluss',
   'Ziel: The Avalon Hotel, Bürgermeister-Bade-Platz, Schwerin. 30 Minuten Reserve; wenn der tatsächliche Weg kürzer ist, wird die Restzeit zum Backup-/Ladepuffer.','',[
   t('Equipment vollständig einpacken und Pfaffenteich verlassen','P1','Organisation',5,'MIC 0','—'),
   t('Rückweg zur Unterkunft','P1','Transfer',20,'MIC 0','zu Fuß / ÖPNV / Fahrzeug'),
   t('In Unterkunft: Geräte ans Ladegerät, SSD sicher ablegen','P1','Organisation',5,'MIC 0','Ladegeräte + SSD')
  ]),
  loc('sat-outbound','Sa 10.10.2026','08:00-08:30','Avalon Hotel → Zippendorfer Strand','Am Strand 14, 19063 Schwerin','Transfer',
   'Start: The Avalon Hotel, Bürgermeister-Bade-Platz, Schwerin. 30 Minuten Reserve; vor Abfahrt Route in Maps prüfen.','',[
   t('Tagesausrüstung vollständig prüfen und Unterkunft verlassen','P1','Organisation',5,'MIC 0','—'),
   t('Fahrt / Weg zum Zippendorfer Strand','P1','Transfer',20,'MIC 0','zu Fuß / ÖPNV / Fahrzeug'),
   t('5 Minuten Ankunfts- und Aufbaupuffer','P1','Puffer',5,'MIC 0','—')
  ]),
  loc('zippendorf','Sa 10.10.2026','08:30-11:30','Zippendorfer Strand - Bonuslocation','Am Strand 14, 19063 Schwerin','Bonus-Location',
   'Nur wenn P1 Schloss + Nacht erledigt sind. Neue Bildwelt statt blindem Wiederholen.',
   'Wellen/Wasser, Wind, Schilf/Gräser, Schritte auf Sand/Kies, Vögel; Stereo-Atmo 60 s.',[
   t("BTS: Ankunft + 'neue Bildwelt: offener See statt Schloss'",'P1','BTS',13,'MIC 1','S24 + DJI Mic Mini'),
   t('Extreme Wide: du klein am Wasser','P1','Shot',18,'MIC 0','S24 + Stativ'),
   t('Walking seitlich an Promenade/Strandkante','P1','Shot',18,'MIC 0','S24 + Stativ'),
   t('Performance Outfit B P1; Outfit A nur wenn Wind/Look passt','P1','Performance',26,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Foreground: Schilf/Gräser/Zäune/Äste','P2','Shot',15,'MIC 0','S24 + Stativ'),
   t('Details: Wasser, Sand, Schuhe, Hände, Jacke im Wind, Promenade','P2','B-Roll',22,'MIC 0','S24 + Stativ'),
   t('Clean Plate + 20 s Atmo + Foto','P1','Foto',13,'MIC 0','S24'),
   t('Drohne nur bei legalem, trockenem und deutlich windärmerem Fenster','BONUS','Drohne',21,'MIC 0','DJI Mini 4 Pro'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',22,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('sat-transfer','Sa 10.10.2026','11:30-12:30','Hotelpause: Zippendorf → Backup + Essen + Outfit B→A','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Logistik / Hotel / Outfitwechsel',
   'Pflicht-Rückkehr ins Hotel. Zippendorf wird komplett Casual gedreht; der Nachmittag startet danach im Anzug.','',[
   t('Zippendorf → Avalon Hotel','P1','Transfer',20,'MIC 0','ÖPNV / Fahrzeug / Route vorher prüfen'),
   t('Zippendorf-Material kurz prüfen und wichtige Dateien auf SSD sichern','P1','QC',10,'MIC 0','S24 + SSD'),
   t('OUTFITWECHSEL IM HOTEL: Pulli + Hose / Casual (B) → Anzug (A); Sitz/Kragen/Haare prüfen','P1','Outfit',10,'MIC 0','Outfit A / Spiegelcheck'),
   t('Essen + Getränk','P1','Pause',15,'MIC 0','—'),
   t('Offene P1-Liste festlegen; danach Hotel im Anzug verlassen','P1','Organisation',5,'MIC 0','S24')
  ]),
  loc('sat-pickups','Sa 10.10.2026','12:30-15:00','Pickup-Block','Nur laut offener P1-Liste','Pickups',
   'Kein kompletter Wiederholungsbesuch. Nach der Hotelpause läuft dieser Block in Outfit A (Anzug). Nur offene Pflichtpunkte schließen, die zu Outfit A passen; Casual-Pickups nicht erzwingen.','',[
   t('Offene P1-Shots in App filtern','P1','Organisation',32,'MIC 0','—'),
   t('Nur zum exakten fehlenden Spot fahren','P1','Organisation',32,'MIC 0','—'),
   t("Kein 'wenn ich schon mal hier bin, filme ich alles nochmal'",'P1','Organisation',32,'MIC 0','—'),
   t('Nach jedem Pickup Fokus/Linse/Belichtung prüfen','P1','QC',15,'MIC 0','S24 + Stativ'),
   t('Wenn alles P1 erledigt: Pause, Akkus, Daten, Longform-Talking statt redundanter B-Roll','P2','Organisation',27,'MIC 0','—')
  ]),
  loc('sat-universal','Sa 10.10.2026','15:15-17:15','Neue Location / Universal-Blueprint','Vor Ort eine wirklich neue Bildwelt auswählen','Neue Location',
   'Nur wenn P1 weitgehend komplett ist. Dieser Block bleibt in Outfit A (Anzug). Neue Optik statt noch mehr Schloss-Duplikate; kein Outdoor-Outfitwechsel.','',[
   t('Location mit mindestens zwei starken Kriterien auswählen','P1','Organisation',8,'MIC 0','—'),
   t('BTS: Warum ist diese Location visuell anders?','P1','BTS',5,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate + Extreme Wide + Wide','P1','Shot',18,'MIC 0','S24 + Stativ'),
   t('Walking-Collage im gleichen Outfit und gleicher Laufrichtung','P1','Shot',16,'MIC 0','S24 + Stativ'),
   t('Eine starke Performance statt mehrere ähnliche Setups','P1','Performance',22,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Close-ups + 3 Details + Low/Foreground','P2','B-Roll',18,'MIC 0','S24 + Stativ'),
   t('Thumbnail/Foto + 20-60 s Stereo-Atmo + 2 Foley-Sounds','P1','Audio',18,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('sat-bluehour','Sa 10.10.2026','17:30-19:15','Optionale Dämmerung','Nur falls Freitagabend ausgefallen ist oder klar anderer Lichtlook','Lichtfenster',
   'Maximal EIN Cluster wiederholen. Outfit A (Anzug) bleibt an. Nur bei echtem Mehrwert; kein Outdoor-Outfitwechsel.','',[
   t('Nur Hero, Performance und Reflection - keine komplette B-Roll-Liste','P1','Performance',62,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('BTS kurz erklären, warum zweiter Besuch visuell nötig ist','P1','BTS',31,'MIC 1','S24 + DJI Mic Mini')
  ]),
  loc('sat-evening','Sa 10.10.2026','19:15-20:15','Zurück ins Hotel: Essen + Akkus + Backup + ggf. Outfit A→B','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Logistik / Hotel',
   'Nach dem Nachmittagscluster zurück ins Hotel. Nur wenn anschließend ein echter Nacht-P1 draußen gedreht werden muss, im Hotel auf Outfit B wechseln. Sonst kein weiterer Outfitwechsel nötig.','',[
   t('Zum Avalon Hotel zurückkehren','P1','Transfer',10,'MIC 0','zu Fuß / ÖPNV je nach letzter Location'),
   t('S24 / SD-Karte auf SSD kopieren – Originale soweit möglich behalten','P1','Daten',15,'MIC 0','SSD + S24'),
   t('Essen + Getränk','P1','Pause',15,'MIC 0','—'),
   t('Akkus, Mic, Controller und Powerbank laden','P1','Organisation',10,'MIC 0','Ladegeräte'),
   t('P1-Stand prüfen: Nacht-P1 offen? Nur dann IM HOTEL Anzug (A) → Casual (B) wechseln','P1','Outfit',10,'MIC 0','Outfit / Spiegelcheck')
  ]),
  loc('sat-longform','Sa 10.10.2026','20:15-22:30','Longform + Indoor / Nacht-Pickups','Unterkunft oder genau ein noch fehlender Nachtspot','Longform',
   'Hotel ist die Basis. Wenn ein Nacht-P1 offen ist: vorher im Hotel Outfit B anziehen und nur diesen einen Spot anfahren. Ohne Nacht-P1 bleibt der Block im Hotel; kein Outfitwechsel nur für BTS/Review.','',[
   t('Longform-Talking: Was wurde heute geschafft, was fehlt, was ging schief?','P1','BTS',20,'MIC 1','S24 + DJI Mic Mini'),
   t('BTS: Materialreview / Timeline / Backup zeigen','P1','BTS',15,'MIC 1','S24 + DJI Mic Mini'),
   t('Indoor-Close-ups: Hände, Kleidung, Equipment, Speichermedien','P2','Close-up',20,'MIC 0','S24 + Stativ'),
   t('Optional genau einen fehlenden Nacht-P1-Shot nachholen','P1','Shot',35,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ'),
   t('Zweite vollständige SSD-Sicherung / Stichprobe großer Dateien','P1','Daten',25,'MIC 0','SSD + S24'),
   t('SONNTAGS-ENTSCHEIDUNG: 11:06-Zug fest einplanen. Nur wenn noch ein wirklich kritischer P1 fehlt, auf einen späteren Zug wechseln','P1','Organisation',10,'MIC 0','—')
  ]),
  loc('sun-start','So 11.10.2026','06:45-07:15','Frühstück + früher Tagesstart','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Tagesstart',
   'Früh starten, damit Sound, letzte P1, Datencheck und Abreise ohne Hektik vor dem 11:06-Zug erledigt sind.','',[
   t('Frühstück + Wasser','P1','Pause',15,'MIC 0','—'),
   t('Offene P1-Liste auf maximal 1–2 realistische Restpunkte reduzieren','P1','Organisation',5,'MIC 0','S24'),
   t('Im Hotel EIN Outfit für den wichtigsten Rest-P1 wählen und anziehen: A oder B. Dieses Outfit bleibt bis zum letzten Außendreh an','P1','Outfit',5,'MIC 0','Outfit / Spiegelcheck'),
   t('Nur Tagesausrüstung mitnehmen; Rest bereits grob vorsortieren','P1','Organisation',5,'MIC 0','Tasche / Equipment'),
   t('Hotelzimmer kurz vorordnen, damit Packen später schnell geht','P1','Organisation',5,'MIC 0','—')
  ]),
  loc('sun-sound','So 11.10.2026','07:15-07:45','Field Recording am Pfaffenteich','Pfaffenteich, Schwerin','Audio',
   'Direkt nahe am Hotel erledigen. Keine weite Extra-Location mehr nur für Sound anfahren. Visuelle P1 haben trotzdem Vorrang, falls noch etwas Kritisches offen ist.',
   'Breite Wasser-/Stadtatmo, Wind/Bäume, Schritte/Laub, Wasser/Foley; keine privaten Gespräche oder fremde Musik gezielt aufnehmen.',[
   t('Breite Pfaffenteich-Atmo 30–60 s, Handy komplett ruhig','P1','Audio',7,'MIC S','S24 Stereo'),
   t('Wasser/Wind zweite Stereo-Atmo aus anderem Winkel','P1','Audio',6,'MIC S','S24 Stereo'),
   t('2–4 isolierte Foley-Sounds: Schritte, Laub, Stoff oder Wasser','P1','Audio',10,'MIC D','DJI Mic Mini + Windschutz'),
   t('Aufnahmen kurz anhören / Pegel und Störgeräusche prüfen','P1','QC',4,'MIC 0','S24 + Kopfhörer')
  ]),
  loc('sun-final','So 11.10.2026','07:45-09:15','Letzte gezielte P1-Pickups','Pfaffenteich / Schelfstadt / nur nahe offene P1','Abschlussdreh',
   'Kein neuer Voll-Dreh und keine komplette Outfit-Matrix. Vor Abfahrt im Hotel genau EIN Outfit passend zum wichtigsten Rest-P1 wählen; draußen wird nicht gewechselt. Maximal 1–2 konkrete P1 in Hotel-/Bahnhofsnähe schließen. Brauchen zwei offene Shots unterschiedliche Outfits, gewinnt der wichtigere P1.','',[
   t('Genau festlegen: Welche maximal 1–2 P1 fehlen noch? Alles andere bewusst streichen','P1','Organisation',5,'MIC 0','S24'),
   t('Fehlenden P1-Hero / Performance / Walking gezielt drehen','P1','Shot',35,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ'),
   t('Falls nötig genau einen zweiten kritischen P1 drehen','P1','Shot',25,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ'),
   t('Finales Longform-Fazit: Was geschafft? Was fehlt bewusst? Wie viel Material ist entstanden?','P1','BTS',12,'MIC 1','S24 + DJI Mic Mini'),
   t('Vor Ort letzter Materialcheck: Clips abspielbar, Ton bei Schlüsselclips vorhanden','P1','QC',8,'MIC 0','S24')
  ]),
  loc('sun-return','So 11.10.2026','09:15-09:30','Zurück zum Avalon Hotel','Bürgermeister-Bade-Platz 8, 19055 Schwerin','Transfer',
   'Spätestens 09:15 den Dreh beenden. Keine spontane Zusatzlocation mehr.','',[
   t('Equipment vollständig einpacken','P1','Organisation',4,'MIC 0','—'),
   t('Rückweg zum Hotel','P1','Transfer',8,'MIC 0','zu Fuß'),
   t('Ankunftspuffer','P1','Puffer',3,'MIC 0','—')
  ]),
  loc('sun-review','So 11.10.2026','09:30-10:00','Finaler Daten- und Vollständigkeitscheck','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Daten / Review',
   'Noch nicht schneiden. Nur sichern, verifizieren und sauber notieren, damit zuhause sofort Content Reviewing möglich ist.','',[
   t('Neue Dateien auf Reise-SSD kopieren; auf dem S24 wichtige P1 nach Möglichkeit behalten','P1','Daten',10,'MIC 0','SSD + S24'),
   t('Mehrere große Dateien von der SSD wirklich öffnen: Anfang, Mitte, Ende','P1','QC',7,'MIC 0','SSD + S24'),
   t('P1-Liste final abhaken / bewusst verworfene Punkte markieren','P1','Organisation',5,'MIC 0','S24'),
   t('Kurze Review-Notiz: stärkste Clips, Probleme, erste Cut-Ideen','P2','Organisation',5,'MIC 0','S24')
  ]),
  loc('sun-pack','So 11.10.2026','10:00-10:30','Packen + Zimmercheck','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Logistik',
   'Ab 10:00 keine neuen Drehs mehr beginnen.','',[
   t('S24, SSD, Mic, Drohne, Controller, Akkus, Ladegeräte, Stativ und beide Outfits vollständig einpacken','P1','Organisation',15,'MIC 0','—'),
   t('SSD / Speichermedien körpernah und sicher verstauen','P1','Organisation',5,'MIC 0','—'),
   t('Zimmer, Bad, Steckdosen und unter dem Bett vollständig kontrollieren','P1','Organisation',5,'MIC 0','—')
  ]),
  loc('sun-checkout','So 11.10.2026','10:30-10:40','Check-out','The Avalon Hotel, Bürgermeister-Bade-Platz 8, 19055 Schwerin','Abreise',
   'Spätestens 10:40 wirklich das Hotel verlassen.','',[
   t('Check-out erledigen / Schlüssel abgeben','P1','Organisation',5,'MIC 0','—'),
   t('Direkt danach zum Hauptbahnhof losgehen','P1','Organisation',5,'MIC 0','Gepäck')
  ]),
  loc('sun-departure','So 11.10.2026','10:40-11:06','Avalon Hotel → Schwerin Hbf · Zug 11:06','Grunthalplatz 4, 19053 Schwerin','Abreise',
   'Hotel und Hauptbahnhof liegen nur wenige Gehminuten auseinander. Trotzdem 10:40 los, damit Gepäck, Orientierung und Bahnsteigwechsel kein Stress werden.','',[
   t('Zu Fuß zum Schweriner Hauptbahnhof','P1','Transfer',10,'MIC 0','Gepäck'),
   t('Bahnsteig / Zug prüfen und spätestens ca. 10:50–10:55 am Gleis sein','P1','Organisation',6,'MIC 0','DB-App / Ticket'),
   t('11:06 Zug nehmen – Schwerin-Dreh abgeschlossen','P1','Abreise',10,'MIC 0','Ticket')
  ])
 ]
}]
};

const outfitCfg={
 'alter-garten':{start:'A',plan:'OUTFIT A – Anzug. Kompletter Tages-/Schlosscluster bleibt in A. Kein Wechsel vor Ort; Casual-Shots an dieser Location werden bewusst gestrichen statt extra zum Hotel zurückzufahren.'},
 'schlossinsel':{start:'A',plan:'OUTFIT A – Anzug. Kein Outdoor-Wechsel. Alle Personen-/Performance-Shots hier im Anzug; Outfit B wird später als eigener Nachtlook genutzt.'},
 'schlossgarten':{start:'A',plan:'OUTFIT A – Anzug. Tagescluster bleibt vollständig in A. Kein Umziehen draußen.'},
 'burgsee':{start:'A',plan:'OUTFIT A – Anzug bis Ende Burgsee. Danach verpflichtend zurück zum Avalon Hotel: Backup + Essen + dort A→B wechseln.'},
 'markt':{start:'B',plan:'OUTFIT B – Pulli + Hose / Casual. Im Hotel angezogen. Der gesamte Nachtcluster Markt → Schelfstadt → Pfaffenteich bleibt in B.'},
 'schelfstadt':{start:'B',plan:'OUTFIT B – Casual. Kein Wechsel vor Ort; nur Casual-Framings drehen.'},
 'pfaffenteich':{start:'B',plan:'OUTFIT B – Casual bis Tagesende. Danach direkt zurück ins Hotel.'},
 'zippendorf':{start:'B',plan:'OUTFIT B – Casual ab Hotel. Kompletten Zippendorf-Block in B drehen. Anschließend zurück zum Hotel und dort B→A wechseln.'},
 'sat-pickups':{start:'A',plan:'OUTFIT A – Anzug nach der Hotelpause. Nur Pickups drehen, die zu A passen; kein Casual-Wechsel draußen.'},
 'sat-universal':{start:'A',plan:'OUTFIT A – Anzug. Neue Location komplett in A drehen; kein Outdoor-Wechsel.'},
 'sat-bluehour':{start:'A',plan:'OUTFIT A – Anzug. Dämmerungsblock bleibt in A. Danach zurück ins Hotel.'},
 'sat-longform':{start:'FLEX',plan:'Im Hotel bleiben: Outfit egal. Falls genau ein Nacht-P1 draußen offen ist, VOR dem Verlassen des Hotels Outfit B anziehen und draußen nicht mehr wechseln.'},
 'sun-final':{start:'FLEX',plan:'Vor dem Verlassen des Hotels EIN Outfit passend zum wichtigsten Rest-P1 auswählen. Dieses Outfit bleibt für alle Sonntag-Pickups an; kein Outdoor-Wechsel.'}
};
const personShot=/\b(BTS|Walking|Performance|Wide|Hero|Close|Silhouette|Stillness|Foreground|Vogelperspektive|du\b|Thumbnail\/Foto)/i;
const p0=window.BLUEPRINT_SEED.projects.find(p=>p.id==='schwerin-2026-10');
if(p0){
 for(const l of p0.locations){
   const cfg=outfitCfg[l.id];
   if(!cfg) continue;
   l.outfitPlan=cfg.plan;
   let current=cfg.start;
   const out=[];
   const label=x=>x==='A'?'Outfit A':x==='B'?'Outfit B':'FLEX';
   out.push(t('OUTFIT-CHECK: '+(current==='FLEX'?'passendes Outfit für diesen Block festlegen':label(current)+' anziehen / Sitz, Haare, Kragen und Kontinuität prüfen'),'P1','Outfit',2,'MIC 0','Outfit / Spiegelcheck'));
   for(const task of l.tasks){
     const explicitA=/Outfit A/i.test(task.text);
     const explicitB=/Outfit B/i.test(task.text);
     const both=/pro Outfit|A \+ B|Outfit A.*Outfit B|Outfit B.*Outfit A/i.test(task.text);
     if(cfg.switchText && task.text.includes(cfg.switchText) && !cfg.switchAfter){
       out.push(t((cfg.switchLabel||('OUTFITWECHSEL: '+label(current)+' → '+label(cfg.switchTo)))+'; kurz Kontinuität/Falten/Kragen prüfen',cfg.switchPriority||'P1','Outfit',4,'MIC 0','Outfit / Spiegelcheck'));
       current=cfg.switchTo;
     }
     if(both) task.outfit='A/B';
     else if(explicitA && explicitB) task.outfit='A/B';
     else if(explicitA) task.outfit='A';
     else if(explicitB) task.outfit='B';
     else if(personShot.test(task.text)) task.outfit=current==='FLEX'?'FLEX':current;
     else task.outfit='—';
     out.push(task);
     if(cfg.switchText && task.text.includes(cfg.switchText) && cfg.switchAfter){
       out.push(t((cfg.switchLabel||('OUTFITWECHSEL: '+label(current)+' → '+label(cfg.switchTo)))+'; nur durchführen, wenn der zweite Look noch gebraucht wird',cfg.switchPriority||'P1','Outfit',4,'MIC 0','Outfit / Spiegelcheck'));
       current=cfg.switchTo;
     }
   }
   l.tasks=out;
 }
}

const nightType=l=>/Nacht/i.test((l.type||'')+' '+(l.name||''));
function clipDetails(task,l){
 const s=(task.text||'').toLowerCase(), cat=task.category||'Shot', night=nightType(l);
 const light=night
   ? 'Licht: nächste Laterne/Fassade 30–60° seitlich vor dir; Gesicht nicht direkt unter die Lampe stellen. Belichtung auf Haut/Highlights sperren.'
   : 'Licht: Gesicht möglichst 30–60° zum helleren Himmel drehen; direkte harte Frontsonne vermeiden. Bei Gegenlicht Belichtung auf Gesicht kontrollieren.';
 const common='Stativ fest; 1x-Hauptkamera; Horizont/Vertikalen prüfen; AE/AF vor Take sperren; 2 s Vorlauf + 2 s Nachlauf.';
 if(['Organisation','Transfer','Pause','Puffer','Daten','QC','Outfit','Regel','Abreise'].includes(cat)) return {clip:'—',how:'Keine eigentliche Videoaufnahme. Aufgabe durchführen und erst danach den nächsten Clip starten.'};
 if(cat==='BTS') return {clip:'10–20 s',how:'16:9. S24 auf Augenhöhe ca. 1,2–1,5 m vor dir oder sauberer Selfie-Armabstand. Brust bis Kopf im Bild, Hintergrund klar erkennbar. '+light+' Ein Satz: Ort + konkretes Ziel/Problem dieses Blocks. Nicht laufen, wenn der Ton wichtig ist; 1–2 Takes.'};
 if(cat==='Clean Plate') return {clip:'8–15 s',how:'Kamera exakt wie beim zugehörigen Hero/Wide aufbauen, aber ohne dich im Bild. '+common+' Komplett statisch aufnehmen; warten, bis möglichst keine Person durchs Hauptmotiv läuft. Keine Schwenks.'};
 if(cat==='Performance') return {clip:'15–25 s je Framing',how:'4K30. Kamera ca. 1,15–1,30 m hoch. Wide: 4–7 m Abstand; Medium: 2–3 m. Körper ca. 20–30° zur Kamera, Gesicht zur Linse bzw. knapp daran vorbei. '+light+' Kamera statisch. Songstelle 2–3 s vor Einsatz starten; kompletten Part ohne Unterbrechung performen; 2–3 Takes pro Framing.'};
 if(cat==='Hero') return {clip:'15–25 s je Format',how:'Einen starken, ruhigen Schlüsselshot bauen. Erst 16:9, danach neu für 9:16 komponieren – nicht nur später croppen. Kamera 1,1–1,3 m hoch, 1x, statisch; du auf Drittellinie oder bewusst mittig bei Symmetrie. '+light+' 2–3 Takes; im Take nur eine klare Aktion: stehen, Blickwechsel oder langsamer Schritt.'};
 if(cat==='Top-down') return {clip:'10–15 s',how:'Kamera so senkrecht wie sicher möglich nach unten; gleiche Körperposition im Frame halten. 1x, statisch. Du bleibst 5 s still und machst dann nur eine kleine Bewegung (Blick/Hand/Schritt). Keine perspektivische Schräglage, wenn es als Collage gedacht ist.'};
 if(cat==='Drohne') return {clip:'12–20 s nutzbar',how:'Nur bei legalem und sicherem Fenster. Bewegung extrem langsam und konstant; Start bereits 2–3 s vor der gewünschten Bewegung, danach 2–3 s auslaufen lassen. Keine abrupten Yaw-/Gimbal-Bewegungen. Für Orbit konstante Distanz/Höhe; für Top-down Gimbal exakt -90°.'};
 if(cat==='Foto') return {clip:'Foto + 8–12 s Video',how:'Zuerst Foto/Thumbnail separat komponieren, danach exakt denselben Frame 8–12 s als ruhiges Video halten. 1x; Gesicht/Schloss bzw. Hauptmotiv sauber trennen. '+light+' Für Thumbnail Blick/Posing bewusst halten, nicht während der Auslösung bewegen.'};
 if(cat==='Audio') return {clip:'30–60 s Atmo / 6–12 s je Foley',how:'Atmo: S24 ruhig und unbewegt, mindestens 30 s durchlaufen lassen; nicht sprechen und Handy nicht anfassen. Foley: DJI Mic Mini 10–40 cm an die Quelle, Windschutz drauf; 2–3 s Ruhe vor/nach dem Geräusch. Jeden guten Sound 3x aufnehmen: normal, leise/langsam, kräftig/schnell.'};
 if(cat==='Reflection') return {clip:'8–15 s',how:'4K60. Kamera 10–20 cm über Boden/Wasser, 1x. Spiegelbild zuerst sauber ausrichten; Fokus auf Reflexion bzw. markante Kante sperren. Du gehst einmal langsam quer durchs Spiegelbild; Kamera bleibt komplett statisch. '+light};
 if(cat==='Close-up') {
   if(/schuh|füß|pflaster|laub|blätter/.test(s)) return {clip:'6–10 s je Detail',how:'4K60. Kamera 10–20 cm über Boden, 1x oder 3x ohne Digitalzoom, ca. 45° seitlich zur Laufrichtung. Fokus auf den Punkt, an dem der Schuh durchs Bild kommt. 2 s leer starten, ein sauberer Schritt durchs Bild, 2 s leer auslaufen lassen. Kamera statisch.'};
   return {clip:'8–15 s je Detail',how:'4K30 für Gesicht, 4K60 für Hände/Stoff/Bewegung. Kamera auf Höhe des Details, nicht von oben herab. 3x für Gesicht/Hände wenn genug Abstand, sonst 1x. '+light+' Nur eine Aktion pro Clip: Blickwechsel, Kragen richten, Handschuh anziehen oder Stoff im Wind. Kamera statisch.'};
 }
 if(/walking|walk in|walk out|cross frame|promenade|auf kamera zu|von kamera weg/.test(s)) return {clip:'15–20 s pro Richtung',how:'4K60. Kamera ca. 1,1–1,3 m hoch, 1x, statisch. Seitliche Collage: 6–8 m Abstand, Körper fast komplett sichtbar, Kamera 90° zur Laufrichtung. 2 s bevor du ins Bild kommst starten, gleichmäßiges Tempo, vollständig durchs Bild laufen, danach 2 s weiterlaufen lassen. Für auf Kamera zu/weg mittig auf einer Leading Line bleiben.'};
 if(cat==='B-Roll') {
   if(/bäume|blätter|laub|schuh|wasser|kanal|statu/.test(s)) return {clip:'5–8 s je Motiv · 4–6 Einzelclips',how:'Nicht alles in einen Clip packen. 1) Baumkrone: Kamera 45° nach oben, 3x, statisch, Wind 6–8 s. 2) Blatt/Laub: Kamera 20–30 cm hoch, 1x, seitliches Licht, 4K60. 3) Schuh durchs Laub: 15 cm hoch, 45° seitlich, 4K60, ein Schritt. 4) Wasser/Kanal: 20–30 cm über Ufer, 1x, statisch, Wellen diagonal durchs Bild. 5) Statue/Architektur: 1x, 30–45° seitlich von unten, 6–8 s statisch. '+light};
   if(/fassad|fenster|laterne|pflaster|regenrinne|backstein|fachwerk/.test(s)) return {clip:'5–8 s je Motiv · 4–6 Einzelclips',how:'Je Motiv eigener Clip. Fassade: Kamera 1,2 m, 1x, 30–45° seitlich für Tiefe. Fenster/Laterne: 3x, statisch, Motiv auf Drittellinie. Pflaster/Pfütze: 15–25 cm hoch, 1x, 4K60. Regenrinne/Tropfen: 3x, stabil, 6–8 s. Keine schnellen Schwenks; lieber fünf ruhige Clips. '+light};
   if(/schilf|wellen|reflexion|mantel|silhouette/.test(s)) return {clip:'5–8 s je Motiv · 4–6 Einzelclips',how:'Schilf: 20–40 cm hinter/zwischen Halmen, 3x oder 1x, Fokus auf mittlere Ebene, Wind arbeiten lassen. Wasser/Wellen: 20–30 cm über Ufer, 1x, statisch, 4K60. Hände am Geländer: 3x, 45° seitlich, eine kleine Bewegung. Mantel im Wind: 3x, Hüfte bis Knie, 4K60. Silhouette: Kamera tief gegen hellere Wasser-/Himmelsfläche, Belichtung auf Hintergrund. '+light};
   return {clip:'5–8 s je Motiv · 3–5 Einzelclips',how:'Jedes genannte Detail als eigenen ruhigen Clip aufnehmen. Kamera auf Höhe des Motivs, 1x oder optisches 3x; kein Digitalzoom. 4K60 bei Bewegung, sonst 4K30. Pro Clip nur ein Motiv/eine Aktion; 2 s Vor-/Nachlauf.'};
 }
 if(/extreme wide|wide|du klein|rücken zur kamera/.test(s)) return {clip:'15–25 s',how:'4K30. Kamera 1,1–1,3 m hoch, 1x, statisch. Abstand meist 8–15 m, sodass du nur ca. 10–25 % der Bildhöhe einnimmst. Architektur/Landschaft ist Hauptmotiv; du stehst auf einer Drittellinie oder zentral bei Symmetrie. '+light+' Eine klare Aktion: stehen, langsamer Blickwechsel oder 2–3 langsame Schritte.'};
 if(/foreground/.test(s)) return {clip:'10–15 s',how:'1x. Kamera 30–80 cm hinter Geländer/Blättern/Torbogen positionieren; Vordergrund nimmt ca. 15–30 % des Bildrands ein und bleibt unscharf. Du stehst 3–8 m dahinter im freien Bildbereich. Kamera statisch; Fokus auf dich sperren. '+light};
 if(/low angle/.test(s)) return {clip:'8–12 s',how:'Kamera 15–40 cm über Boden, 1x, ca. 30–45° nach oben. Senkrechte Linien möglichst gerade halten; nicht maximal nach oben kippen. Du bzw. das Hauptmotiv bleibt vollständig im Frame. Kamera statisch; 4K30, bei Schrittbewegung 4K60.'};
 if(/stillness/.test(s)) return {clip:'15–25 s',how:'Kamera statisch auf Stativ, 1x. Du bleibst fast vollständig still; nur Blick, Atem oder minimale Kopfbewegung. Hintergrundbewegung (Wasser, Wind, Menschen in Distanz) liefert Dynamik. '+light+' Mindestens 5 s wirklich ruhig am Anfang und Ende.'};
 if(/silhouette/.test(s)) return {clip:'10–15 s',how:'Kamera auf helle Fläche/Lichter/Wasser ausrichten und Belichtung auf den Hintergrund sperren, sodass du deutlich dunkler wirst. Du stehst seitlich oder mit Rücken zur Kamera; klare Kontur, keine Laterne direkt hinter dem Kopf. 1x, statisch.'};
 return {clip:'10–20 s',how:common+' Kamera etwa 1,2 m hoch, 1x. Aktion aus der Shot-Beschreibung genau einmal sauber ausführen; keine zusätzliche Kamerabewegung. '+light};
}
if(p0){
 for(const l of p0.locations){
   for(const task of l.tasks){
     const d=clipDetails(task,l);
     task.clip=task.clip||d.clip;
     task.how=task.how||d.how;
   }
 }
}
})();