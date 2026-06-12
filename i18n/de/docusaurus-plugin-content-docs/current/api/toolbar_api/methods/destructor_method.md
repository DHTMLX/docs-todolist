---
sidebar_label: destructor()
title: destructor Method
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die destructor-Methode der Toolbar. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# destructor()

### Beschreibung {#description}

@short: Entfernt alle HTML-Elemente der Toolbar und trennt alle zugehörigen Events


### Verwendung {#usage}

~~~js
destructor(): void;
~~~


### Beispiel {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.destructor();
~~~
