---
sidebar_label: add-project
title: add-project Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das add-project-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# add-project

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein neues Projekt hinzugefügt wird

### Verwendung {#usage}

~~~js
"add-project": ({
    id: string | number,
    project?: object
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `add-project`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID des erstellten Projekts
- `project` - (optional) ein Objekt mit Projektparametern:
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

// Abonnieren des "add-project"-Events
list.api.on("add-project", ({id, project}) => {
    console.log("A new ", project.label, " project with ID:", id, "is added");
});
~~~

**Verwandter Artikel:** [Operationen mit Projekten](guides/project_operations.md#adding-a-new-project)
