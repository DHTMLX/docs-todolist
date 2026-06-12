---
sidebar_label: select-task
title: select-task Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das select-task Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# select-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe ausgewählt wird

### Verwendung {#usage}

~~~js
"select-task": ({
    id: string | number,
    join?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `select-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `join` - (optional) definiert den Modus, in dem die Aufgabe ausgewählt wurde:
    - `true` - Mehrfachauswahl-Modus
    - `false` - Einzelauswahl-Modus

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event-Bus-Methoden**](category/event-bus-methods.md) verwenden.
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

// das "select-task"-Event abonnieren
list.api.on("select-task", ({id, join}) => {
    console.log("The", id, "task is selected");
    console.log(join);
});
~~~

**Änderungsprotokoll:** Der Parameter `join` wurde in v1.1 hinzugefügt

**Verwandte Artikel:**
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
