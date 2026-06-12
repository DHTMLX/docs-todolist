---
sidebar_label: update-task
title: update-task Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das update-task-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# update-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe aktualisiert wird

### Verwendung {#usage}

~~~js
"update-task": ({
    id: string | number,
    task: object,
    skipProvider?: boolean,
    batch?: object[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `update-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der aktualisierten Aufgabe
- `task` - (erforderlich) das Objekt der aktualisierten Aufgabe
- Zusätzliche Parameter für die Arbeit mit dem [RestDataProvider](guides/working_with_server.md):
  - `skipProvider` - (optional) ermöglicht das Überspringen von Events, die an den RestDataProvider gesendet werden; bei `false (Standard)` verarbeitet RestDataProvider das Event, bei `true` überspringt RestDataProvider das Event
  - `batch` - (optional) ein Array von Objekten aktualisierter Aufgaben

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

// das "update-task"-Event abonnieren
list.api.on("update-task", ({id, task}) => {
    console.log("The", id, "task is updated. New task object is", task);
});
~~~


**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#updating-a-task)
