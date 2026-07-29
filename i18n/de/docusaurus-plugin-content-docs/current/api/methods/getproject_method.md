---
sidebar_label: getProject()
title: getProject-Methode
description: Sie können mehr über die getProject-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# getProject()

### Beschreibung {#description}

@short: Ruft ein Projektobjekt anhand seiner ID ab

### Verwendung {#usage}

~~~js
getProject({ id: string | number }): object;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Projekts

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit den Daten des Projekts zurück

### Beispiel {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { tasks, users } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Datenobjekt des Projekts abrufen
list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

**Verwandter Artikel:** [Projektobjekt](guides/project_object_operations.md)
