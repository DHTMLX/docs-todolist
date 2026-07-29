---
sidebar_label: set-filter
title: set-filter Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das set-filter Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# set-filter

### Beschreibung {#description}

@short: Wird ausgelöst, wenn Daten nach den angegebenen Kriterien gefiltert werden

### Verwendung {#usage}

~~~js
"set-filter": ({
    match?: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `set-filter`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `match` - (optional) ein Suchmuster
- `by` - (optional) der Parameter des `task`-Objekts, nach dem gesucht wird
- `highlight` - (optional) definiert, ob gefundene Übereinstimmungen hervorgehoben werden
- `strict` - (optional) `true`, wenn der *Strict*-Filtermodus aktiviert ist; andernfalls `false`

:::info
Um die internen Events zu verarbeiten, können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
:::

### Beispiel {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// das "set-filter"-Event abonnieren
list.api.on("set-filter", (obj) => {
    console.log(obj);
});
~~~

**Verwandter Artikel:** [Aufgaben sortieren und filtern](guides/sorting_filtering_tasks.md)
