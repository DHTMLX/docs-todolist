---
sidebar_label: copy-task
title: copy-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das copy-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# copy-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe in die Zwischenablage kopiert wird

### Verwendung {#usage}

~~~js
"copy-task": ({
    id: string | number,
    join?: boolean,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `copy-task`-Events nimmt ein Objekt mit folgenden Parametern entgegen:

- `id` - (erforderlich) die ID einer Aufgabe
- `join` - (optional) gibt den Modus an, in dem die Aufgabe kopiert wurde:
    - `true` - Mehrfach-Kopiermodus
    - `false` - Einzel-Kopiermodus

Falls die kopierte Aufgabe auch aus der Zwischenablage an eine andere Position eingefügt wird, kann das Objekt *vier weitere* Parameter enthalten:

- `parent` - (optional) die ID der übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts
- `targetId` - (optional) die ID der Zielaufgabe, an die die kopierte Aufgabe eingefügt wird
- `reverse` - (optional) `true`, wenn die kopierte Aufgabe vor der Zielaufgabe eingefügt wird; andernfalls `false`

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

// das "copy-task"-Event abonnieren
list.api.on("copy-task", ({id}) => {
    console.log("The", id, "task is copied"); 
});
~~~ 

**Changelog:** Der Parameter `join` wurde in v1.1 hinzugefügt

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#copyingpasting-a-task)
