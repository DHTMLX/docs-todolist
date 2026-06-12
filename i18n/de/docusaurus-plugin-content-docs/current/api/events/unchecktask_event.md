---
sidebar_label: uncheck-task
title: uncheck-task Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das uncheck-task-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# uncheck-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe als nicht abgeschlossen markiert wird

### Verwendung {#usage}

~~~js
"uncheck-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `uncheck-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe
- `manual` - (optional) `true`, wenn die Aufgabe im „manuellen" Modus als nicht abgeschlossen markiert wird

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

// das "uncheck-task"-Event abonnieren
list.api.on("uncheck-task", ({id}) => {
    console.log("The", id, "task is marked as uncompleted"); 
});
~~~

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md#marking-a-task-completeincomplete)
