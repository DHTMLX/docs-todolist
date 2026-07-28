---
sidebar_label: expand-task
title: expand-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das expand-task-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# expand-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe aufgeklappt wird

### Verwendung {#usage}

~~~js
"expand-task": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `expand-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
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

// Abonnieren des "expand-task"-Events
list.api.on("expand-task", ({id}) => {
    console.log("The", id, "task is expanded"); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#expandingcollapsing-a-task)
