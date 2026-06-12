---
sidebar_label: hide-completed-tasks
title: hide-completed-tasks Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das hide-completed-tasks-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# hide-completed-tasks

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die To Do List in den Modus zum Ausblenden abgeschlossener Aufgaben wechselt

### Verwendung {#usage}

~~~js
"hide-completed-tasks": () => void;
~~~

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

// Abonnieren des "hide-completed-tasks"-Events
list.api.on("hide-completed-tasks", () => {
    console.log("The mode of hiding of completed tasks is enabled"); 
});
~~~

**Änderungsprotokoll**: Hinzugefügt in v1.1

**Verwandter Artikel**: [Abgeschlossene Aufgaben ein-/ausblenden](guides/hide_completed_tasks.md)
