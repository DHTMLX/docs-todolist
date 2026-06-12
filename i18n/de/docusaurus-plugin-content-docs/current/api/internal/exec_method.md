---
sidebar_label: api.exec()
title: api.exec Methode
description: Sie können mehr über die exec-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.exec()

### Beschreibung {#description}

@short: Ermöglicht das Auslösen interner Events

### Verwendung {#usage}

~~~js
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) das auszulösende Event
- `config` - (erforderlich) ein Objekt mit Konfigurationsparametern (siehe das auszulösende Event)

### Events {#events}

:::info
Die vollständige Liste der internen Events der To Do List finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// add a new project
list.api.exec("add-project", { project: { label: "New project" } });
~~~
