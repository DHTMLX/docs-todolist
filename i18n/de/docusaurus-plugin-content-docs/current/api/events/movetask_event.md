---
sidebar_label: move-task
title: move-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das move-task-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# move-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe verschoben wird

### Verwendung {#usage}

~~~js
"move-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    operation?: "indent" | "unindent" | "project",
    batch?: (string| number)[]
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `move-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der verschobenen Aufgabe
- `parent` - (optional) die ID der übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts
- `targetId` - (optional) die ID der Zielaufgabe
- `reverse` - (optional) `true`, wenn die Aufgabe vor der Zielaufgabe eingefügt wird; andernfalls `false`
- Zusätzliche Parameter für die Arbeit mit dem [RestDataProvider](guides/working_with_server.md):
    - `operation` - (optional) ein auf einer Aufgabe ausgeführter Operationstyp; Werte:
        - `indent` - Tieferstufen der Aufgaben-Verschachtelungsebene um eine Ebene
        - `unindent` - Höherstufen der Aufgaben-Verschachtelungsebene um eine Ebene
        - `project` - Verschieben einer Aufgabe in ein anderes Projekt
        - Ist kein Wert gesetzt, weist dies auf eine Positionsänderung der Aufgabe innerhalb ihres Projekts hin
    - `batch` - (optional) ein Array mit IDs der Aufgaben, auf die eine Operation angewendet wird

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

// Abonnieren des "move-task"-Events
list.api.on("move-task", ({id}) => {
    console.log("The", id, "task is moved"); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#moving-a-task)
