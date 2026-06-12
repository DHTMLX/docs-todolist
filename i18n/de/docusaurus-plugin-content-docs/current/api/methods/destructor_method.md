---
sidebar_label: destructor()
title: destructor-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die destructor-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# destructor()

### Beschreibung {#description}

@short: Entfernt alle HTML-Elemente der To Do List und trennt alle zugehörigen Events


### Verwendung {#usage}

~~~js
destructor(): void;
~~~


### Beispiel {#example}

~~~js {14,17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Liste entfernen
list.destructor();

// Toolbar entfernen
toolbar.destructor();
~~~
