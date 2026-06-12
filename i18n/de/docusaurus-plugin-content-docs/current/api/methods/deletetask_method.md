---
sidebar_label: deleteTask()
title: deleteTask-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die deleteTask-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# deleteTask()

### Beschreibung {#description}

@short: Entfernt die angegebene Aufgabe aus dem DataStore

:::note
Die Methode entfernt die Aufgabe zusammen mit allen untergeordneten Aufgaben.
:::

### Verwendung {#usage}

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der zu entfernenden Aufgabe

### Beispiel {#example}

~~~js {17-19} title="Beispiel 1. Eine Aufgabe löschen"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// die Aufgabe löschen
list.deleteTask({ 
    id: "1.2",
});
~~~

~~~js title="Beispiel 2. Mehrere Aufgaben löschen"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.1"],
});

// ausgewählte Aufgaben löschen
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
