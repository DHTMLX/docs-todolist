---
sidebar_label: set-sort
title: set-sort Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das set-sort Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# set-sort

### Beschreibung {#description}

@short: Wird ausgelöst, wenn Aufgaben sortiert werden

### Verwendung {#usage}

~~~js
"set-sort": ({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean,
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `set-sort`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `by` - (optional) das Suchkriterium (entweder der Schlüssel des [Aufgaben-Attributs](api/configs/tasks_config.md#parameters) oder eine Suchfunktion, die einen String zurückgibt)
- `dir` - (optional) die Sortierrichtung: "asc" oder "desc"
- `tree` - (optional) definiert, ob die Sortierung für untergeordnete Aufgaben aktiviert ist

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event-Bus-Methoden**](category/event-bus-methods.md) verwenden.
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

// das "set-sort"-Event abonnieren
list.api.on("set-sort", ({ by, dir, tree }) => {
    console.log(by, dir, tree);
});
~~~

**Verwandter Artikel**: [Aufgaben sortieren und filtern](guides/sorting_filtering_tasks.md)
