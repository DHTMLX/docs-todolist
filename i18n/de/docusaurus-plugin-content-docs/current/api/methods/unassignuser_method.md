---
sidebar_label: unassignUser()
title: unassignUser Methode
description: Sie können mehr über die unassignUser-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# unassignUser()

### Beschreibung {#description}

@short: Hebt die Zuweisung einer Person von der angegebenen Aufgabe auf

### Verwendung {#usage}

~~~js
unassignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe
- `userId` - (erforderlich) die ID der Person, deren Zuweisung zur Aufgabe aufgehoben werden soll

### Beispiel {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// To-do-Liste erstellen
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users: [
        { "id": "user_1", "label": "John" },
        { "id": "user_2", "label": "Kate" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Zuweisung des Benutzers zur Aufgabe aufheben
list.unassignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**Verwandter Artikel**: [Aufgaben-Bearbeiter](guides/task_users.md)
