---
sidebar_label: show-completed-tasks
title: show-completed-tasks Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das show-completed-tasks Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# show-completed-tasks

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die To Do List in den Modus zum Anzeigen erledigter Aufgaben umgeschaltet wird

### Verwendung {#usage}

~~~js
"show-completed-tasks": () => void;
~~~

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

// das "show-completed-tasks"-Event abonnieren
list.api.on("show-completed-tasks", () => {
    console.log("The mode of showing of completed tasks is enabled"); 
});
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Erledigte Aufgaben anzeigen/ausblenden](guides/hide_completed_tasks.md)
