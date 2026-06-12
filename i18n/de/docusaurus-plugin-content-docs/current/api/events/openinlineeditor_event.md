---
sidebar_label: open-inline-editor
title: open-inline-editor Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das open-inline-editor-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# open-inline-editor

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Inline-Editor einer Aufgabe oder eines Projekts geöffnet wird

### Verwendung {#usage}

~~~js
"open-inline-editor": ({
    id: string | number,
    type: "task" | "project"
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `open-inline-editor`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe oder eines Projekts
- `type` - (erforderlich) der Typ des Elements: "task" oder "project"

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
    api: list.api,
});

// Abonnieren des "open-inline-editor"-Events
list.api.on("open-inline-editor", ({id, type}) => {
    console.log("The inline editor is opened for the", type, "with ID:", id); 
});
~~~

**Verwandter Artikel**: [Inline-Bearbeitung](guides/inline_editing.md#working-with-editor)
