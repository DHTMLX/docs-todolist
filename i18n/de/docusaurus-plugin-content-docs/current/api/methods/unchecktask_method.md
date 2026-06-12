---
sidebar_label: uncheckTask()
title: uncheckTask Methode
description: Sie können mehr über die uncheckTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# uncheckTask()

### Beschreibung {#description}

@short: Markiert eine Aufgabe als unvollständig

### Verwendung {#usage}

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe
- `manual` - (optional) wenn `true`, wird die Aufgabe im "manuellen" Modus markiert. Wenn `false`, hängt das Ergebnis der Methode vom Wert ab, der für das `behavior`-Attribut des `completed`-Parameters der [taskShape](api/configs/taskshape_config.md)-Eigenschaft angegeben ist

### Beispiel {#example}

~~~js {22-25} title="Beispiel 1. Eine Aufgabe deaktivieren"
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

// Aufgabe als abgeschlossen markieren
list.checkTask({ 
    id: "1.1.1", 
});

// Die angegebene Aufgabe als unvollständig markieren
list.uncheckTask({ 
    id: "1.1.1",
    manual: true // 'true' - ignoriert den Wert des "behavior"-Attributs des "completed"-Parameters der "taskShape"-Eigenschaft
});
~~~

~~~js title="Beispiel 2. Mehrere Aufgaben deaktivieren"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1", checked: true },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2", checked: true },
    ],
    selected: ["1.1", "2.2"],
});

// Ausgewählte Aufgaben deaktivieren
list.eachSelected(id => {
    list.uncheckTask({ id });
}, true);
~~~

**Verwandte Artikel:**
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
