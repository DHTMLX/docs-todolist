---
sidebar_label: unindentTask()
title: unindentTask Methode
description: Sie können mehr über die unindentTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# unindentTask()

### Beschreibung {#description}

@short: Hebt die Verschachtelungsebene der Aufgabe um eine Ebene an, abhängig von der benachbarten Aufgabe

### Verwendung {#usage}

~~~js
unindentTask({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe

### Beispiel {#example}

~~~js {17-19,21} title="Beispiel 1. Verschachtelungsebene einer Aufgabe anheben"
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

// Verschachtelungsebene der Aufgabe anheben
list.unindentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

~~~js title="Beispiel 2. Verschachtelungsebene mehrerer Aufgaben anheben"
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
    selected: ["1.1", "2.2"],
});

// Verschachtelungsebene ausgewählter Aufgaben anheben
list.eachSelected(id => {
    list.unindentTask({ id });
}, true);
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
