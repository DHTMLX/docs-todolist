---
sidebar_label: updateTask()
title: updateTask Methode
description: Sie können mehr über die updateTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# updateTask()

### Beschreibung {#description}

@short: Aktualisiert die Konfigurationsparameter einer Aufgabe

### Verwendung {#usage}

~~~js
updateTask({
    id: string | number,
    task: object
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der zu aktualisierenden Aufgabe
- `task` - (erforderlich) ein Objekt mit einem Hash der zu aktualisierenden Aufgaben-Eigenschaften. Die vollständige Liste der Aufgaben-Parameter finden Sie [hier](api/configs/tasks_config.md)

### Beispiel {#example}

~~~js {17-24}
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

// Konfiguration der Aufgabe aktualisieren
list.updateTask({ 
    id: "1.1",
    task: {
        text: "Completed task"
    }
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md)
