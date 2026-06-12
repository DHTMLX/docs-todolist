---
sidebar_label: moveTask()
title: moveTask Methode
description: Sie können die moveTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# moveTask()

### Beschreibung {#description}

@short: Verschiebt eine Aufgabe an die angegebene Position

Eine übergeordnete Aufgabe wird zusammen mit ihren Unteraufgaben verschoben.

### Verwendung {#usage}

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameter {#parameters}

- `id` - (optional) die ID der zu verschiebenden Aufgabe
- `project` - (optional) die ID des Projekts<br/>
:::info
Um eine Aufgabe in den Bereich *Kein Projekt* zu verschieben, setzen Sie den Parameterwert auf `null`
:::
- `parent` - (optional) die ID der übergeordneten Aufgabe
- `targetId` - (optional) die ID der Zielaufgabe, vor oder nach der die verschobene Aufgabe eingefügt wird
- `reverse` - (optional) legt die Position fest, an der die verschobene Aufgabe eingefügt wird: **vor** der Zielaufgabe (*true*) oder **nach** ihr (*false* standardmäßig)

### Beispiel {#example}

~~~js {22-28} title="Beispiel 1. Verschieben einer Aufgabe"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "Task 1.1" in "Project 2" verschieben und vor "Task 2.1.1" als Unteraufgabe von "Task 2.1" einfügen
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2.1",
    targetId: "2.1.1",
    reverse: true
});
~~~

Das folgende Beispiel zeigt, wohin die Aufgabe verschoben wird, wenn Sie nur die Parameter `parent` und optional `reverse` angeben:

~~~js {5,12-13}
// "Task 1.1" in "Project 2" verschieben und nach "Task 2.1" als Unteraufgabe von "Task 2" einfügen
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
});

// "Task 1.1" in "Project 2" verschieben und vor "Task 2.1" als Unteraufgabe von "Task 2" einfügen
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
    reverse: true
});
~~~

Das folgende Beispiel zeigt, wohin die Aufgabe verschoben wird, wenn Sie nur den Parameter `targetId` und optional `reverse` angeben:

~~~js {5,12-13}
// "Task 1.1" in "Project 2" verschieben und nach "Task 2" als Root-Aufgabe einfügen
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
});

// "Task 1.1" in "Project 2" verschieben und vor "Task 2" als Root-Aufgabe einfügen
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
    reverse: true
});
~~~

~~~js title="Beispiel 2. Verschieben mehrerer Aufgaben"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// ausgewählte Aufgaben verschieben
list.eachSelected(id => {
    list.moveTask({ 
        id,
        parent: "2.1.1"
    });
}, true);
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
