---
sidebar_label: collapse-task
title: collapse-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das collapse-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# collapse-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe eingeklappt wird

### Verwendung {#usage}

~~~js
"collapse-task": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `collapse-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe

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

// das "collapse-task"-Event abonnieren
list.api.on("collapse-task", ({id}) => {
    console.log("The", id, "task is collapsed"); 
});
~~~ 

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#expandingcollapsing-a-task)
