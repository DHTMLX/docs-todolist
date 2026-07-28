---
sidebar_label: update-project
title: update-project Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das update-project-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# update-project

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Projekt aktualisiert wird

### Verwendung {#usage}

~~~js
"update-project": ({
    id: string | number,
    project: object
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `update-project`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID des aktualisierten Projekts
- `project` - (erforderlich) das Objekt des aktualisierten Projekts
    - `label` - (optional) der Name des Projekts

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
:::

### Beispiel {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// das "update-project"-Event abonnieren
list.api.on("update-project", ({id, project}) => {
    console.log("The label of the project with ID:", id, "is changed to", project.label);
});
~~~

**Verwandter Artikel:** [Operationen mit Projekten](guides/project_operations.md#updating-a-project)
