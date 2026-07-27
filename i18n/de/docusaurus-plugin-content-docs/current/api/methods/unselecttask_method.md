---
sidebar_label: unselectTask()
title: unselectTask Methode
description: Sie können mehr über die unselectTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# unselectTask()

### Beschreibung {#description}

@short: Hebt die Auswahl einer oder mehrerer Aufgaben auf

### Verwendung {#usage}

~~~js
unselectTask({
    id: string | number | null
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe, deren Auswahl aufgehoben werden soll

:::info
Wenn `id: null` an die Methode übergeben wird, wird die Auswahl aller ausgewählten Aufgaben aufgehoben und das [`unselect-task`](api/events/unselecttask_event.md)-Event für jede von ihnen ausgelöst
:::


### Beispiel {#example}

~~~js {17,20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Eine Aufgabe auswählen
list.selectTask({ id: "1.1"});

// Die Auswahl der ausgewählten Aufgabe aufheben
list.unselectTask({ id: "1.1" });
~~~

**Changelog:** Die Möglichkeit, `id: null` an die Methode zu übergeben, wurde in v1.1 hinzugefügt

**Verwandter Artikel:** [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
