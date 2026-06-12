---
sidebar_label: close-menu
title: close-menu Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das close-menu-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# close-menu

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das Menü geschlossen wird

### Verwendung {#usage}

~~~js
"close-menu": ({
    id: string | number;
    type: "task" | "user" | "toolbar";
});
~~~

### Parameter {#parameters}

Der Callback des `close-menu`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID des Elements, für das das Menü geschlossen wird
- `type` - (erforderlich) der Typ des Menüs

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

// das "close-menu"-Event abonnieren
list.api.on("close-menu", ({id, type}) => {
    console.log("The menu is closed", id, type); 
});
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1
