# Anleitung
Im Folgenden wollen wir die Technische Seite des Projektes etwas genauer aufschlüssel, sodass das Projekt auch von anderen Personen weitergeführt werden kann.
Vorab ist es wichtig zu erwähnen, dass der Voicecontroller unter Windows __nicht__ lauffähig ist.

## Sprachbefehle
Die Worte in den Klammer sind optional.

### Richtung wechseln:
- fahre (bitte) XXX
- biege (bitte) XXX ab
- (an der nächsten Kreuzung) XXX abbiegen
- an der (nächsten) kreuzung XXX

### Spur wechseln:
- (bitte) wechsel die spur (bitte) nach XXX
- (bitte) spur wechsel nach XXX

### Geschwindigkeit ändern:
- fahre (bitte) XXX kmh $acceleration:acceleration
- fahre (bitte) XXX
- fahre (bitte) XXX (kmh)
- setzt (bitte) die geschwindigkeit (bitte) auf XXX (kmh)

## Bauen und Ausführen
Um das Projekt unter Linux (und vielleicht auch MacOs) zu bauen und auszuführen, können einfach die beiden beigefügen Scripte im root Verzeichnis ausgeführt werden. Durch __build.sh__ werden alle benötigten npm packages heruntergeladen und der Touchcontoller gebaut. Das __run.sh__ script startet dann alle Services.

## Picovoice
Die Dateien von Picovoice sind immer __nur für 30 Tage gültig__ bevor sie erneuert werden müssen. Dies kann einfach über die [Picovoice console](https://console.picovoice.ai/) auf der Webseite erfolgen. 
Wenn dafür eine neuer Account angelegt wird, kann die beiliegende __.yaml__ Datei unter dem Reiter __Rhino__ importiert werden. Unter dem Reiter __Porcupine__ kann dann das Wakeword erstellt werden. Dabei muss darauf geachtet werden, dass die Exporte für die richtige Zielplattform angelegt werden.
Das Trainieren und herunterladen einer Rhino Datei ist innerhalb von wenigen Sekunden erledigt. Eine Porcupine Datei benötigt mit ca. 3 Stunden allerdings deutlich länger.
Anschließend müssen die beiden Dateien im Ordern __picovoice__ im Voicecontroller unter den Namen __hey_auto.ppn__ und __carController_de_linux.rhn__ abgelegt werden.
Sollte einmal keine Zeit für eine neue Rhino Datei zur Verfügung stehen kann alternativ die Datei __leguan_linux.ppn__ im picovoice Order umbenant werden. Diese enthält das Wakeword __leguan__ und kann ohne Erneuerung immer verwendet werden.


