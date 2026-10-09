window.BLUEPRINT_SEED = {
  version: 1,
  master: {
    name: 'Universal Content-Trip Blueprint',
    description: 'Wiederverwendbarer Master für City-/Location-Drehs.',
    locationCriteria: [
      'Mindestens zwei starke Kriterien: Tiefe, Licht, Architektur/Natur, Linien/Symmetrie, Spiegelung/Textur, Bewegung oder 5-15 m sicherer Kameradistanz.',
      'Kernshots müssen ohne Gimbal und ohne Drohne funktionieren.',
      'Hero-Shots wenn sinnvoll in 16:9 und 9:16 separat komponieren.',
      'Jede Hauptlocation bekommt BTS, Thumbnail/Foto, Clean Plate, Atmosphäre und Field Recording.'
    ],
    standardTasks: [
      {text:'Establishing / Clean Plate ohne dich', priority:'P1', mic:'MIC 0'},
      {text:'Extreme Wide mit dir - Umgebung dominiert', priority:'P1', mic:'MIC 0'},
      {text:'Wide / fast Ganzkörper', priority:'P1', mic:'MIC 0'},
      {text:'Medium Performance', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Close-up Gesicht / Blick', priority:'P2', mic:'MIC 0'},
      {text:'Mindestens 3 Details / Texturen', priority:'P2', mic:'MIC 0'},
      {text:'Low Angle oder Foreground Shot', priority:'P2', mic:'MIC 0'},
      {text:'Walk In / Walk Out / Cross Frame', priority:'P2', mic:'MIC 0'},
      {text:'Hero 16:9', priority:'P1', mic:'MIC 0'},
      {text:'Hero 9:16', priority:'P1', mic:'MIC 0'},
      {text:'Outfit A am stärksten Hintergrund', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Outfit B am stärksten Hintergrund', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Foto / Thumbnail', priority:'P1', mic:'MIC 0'},
      {text:'20-60 s Umgebungsatmo', priority:'P2', mic:'MIC S'},
      {text:'BTS: Ankunft / Plan / Prozess / Fazit', priority:'P1', mic:'MIC 1'},
      {text:'Field Recording: mindestens 2 isolierte Sounds + 1 Stereo-Atmo', priority:'P2', mic:'MIC S / DJI Mic nah'},
      {text:'Materialcheck: Fokus, Linse, Belichtung, Ton', priority:'P1', mic:'MIC 0'}
    ],
    soundIdeas: [
      'Stereo-Atmo 30-60 s: Stadt, Wasser, Wald, Regen, Bahnhof/Verkehr aus sicherem Bereich',
      'Isolierte Sounds: Schritte, Laub, Reißverschluss, Mantel, Tür, Wasser, Kies, Geländer, Schirm',
      'Gutes Geräusch dreimal: normal, leise/langsam, kräftig/schnell',
      'Vor und nach jedem isolierten Sound 2-3 s Ruhe mit aufnehmen',
      'Keine identifizierbaren Privatgespräche oder fremde Musik als Hauptsample'
    ],
    micLegend: {
      'MIC 0':'Kein Mic nötig - Lip-Sync / Musikvideo-Performance.',
      'MIC 1':'DJI Mic Mini - Live-Rap, Talking, BTS, Intro/Outro.',
      'MIC S':'Breite Stereo-Atmo bevorzugt mit S24; isoliertes Foley mit DJI Mic Mini nah an der Quelle.'
    }
  },
  projects: [
    {
      id:'schwerin-2026-10',
      name:'Schwerin 48H Content',
      city:'Schwerin',
      dates:'09.10.2026 - 11.10.2026',
      subtitle:'Ich hatte nur 48 Stunden für einen Monat Content',
      pdf:'Schwerin_48H_Blueprint_Liquid.pdf',
      notes:'Ziel: Schwerin nach dem Wochenende als abgehakt markieren. Doppelbesuche nur für Tag/Nacht, Wetter-Pickups oder echtes Drohnenfenster.',
      locations:[
        {
          id:'media-markt', date:'Fr 09.10.', time:'12:00-12:45', name:'MediaMarkt Schwerin', address:'Marienplatz 5-7, 19053 Schwerin', type:'Logistik',
          notes:'Stativ + mechanische Handyhalterung; optional Powerbank.',
          tasks:[
            {text:'Stativ / Handyhalterung kaufen', priority:'P1', mic:'MIC 0'},
            {text:'Optional 20.000 mAh USB-C-PD Powerbank', priority:'P2', mic:'MIC 0'}
          ]
        },
        {
          id:'alter-garten', date:'Fr 09.10.', time:'13:15-14:10', name:'Alter Garten + Schlossbruecke', address:'Alter Garten, 19055 Schwerin', type:'Schloss-Cluster',
          notes:'Schloss direkt gegenüber: Lennéstraße 1, 19053 Schwerin.',
          tasks:[
            {text:'BTS: erster Hauptspot + Ziel erklären', priority:'P1', mic:'MIC 1'},
            {text:'Clean Plate Brücke / Schloss 16:9, 10 s', priority:'P1', mic:'MIC 0'},
            {text:'Wide: du klein, Schloss dominant', priority:'P1', mic:'MIC 0'},
            {text:'Walking auf Kamera zu + weg', priority:'P2', mic:'MIC 0'},
            {text:'Walking-Collage seitlich, 6-8 m Abstand', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A: Wide + Medium', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit B: urbanerer Winkel', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Geländer, Türme, Pferdebaendiger, nasses Pflaster/Pfütze', priority:'P2', mic:'MIC 0'},
            {text:'Close-ups: Gesicht, Mantelkragen, Handschuhe, Schuhe', priority:'P2', mic:'MIC 0'},
            {text:'Thumbnail / Foto mit Schloss', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Schritte, Wind, Wasser/Umgebung, einzelne Fahrzeuge sicher vom Standpunkt', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'20-60 s Atmo ohne Sprechen', priority:'P2', mic:'MIC S'}
          ]
        },
        {
          id:'schlossinsel', date:'Fr 09.10.', time:'14:10-15:10', name:'Schlossinsel / Burggarten', address:'Lennéstraße 1, 19053 Schwerin', type:'Schloss-Cluster',
          notes:'Architektur, Tiefe, Treppen, Geländer und Vordergrund nutzen.',
          tasks:[
            {text:'BTS: Weg/Eingang + gesuchte Perspektive erklären', priority:'P1', mic:'MIC 1'},
            {text:'Architektur: Türme, Türen, Fassaden, Statuen, Treppen', priority:'P2', mic:'MIC 0'},
            {text:'Low Angle Schlossfassade', priority:'P2', mic:'MIC 0'},
            {text:'Foreground durch Geländer/Blätter/Torbogen', priority:'P2', mic:'MIC 0'},
            {text:'Performance pro Outfit an 1-2 starken Winkeln', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Stillness 15-20 s - du still, Umgebung bewegt sich', priority:'P2', mic:'MIC 0'},
            {text:'Vogelperspektive von sicherer erhöhter Position', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + 20 s Atmo', priority:'P2', mic:'MIC S'},
            {text:'Field Rec: Laub, Schritte, Wind, Park-Atmo', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'Foto / Thumbnail', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'schlossgarten', date:'Fr 09.10.', time:'15:10-16:20', name:'Schlossgarten / Kreuzkanal', address:'Lennéstraße 1, 19053 Schwerin', type:'Schloss-Cluster',
          notes:'Symmetrie, Wege, Blätter, Wind und Wasser nutzen.',
          tasks:[
            {text:'BTS: Setup + symmetrische Sichtachse', priority:'P1', mic:'MIC 1'},
            {text:'Wide symmetrisch', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage auf Weg/Allee', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A - P1', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit B - 1 gutes Setup', priority:'P2', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Bäume im Wind, Blätter, Schuh durch Laub, Kanal, Wasser, Statuen', priority:'P2', mic:'MIC 0'},
            {text:'Pfützen-Spiegelung tief, 60 fps bei Schritt durchs Bild', priority:'P1', mic:'MIC 0'},
            {text:'Clean Plate + Foto/Thumbnail', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Wind in Baumkronen, Blätter, Schritte, Kanalwasser', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'30-60 s Clean Atmo', priority:'P2', mic:'MIC S'}
          ]
        },
        {
          id:'burgsee', date:'Fr 09.10.', time:'16:20-18:30', name:'Schwimmende Wiese + Burgsee-Ufer', address:'Bertha-Klingberg-Platz, 19053 Schwerin', type:'Schloss-Cluster',
          notes:'Wichtigster Ufer-/Schilfblock. Dämmerung hier mitnehmen, wenn Licht passt.',
          tasks:[
            {text:'BTS: Ufer/Schlossblick + Ziel "klein im Bild"', priority:'P1', mic:'MIC 1'},
            {text:'Schloss vom Ufer mit Schilf unscharf im Vordergrund', priority:'P1', mic:'MIC 0'},
            {text:'Du klein am Ufer, Schloss im Hintergrund', priority:'P1', mic:'MIC 0'},
            {text:'Wide: Rücken zur Kamera, Blick aufs Wasser/Schloss', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage seitlich ca. 7 m entfernt', priority:'P1', mic:'MIC 0'},
            {text:'Performance A + B je Wide/Medium an stärksten Uferwinkeln', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Schilf, Wellen, Reflexion, Geländer, Mantel im Wind, Silhouette', priority:'P2', mic:'MIC 0'},
            {text:'Close-ups: Augen/Gesicht, Hände, Schuhe, Stoff', priority:'P2', mic:'MIC 0'},
            {text:'Hero 16:9 + Hero 9:16 + Thumbnail', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Schilf, Wasser, Vögel, Wind, ferne Stadt', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'20-60 s Stereo-Atmo', priority:'P2', mic:'MIC S'}
          ]
        },
        {
          id:'drone-castle', date:'Fr/Sa/So', time:'Nur trocken + windarm', name:'Drohnenblock Schloss / Park / Vogelperspektive', address:'Lennéstraße 1, 19053 Schwerin', type:'BONUS',
          notes:'Nur legal, trocken, VLOS, sicherer Start/Landeplatz, Geo-Zone vorher prüfen. Kein Zwang.',
          tasks:[
            {text:'Ruhiger 1/4- bis 1/2-Orbit um Schloss', priority:'BONUS', mic:'MIC 0'},
            {text:'Schloss / Insel Top-down', priority:'BONUS', mic:'MIC 0'},
            {text:'Park / Schlossgarten Top-down oder 45 Grad', priority:'BONUS', mic:'MIC 0'},
            {text:'Du aus Vogelperspektive für Collage', priority:'BONUS', mic:'MIC 0'},
            {text:'Vertikaler Drohnen-Hero', priority:'BONUS', mic:'MIC 0'},
            {text:'Vor Start: Regen, Böen, Menschenlage, Geo-Zone, Startplatz prüfen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'markt', date:'Fr 09.10.', time:'20:15-21:00', name:'Altstädtischer Markt', address:'Am Markt, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Nasses Pflaster, Fassaden, Laternen, Reflexionen.',
          tasks:[
            {text:'BTS: Night-Setup + Regen/Reflexionen', priority:'P1', mic:'MIC 1'},
            {text:'Clean Plate Markt/Fassaden 10 s', priority:'P1', mic:'MIC 0'},
            {text:'Wide: du klein, Architektur dominant', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A P1, Outfit B P2', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Walking-Collage entlang Fassade/Laternen', priority:'P1', mic:'MIC 0'},
            {text:'B-Roll: Fassade, Fenster, Pflaster, Pfützen, Laternen, Blätter, Regenrinne', priority:'P2', mic:'MIC 0'},
            {text:'Pfützenspiegelung extrem tief', priority:'P1', mic:'MIC 0'},
            {text:'Close Gesicht mit Seitenlicht', priority:'P2', mic:'MIC 0'},
            {text:'Thumbnail nasses Pflaster + Architektur', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Regen, Pfützen-Schritte, Stadt-Hall, Auto-Pass-bys sicher', priority:'P2', mic:'MIC S / DJI Mic nah'}
          ]
        },
        {
          id:'schelfstadt', date:'Fr 09.10.', time:'21:00-21:50', name:'Schelfstadt / Schelfkirche', address:'Puschkinstraße 3, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Kopfsteinpflaster, Fachwerk/Backstein, enge Gassen.',
          tasks:[
            {text:'BTS: Gasse + Look erklären', priority:'P1', mic:'MIC 1'},
            {text:'Walking-Collage seitlich, 5-7 m', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit B P1', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit A P2 nur bei starkem Winkel', priority:'P2', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Fachwerk, Backstein, Fenster, Laternen, Äste, Blätter', priority:'P2', mic:'MIC 0'},
            {text:'Low Angle Schuhe auf Kopfsteinpflaster, 60 fps', priority:'P2', mic:'MIC 0'},
            {text:'Foreground durch Tor/Geländer/Äste', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + 20 s Atmo', priority:'P2', mic:'MIC S'},
            {text:'Field Rec: Kopfstein-Schritte, Tropfen/Regenrinne, Wind, Tor/Tür wenn passend', priority:'P2', mic:'MIC S / DJI Mic nah'}
          ]
        },
        {
          id:'pfaffenteich', date:'Fr 09.10.', time:'21:50-22:45', name:'Pfaffenteich', address:'Pfaffenteich, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Wasser, Lichter, Spiegelungen und Abschluss-BTS.',
          tasks:[
            {text:'BTS: Wasser/Häuser + was noch fehlt', priority:'P1', mic:'MIC 1'},
            {text:'Wide: du am Wasser, Lichter/Häuser hinten', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage Promenade/Laternen', priority:'P1', mic:'MIC 0'},
            {text:'Stillness: du stehst/sitzt, Wasser bewegt sich', priority:'P2', mic:'MIC 0'},
            {text:'Performance: 1 starkes Setup pro Outfit', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Wasser, Reflexionen, Lichter, Geländer, Wind, Tropfen', priority:'P2', mic:'MIC 0'},
            {text:'Silhouette gegen Lichter/Wasser', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + Atmo + Abschluss-BTS', priority:'P1', mic:'MIC S / MIC 1'},
            {text:'Field Rec: Wasser, Wind, Vögel, ferne Stadt/Verkehr', priority:'P2', mic:'MIC S'}
          ]
        },
        {
          id:'zippendorf', date:'Sa 10.10.', time:'08:30-11:30', name:'Zippendorfer Strand', address:'Am Strand 14, 19063 Schwerin', type:'Bonus-Location',
          notes:'Nur wenn Schloss/Nacht P1 sitzen. Neue Bildwelt statt redundanter Schlossvarianten.',
          tasks:[
            {text:'BTS: neue Bildwelt - offener See', priority:'P1', mic:'MIC 1'},
            {text:'Extreme Wide: du klein am Wasser', priority:'P1', mic:'MIC 0'},
            {text:'Walking seitlich an Promenade/Strandkante', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit B P1, Outfit A optional', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Foreground: Schilf/Gräser/Zaun/Äste', priority:'P2', mic:'MIC 0'},
            {text:'Details: Wasser, Sand, Schuhe, Hände, Jacke im Wind', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + Atmo + Foto', priority:'P1', mic:'MIC S'},
            {text:'Field Rec: Wellen, Wind, Schilf, Schritte auf Sand/Kies, Vögel', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'Drohne nur legal, trocken, deutlich windarm', priority:'BONUS', mic:'MIC 0'}
          ]
        },
        {
          id:'sat-transfer', date:'Sa 10.10.', time:'11:30-12:30', name:'Transfer + Essen + kurzer Datencheck', address:'', type:'Logistik',
          notes:'Bewusst eingeplanter Puffer. Akkus laden, Material kurz prüfen, essen und nur dann weiter, wenn der Vormittagsblock wirklich sitzt.',
          tasks:[
            {text:'Zippendorf-Material auf Fokus, Linse und Ton prüfen', priority:'P1', mic:'MIC 0'},
            {text:'S24, Mic, Controller und Powerbank nachladen', priority:'P1', mic:'MIC 0'},
            {text:'Kurze Essens-/Transferpause einhalten', priority:'P1', mic:'MIC 0'},
            {text:'Offene P1-Liste für den Nachmittag festlegen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sat-pickups', date:'Sa 10.10.', time:'12:30-15:00', name:'P1-Pickups / fehlende Pflichtshots', address:'Nur exakter offener Spot laut P1-Liste', type:'Pickups',
          notes:'Keinen kompletten Cluster neu drehen. Nur gezielt fehlende P1-Shots schließen.',
          tasks:[
            {text:'Offene P1-Shots anzeigen und nach Weg/Location bündeln', priority:'P1', mic:'MIC 0'},
            {text:'Fehlende Schloss-/Ufer-Hero-Shots gezielt nachholen', priority:'P1', mic:'MIC 0'},
            {text:'Fehlende Performance A/B nur an noch offenen Hauptspots', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Fehlende Walking-/Top-down-Collage-Shots schließen', priority:'P1', mic:'MIC 0'},
            {text:'Fehlende BTS-/Thumbnail-/Field-Recording-Pflichtpunkte schließen', priority:'P1', mic:'MIC 1 / MIC S / MIC D'},
            {text:'Nach jedem Pickup sofort Fokus, Linse, Belichtung und Ton prüfen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sat-universal', date:'Sa 10.10.', time:'15:15-17:15', name:'Neue Location / Universal-Blueprint', address:'Vor Ort nur eine wirklich neue Bildwelt auswählen', type:'Neue Location',
          notes:'Nur wenn P1 weitgehend komplett ist. Ziel ist neue Optik statt noch mehr Schloss-Duplikate.',
          tasks:[
            {text:'Location mit mindestens zwei starken Kriterien auswählen: Tiefe, Licht, Linien, Textur, Natur/Architektur', priority:'P1', mic:'MIC 0'},
            {text:'BTS: Warum ist diese Location visuell anders?', priority:'P1', mic:'MIC 1'},
            {text:'Clean Plate + Extreme Wide + Wide', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage im gleichen Outfit und gleicher Laufrichtung', priority:'P1', mic:'MIC 0'},
            {text:'Eine starke Performance statt mehrere ähnliche Setups', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Close-ups + 3 Details + Low/Foreground', priority:'P2', mic:'MIC 0'},
            {text:'Thumbnail/Foto + 20-60 s Stereo-Atmo + 2 Foley-Sounds', priority:'P1', mic:'MIC S / MIC D'}
          ]
        },
        {
          id:'sat-bluehour', date:'Sa 10.10.', time:'17:15-19:15', name:'Golden Hour / Blue Hour', address:'Stärkster noch sinnvoller Spot laut P1-Liste', type:'Lichtfenster',
          notes:'Ein zweiter Besuch ist hier nur erlaubt, wenn das Licht einen klar anderen Look erzeugt oder Freitag wetterbedingt etwas ausgefallen ist.',
          tasks:[
            {text:'Einen einzigen Hero-Spot für das Lichtfenster festlegen', priority:'P1', mic:'MIC 0'},
            {text:'Hero 16:9 und 9:16 in Golden/Blue Hour', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A oder B – nur die stärkere Variante', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Silhouette / Gegenlicht / Reflexion als P2', priority:'P2', mic:'MIC 0'},
            {text:'BTS: Lichtwechsel + fertiges Ergebnis dokumentieren', priority:'P1', mic:'MIC 1'}
          ]
        },
        {
          id:'sat-evening', date:'Sa 10.10.', time:'19:15-20:15', name:'Essen + Akkus + Backup', address:'', type:'Logistik',
          notes:'Kein Drehzwang. Material sichern, essen und Akkus für den Abend/ Sonntag voll machen.',
          tasks:[
            {text:'S24 / SD-Karte auf SSD kopieren – Originale behalten', priority:'P1', mic:'MIC 0'},
            {text:'Akkus, Mic, Controller und Powerbank laden', priority:'P1', mic:'MIC 0'},
            {text:'P1-Stand prüfen und Sonntag nur noch echte Lücken offen lassen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sat-longform', date:'Sa 10.10.', time:'20:15-22:30', name:'Longform + Indoor / Nacht-Pickups', address:'Unterkunft oder nur ein gezielt noch fehlender Nachtspot', type:'Longform',
          notes:'Nicht automatisch wieder die komplette Altstadt drehen. Priorität: YouTube-Story, Materialreview, Indoor-Details und nur fehlende Nacht-P1.',
          tasks:[
            {text:'Longform-Talking: Was wurde heute geschafft, was fehlt, was ging schief?', priority:'P1', mic:'MIC 1'},
            {text:'BTS: Materialreview / Timeline / Backup zeigen', priority:'P1', mic:'MIC 1'},
            {text:'Indoor-Close-ups: Hände, Kleidung, Equipment, Speichermedien', priority:'P2', mic:'MIC 0'},
            {text:'Optional genau einen fehlenden Nacht-P1-Shot nachholen', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Zweite vollständige SSD-Sicherung / Stichprobe großer Dateien', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sun-pickups', date:'So 11.10.', time:'08:30-10:30', name:'Letzte P1/P2-Pickups + optional Drohne', address:'Nur offene Pflichtlocation laut Liste', type:'Pickups',
          notes:'Sonntag ist kein dritter kompletter Drehtag. Erst P1, dann P2; Drohne nur bei legalem, trockenem und windarmem Fenster.',
          tasks:[
            {text:'Alle noch offenen P1 zuerst schließen', priority:'P1', mic:'MIC 0'},
            {text:'Maximal 1-2 P2-Shots mit echtem Mehrwert ergänzen', priority:'P2', mic:'MIC 0'},
            {text:'Optional Drohnen-Orbit/Top-down nur bei sicheren Bedingungen', priority:'BONUS', mic:'MIC 0'},
            {text:'Je Pickup direkt Fokus, Linse, Belichtung und Ton prüfen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sun-sound', date:'So 11.10.', time:'10:30-11:30', name:'Field Recording / Soundbibliothek', address:'Ruhiger, sicherer Spot auf der Abreiseroute', type:'Audio',
          notes:'Nur wenn die visuellen P1-Shots erledigt sind.',
          tasks:[
            {text:'1-2 breite Stereo-Atmos à 30-60 s aufnehmen', priority:'P1', mic:'MIC S'},
            {text:'Mindestens 4 isolierte Foley-Sounds aufnehmen', priority:'P1', mic:'MIC D'},
            {text:'Wasser, Wind, Schritte, Laub, Stoff oder Verkehr aus sicherem Standpunkt variieren', priority:'P2', mic:'MIC S / MIC D'},
            {text:'Keine privaten Gespräche oder fremde Musik gezielt aufnehmen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sun-wrap', date:'So 11.10.', time:'11:30-12:45', name:'Longform-Fazit + finale Sicherung', address:'Unterkunft / ruhiger Innenraum', type:'Abschluss',
          notes:'Schwerin inhaltlich abschließen: Ergebnis, Fehler, Umfang und nächster Schritt.',
          tasks:[
            {text:'Longform-Fazit: Was ist in 48 Stunden tatsächlich entstanden?', priority:'P1', mic:'MIC 1'},
            {text:'Thumbnail-/Hero-Favoriten kurz markieren', priority:'P2', mic:'MIC 0'},
            {text:'Finale SSD-Kopie erstellen und mehrere Videodateien öffnen', priority:'P1', mic:'MIC 0'},
            {text:'Offene Aufgaben nur stehen lassen, wenn sie wirklich bewusst verworfen werden', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sun-pack', date:'So 11.10.', time:'12:45-13:30', name:'Packen + Equipment-Check', address:'Unterkunft', type:'Logistik',
          notes:'Nichts mehr anfangen, was die Abreise gefährdet.',
          tasks:[
            {text:'S24, SSD, Mic, Drohne, Controller, Akkus, Ladegeräte, Stativ und Kleidung prüfen', priority:'P1', mic:'MIC 0'},
            {text:'Speicherkarten / SSD sicher verstauen', priority:'P1', mic:'MIC 0'},
            {text:'Unterkunft vollständig kontrollieren', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'sun-departure', date:'So 11.10.', time:'13:30-14:00', name:'Abreise-Puffer', address:'', type:'Abreise',
          notes:'30 Minuten Reserve. Keine neuen Drehs mehr.',
          tasks:[
            {text:'Abreise starten / Bahnhof oder nächste Verbindung ansteuern', priority:'P1', mic:'MIC 0'},
            {text:'Schwerin als Dreh abgeschlossen markieren, wenn alle P1 erledigt oder bewusst verworfen sind', priority:'P1', mic:'MIC 0'}
          ]
        }
      ]
    }
  ]
};
