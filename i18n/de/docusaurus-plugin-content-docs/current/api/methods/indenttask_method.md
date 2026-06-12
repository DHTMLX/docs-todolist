---
sidebar_label: indentTask()
title: indentTask Methode
description: Sie können die indentTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# indentTask()

### Beschreibung {#description}

@short: Stuft die Verschachtelungsebene der Aufgabe um eine Ebene nach unten, abhängig von der benachbarten Aufgabe

### Verwendung {#usage}

~~~js
indentTask({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe

### Beispiel {#example}

~~~js {17-19} title="Beispiel 1. Herabstufen der Verschachtelungsebene einer Aufgabe"
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

// Verschachtelungsebene der Aufgabe herabstufen
list.indentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

~~~js title="Beispiel 2. Herabstufen der Verschachtelungsebene mehrerer Aufgaben"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// Verschachtelungsebene der ausgewählten Aufgaben herabstufen
list.eachSelected(id => {
    list.indentTask({ id });
}, true);
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
