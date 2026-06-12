---
sidebar_label: serialize()
title: serialize-Methode
description: Sie können die serialize-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# serialize()

### Beschreibung {#description}

@short: Serialisiert die Daten der To Do List in ein JSON-Objekt

### Verwendung {#usage}

~~~js
serialize(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt die serialisierten Daten der To Do List zurück

~~~js
{
    tasks: [],
    users: [],
    projects: [],
    tags: [],
    priorities: [],
    activeProject: string,
}
~~~

### Beispiel {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// ein Objekt mit den Daten der To Do List abrufen
list.serialize();
~~~

**Verwandter Artikel**: [Daten laden und speichern](guides/loading_data.md)
