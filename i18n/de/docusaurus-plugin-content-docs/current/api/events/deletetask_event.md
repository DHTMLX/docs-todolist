---
sidebar_label: delete-task
title: delete-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das delete-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# delete-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe entfernt wird

### Verwendung {#usage}

~~~js
"delete-task": ({
    id: string | number,
    batch?: (string | number)[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `delete-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer entfernten Aufgabe
- `batch` - (optional) ein Array mit IDs von Aufgaben, die gemeinsam in einem Massenvorgang entfernt wurden

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

// das "delete-task"-Event abonnieren
list.api.on("delete-task", ({id}) => {
    console.log("The", id, "task is removed"); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#deleting-a-task)
