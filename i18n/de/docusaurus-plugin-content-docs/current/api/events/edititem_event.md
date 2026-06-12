---
sidebar_label: edit-item
title: edit-item Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das edit-item-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# edit-item

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Wert einer Aufgabe/eines Projekts über den Inline-Editor bearbeitet wird

### Verwendung {#usage}

~~~js
"edit-item": ({
    id: string | number,
    currentValue: string
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `edit-item`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID einer Aufgabe/eines Projekts
- `currentValue` - (erforderlich) der aktuelle (noch nicht gespeicherte) Wert der Aufgabe/des Projekts

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

// das "edit-item"-Event abonnieren
list.api.on("edit-item", ({id, currentValue}) => {
    console.log("The current value of the", id, "item is", currentValue); 
});
~~~

**Verwandter Artikel:** [Inline-Bearbeitung](guides/inline_editing.md)
