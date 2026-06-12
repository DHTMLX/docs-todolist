---
sidebar_label: assignUser()
title: assignUser Method
description: Sie können die assignUser-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# assignUser()

### Beschreibung {#description}

@short: Weist einer angegebenen Aufgabe eine Person zu

### Verwendung {#usage}

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe
- `userId` - (erforderlich) die ID der Person, die der Aufgabe zugewiesen werden soll

### Beispiel {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// To-do-Liste erstellen
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
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

// einen Benutzer der Aufgabe zuweisen
list.assignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**Verwandter Artikel**: [Aufgaben-Bearbeiter](guides/task_users.md)
