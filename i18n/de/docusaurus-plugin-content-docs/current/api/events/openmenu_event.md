---
sidebar_label: open-menu
title: open-menu Event
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über das open-menu Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List stehen zur Verfügung.
---

# open-menu

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das Menü geöffnet wird

### Verwendung {#usage}

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    source?: (string | number)[]
});
~~~

### Parameter {#parameters}

Der Callback des `open-menu`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID des Elements, für das das Menü geöffnet wird
- `type` - (erforderlich) der Typ des Menüs
- `source` - (optional) ein Array mit den ID(s) der Aufgabe(n), für die Operationen ausgeführt werden sollen

### Beispiel {#example}

~~~js
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

// das "open-menu"-Event abonnieren
list.api.on("open-menu", ({id, type, source}) => {
    console.log("The menu is opened", id, type, source); 
});
~~~

**Changelog:** Hinzugefügt in v1.1
