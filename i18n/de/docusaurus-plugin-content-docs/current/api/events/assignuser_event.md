---
sidebar_label: assign-user
title: assign-user Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das assign-user-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# assign-user

### Beschreibung {#description}

@short: Wird ausgelöst, wenn einer Aufgabe ein Benutzer zugewiesen wird

### Verwendung {#usage}

~~~js
"assign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `assign-user`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `userId` - (erforderlich) die ID des der Aufgabe zugewiesenen Benutzers

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
:::

### Beispiel {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Abonnieren des "assign-user"-Events
list.api.on("assign-user", ({id, userId}) => {
    console.log("The", userId, "user is assigned to the", id, "task"); 
});
~~~

**Verwandter Artikel**: [Aufgaben-Benutzer](guides/task_users.md)
