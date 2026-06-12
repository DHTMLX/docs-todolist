---
sidebar_label: deleteProject()
title: deleteProject-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die deleteProject-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# deleteProject()

### Beschreibung {#description}

@short: Entfernt ein Projekt

:::note
Die mit dem Projekt verknüpften Aufgaben werden nicht entfernt. Sie werden in den Abschnitt *„Kein Projekt"* verschoben.
:::

### Verwendung {#usage}

~~~js
deleteProject({
    id: string | number
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID eines Projekts

### Beispiel {#example}

~~~js {16}
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

// ein Projekt entfernen
list.deleteProject({ id: "first" });
~~~

**Verwandter Artikel**: [Operationen mit Projekten](guides/project_operations.md)
