---
layout: post
title: "Sprint 4: Status Update"
date: 2017-10-23
author: daniel
intro: Unser Sprintmeeting 004 fand statt und mit der neuen "Sparv Telegram" Folge kommt auch wieder der schriftliche Teil mit daher.
category: sprintreview
metatitle: "Sprint 4: Status Update"
metadescription: Unser Sprintmeeting 004 fand statt und mit der neuen "Sparv Telegram" Folge kommt auch wieder der schriftliche Teil mit daher.
---

Unser Sprintmeeting 004 fand statt und mit der neuen ["Sparv Telegram" Folge](http://telegram.sparv.de/st004-der-odenwald-ist-nicht-der-mount-everest/) kommt auch wieder der schriftliche Teil mit daher.

### Review
In diesem Sprintzyklus hat Jan damit begonnen, ein visuelles Grundgerüst für Sparv zu bauen. Hierbei geht es darum, verschiedene Bereiche der Anwendung zu definieren, die Art der Navitgation zu bestimmen etc. Dazu ist auch eine grundlegende Festlegung für eine visuelle Sprache von Sparv zustandegekommen, in der neben Farben und Typographie auch das Auftreten und der Charakter der Anwendung beschrieben sind.

Des Weiteren hat Jan die [Kundenmodule gestaltet](https://dribbble.com/shots/3862422-Client-Overview). Hierbei sind das visuelle Auftreten und das Bedienungskonzept für die Übersicht der Kunden sowie für das Anlegen, Einsehen, Editieren und Löschen einzelner Kundendaten entstanden.

Ich habe währenddessen den Login des Nutzers fertiggestellt. Die Usersession wird nun auf der Clientseite verwaltet und über einen JWT ([JSON Web Token](https://jwt.io)) mit der Serverseite authentifiziert. Zusätzlich habe ich mir den frisch vorgestellten [VueJS Style Guide](https://vuejs.org/v2/style-guide/) angeschaut und beschlossen, diesen auf Clientseite zu beherzigen. 

Dazu sind hier auf unserem Blog zwei Posts erschienen - einmal das Review zu [Sparv Telegram 003](http://localhost:3000/2017/10/08/sprint-3-status-update/) und zum anderen die Veröffentlichung unserer [Definition of Done](/2017/10/05/ist-es-fertig-darum-definition-of-done/).

Und wenn wir gerade beim Thema Blog sind: Jan hat der Artikelansicht ein Update spendiert, in der jetzt die Autoren des Artikels am Schluss gezeigt werden.

Auch hat Jan in diesem Sprintzyklus einen Fragenkatalog erstellt, welcher für eine Basisinformationsquelle bei der Befragung von Personal Trainern dienen soll.

### Retro
Aus meiner Sicht bin ich erleichtert, das die Login-Funktionalität nun steht. Auf der anderen Seite jedoch nervt es mich, das ich das Unittesting vor mir herschiebe, obwohl laut unserer Definition of Done diese ein Bestandteil des Fertigstellens ist. Wir sind quasi etwas über die DoD herübergeflogen und haben solche Tasks dann als abgeschlossen gesehen. Nach diesem Sprint versuchen wir, die DoD penibel einzuhalten um solches vor-sich-herschieben zu vermeiden. 

Jan bemerkte, das die Statusupdates, welche wir im letzten Sprintmeeting festgelegt hatten, um unseren Arbeitsalltag für den jeweils anderen transparenter zu gestalten, gut funktionieren. Wir wissen direkt über eine kurze Slack-Notiz bescheid, wie der Stand des anderen ist und was als nächstes anvisiert wird. Des weiteren viel ihm auf, das wir noch bei unserer Selbsteinschätzung unsicher sind - z.B. sind die Tasks “Persona/Customer Journey erstellen” und “Modul Übung erstellen” aus diesem Sprint rausgefallen, da realistisch gesehn einfach keine Zeit in diesem Sprint dafür vorhanden war.

Abgesehen davon ist der Task “Persona/Customer Journey erstellen” generell entfallen, da wir uns aktuell gern in solche “Details” verlieren, welche zu sehr nach Lehrbuch stattfinden. Wir arbeiten beide neben unserem Hauptberuf in unserer Freizeit an Sparv - somit müssen wir effektiver werden. Die Schlussfolgerung dessen ist nun, das Jan einen großen Teil der Frontendarbeiten übernehmen wird, um mich weiter ins Backend verlagern zu können. Wir erhoffen uns somit größere Schritte im gleichen Zeitrahmen gehen zu können. Sollten dann doch Dinge wie Personas fehlen, werden sie erledigt sofern sie gebraucht werden. 

Interessant ist hier zu beobachten, wie schnell man in gewohnte Muster fällt (detailliertes Konzept, umfangreiche Ausarbeitung etc.) obwohl wir uns einen gewissen Spielraum gegeben haben, der eben mit diesen Mustern bricht. Wir haben am Ende noch kurz auf unsere Jahresziele geschaut - wir denken, das wir diese schaffen werden!

### Planung
Der kommende Sprintzyklus wird sich dieses mal etwas länger gestalten und bis zum 10.11.2017 laufen. Folgende Aufgaben haben wir bis dahin vorgenommen:

#### Jan
- Loginviews umsetzen in Sparvapp
- Settingsviews umsetzen in Sparvapp
- Konzeption der Übungsmodule
- Anlegen, Ansicht, Editieren und Löschen eines Kunden in Sparvapp umsetzen
- Unsere Definition eines Sprintes als Blogpost veröffentlichen
- Crossposting der Blogposts auf anderen Platformen (Medium) validieren

#### Daniel
- Löschen eines Useraccounts ermöglichen
- Vorhandenen Sparvnest-Code an Styleguide anpassen
- Unit Tests schreiben
- API Richtlinien definieren
- Anlegen, Ansicht, Editieren und Löschen eines Kunden in Sparvnest umsetzen

Das war es soweit mit dem vierten Sprint. Bei Fragen und Anregungen kann man uns gerne über [Twitter](https://twitter.com/sparvapp) und per [E-Mail](mailto:hi@sparv.de) kontaktieren - wir freuen uns über jede Art des Feedbacks! Bis zum nächsten Sparv Telegram - wieder als Blogpost und natürlich in auditiver Form als Podcast unter [telegram.sparv.de](http://telegram.sparv.de). Bis dann!