---
sidebar_label: existsProject()
title: existsProject-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die existsProject-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# existsProject()

### Beschreibung {#description}

@short: Prüft, ob das angegebene Projekt im DataStore vorhanden ist


### Verwendung {#usage}

~~~js
existsProject({ id: string | number }): boolean;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des Projekts

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn das Projekt vorhanden ist, andernfalls `false`.

### Beispiel {#example}

~~~js {16-17}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// prüfen, ob Projekte vorhanden sind
list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~

**Verwandter Artikel:** [Projektobjekt](guides/project_object_operations.md)
