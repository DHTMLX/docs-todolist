---
sidebar_label: selected
title: selected Config
description: Sie können mehr über die selected-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# selected

### Beschreibung {#description}

@short: Optional. Ein Array mit den IDs der Aufgaben, die bei der Initialisierung der To Do List ausgewählt sein sollen

### Verwendung {#usage}

~~~js
selected?: (string | number)[];
~~~

### Beispiel {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;

// To Do List erstellen
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Änderungsprotokoll:** In v1.1 hinzugefügt

**Verwandter Artikel:** [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
