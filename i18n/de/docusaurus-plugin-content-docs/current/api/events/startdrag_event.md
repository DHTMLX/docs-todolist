---
sidebar_label: start-drag
title: start-drag Event
description: Sie können sich in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek über das start-drag-Event informieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# start-drag

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Benutzer beginnt, Aufgaben zu verschieben

### Verwendung {#usage}

~~~js
"start-drag":({
    start: string | number,
    mode: "move" | "copy"
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `start-drag`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `start` - (erforderlich) die ID der Aufgabe, von der aus der Ziehvorgang gestartet wurde
- `mode` - (erforderlich) der Modus für Drag-n-Drop:
    - `move` - der Verschieben-Modus
    - `copy` - der Kopieren-Modus

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

// das "start-drag"-Event abonnieren
list.api.on("start-drag", ({ start, mode }) => {
    console.log(start, mode);
});
~~~

**Änderungsprotokoll:** In v1.1 hinzugefügt

**Verwandter Artikel:** [Drag-n-Drop](guides/configuration.md#drag-n-drop)
