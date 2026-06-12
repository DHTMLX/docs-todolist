---
sidebar_label: end-drag
title: end-drag Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das end-drag-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# end-drag

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das Ziehen von Aufgaben abgeschlossen wurde

### Verwendung {#usage}

~~~js
"end-drag":({
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null,
    mode: "move" | "copy"
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `end-drag`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `target` - (erforderlich) die ID der Aufgabe, auf der der Ziehvorgang beendet wurde
- `dropPosition` - (erforderlich) die Position, an der die gezogenen Aufgaben abgelegt wurden:
    - `top` - oberhalb der Zielaufgabe
    - `bottom` - unterhalb der Zielaufgabe
    - `in` - über der Zielaufgabe
- `mode` - (erforderlich) der Modus des Drag-n-Drop:
    - `move` - der Verschiebe-Modus
    - `copy` - der Kopier-Modus

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
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
    api: list.api
});

// Abonnieren des "drag"-Events
list.api.on("drag", ({ target, dropPosition, mode }) => {
    console.log(target, dropPosition, mode);
});
~~~

**Änderungsprotokoll**: Hinzugefügt in v1.1

**Verwandter Artikel**: [Drag-n-drop](guides/configuration.md#drag-n-drop)
