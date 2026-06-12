---
sidebar_label: Projektobjekt
title: Projektobjekt
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das Projektobjekt. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Projektobjekt

## Ein Projektobjekt abrufen {#get-a-project-object}

Um ein Projektobjekt abzurufen, verwenden Sie die Methode [`getProject()`](api/methods/getproject_method.md). Das folgende Beispiel ruft ein Projekt anhand der ID ab:

~~~js {13}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

## Prüfen, ob ein Projekt existiert {#check-if-a-project-exists}

Um zu prüfen, ob ein Projekt existiert, verwenden Sie die Methode [`existsProject()`](api/methods/existsproject_method.md). Der folgende Code-Ausschnitt prüft zwei IDs:

~~~js {13-14}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~
