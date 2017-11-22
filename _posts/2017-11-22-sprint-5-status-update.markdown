---
layout: post
title: "Sprint 5: Status Update"
date: 2017-11-22
author: daniel
intro: Auch Sprint Nummer 005 ist nun erfolgreich besprochen und abgeschlossen. Da Jan und ich uns 3,5 Wochen nicht gesehen hatten, ging dieses Sprintmeeting doch etwas länger als gewohnt ;).
category: sprintreview
metatitle: "Sprint 5: Status Update"
metadescription: Auch Sprint Nummer 005 ist nun erfolgreich besprochen und abgeschlossen. Da Jan und ich uns 3,5 Wochen nicht gesehen hatten, ging dieses Sprintmeeting doch etwas länger als gewohnt ;).
---

Auch Sprint Nummer 005 ist nun erfolgreich besprochen und abgeschlossen. Da Jan und ich uns 3,5 Wochen nicht gesehen hatten, ging dieses Sprintmeeting doch etwas länger als gewohnt ;). Über folgendes haben wir gesprochen:

### Review
Beginnen wir mit unserer API: Ich habe in diesem Sprint die Rahmenbedingungen unserer API nach den [OpenAPI](https://github.com/OAI/OpenAPI-Specification/) Spezifikationen festgelegt und somit einen Ramen für die Kommunikation über die definierten Endpunkte geschaffen. Dieses Regelwerk ist auch in Sparvnest (unsere interne Bezeichnung für das Backend) implementiert und arbeitet ab sofort damit.

Die Endpunkte der API, über die Sparvapp (unser Frontend) mit Sparvnest kommuniziert, sind nach dem [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) Schema geschrieben.
Den Usersettings gehört von auch die Möglichkeit das User Profil löschen zu können.

Des weiteren ist Sparvnest nun an unseren Richtlinien angepasst worden. Dazu gehört zum einen die Schreibweise des Codes, welche dem [StandardJS](https://standardjs.com/) Regelwerk folgt. Zum andern wird der Backend-Code nun von Unittests abgedeckt (endlich!), welche mit Hilfe von [Ava](https://github.com/avajs/ava) geschrieben wurden.

Jan hat währenddessen die Funktionalität der Übungsmodule in Sparvapp integriert. Diese können nun angelegt und in Gruppen verwaltet werden. Des weiteren können Schwierigkeitsgrade der einzelnen Übungen als Tag hinzugefügt werden um diese später leichter organisierbar zu machen. 
Der Application State wurde zudem optimiert. Mit dem Einsatz von [VueX](https://vuex.vuejs.org/en/intro.html) können wir nun den genauen Zustand einer Applikation festlegen und nachvollziehen.

Auch der Login/Registrierung in die Applikation ist fertiggestellt. Sparvapp stellt die nötige Frontendlogik zur Verfügung und kommuniziert mit Sparvnest, um einen User erfolgreich anzumelden oder zu registrieren.

Zu unserer Definition eines Sprints hat Jan zudem einen [Blogpost](https://blog.sparv.de/2017/11/08/unsere-definition-eines-sprints/) veröffentlicht. Dieser ist gleichzeitig zum ersten mal als Crossposting auf [Medium](https://medium.com/sparv-blog/unsere-definition-eines-sprints-f3c171f4c5e8) erschienen - eine Prozedur, die wir ab sofort testen werden.

Zusätzlich haben wir uns um das Kundenmodul gekümmert. Es ist nun möglich, Kunden im System zu verwalten (anlegen, ändern, löschen). Hier sind die Frontendviews sowie die API Endpunkte und Datenbankoperationen geschrieben.

Unser Toolset haben wir mit einem Issuetracker erweitert, um gefundene Fehler gekapselt festhalten zu können, um diese zu analysieren und später in Aufgabenpakete für Sprint zu packen.

### Retro
Für meinen Teil fand ich die aktuelle Arbeitszeit von 3,5 Wochen etwas zu lange. Trotz der noch nicht allzulangen Lebensdauer des Projektes haben sich die 2-Wochen Etappen gut eingelebt und bieten einen guten Rythmus, um schnell voranzukommen ohne Aufgaben lange vor sich her zu schieben. Jan stimmt diesem Punkt zu und fügt hinzu, das sich die 2-Wochen-Sprints aktiver, lebendiger und produktiver anfühlen.
Gut fand ich das wir in der längeren Phase gemeinsam (remote) Punkte bearbeitet haben. Das zeigte, das auch solche Arbeitszeitphasen gut laufen.

Jan bemerkte positiv, das die neue Aufteilung in geteilter Arbeit zwischen Front und Backend auf beide Personen einiges an Fortschrittsgeschwindigkeit in den Prozess gebracht hat. Ihm macht die Arbeit am Frontend Spaß und es fühlt sich nach "aktiverer" Arbeit an. Hierbei muss jedoch beachtet werden, das die anderen Aufgaben, wie Podcast schneiden, nicht aus den Augen verloren wird.
Wo wir uns noch verbessern müssen ist die Absprache von Punkten, die die Zusammenarbeit von Sparvapp und Sparvnest betreffen. Hier gab es einige Stolpersteine über die wir gefallen sind, welche sich durch deutlichere Klarmachung von Funktions- und Definitionsweise hätten verhindern lassen können.

Eine Idee die hierbei entstand, ist es, die aufkommenden Issues im ersten Schritt nur zu sammeln und beim kommenden Sprintmeeting in Arbeitspakete zu packen. Der Vorteil wäre eine stabilere Codebasis plus weitere Featureimplementierungen innerhalb eines Sprints zu erreichen. Somit wird eine Balance geschaffen, die ein flexibleres vorankommen ermöglicht.

### Planung
Für den Sprint 006 sind folgende Punkte geplant:

#### Management:

- Zurück zu unserem 2 Wochen Rythmus - dementsprechend geht der Sprint vom 10.11  bis zum 24.11.

#### Fontend: 
- Der Settingsbereich wird in Sparvapp umgesetzt
- Das Session Handling wird funktional fertiggestellt
- Die Übungsmodule werden visuell gebaut
- Unittests
- Code wird an Richtlinien angepasst - Basis hierfür ist der [offizielle VueJs Styleguide](https://vuejs.org/v2/style-guide/)
- Das Trainingsplanmodul wird konzeptionell geplant

#### Backend:
- Die API Dokumentation wird mit Hilfe von [Swagger UI](https://github.com/swagger-api/swagger-ui) festgehalten und verwaltet
- API Endpunkt um neue Session Tokens zu generieren
- API Endpunkte und DB operationen für die Übungselemente schreiben
- Die Routen werden refactored, um Code zu modularisieren und leichter testbar zu machen
- Vorhandene Issues werden gefixt
- Errorhandling der API Endpunkte optimieren

Und das wars auch schon zu unserem Sprint Nummer 5. So sieht es aktuell aus. Von unserer Seite gibt es soweit erstmal nichts mehr zu sagen - Bis zum nächsten mal!