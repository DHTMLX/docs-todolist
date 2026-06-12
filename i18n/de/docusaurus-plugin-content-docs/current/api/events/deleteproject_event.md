---
sidebar_label: delete-project
title: delete-project Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das delete-project-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# delete-project

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Projekt entfernt wird

### Verwendung {#usage}

~~~js
"delete-project": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `delete-project`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID eines Projekts

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

// das "delete-project"-Event abonnieren
list.api.on("delete-project", ({id}) => {
    console.log("The project with ID:", id, "is removed");
});
~~~

**Verwandter Artikel**: [Operationen mit Projekten](guides/project_operations.md#deleting-a-project)
