---
sidebar_label: showCompletedTasks()
title: showCompletedTasks Methode
description: Sie können mehr über die showCompletedTasks-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# showCompletedTasks()

### Beschreibung {#description}

@short: Schaltet die To Do List in den Modus, in dem abgeschlossene Aufgaben auf der Seite angezeigt werden

### Verwendung {#usage}

~~~js
showCompletedTasks(): void;
~~~


### Beispiel {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { task, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.showCompletedTasks(); 
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Abgeschlossene Aufgaben anzeigen/ausblenden](guides/hide_completed_tasks.md)
