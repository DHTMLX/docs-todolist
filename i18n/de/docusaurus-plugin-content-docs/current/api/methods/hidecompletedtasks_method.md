---
sidebar_label: hideCompletedTasks()
title: hideCompletedTasks Methode
description: Sie können die hideCompletedTasks-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# hideCompletedTasks()

### Beschreibung {#description}

@short: Wechselt die To Do List in den Modus, in dem abgeschlossene Aufgaben auf der Seite ausgeblendet werden

### Verwendung {#usage}

~~~js
hideCompletedTasks(): void;
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

list.hideCompletedTasks(); 
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Abgeschlossene Aufgaben anzeigen/ausblenden](guides/hide_completed_tasks.md)
