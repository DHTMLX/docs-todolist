---
sidebar_label: existsTask()
title: existsTask-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die existsTask-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# existsTask()

### Beschreibung {#description}

@short: Prüft, ob die angegebene Aufgabe im DataStore vorhanden ist


### Verwendung {#usage}

~~~js
existsTask({ id: string | number }): boolean;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Aufgabe vorhanden ist, andernfalls `false`.

### Beispiel {#example}

~~~js {19-20}
const { ToDo, Toolbar } = todo;
const { users, projects } = getData();

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

// prüfen, ob Aufgaben vorhanden sind
list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

**Verwandter Artikel**: [Aufgabenobjekt/ID](guides/task_object.md)
