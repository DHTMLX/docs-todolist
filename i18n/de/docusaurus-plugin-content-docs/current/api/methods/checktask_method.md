---
sidebar_label: checkTask()
title: checkTask Method
description: Sie können die checkTask-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# checkTask()

### Beschreibung {#description}

@short: Markiert eine Aufgabe als abgeschlossen

### Verwendung {#usage}

~~~js
checkTask({
    id: string | number,
    manual?: boolean // false standardmäßig
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe
- `manual` - (optional) wenn `true`, wird die Aufgabe im „manuellen" Modus markiert. Bei `false` hängt das Ergebnis der Methode vom Wert des `behavior`-Attributs des `completed`-Parameters der Eigenschaft [taskShape](api/configs/taskshape_config.md) ab

### Beispiel {#example}

~~~js {17-20} title="Beispiel 1. Eine Aufgabe abhaken"
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

// die angegebene Aufgabe als abgeschlossen markieren
list.checkTask({ 
    id: "1.1.1",
    manual: true  // 'true' - ignoriert den Wert des "behavior"-Attributs des "completed"-Parameters der "taskShape"-Eigenschaft
});
~~~

~~~js title="Beispiel 2. Mehrere Aufgaben abhaken"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.2"],
});

// ausgewählte Aufgaben abhaken
list.eachSelected(id => {
    list.checkTask({ id });
}, true);
~~~

**Verwandte Artikel**:
- [Operationen mit Aufgaben](guides/task_operations.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
