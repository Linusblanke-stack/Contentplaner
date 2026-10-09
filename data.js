window.BLUEPRINT_SEED = {
  version: 1,
  master: {
    name: 'Universal Content-Trip Blueprint',
    description: 'Wiederverwendbarer Master fuer City-/Location-Drehs.',
    locationCriteria: [
      'Mindestens zwei starke Kriterien: Tiefe, Licht, Architektur/Natur, Linien/Symmetrie, Spiegelung/Textur, Bewegung oder 5-15 m sicherer Kameradistanz.',
      'Kernshots muessen ohne Gimbal und ohne Drohne funktionieren.',
      'Hero-Shots wenn sinnvoll in 16:9 und 9:16 separat komponieren.',
      'Jede Hauptlocation bekommt BTS, Thumbnail/Foto, Clean Plate, Atmosphaere und Field Recording.'
    ],
    standardTasks: [
      {text:'Establishing / Clean Plate ohne dich', priority:'P1', mic:'MIC 0'},
      {text:'Extreme Wide mit dir - Umgebung dominiert', priority:'P1', mic:'MIC 0'},
      {text:'Wide / fast Ganzkoerper', priority:'P1', mic:'MIC 0'},
      {text:'Medium Performance', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Close-up Gesicht / Blick', priority:'P2', mic:'MIC 0'},
      {text:'Mindestens 3 Details / Texturen', priority:'P2', mic:'MIC 0'},
      {text:'Low Angle oder Foreground Shot', priority:'P2', mic:'MIC 0'},
      {text:'Walk In / Walk Out / Cross Frame', priority:'P2', mic:'MIC 0'},
      {text:'Hero 16:9', priority:'P1', mic:'MIC 0'},
      {text:'Hero 9:16', priority:'P1', mic:'MIC 0'},
      {text:'Outfit A am staerksten Hintergrund', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Outfit B am staerksten Hintergrund', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
      {text:'Foto / Thumbnail', priority:'P1', mic:'MIC 0'},
      {text:'20-60 s Umgebungsatmo', priority:'P2', mic:'MIC S'},
      {text:'BTS: Ankunft / Plan / Prozess / Fazit', priority:'P1', mic:'MIC 1'},
      {text:'Field Recording: mindestens 2 isolierte Sounds + 1 Stereo-Atmo', priority:'P2', mic:'MIC S / DJI Mic nah'},
      {text:'Materialcheck: Fokus, Linse, Belichtung, Ton', priority:'P1', mic:'MIC 0'}
    ],
    soundIdeas: [
      'Stereo-Atmo 30-60 s: Stadt, Wasser, Wald, Regen, Bahnhof/Verkehr aus sicherem Bereich',
      'Isolierte Sounds: Schritte, Laub, Reissverschluss, Mantel, Tuer, Wasser, Kies, Gelaender, Schirm',
      'Gutes Geraeusch dreimal: normal, leise/langsam, kraeftig/schnell',
      'Vor und nach jedem isolierten Sound 2-3 s Ruhe mit aufnehmen',
      'Keine identifizierbaren Privatgespraeche oder fremde Musik als Hauptsample'
    ],
    micLegend: {
      'MIC 0':'Kein Mic noetig - Lip-Sync / Musikvideo-Performance.',
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
      subtitle:'Ich hatte nur 48 Stunden fuer einen Monat Content',
      pdf:'Schwerin_48H_Blueprint_Liquid.pdf',
      notes:'Ziel: Schwerin nach dem Wochenende als abgehakt markieren. Doppelbesuche nur fuer Tag/Nacht, Wetter-Pickups oder echtes Drohnenfenster.',
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
          notes:'Schloss direkt gegenueber: Lennéstraße 1, 19053 Schwerin.',
          tasks:[
            {text:'BTS: erster Hauptspot + Ziel erklaeren', priority:'P1', mic:'MIC 1'},
            {text:'Clean Plate Bruecke / Schloss 16:9, 10 s', priority:'P1', mic:'MIC 0'},
            {text:'Wide: du klein, Schloss dominant', priority:'P1', mic:'MIC 0'},
            {text:'Walking auf Kamera zu + weg', priority:'P2', mic:'MIC 0'},
            {text:'Walking-Collage seitlich, 6-8 m Abstand', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A: Wide + Medium', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit B: urbanerer Winkel', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Gelaender, Tuerme, Pferdebaendiger, nasses Pflaster/Pfuetze', priority:'P2', mic:'MIC 0'},
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
            {text:'BTS: Weg/Eingang + gesuchte Perspektive erklaeren', priority:'P1', mic:'MIC 1'},
            {text:'Architektur: Tuerme, Tueren, Fassaden, Statuen, Treppen', priority:'P2', mic:'MIC 0'},
            {text:'Low Angle Schlossfassade', priority:'P2', mic:'MIC 0'},
            {text:'Foreground durch Gelaender/Blaetter/Torbogen', priority:'P2', mic:'MIC 0'},
            {text:'Performance pro Outfit an 1-2 starken Winkeln', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Stillness 15-20 s - du still, Umgebung bewegt sich', priority:'P2', mic:'MIC 0'},
            {text:'Vogelperspektive von sicherer erhoehter Position', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + 20 s Atmo', priority:'P2', mic:'MIC S'},
            {text:'Field Rec: Laub, Schritte, Wind, Park-Atmo', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'Foto / Thumbnail', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'schlossgarten', date:'Fr 09.10.', time:'15:10-16:20', name:'Schlossgarten / Kreuzkanal', address:'Lennéstraße 1, 19053 Schwerin', type:'Schloss-Cluster',
          notes:'Symmetrie, Wege, Blaetter, Wind und Wasser nutzen.',
          tasks:[
            {text:'BTS: Setup + symmetrische Sichtachse', priority:'P1', mic:'MIC 1'},
            {text:'Wide symmetrisch', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage auf Weg/Allee', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A - P1', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit B - 1 gutes Setup', priority:'P2', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Baeume im Wind, Blaetter, Schuh durch Laub, Kanal, Wasser, Statuen', priority:'P2', mic:'MIC 0'},
            {text:'Pfuetzen-Spiegelung tief, 60 fps bei Schritt durchs Bild', priority:'P1', mic:'MIC 0'},
            {text:'Clean Plate + Foto/Thumbnail', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Wind in Baumkronen, Blaetter, Schritte, Kanalwasser', priority:'P2', mic:'MIC S / DJI Mic nah'},
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
            {text:'Wide: Ruecken zur Kamera, Blick aufs Wasser/Schloss', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage seitlich ca. 7 m entfernt', priority:'P1', mic:'MIC 0'},
            {text:'Performance A + B je Wide/Medium an staerksten Uferwinkeln', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Schilf, Wellen, Reflexion, Gelaender, Mantel im Wind, Silhouette', priority:'P2', mic:'MIC 0'},
            {text:'Close-ups: Augen/Gesicht, Haende, Schuhe, Stoff', priority:'P2', mic:'MIC 0'},
            {text:'Hero 16:9 + Hero 9:16 + Thumbnail', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Schilf, Wasser, Voegel, Wind, ferne Stadt', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'20-60 s Stereo-Atmo', priority:'P2', mic:'MIC S'}
          ]
        },
        {
          id:'drone-castle', date:'Fr/Sa/So', time:'Nur trocken + windarm', name:'Drohnenblock Schloss / Park / Vogelperspektive', address:'Lennéstraße 1, 19053 Schwerin', type:'BONUS',
          notes:'Nur legal, trocken, VLOS, sicherer Start/Landeplatz, Geo-Zone vorher pruefen. Kein Zwang.',
          tasks:[
            {text:'Ruhiger 1/4- bis 1/2-Orbit um Schloss', priority:'BONUS', mic:'MIC 0'},
            {text:'Schloss / Insel Top-down', priority:'BONUS', mic:'MIC 0'},
            {text:'Park / Schlossgarten Top-down oder 45 Grad', priority:'BONUS', mic:'MIC 0'},
            {text:'Du aus Vogelperspektive fuer Collage', priority:'BONUS', mic:'MIC 0'},
            {text:'Vertikaler Drohnen-Hero', priority:'BONUS', mic:'MIC 0'},
            {text:'Vor Start: Regen, Boeen, Menschenlage, Geo-Zone, Startplatz pruefen', priority:'P1', mic:'MIC 0'}
          ]
        },
        {
          id:'markt', date:'Fr 09.10.', time:'20:15-21:00', name:'Altstaedtischer Markt', address:'Am Markt, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Nasses Pflaster, Fassaden, Laternen, Reflexionen.',
          tasks:[
            {text:'BTS: Night-Setup + Regen/Reflexionen', priority:'P1', mic:'MIC 1'},
            {text:'Clean Plate Markt/Fassaden 10 s', priority:'P1', mic:'MIC 0'},
            {text:'Wide: du klein, Architektur dominant', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit A P1, Outfit B P2', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Walking-Collage entlang Fassade/Laternen', priority:'P1', mic:'MIC 0'},
            {text:'B-Roll: Fassade, Fenster, Pflaster, Pfuetzen, Laternen, Blaetter, Regenrinne', priority:'P2', mic:'MIC 0'},
            {text:'Pfuetzenspiegelung extrem tief', priority:'P1', mic:'MIC 0'},
            {text:'Close Gesicht mit Seitenlicht', priority:'P2', mic:'MIC 0'},
            {text:'Thumbnail nasses Pflaster + Architektur', priority:'P1', mic:'MIC 0'},
            {text:'Field Rec: Regen, Pfuetzen-Schritte, Stadt-Hall, Auto-Pass-bys sicher', priority:'P2', mic:'MIC S / DJI Mic nah'}
          ]
        },
        {
          id:'schelfstadt', date:'Fr 09.10.', time:'21:00-21:50', name:'Schelfstadt / Schelfkirche', address:'Puschkinstraße 3, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Kopfsteinpflaster, Fachwerk/Backstein, enge Gassen.',
          tasks:[
            {text:'BTS: Gasse + Look erklaeren', priority:'P1', mic:'MIC 1'},
            {text:'Walking-Collage seitlich, 5-7 m', priority:'P1', mic:'MIC 0'},
            {text:'Performance Outfit B P1', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'Performance Outfit A P2 nur bei starkem Winkel', priority:'P2', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Fachwerk, Backstein, Fenster, Laternen, Aeste, Blaetter', priority:'P2', mic:'MIC 0'},
            {text:'Low Angle Schuhe auf Kopfsteinpflaster, 60 fps', priority:'P2', mic:'MIC 0'},
            {text:'Foreground durch Tor/Gelaender/Aeste', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + 20 s Atmo', priority:'P2', mic:'MIC S'},
            {text:'Field Rec: Kopfstein-Schritte, Tropfen/Regenrinne, Wind, Tor/Tuer wenn passend', priority:'P2', mic:'MIC S / DJI Mic nah'}
          ]
        },
        {
          id:'pfaffenteich', date:'Fr 09.10.', time:'21:50-22:45', name:'Pfaffenteich', address:'Pfaffenteich, 19055 Schwerin', type:'Nacht-Cluster',
          notes:'Wasser, Lichter, Spiegelungen und Abschluss-BTS.',
          tasks:[
            {text:'BTS: Wasser/Haeuser + was noch fehlt', priority:'P1', mic:'MIC 1'},
            {text:'Wide: du am Wasser, Lichter/Haeuser hinten', priority:'P1', mic:'MIC 0'},
            {text:'Walking-Collage Promenade/Laternen', priority:'P1', mic:'MIC 0'},
            {text:'Stillness: du stehst/sitzt, Wasser bewegt sich', priority:'P2', mic:'MIC 0'},
            {text:'Performance: 1 starkes Setup pro Outfit', priority:'P1', mic:'MIC 0 / MIC 1 nur Live-Rap'},
            {text:'B-Roll: Wasser, Reflexionen, Lichter, Gelaender, Wind, Tropfen', priority:'P2', mic:'MIC 0'},
            {text:'Silhouette gegen Lichter/Wasser', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + Atmo + Abschluss-BTS', priority:'P1', mic:'MIC S / MIC 1'},
            {text:'Field Rec: Wasser, Wind, Voegel, ferne Stadt/Verkehr', priority:'P2', mic:'MIC S'}
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
            {text:'Foreground: Schilf/Graeser/Zaun/Aeste', priority:'P2', mic:'MIC 0'},
            {text:'Details: Wasser, Sand, Schuhe, Haende, Jacke im Wind', priority:'P2', mic:'MIC 0'},
            {text:'Clean Plate + Atmo + Foto', priority:'P1', mic:'MIC S'},
            {text:'Field Rec: Wellen, Wind, Schilf, Schritte auf Sand/Kies, Voegel', priority:'P2', mic:'MIC S / DJI Mic nah'},
            {text:'Drohne nur legal, trocken, deutlich windarm', priority:'BONUS', mic:'MIC 0'}
          ]
        },
        {
          id:'pickups', date:'Sa 10.10. / So 11.10.', time:'Nur bei Bedarf', name:'Pickup-Block', address:'Nur laut offener P1-Liste', type:'Pickups',
          notes:'Kein kompletter Wiederholungsbesuch.',
          tasks:[
            {text:'Offene P1-Shots anzeigen und priorisieren', priority:'P1', mic:'MIC 0'},
            {text:'Nur zum exakten fehlenden Spot fahren', priority:'P1', mic:'MIC 0'},
            {text:'Nach Pickup Fokus/Linse/Belichtung/Ton pruefen', priority:'P1', mic:'MIC 0'},
            {text:'Wenn P1 komplett: Pause, Akkus, Daten, Longform statt redundanter B-Roll', priority:'P2', mic:'MIC 0'}
          ]
        }
      ]
    }
  ]
};
