---
sidebar_label: expandTask()
title: expandTask-Methode
description: Sie können mehr über die expandTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# expandTask()

### Beschreibung {#description}

@short: Klappt eine reduzierte Aufgabe anhand ihrer ID auf

### Verwendung {#usage}

~~~js
expandTask({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der aufzuklappenden Aufgabe

### Beispiel {#example}

~~~js {17-19,22-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Aufgabe reduzieren
list.collapseTask({ 
    id: "1.1",
});

// reduzierte Aufgabe aufklappen
list.expandTask({ 
    id: "1.1",
});
~~~

**Verwandter Artikel**: [Operationen mit Aufgaben](guides/task_operations.md)
