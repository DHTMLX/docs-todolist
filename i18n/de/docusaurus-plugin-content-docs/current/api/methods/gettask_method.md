---
sidebar_label: getTask()
title: getTask-Methode
description: Sie können mehr über die getTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# getTask()

### Beschreibung {#description}

@short: Ruft ein Aufgabenobjekt anhand seiner ID ab

### Verwendung {#usage}

~~~js
getTask({ id: string | number }): object;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit den Daten der Aufgabe zurück

### Beispiel {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { projects, users } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Datenobjekt der Aufgabe abrufen
list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

**Verwandter Artikel**: [Aufgabenobjekt/ID](guides/task_object.md)
