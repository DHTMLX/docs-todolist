---
sidebar_label: check-task
title: check-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das check-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# check-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe als abgeschlossen markiert wird

### Verwendung {#usage}

~~~js
"check-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `check-task`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `manual` - (optional) `true`, wenn die Aufgabe im „manuellen" Modus als abgeschlossen markiert wird

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

// Abonnieren des "check-task"-Events
list.api.on("check-task", ({id}) => {
    console.log("The", id, "task is marked as completed"); 
});
~~~

**Verwandter Artikel**: [Operationen mit Aufgaben](guides/task_operations.md#marking-a-task-completeincomplete)
