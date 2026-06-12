---
sidebar_label: addProject()
title: addProject Method
description: Sie können die addProject-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# addProject()

### Beschreibung {#description}

@short: Fügt ein neues Projekt hinzu

### Verwendung {#usage}

~~~js
addProject({
    id?: string | number,
    project?: object
}): void;
~~~

### Parameter {#parameters}

- `id` - (optional) die ID des neuen Projekts
- `project` - (optional) ein Objekt mit den Parametern des Projekts:
  - `label` - (optional) eine Zeichenkette mit dem Namen des Projekts

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

// ein neues Projekt hinzufügen
list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

**Verwandter Artikel**: [Operationen mit Projekten](guides/project_operations.md)
