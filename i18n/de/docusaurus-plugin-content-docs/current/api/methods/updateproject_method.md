---
sidebar_label: updateProject()
title: updateProject Methode
description: Sie können mehr über die updateProject-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# updateProject()

### Beschreibung {#description}

@short: Aktualisiert die Konfigurationsparameter eines Projekts

### Verwendung {#usage}

~~~js
updateProject({
    id: string | number,
    project: object
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des zu aktualisierenden Projekts
- `project` - (erforderlich) ein Objekt mit einem Hash der zu aktualisierenden Projektparameter:
  - `label` - (optional) der Name des Projekts

### Beispiel {#example}

~~~js {16-21}
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

// Konfiguration des Projekts aktualisieren
list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

**Verwandter Artikel:** [Operationen mit Projekten](guides/project_operations.md)
