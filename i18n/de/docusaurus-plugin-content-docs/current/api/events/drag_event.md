---
sidebar_label: drag
title: drag Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das drag-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# drag

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Benutzer Aufgaben per Drag-and-Drop verschiebt

### Verwendung {#usage}

~~~js
"drag":({
    start: string | number,
    source: (string | number)[],
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `drag`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `start` - (erforderlich) die ID der Aufgabe, von der aus der Drag-Vorgang gestartet wurde
- `source` - (erforderlich) ein Array mit IDs der gezogenen Aufgaben
- `target` - (erforderlich) die ID einer potenziellen Zielaufgabe
- `dropPosition` - (erforderlich) die Position relativ zur Zielaufgabe, an der die Aufgaben abgelegt werden:
    - `top` - oberhalb der Zielaufgabe
    - `bottom` - unterhalb der Zielaufgabe
    - `in` - innerhalb der Zielaufgabe

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

// das "drag"-Event abonnieren
list.api.on("drag", ({start, source, target, dropPosition}) => {
    console.log(start, source, target, dropPosition);
});
~~~

**Changelog:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Drag-n-drop](guides/configuration.md#drag-n-drop)
