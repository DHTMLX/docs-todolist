---
sidebar_label: unassign-user
title: unassign-user Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das unassign-user-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# unassign-user

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Zuweisung eines Benutzers zu einer Aufgabe aufgehoben wird

### Verwendung {#usage}

~~~js
"unassign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `unassign-user`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `userId` - (erforderlich) die ID des Benutzers, dessen Zuweisung zur Aufgabe aufgehoben wurde

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event-Bus-Methoden**](category/event-bus-methods.md) verwenden.
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

// das "unassign-user"-Event abonnieren
list.api.on("unassign-user", ({id, userId}) => {
    console.log("The", userId, "user is unassigned from the", id, "task");
});
~~~

**Verwandter Artikel**: [Aufgaben-Benutzer](guides/task_users.md)
