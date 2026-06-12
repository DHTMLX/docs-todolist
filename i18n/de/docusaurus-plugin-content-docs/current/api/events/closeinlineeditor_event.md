---
sidebar_label: close-inline-editor
title: close-inline-editor Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das close-inline-editor-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List.
---

# close-inline-editor

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Inline-Editor einer Aufgabe oder eines Projekts geschlossen wird

### Verwendung {#usage}

~~~js
"close-inline-editor": ({
    id: string | number,
    save: boolean
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `close-inline-editor`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe oder eines Projekts
- `save` - (erforderlich) `true`, wenn die vorgenommenen Änderungen beim Schließen des Editors gespeichert wurden; andernfalls `false`

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

// Abonnieren des "close-inline-editor"-Events
list.api.on("close-inline-editor", ({id, save}) => {
    console.log("The inline editor is closed for the", id, "item"); 
});
~~~

**Verwandter Artikel:** [Inline-Bearbeitung](guides/inline_editing.md#working-with-editor)
