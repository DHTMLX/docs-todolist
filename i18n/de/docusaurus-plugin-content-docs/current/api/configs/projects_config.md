---
sidebar_label: projects
title: projects Config
description: Sie können mehr über die projects-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# projects

### Beschreibung {#description}

@short: Optional. Legt ein Array von Projektobjekten fest, die in die Liste eingefügt werden

### Verwendung {#usage}

~~~js
projects?: [
    {
        id: string | number,
        label: string
    },
    {...} // weitere Projekte
];
~~~

### Parameter {#parameters}

Die Eigenschaft `projects` enthält ein Array von Projektobjekten. Jedes Objekt umfasst die folgenden Parameter:

- `id` - (erforderlich) die ID eines Projekts
- `label` - (erforderlich) der Name eines Projekts. Er wird in der Liste der verfügbaren Projekte angezeigt

### Beispiel {#example}

~~~js {4-7,11}
const { ToDo, Toolbar } = todo;

// Projektdaten
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// To Do List erstellen
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::tip
Standardmäßig wird das erste Projekt aus der Liste der Projektobjekte als aktives Projekt geladen. Um ein anderes Projekt als aktives Projekt festzulegen, verwenden Sie die Eigenschaft [`activeProject`](api/configs/activeproject_config.md).
:::

**Verwandte Artikel**: 
- [Daten laden und speichern](guides/loading_data.md)
- [Projekte verwalten](guides/project_index.md)
