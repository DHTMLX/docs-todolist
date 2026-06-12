---
sidebar_label: clone-task
title: clone-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das clone-task-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# clone-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe aus der Zwischenablage an der angegebenen Position eingefügt wird

Das Event wird nach dem [paste-task](api/events/pastetask_event.md)-Event ausgelöst.

### Verwendung {#usage}

~~~js
"clone-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    batch: obj[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `clone-task`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `parent` - (optional) die ID der übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts
- `targetId` - (optional) die ID der Zielaufgabe, an der die Aufgabe eingefügt wurde
- `reverse` - (optional) `true`, wenn die Aufgabe vor der Zielaufgabe eingefügt wurde; andernfalls `false`
- `batch` - (erforderlich) ein Array von Objekten, die beim Kopieren erstellt und dann eingefügt wurden

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

// Abonnieren des "clone-task"-Events
list.api.on("clone-task", (obj) => {
    console.log(obj); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#copyingpasting-a-task)
