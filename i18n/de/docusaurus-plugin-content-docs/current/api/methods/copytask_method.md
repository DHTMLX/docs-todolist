---
sidebar_label: copyTask()
title: copyTask-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die copyTask-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# copyTask()

### Beschreibung {#description}

@short: Kopiert eine Aufgabe in die Zwischenablage und fügt sie an der angegebenen Position ein

:::info
Die Methode ermöglicht es, eine Aufgabe zu kopieren und einzufügen oder nur in die Zwischenablage zu kopieren.
 
Die Methode kopiert eine Aufgabe zusammen mit allen untergeordneten Aufgaben.
:::

### Verwendung {#usage}

~~~js
copyTask({
    id: string | number,
    join?: boolean, // false by default
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe
- `join` - (optional) wenn `true`, wird die angegebene Aufgabe zur Liste der zu kopierenden Aufgaben hinzugefügt; untergeordnete Aufgaben werden automatisch hinzugefügt. Wenn `false`, werden alle vorherigen Kopien zurückgesetzt (d. h. es wird nur die zuletzt angegebene Aufgabe kopiert)

:::info
Wenn Sie eine Aufgabe kopieren (und einfügen!) möchten, übergeben Sie der Methode die folgenden Parameter, um die neue Position der Aufgabe zu definieren:
:::

- `parent` - (optional) die ID der künftigen übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts, in das die Aufgabe eingefügt werden soll
- `targetId` - (optional) die ID der Zielaufgabe, an der die kopierte Aufgabe eingefügt wird
- `reverse` - (optional) legt fest, wo die kopierte Aufgabe eingefügt wird: **vor** der Zielaufgabe (*true*) oder **nach** ihr (*false* standardmäßig)

:::tip
Eine Aufgabe kann innerhalb einer Operation nur einmal kopiert werden.
:::

### Beispiel {#example}

~~~js {23-29} title="Beispiel 1. Eine Aufgabe kopieren"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "Task 1.1" in "Project 2" kopieren und vor "Task 2.1.2" einfügen
list.copyTask({ 
    id: "1.1",
    project: "p_2",
    parent: "2.1",
    targetId: "2.1.2",
    reverse: true
});
~~~

~~~js title="Beispiel 2. Mehrere Aufgaben kopieren"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1"},
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "2", text: "Task 2"},
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1" },
        { id: "3", text: "Task 3" },
    ],
    selected: ["2", "3"]
});

// ausgewählte Aufgaben kopieren
list.eachSelected(id => {
    list.copyTask({
        id,
        join: true,
    });
}, true);

// kopierte Aufgaben einfügen
list.pasteTask({
    targetId: "2", 
});

// Aufgaben abwählen
list.unselectTask({ id: null });
~~~

**Changelog:** Der Parameter `join` wurde in v1.1 hinzugefügt

**Verwandter Artikel:** [Operationen mit Aufgaben](guides/task_operations.md)
