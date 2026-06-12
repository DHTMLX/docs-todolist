---
sidebar_label: collapseTask()
title: collapseTask Method
description: Sie können die collapseTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# collapseTask()

### Beschreibung {#description}

@short: Klappt eine Aufgabe anhand ihrer ID ein

### Verwendung {#usage}

~~~js
collapseTask({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der einzuklappenden Aufgabe

### Beispiel {#example}

~~~js {17-19}
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

// die Aufgabe einklappen
list.collapseTask({ 
    id: "1",
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md)
