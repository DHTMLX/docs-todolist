---
sidebar_label: Operationen mit Projekten
title: Operationen mit Projekten
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über Operationen mit Projekten. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Operationen mit Projekten

## Das aktive Projekt wechseln {#changing-the-active-project}

Um das aktuell aktive Projekt zu wechseln, verwenden Sie die Methode [`setProject()`](api/methods/setproject_method.md). Die Methode nimmt die Projekt-ID als Parameter entgegen. Das folgende Beispiel wechselt das aktive Projekt nach der Initialisierung:

~~~js {9,16}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", {
    projects,
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.setProject({ id: "first" });
~~~

## Ein neues Projekt hinzufügen {#adding-a-new-project}

Um ein neues Projekt zu erstellen, verwenden Sie die Methode [`addProject()`](api/methods/addproject_method.md). Der folgende Code-Ausschnitt fügt ein viertes Projekt hinzu:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

## Ein Projekt aktualisieren {#updating-a-project}

Um Parameter eines Projekts dynamisch zu aktualisieren, verwenden Sie die Methode [`updateProject()`](api/methods/updateproject_method.md). Das folgende Beispiel benennt eine Projektbezeichnung um:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

## Ein Projekt löschen {#deleting-a-project}

Um ein Projekt zu entfernen, verwenden Sie die Methode [`deleteProject()`](api/methods/deleteproject_method.md). Der folgende Code-Ausschnitt löscht ein Projekt:

~~~js {17}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const tasks = [
    { id: "1", text: "Task 1", project: "first" },
];

const list = new ToDo("#root", { projects, tasks });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.deleteProject({ id: "first" });
~~~

:::note
Dem Projekt zugeordnete Aufgaben werden nicht entfernt. Die Aufgaben werden in den Bereich *"No project"* verschoben.

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::
