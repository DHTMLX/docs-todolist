---
sidebar_label: set-project
title: set-project Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das set-project Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# set-project

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das aktive Projekt gewechselt wird

:::info
Das Event wird ausgelöst, wenn Sie die [setProject]-Methode verwenden, um das aktuell aktive Projekt zu wechseln.
:::

### Verwendung {#usage}

~~~js
"set-project": ({
    id: string | number
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `set-project`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID des neu aktiven Projekts

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

// das "set-project"-Event abonnieren
list.api.on("set-project", ({id}) => {
    console.log("The active project is changed to", id);
});
~~~

**Verwandter Artikel:** [Operationen mit Projekten](guides/project_operations.md#changing-the-active-project)
