---
layout: post
title: "Sprint 10: Status Update"
date: 2018-03-26
author: daniel
intro: "Einiges an Umstrukturierung, trotzdem solider Sprint - Der nächste Sprint kann kommen!"
category: sprintreview
metatitle: "Sprint 10: Status Update"
metadescription: "Einiges an Umstrukturierung, trotzdem solider Sprint - Der nächste Sprint kann kommen!"
---

### Review

In diesem Sprint habe ich mich unter anderem mit der Umstrukturierung unserer Authentifizierung im Backend beschäftigt. Die bisherige Lösung wurde durch eine Variante mit zwei Authentifizierungstokens ersetzt, bei der ein kurzlebiger Token für die Zugriffe auf bestimmte Daten  zuständig ist und der andere, langlebige Token widerum dafür genutzt wird, den kurzlebigen "Access"-Token nach erfolgter Verifizierung des Nutzers auszustellen.
Die bisherige Variante war für die erste Entwicklungszeit in Ordnung, entspricht aber einer geringeren Absicherung für die zukünftige Nutzung durch User.
Des weitern ist das überarbeitete Error-Handling nun in der gesamten Backendapplikation funktional integriert. Die genauer formelle Struktur dieser wird in einem zukünftigen Sprint besprochen werden.
Zu guter Letzt habe ich dann auch das Backend bzw. dessen Abhängikeiten auf den aktuellen Stand gebracht.

Den Task des Projektupdatens hat Jan ebenso für Sparvapp im Frontend getan.
Zusätzlich hat er die Login-View als Startpunkt der Applikation gesetzt, da in Zukunft die kommende Landingpage von der eigentlichen Applikation losgelöst sein wird.
Und da wir gerade bei der Landingpage sind: Hier stehen das Konzept und ein erstes grobes Design. Die weiteren Tasks werden wir in kleine Arbeitspakete runterbrechen und zu einem späteren Zeitpunkt vorantreiben.
Dazu hat Jan auch die Ansichten der Traininspläne in der Applikation statisch umgesetzt.
Des weiteren wurden die Modaldialoge so umgebaut, das diese nun dynamisch geladen werden.
Für die code-technische vereinfachung der Kommunikation mit dem Backend wurden außerdem das axios und auth nuxt module integriert.


### Retro

Jan hat sich diesen Sprint einige Aufgaben schwerer gemacht als sie eigentlich waren - was vorallem an der spontanen Umstrukturierung der Modaldialoge und der Integration der Nuxt Module lag.
Ansonsten hat die Kommunkation unter uns beiden gestimmt. Auch das Learning, das wir detailliertere Ticketbeschreibungen brauchen hat sich in diesem Sprint bestätigt.
Er ist durchweg zufrieden und hat aktuell immer noch Bock auf Vue. ;)

Ich für meinen Teil fand diesen Sprint, da er 3 Wochen lang war, ziemlich entspannt. Auch die Aufgaben waren eher durch Recherchearbeit geprägt - die Umsetzung der Tasks war in diesem Sprint ziemlich zügig und simpel.
Vorallem die Umstrukturierung der Authentifizierung war unerwartet wenig Aufwand.

### Planing

#### Jan

- Refactoring Axios/Auth Modul/Modaldialoge
- JWT Refresh Route im Frontend implementieren
- Inline SVG Icons implementieren
- Landingpage Briefing abhalten
- Schwierigkeitsgrad für Übungen definieren
- Übungsbereich im Frontend mit Backend verbinden

#### Henning

- Schwierigkeitsgrad von Übungen implementieren
- API Endpunkte für Trainingspläne
- Verknüpfungen von vorhandenen Übungen und Trainingsplänen
- PUT/PATCH RESTful Standard abwegen und ggfls. implementieren


Falls es Fragen oder Anmerkungen zu irgendwas gibt - schreibt uns einfach auf Twitter oder per Mail! Natürlich könnt ihr auch gerne unseren aktuellen Podcast zu diesem Sprint hören.

Bis dahin - Viel Spaß!
