---
sidebar_label: selectTask()
title: selectTask-Methode
description: Sie können die selectTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# selectTask()

### Beschreibung {#description}

@short: Wählt die angegebene Aufgabe anhand ihrer ID aus

### Verwendung {#usage}

~~~js
selectTask({
    id: string | number,
    join?: boolean // false by default
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe
- `join` - (optional) wenn `true`, wird die angegebene Aufgabe zur Sammlung der ausgewählten Aufgaben hinzugefügt, wobei die IDs der zuvor ausgewählten Aufgaben erhalten bleiben

:::info
Der Aufruf der Methode mit `join: false` löst das [`unselect-task`](api/events/unselecttask_event.md)-Event für zuvor ausgewählte Aufgaben aus
:::

### Beispiel {#example}

~~~js {10,17-20}
const { ToDo, Toolbar } = todo;

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

console.log(list.getSelection()); // -> ['1.1']

list.selectTask({ 
    id: "1.1.1",
    join: true
});

console.log(list.getSelection()); // -> ['1.1', '1.1.1']
~~~

**Änderungsprotokoll:** Der `join`-Parameter wurde in v1.1 hinzugefügt

**Verwandter Artikel:** [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
