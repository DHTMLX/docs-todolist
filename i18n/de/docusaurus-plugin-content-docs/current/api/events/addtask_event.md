---
sidebar_label: add-task
title: add-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das add-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# add-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine neue Aufgabe hinzugefügt wird

### Verwendung {#usage}

~~~js
"add-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `add-task`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der hinzugefügten Aufgabe
- `parent` - (optional) die ID der übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts
- `targetId` - (optional) die ID der Zielaufgabe
- `reverse` - (optional) `true`, wenn die Aufgabe vor der Zielaufgabe eingefügt wird; andernfalls `false`
- `task` - (erforderlich) das Objekt der hinzugefügten Aufgabe

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

// Abonnieren des "add-task"-Events
list.api.on("add-task", (obj) => {
    console.log("A new task is added", obj);
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#adding-a-new-task)
