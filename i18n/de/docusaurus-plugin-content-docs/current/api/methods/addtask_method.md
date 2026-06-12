---
sidebar_label: addTask()
title: addTask() Method
description: Sie können die addTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# addTask()

### Beschreibung {#description}

@short: Fügt eine neue Aufgabe zur Liste hinzu

### Verwendung {#usage}

~~~js
addTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}): void;
~~~

### Parameter {#parameters}

- `id` - (optional) die ID der neuen Aufgabe
- `parent` - (optional) die ID der übergeordneten Aufgabe
- `project` - (optional) die ID des Projekts. Standardmäßig die ID des [aktuell aktiven Projekts](api/configs/activeproject_config.md)<br/>
:::info
Falls ein aktives Projekt angegeben ist, Sie jedoch eine Aufgabe in den Bereich *Kein Projekt* hinzufügen möchten, setzen Sie den Wert des Parameters auf `null`
:::
- `targetId` - (optional) die ID der Zielaufgabe, vor oder nach der die neue Aufgabe eingefügt wird
- `reverse` - (optional) legt die Position fest, an der die neue Aufgabe eingefügt wird: **vor** oder **nach** der Zielaufgabe
- `task` - (erforderlich) das Datenobjekt der neuen Aufgabe. Die vollständige Liste der Aufgabenparameter finden Sie [hier](api/configs/tasks_config.md)

:::info
Wenn Sie die Parameter `id`, `parent` und `project` der Methode angeben, müssen Sie diese nicht erneut im Task-Objekt angeben
:::

### Beispiel {#example}

~~~js {22-31}
const { ToDo, Toolbar } = todo;

// To-do-Liste erstellen
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "first" },
        { id: "1.1", text: "Task 1.1", parent: "1", project: "first" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1", project: "first" },
        { id: "1.2", text: "Task 1.2", parent: "1", project: "first" },
    ],
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// eine neue Aufgabe hinzufügen
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

**Verwandter Artikel**: [Operationen mit Aufgaben](guides/task_operations.md)
