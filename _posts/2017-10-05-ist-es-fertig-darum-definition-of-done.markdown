---
layout: post
title: "Ist es fertig? - Darum Definition of Done!"
date: 2017-10-05
author: daniel
intro: Neben dem Arbeiten in Sprints haben wir uns entschieden, eine Definition of Done zu schreiben. Doch warum eigentlich?
category: projektmanagment
metatitle: "Ist es fertig? - Darum Definition of Done!"
metadescription: In diesem ersten Artikel eröffnen wir diesen Blog und tätigen einem kleinen Ausblick in die Zukunft von Sparv.
---

Neben dem Arbeiten in Sprints haben wir uns entschieden, eine **Definition of Done** zu schreiben. Doch warum eigentlich?

Eine **DoD** (Definition of Done) ist im Grunde nichts anderes als eine Art ToDo-Liste. In dieser Liste werden Punkte bzw. Regeln festgelegt, welche erfüllt werden müssen, um ein Arbeitspaket als erledigt zu definiern.

Die Vorteile eines solchen Regelwerkes sind folgende:

#### Fertige Produktmodule
Die Beachtung aller Punkte der DoD garantiert, dass das Ergebniss als fertig - und somit voll funktional - angesehen werden kann. Somit können wir selbst kleine Änderungen schneller (und mit gutem Gewissen) in das bestehende System einfließen lassen.

#### Einheitliche Arbeitsstruktur
Durch den gegebenen Leitfaden wird jedes Arbeitspaket in einheitliche Etappen gegliedert (z.B. 'Alle Funktionen implementieren', 'Unittest schreiben' etc.). Dadurch bekommt der Arbeitsverlauf eine Struktur vorgelegt, die durchgehend gleich ist. Das hilft unter anderem für einen schnellen Überblick bei Statusreports, beim Zeitmanagement der Arbeitspakete oder bei Übergabe/Aufteilung von Aufgaben an andere Personen. Wir wissen im Grunde auf einem Blick, wie der grobe Status eines Arbeitspaketes ist - auch wenn es eines vom anderen ist.

Je nach Auslegung der DoD können sich auch andere Vorteile daraus erschließen. Wir beziehen uns in dieser Ausführung auf unsere geschnürten Arbeitspakete. Diese können über mehrere Sprints hinweg dauern und werden durch die Bearbeitung von Subtasks innerhalb der Sprintzyklen fertiggestellt. 

Theoretisch könnte man auch eine DoD für Tasks innerhalb eines Sprints festlegen. Oder für einen kompletten Releasezyklus. Oder was auch immer. Je größer ein Projekt wird - und je mehr Menschen daran arbeiten - desto sinnvoller kann es auch sein, mehrere DoD für unterschiedliche Bereiche festzulegen. Unsere aktuelle DoD sieht wie folgt aus:

### Definition of Done

#### Alle festgelegten Punkte des Arbeitspaketes sind implementiert
Sofern sich Arbeitsschritte herausstellen, welche einen verhältnissmäßig hohen Zeitaufwand erfordern, können diese in eigene Arbeitspakete gepackt werden.

#### Änderungen und Features sind kommentiert/dokumentiert
Sofern Änderungen und Funktionen des Produktteils nicht selbstklärend sind sollten diese durch Kommentarfunktionen der jeweiligen Arbeitstools kurz erklärt werden

#### Produziertes Produktteil ist auf Funktion im Produkt getestet (Unit-/Integration Test)
Das Ergebniss wird mit den entsprechenden Tools auf die erwartete Funktionsweise getestet (z.B.: Löst ein Button bei einem Klick-Event die Funktion aus, die erwartet wird?). Sofern es unerwartetes Handeln geben sollte wird es in diesem Arbeitsschritt ausgebessert.

#### Release Notes schreiben
Die Änderungen/Neuerungen zwischen dem letzten Projektstand und dem Stand inkl. dem aktuellen Arbeitspaket werden dokumentiert.

Ich bezeiche unsere DoD bewusst als 'aktuelle' Version. Höchstwahrscheinlich wird sich die Liste während des kommenden Projektverlaufes noch ändern, wachsen, aufteilen etc. (oder auch nicht?).

Nichts desto trotz gibts dieser Blogpost hoffentlich einen groben Einblick, was eine Definition of Done ist und wieso wir uns dafür entschieden haben. Bei Fragen und Anmerkungen kann man uns gerne auf [Twitter](https://twitter.com/sparvapp) und per [Mail](mailto:hi@sparv.de) erreichen.