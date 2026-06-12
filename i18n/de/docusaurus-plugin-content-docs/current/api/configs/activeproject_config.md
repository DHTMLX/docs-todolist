---
sidebar_label: activeProject
title: activeProject Config
description: Sie können mehr über die activeProject-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# activeProject

### Beschreibung {#description}

@short: Optional. Die ID des aktiven Projekts

:::info
Wenn das angegebene aktive Projekt nicht existiert oder überhaupt keine Projekte in To Do List geladen wurden, wird beim Initialisieren der Komponente der Abschnitt *Kein Projekt* angezeigt.

Die Aufgaben gehören in den folgenden Fällen zum Abschnitt *Kein Projekt*:
- wenn der Parameter `project` nicht im [Objekt der Stammaufgabe](api/configs/tasks_config.md) angegeben ist
- wenn `project: null | undefined` im [Objekt der Stammaufgabe](api/configs/tasks_config.md) angegeben ist
:::

### Verwendung {#usage}

~~~js
activeProject?: string | number | null;
~~~

:::info
Wenn `activeProject` nicht angegeben ist und keine Aufgaben zum Abschnitt *Kein Projekt* gehören, wird das erste Projekt aus der Liste der Projektobjekte als aktives Projekt geladen.
:::

### Beispiel {#example}

~~~js {4-7,11-12}
const { ToDo, Toolbar } = todo;

// Projektdaten
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// To-do-Liste erstellen
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Verwandter Artikel**: [Projekte verwalten](guides/project_index.md)
