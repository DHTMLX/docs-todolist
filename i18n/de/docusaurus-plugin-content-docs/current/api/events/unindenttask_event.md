---
sidebar_label: unindent-task
title: unindent-task Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das unindent-task-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# unindent-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Verschachtelungsebene einer Aufgabe um eine Stufe angehoben wird

### Verwendung {#usage}

~~~js
"unindent-task": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `unindent-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

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

// das "unindent-task"-Event abonnieren
list.api.on("unindent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is promoted by one"); 
});
~~~ 

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#changing-the-indent-level-of-a-task)
