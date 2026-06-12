---
sidebar_label: unselect-task
title: unselect-task Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das unselect-task-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# unselect-task

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Auswahl einer Aufgabe aufgehoben wird

### Verwendung {#usage}

```js
"unselect-task": ({
    id: string | number
}) => void;
```
### Parameter {#parameters}

Der Callback des `unselect-task`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe

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

// das "unselect-task"-Event abonnieren
list.api.on("unselect-task", ({id}) => {
    console.log("The", id, "task is unselected");
});
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
