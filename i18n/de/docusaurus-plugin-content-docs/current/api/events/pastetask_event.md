---
sidebar_label: paste-task
title: paste-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das paste-task Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# paste-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe aus der Zwischenablage an der angegebenen Position eingefügt wird

### Verwendung {#usage}

~~~js
"paste-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `paste-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `parent` - (optional) die ID der künftigen übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts
- `targetId` - (optional) die ID der Zielaufgabe, an der die Aufgabe eingefügt wird
- `reverse` - (optional) `true`, wenn die Aufgabe vor der Zielaufgabe eingefügt wird; andernfalls `false`

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

// das "paste-task"-Event abonnieren
list.api.on("paste-task", (obj) => {
    console.log("The task is pasted", obj); 
});
~~~ 

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#copyingpasting-a-task)
