---
layout: post
title: "Sprint 6: Status Update"
date: 2018-01-14
author: daniel
intro: Hallo zusammen - ja uns gibt es noch! Nach einer etwas längeren Winterpause starten auch wir mit Sparv ins Jahr 2018. Bevor wir jedoch mit neuem Content für das aktuelle Jahr starten gibt es erstmal unseren "Jahresabschluss" für das Jahr 2017 - den Sprint 006 - “Winterzeit, aufräumbereit”.
category: sprintreview
metatitle: "Sprint 6: Status Update"
metadescription: Hallo zusammen - ja uns gibt es noch! Nach einer etwas längeren Winterpause starten auch wir mit Sparv ins Jahr 2018. Bevor wir jedoch mit neuem Content für das aktuelle Jahr starten gibt es erstmal unseren "Jahresabschluss" für das Jahr 2017 - den Sprint 006 - “Winterzeit, aufräumbereit”.
---

Hallo zusammen - ja uns gibt es noch! Nach einer etwas längeren Winterpause starten auch wir mit Sparv ins Jahr 2018. Bevor wir jedoch mit neuem Content für das aktuelle Jahr starten gibt es erstmal unseren "Jahresabschluss" für das Jahr 2017 - den Sprint 006 - “Winterzeit, aufräumbereit”:

### Review

Auch der Sprint Nr. 6 verlief wieder außerhalb der Norm - diesmal 5 Wochen lang.
In dieser Zeit hat Jan sich unter anderem mit dem Sign-Up beschäftigt, der nun auch Vor- und Nachname für die Anmeldung voraussetzt. Des weiteren ist die Settings-View mit den Schnittstellen des Backends verbunden und diverse Formulare wurden mit Fehlermeldungen und Validierungen der Daten erweitert.
Auch das Frontend der Übungsmodule ist soweit statisch fertiggestellt - hier fehlen die nötigen Endpunkte im Backend. Neben dem Code Linting, welches nun auch im Frontend genutzt wird, ist auch das Session Handling überarbeitet worden, welches nun den Authentifizierungstoken persistent speichert. Selbiger verfügt nun über ein Verfallsdatum, welches eine häufigere Re-Validation erzwingt und so die Sicherheit erhöht. An diesem Teil habe ich auf Backendseite gearbeitet. zusätzlich habe ich die API Routen im Code modularisiert Aufgebaut, um hier das Unittesting einfacher zu gestalten. Auch das Error-Handling für Datenbankabfragen ist nun logischer und mit verständlicheren Fehlermeldungen gestaltet.


### Retro

Highlight des Sprints war unser Hackday, den wir in die Halbzeit des Sprints gelegt hatten. Rein von den geschrieben Zeilen Code hat sich nicht viel getan, jedoch hat dieser Tag sehr dabei geholfen detaillierte Absprachen zu halten, was dazu beigetragen hat das wir Sparvapp & Sparvnest funkional miteinander “verheiraten” konnten. Wir haben dieses Verhalten quasi automatisch auch in das Sprintmeeting 006 mit übernommen, in dem wir zuerst über kleine Bugs etc. gesprochen hatten.
Es war unerwartet, das dieser Tag mehr aus reden und weniger aus coden bestand. Jedoch hat dies ungemein geholfen und wir werden solche Tage des öfteren wiederhohlen werden - vorallem wenn es um komplexere Fragestellungen geht und wir dadurch Missverständnisse & Fehleinschätzungen vermeiden können.

Etwas nervig ist es das wir mal wieder einen Sprint aus der besprochenen Zeitphase ausgebrochen haben. Es wäre ein zufriedenstellendes Ziel, einen Sprint abzuschließen, ohne Aufgabenpakete in den kommenden mitzunehmen. Auf der anderen Seite müssen wir jedoch beachten, das es sich hierbei um ein Hobbyprojekt handelt, welches eventuell auch hintenrangestellt werden muss, wenn wichtere Dinge zu erledigen sind.
Nichtsdestotrotz sehen wir dadurch, das wir beide noch sehr motiviert an das Projekt Sparv gehen und gerne daran arbeiten.


### Planung

Für den kommenden Sprint 007 sind folgende Aufgaben in Planung:

#### Jan:

- Trainingsplan Module entwerfen
- Blogpost über den ersten Styleguide
- Frontend Unit Testing implementieren
- Bugfixing
- API Calls in VueX-kompatibel umschreiben

#### Daniel:

- API Dokumentation mit Swagger UI umsetztem
- API Schnittstellen für Übungen implementieren

#### Gemeinsam:

- Codelintingprozess verbessern


Und das war der letzte Sprint im Jahre 2017. Wie immer könnt ihr diesen Sprint [auch als Podcast anhören](http://telegram.sparv.de/st006-winterzeit-aufraeumbereit/). Falls es Fragen oder Anmerkungen zu irgendwas gibt - schreibt uns einfach auf [Twitter](https://twitter.com/sparvapp) oder per [Mail](mailto:hi@sparv.de)!

Bis zum nächsten Sprint!
