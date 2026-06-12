---
sidebar_label: api.getReactiveState()
title: api.getReactiveState Methode
description: Sie können mehr über die getReactiveState-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.getReactiveState()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den reaktiven Eigenschaften des DataStore der To Do List zurück

### Verwendung {#usage}

~~~js
api.getReactiveState(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit den folgenden Eigenschaften zurück:

~~~js
{
    activeProject: object,
    tasks: object,
    id: object,
    projects: object,
    readonly: object,
    tags: object,
    taskShape: object,
    selected: object,
    users: object,
    historyState: object
}
~~~

### Beispiel {#example}

~~~js {12-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// subscribe to the task selection
list.api.getReactiveState().selected.subscribe((value) => {
    console.log(value);
    // other actions
});
~~~

**Änderungsprotokoll:** Der Parameter `historyState` wurde in v1.3 hinzugefügt
