---
sidebar_label: api.intercept()
title: api.intercept Methode
description: Sie können mehr über die intercept-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.intercept()

### Beschreibung {#description}

@short: Ermöglicht das Abfangen und Verhindern interner Events

### Verwendung {#usage}

~~~js
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) das auszulösende Event
- `callback` - (erforderlich) ein auszuführender Callback (die Callback-Argumente hängen vom auszulösenden Event ab)

### Events {#events}

:::info
Die vollständige Liste der internen Events der To Do List finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// forbid removing a project with the "first" ID
list.api.intercept("delete-project", ({ id }) => {
    if(id == "first"){
        return false;
    }
});
~~~
