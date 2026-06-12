---
sidebar_label: pasteTask()
title: pasteTask Methode
description: Sie können die pasteTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# pasteTask()

### Beschreibung {#description}

@short: Fügt die kopierte Aufgabe aus der Zwischenablage an der angegebenen Position ein

### Verwendung {#usage}

~~~js
pasteTask({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameter {#parameters}

- `parent` - (optional) die ID der zukünftigen übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts, in das die Aufgabe eingefügt werden soll
- `targetId` - (optional) die ID der Zielaufgabe, vor oder nach der die kopierte Aufgabe eingefügt werden soll
- `reverse` - (optional) legt die Position fest, an der die kopierte Aufgabe eingefügt wird: **vor** der Zielaufgabe (*true*) oder **nach** ihr (*false* standardmäßig)

### Beispiel {#example}

~~~js {17-19,22-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// "Task 1.1" in die Zwischenablage kopieren
list.copyTask({ 
    id: "1.1",
});

// die kopierte Aufgabe nach "Task 1.2" einfügen
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

**Verwandte API**: [copyTask()](api/methods/copytask_method.md)

**Verwandter Artikel**: [Operationen mit Aufgaben](guides/task_operations.md)
