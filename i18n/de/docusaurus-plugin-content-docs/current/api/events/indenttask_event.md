---
sidebar_label: indent-task
title: indent-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das indent-task-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# indent-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Verschachtelungsebene einer Aufgabe um eine Ebene tiefer gestuft wird

### Verwendung {#usage}

~~~js
"indent-task": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `indent-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

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

// Abonnieren des "indent-task"-Events
list.api.on("indent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is demoted by one"); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#changing-the-indent-level-of-a-task)
