(function(){
const t=(text,priority='P2',category='Shot',minutes=4,mic='MIC 0',gear='S24 + Stativ')=>({text,priority,category,minutes,mic,gear});
const loc=(id,date,time,name,address,type,notes,fieldrec,tasks)=>({id,date,time,name,address,type,notes,fieldrec,tasks});
window.BLUEPRINT_SEED={
version:6,
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
  'Bei langen Drehtagen Essen und echte Pausen als feste Zeitblöcke einplanen, nicht nur als Restzeit.'
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
 accommodation:{
   name:'The Avalon Hotel',
   address:'Bürgermeister-Bade-Platz, Schwerin',
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
  loc('alter-garten','Fr 09.10.2026','13:30-14:25','Alter Garten + Schlossbrücke','Alter Garten, 19055 Schwerin','Schloss-Cluster',
   'Schloss direkt gegenüber: Lennéstraße 1, 19053 Schwerin. Start des Schloss-Clusters.',
   'Schritte auf Brücke/Pflaster, Wind an Geländer/Bäumen, Wasser/Umgebung, ggf. einzelne Fahrzeuge aus sicherem Standpunkt.',[
   t("BTS: 10-20 s Selfie - 'Erster Hauptspot, Ziel ist heute Schloss komplett abzuhaken.'",'P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate: Brücke / Schloss 16:9, mindestens 10 s ohne dich','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Wide: du klein auf/nahe der Brücke, Schloss dominant','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Walking: auf Kamera zu + von Kamera weg; Leading Lines der Brücke nutzen','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich, 6-8 m Abstand, Körper fast komplett sichtbar, gleiche Laufrichtung','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: Wide + Medium, frontal oder 20-30° seitlich','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit B: ein urbanerer Winkel; nicht jedes Setup wiederholen','P2','Performance',6,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Geländer tief entlang, Schlosstürme, Pferdebändiger/Details, nasses Pflaster/Pfütze','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Close-ups: Gesicht, Mantelkragen, Handschuhe, Schuhe auf Pflaster','P2','Close-up',4,'MIC 0','S24 + Stativ'),
   t('Thumbnail/Foto: Schloss klar erkennbar; nicht mittig vor Hauptturm','P1','Foto',3,'MIC 0','S24'),
   t('Field Recording: 2 saubere Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-1','Fr 09.10.2026','14:25-14:35','Transfer: Alter Garten → Schlossinsel','Alter Garten → Schloss Schwerin','Transfer',
   'Abbau, kurzer Fußweg und neues Setup. Die Orte liegen nah beieinander, aber Null-Minuten-Übergänge sind unrealistisch.','',[
   t('Stativ abbauen / Equipment sichern','P1','Organisation',3,'MIC 0','—'),
   t('Zur Schlossinsel gehen','P1','Transfer',4,'MIC 0','zu Fuß'),
   t('Neues Setup / Linse kurz prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('schlossinsel','Fr 09.10.2026','14:35-15:30','Schlossinsel / Burggarten','Lennéstraße 1, 19053 Schwerin','Schloss-Cluster','',
   'Laubrascheln, Schritte auf unterschiedlichen Untergründen, Wind in Bäumen, ruhige Schloss-/Park-Atmo.',[
   t('BTS: Weg/Eingang zeigen + sagen, welche Perspektive du suchst','P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Architektur: Türme, Türen, Fassadendetails, Statuen, Geländer, Treppen','P2','B-Roll',7,'MIC 0','S24 + Stativ'),
   t('Low Angle: Schlossfassade nach oben; Vertikalen möglichst gerade halten','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Foreground: durch Geländer/Blätter/Torbogen; du im Hintergrund','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A an 1-2 stärksten Winkeln: Medium + Close','P1','Performance',8,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit B an 1 starken Winkel: Medium + Close','P2','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Stillness: 15-20 s, du fast still; Wind/Blätter/Umgebung bewegen sich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Vogelperspektive ohne Drohne: sichere erhöhte Position suchen','P2','Top-down',4,'MIC 0','S24 + Stativ'),
   t('Clean Plate + 20 s Atmo','P1','Clean Plate',4,'MIC 0','S24 + Stativ'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',7,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-2','Fr 09.10.2026','15:30-15:40','Transfer: Schlossinsel → Schlossgarten','Schloss Schwerin → Schlossgarten','Transfer',
   'Kurzer Fußweg plus Abbau/Aufbau.','',[
   t('Equipment sichern und Standort wechseln','P1','Transfer',6,'MIC 0','zu Fuß'),
   t('Aufbau / Testframe / Linse prüfen','P1','Puffer',4,'MIC 0','S24 + Stativ')
  ]),
  loc('schlossgarten','Fr 09.10.2026','15:40-16:45','Schlossgarten / Kreuzkanal','Lennéstraße, 19053 Schwerin','Schloss-Cluster','',
   'Wind in Baumkronen, Blätter am Boden, Schritte, Wasser am Kanal; 30-60 s Clean Atmo.',[
   t('BTS: Setup + symmetrische Sichtachse + kurzer Vorher/Nachher-Kommentar','P1','BTS',5,'MIC 1','S24 + DJI Mic Mini'),
   t('Wide symmetrisch: du mittig oder leicht off-center','P1','Shot',6,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich auf Weg/Allee; gleiche Kamerahöhe und Laufrichtung','P1','Shot',6,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: P1 - Anzug/Mantel an stärkster Sichtachse','P1','Performance',9,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit B: nur ein gutes Setup, wenn Zeit','P2','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Bäume im Wind, Blätter, Schuh durch Blätter, Kreuzkanal, Wasser, Statuen','P2','B-Roll',7,'MIC 0','S24 + Stativ'),
   t('Pfützenspiegelung: Kamera 10-20 cm hoch; 60 fps bei Schritt durchs Bild','P1','Reflection',6,'MIC 0','S24 + Stativ'),
   t('Clean Plate + Foto/Thumbnail','P1','Foto',4,'MIC 0','S24'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',7,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-3','Fr 09.10.2026','16:45-16:55','Transfer: Schlossgarten → Burgsee-Ufer','Schlossgarten → Bertha-Klingberg-Platz','Transfer',
   'Kurzer Standortwechsel; bewusst 10 Minuten statt direkt nahtlos weiter.','',[
   t('Abbau + Equipment sichern','P1','Organisation',3,'MIC 0','—'),
   t('Zum Burgsee-Ufer / Schwimmende Wiese gehen','P1','Transfer',5,'MIC 0','zu Fuß'),
   t('Ufer-Setup / Linse / Windschutz prüfen','P1','Puffer',2,'MIC 0','S24 + Stativ')
  ]),
  loc('burgsee','Fr 09.10.2026','16:55-18:45','Schwimmende Wiese + Burgsee-Ufer','Bertha-Klingberg-Platz, 19053 Schwerin','Schloss-Cluster','',
   'Schilfrascheln, Wasserplätschern/Wellen, Vögel, Wind, ferne Stadt. Nahgeräusche mit DJI Mic windgeschützt.',[
   t("BTS: Ufer/Schlossblick + 'Jetzt kommen die klein-im-Bild-Shots'",'P1','BTS',6,'MIC 1','S24 + DJI Mic Mini'),
   t('P1 Hero: Schloss vom Ufer mit Schilf unscharf im Vordergrund','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('P1 Hero: du am Ufer klein im Bild (ca. 10-20 % Bildhöhe), Schloss hinten','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Wide: Rücken zur Kamera, Blick aufs Schloss/Wasser','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: seitlich ca. 7 m entfernt, fast Ganzkörper; See/Schloss hinten','P1','Shot',8,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A: Wide + Medium an stärkstem Uferwinkel','P1','Performance',13,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit B: Wide + Medium an zweitem starken Uferwinkel','P1','Performance',13,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
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
  loc('fri-dinner-transfer','Fr 09.10.2026','18:45-20:10','Abendessen + Backup + Weg in die Altstadt','Burgsee-Ufer → Altstädtischer Markt','Pause / Transfer',
   'Der 85-Minuten-Block verhindert, dass der Nachtteil direkt an den langen Schloss-Cluster anschließt. Erst essen, Material sichern, Akkus prüfen, dann entspannt in den Nachtblock.','',[
   t('Kurzer Materialcheck des Schloss-Clusters; nichts löschen','P1','QC',10,'MIC 0','S24'),
   t('S24 / wichtige Dateien auf SSD kopieren, Originale behalten','P1','Daten',15,'MIC 0','SSD + S24'),
   t('Abendessen + Getränk','P1','Pause',35,'MIC 0','—'),
   t('Akkus / Mic / Powerbank prüfen und bei Bedarf nachladen','P1','Organisation',10,'MIC 0','Ladegeräte / Powerbank'),
   t('Weg Burgsee-Ufer → Altstädtischer Markt + Ankunftspuffer','P1','Transfer',15,'MIC 0','zu Fuß / ÖPNV je nach Lage')
  ]),
  loc('markt','Fr 09.10.2026','20:10-21:00','Altstädtischer Markt - Nacht','Am Markt, 19055 Schwerin','Nacht-Cluster','',
   'Regen auf Pflaster, Schritte durch Pfützen, einzelne Auto-Pass-bys vom sicheren Gehweg, Stadt-Hall/Markt-Atmo. Keine privaten Gespräche/fremde Musik als Hauptsample.',[
   t('BTS: Night-Setup + Satz über Regen/Reflexionen','P1','BTS',3,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate: Markt/Fassaden 10 s','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Wide: du klein im Platz, Architektur dominant','P1','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance Outfit A P1 am besten Hintergrund','P1','Performance',5,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit B P2 nur wenn klar anderer Look','P2','Performance',5,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Walking-Collage: seitlich entlang Häuserfront/Laternen','P1','Shot',4,'MIC 0','S24 + Stativ'),
   t('B-Roll: Fassaden, Fenster, Pflaster, Pfützen, Laternen, Blätter, Regenrinne','P2','B-Roll',5,'MIC 0','S24 + Stativ'),
   t('Pfützenspiegelung: Kamera extrem tief; du/Laterne/Fassade in Reflexion','P1','Reflection',4,'MIC 0','S24 + Stativ'),
   t('Close: Gesicht mit Seitenlicht, Highlights schützen','P2','Close-up',3,'MIC 0','S24 + Stativ'),
   t('Thumbnail: nasses Pflaster + Architektur + du','P1','Foto',3,'MIC 0','S24'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',5,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-night-1','Fr 09.10.2026','21:00-21:15','Transfer: Altstädtischer Markt → Schelfstadt','Am Markt → Puschkinstraße 3','Transfer',
   'Fußweg, Abbau und kurzes neues Setup.','',[
   t('Equipment sichern / Standort verlassen','P1','Organisation',3,'MIC 0','—'),
   t('Zur Schelfkirche / Schelfstadt gehen','P1','Transfer',9,'MIC 0','zu Fuß'),
   t('Testframe / Nachtbelichtung prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('schelfstadt','Fr 09.10.2026','21:15-22:05','Schelfstadt / Schelfkirche','Puschkinstraße 3, 19055 Schwerin','Nacht-Cluster','',
   'Kopfsteinpflaster-Schritte, Regenrinne/Tropfen, Wind in Gassen, Tür-/Torgeräusch nur öffentlich und ohne Personen zu stören.',[
   t("BTS: 10 s Gasse + 'enge Gassen / Fachwerk / Nachtlook'",'P1','BTS',3,'MIC 1','S24 + DJI Mic Mini'),
   t('Walking-Collage: seitlich 5-7 m, Körper fast komplett sichtbar','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Performance Outfit B P1: Kopfsteinpflaster/Backstein/enge Gasse','P1','Performance',7,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Performance Outfit A P2: nur wenn Laterne/Fassade deutlich stärker wirkt','P2','Performance',6,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Fachwerk, Backstein, Fenster, Laternen, Äste, Blätter','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Low Angle: Schuhe auf Kopfsteinpflaster, 60 fps','P2','Close-up',4,'MIC 0','S24 + Stativ'),
   t('Foreground: durch Tor/Geländer/Äste auf dich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Clean Plate + Atmo 20 s','P1','Clean Plate',3,'MIC 0','S24 + Stativ'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-transfer-night-2','Fr 09.10.2026','22:05-22:15','Transfer: Schelfstadt → Pfaffenteich','Puschkinstraße 3 → Pfaffenteich','Transfer',
   'Kurzer Fußweg plus Abbau/Aufbau.','',[
   t('Equipment sichern und zum Pfaffenteich wechseln','P1','Transfer',7,'MIC 0','zu Fuß'),
   t('Wasser-/Licht-Setup kurz prüfen','P1','Puffer',3,'MIC 0','S24 + Stativ')
  ]),
  loc('pfaffenteich','Fr 09.10.2026','22:15-23:05','Pfaffenteich - Nacht','Pfaffenteich, 19055 Schwerin','Nacht-Cluster','',
   'Wasser, Wind, Vögel, ferne Stadt/Verkehr; ggf. Straßenbahn-Sound aus sicherem öffentlichen Bereich.',[
   t('BTS: Wasser/Häuser zeigen + sagen, was noch fehlt','P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Wide: du am Wasser, Häuser/Lichter im Hintergrund','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Walking-Collage: Promenade/Laternen, gleiche Laufrichtung','P1','Shot',5,'MIC 0','S24 + Stativ'),
   t('Stillness: du sitzt/stehst, Wasser bewegt sich','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t('Performance: nur 1 starkes Setup pro Outfit','P2','Performance',6,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('B-Roll: Wasser, Reflexionen, Lichter, Geländer, Bäume im Wind, Regentropfen','P2','B-Roll',6,'MIC 0','S24 + Stativ'),
   t('Silhouette gegen helle Häuser/Wasserreflexion','P2','Shot',4,'MIC 0','S24 + Stativ'),
   t("Clean Plate + 20 s Atmo + Abschluss-BTS 'Nacht-Cluster geschafft'",'P1','BTS',4,'MIC 1','S24 + DJI Mic Mini'),
   t('Field Recording: 2 Sounds + 1 Stereo-Atmo','P1','Audio',6,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('fri-return','Fr 09.10.2026','23:05-23:35','Rückweg zum Avalon Hotel + Tagesabschluss','Bürgermeister-Bade-Platz, Schwerin','Rückfahrt / Abschluss',
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
  loc('sat-transfer','Sa 10.10.2026','11:30-12:30','Transfer + Essen + Datencheck','','Logistik',
   'Pufferblock zwischen Vormittag und Pickup-Block.','',[
   t('Zippendorf-Material auf Fokus, Linse und Ton prüfen','P1','QC',10,'MIC 0','S24'),
   t('S24, Mic, Controller und Powerbank nachladen','P1','Organisation',15,'MIC 0','—'),
   t('Essen + Transfer','P1','Organisation',25,'MIC 0','—'),
   t('Offene P1-Liste für den Nachmittag festlegen','P1','Organisation',5,'MIC 0','—')
  ]),
  loc('sat-pickups','Sa 10.10.2026','12:30-15:00','Pickup-Block','Nur laut offener P1-Liste','Pickups',
   'Kein kompletter Wiederholungsbesuch. Exakt wie im Timed-PDF: nur offene Pflichtpunkte schließen.','',[
   t('Offene P1-Shots in App filtern','P1','Organisation',32,'MIC 0','—'),
   t('Nur zum exakten fehlenden Spot fahren','P1','Organisation',32,'MIC 0','—'),
   t("Kein 'wenn ich schon mal hier bin, filme ich alles nochmal'",'P1','Organisation',32,'MIC 0','—'),
   t('Nach jedem Pickup Fokus/Linse/Belichtung prüfen','P1','QC',15,'MIC 0','S24 + Stativ'),
   t('Wenn alles P1 erledigt: Pause, Akkus, Daten, Longform-Talking statt redundanter B-Roll','P2','Organisation',27,'MIC 0','—')
  ]),
  loc('sat-universal','Sa 10.10.2026','15:15-17:15','Neue Location / Universal-Blueprint','Vor Ort eine wirklich neue Bildwelt auswählen','Neue Location',
   'Nur wenn P1 weitgehend komplett ist. Neue Optik statt noch mehr Schloss-Duplikate.','',[
   t('Location mit mindestens zwei starken Kriterien auswählen','P1','Organisation',8,'MIC 0','—'),
   t('BTS: Warum ist diese Location visuell anders?','P1','BTS',5,'MIC 1','S24 + DJI Mic Mini'),
   t('Clean Plate + Extreme Wide + Wide','P1','Shot',18,'MIC 0','S24 + Stativ'),
   t('Walking-Collage im gleichen Outfit und gleicher Laufrichtung','P1','Shot',16,'MIC 0','S24 + Stativ'),
   t('Eine starke Performance statt mehrere ähnliche Setups','P1','Performance',22,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('Close-ups + 3 Details + Low/Foreground','P2','B-Roll',18,'MIC 0','S24 + Stativ'),
   t('Thumbnail/Foto + 20-60 s Stereo-Atmo + 2 Foley-Sounds','P1','Audio',18,'MIC S / MIC D','S24 / DJI Mic Mini + Windschutz')
  ]),
  loc('sat-bluehour','Sa 10.10.2026','17:30-19:15','Optionale Dämmerung','Nur falls Freitagabend ausgefallen ist oder klar anderer Lichtlook','Lichtfenster',
   'Maximal EIN Cluster wiederholen. Nur bei echtem Mehrwert.','',[
   t('Nur Hero, Performance und Reflection - keine komplette B-Roll-Liste','P1','Performance',62,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ + DJI Mic bei Live-Ton'),
   t('BTS kurz erklären, warum zweiter Besuch visuell nötig ist','P1','BTS',31,'MIC 1','S24 + DJI Mic Mini')
  ]),
  loc('sat-evening','Sa 10.10.2026','19:15-20:15','Essen + Akkus + Backup','','Logistik','Kein Drehzwang.','',[
   t('S24 / SD-Karte auf SSD kopieren – Originale behalten','P1','Daten',20,'MIC 0','SSD + S24'),
   t('Akkus, Mic, Controller und Powerbank laden','P1','Organisation',20,'MIC 0','Ladegeräte'),
   t('P1-Stand prüfen und Sonntag nur echte Lücken offen lassen','P1','Organisation',10,'MIC 0','—')
  ]),
  loc('sat-longform','Sa 10.10.2026','20:15-22:30','Longform + Indoor / Nacht-Pickups','Unterkunft oder genau ein noch fehlender Nachtspot','Longform',
   'Nicht automatisch die komplette Altstadt wiederholen.','',[
   t('Longform-Talking: Was wurde heute geschafft, was fehlt, was ging schief?','P1','BTS',20,'MIC 1','S24 + DJI Mic Mini'),
   t('BTS: Materialreview / Timeline / Backup zeigen','P1','BTS',15,'MIC 1','S24 + DJI Mic Mini'),
   t('Indoor-Close-ups: Hände, Kleidung, Equipment, Speichermedien','P2','Close-up',20,'MIC 0','S24 + Stativ'),
   t('Optional genau einen fehlenden Nacht-P1-Shot nachholen','P1','Shot',35,'MIC 0 / MIC 1 nur Live-Rap','S24 + Stativ'),
   t('Zweite vollständige SSD-Sicherung / Stichprobe großer Dateien','P1','Daten',25,'MIC 0','SSD + S24')
  ]),
  loc('sun-outbound','So 11.10.2026','08:00-08:30','Avalon Hotel → erster Pickup-Spot','Offene P1-Location','Transfer',
   'Start: The Avalon Hotel, Bürgermeister-Bade-Platz, Schwerin. 30 Minuten Reserve. Ziel erst vor Abfahrt anhand der offenen P1-Liste festlegen.','',[
   t('Offene P1-Liste prüfen und genau einen ersten Zielspot festlegen','P1','Organisation',5,'MIC 0','—'),
   t('Fahrt / Weg zum ersten Pickup-Spot','P1','Transfer',20,'MIC 0','zu Fuß / ÖPNV / Fahrzeug'),
   t('5 Minuten Ankunfts- und Aufbaupuffer','P1','Puffer',5,'MIC 0','—')
  ]),
  loc('sun-final','So 11.10.2026','08:30-13:00','Letzte Pickups + Abschluss','Nur offene P1/P2 / The Avalon Hotel','Abschluss',
   'Timed-PDF-Grundblock bleibt vollständig erhalten; zusätzliche Abreise-/Soundblöcke folgen danach.','',[
   t('Offene P1 zuerst','P1','Organisation',60,'MIC 0','—'),
   t('Drohne nur wenn Geo-Zone + Wetter + Wind + Menschenlage wirklich passen','BONUS','Drohne',31,'MIC 0','DJI Mini 4 Pro'),
   t('Keine komplette Outfit-Matrix erneut drehen','P1','Organisation',60,'MIC 0','—'),
   t('Finales Longform-Fazit: Was geschafft? Was ging schief? Wie viel Content entstanden?','P1','BTS',20,'MIC 1','S24 + DJI Mic Mini'),
   t('SSD-Kopie prüfen; mehrere große Dateien testweise öffnen','P1','Daten',27,'MIC 0','SSD + S24'),
   t('Abreise-Puffer ab ca. 13:00 Uhr','P1','Organisation',60,'MIC 0','—')
  ]),
  loc('sun-sound','So 11.10.2026','10:30-11:30','Field Recording / Soundbibliothek','Ruhiger, sicherer Spot auf der Abreiseroute','Audio',
   'Nur wenn die visuellen P1-Shots erledigt sind. Dieser Block ist als optionale Ergänzung innerhalb des Sonntagfensters gedacht.','',[
   t('1-2 breite Stereo-Atmos à 30-60 s aufnehmen','P1','Audio',15,'MIC S','S24 Stereo'),
   t('Mindestens 4 isolierte Foley-Sounds aufnehmen','P1','Audio',20,'MIC D','DJI Mic Mini + Windschutz'),
   t('Wasser, Wind, Schritte, Laub, Stoff oder Verkehr aus sicherem Standpunkt variieren','P2','Audio',15,'MIC S / MIC D','S24 / DJI Mic Mini'),
   t('Keine privaten Gespräche oder fremde Musik gezielt aufnehmen','P1','Regel',2,'MIC 0','—')
  ]),
  loc('sun-pack','So 11.10.2026','13:00-13:30','Packen + Equipment-Check','Bürgermeister-Bade-Platz, Schwerin','Logistik','Nichts mehr anfangen, was die Abreise gefährdet.','',[
   t('S24, SSD, Mic, Drohne, Controller, Akkus, Ladegeräte, Stativ und Kleidung prüfen','P1','Organisation',15,'MIC 0','—'),
   t('Speicherkarten / SSD sicher verstauen','P1','Organisation',5,'MIC 0','—'),
   t('Unterkunft vollständig kontrollieren','P1','Organisation',5,'MIC 0','—')
  ]),
  loc('sun-departure','So 11.10.2026','13:30-14:00','Abreise-Puffer','','Abreise','Keine neuen Drehs mehr.','',[
   t('Abreise starten / Bahnhof oder nächste Verbindung ansteuern','P1','Organisation',20,'MIC 0','—'),
   t('Schwerin als Dreh abgeschlossen markieren, wenn alle P1 erledigt oder bewusst verworfen sind','P1','Organisation',5,'MIC 0','—')
  ])
 ]
}]
};
})();