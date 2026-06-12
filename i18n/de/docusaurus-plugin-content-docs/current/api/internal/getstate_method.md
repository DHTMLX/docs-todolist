---
sidebar_label: api.getState()
title: api.getState Methode
description: Sie können mehr über die getState-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.getState()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den aktuellen Eigenschaften des DataStore der To Do List zurück

### Verwendung {#usage}

~~~js
api.getState(): object;
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

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const state = list.api.getState();
console.log(state);
~~~

**Änderungsprotokoll**: Der Parameter `historyState` wurde in v1.3 hinzugefügt
