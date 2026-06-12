---
sidebar_label: eachSelected()
title: eachSelected-Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die eachSelected-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# eachSelected()

### Beschreibung {#description}

@short: Iteriert über alle ausgewählten Aufgaben

### Verwendung {#usage}

~~~js
eachSelected(
    callback: (id: string | number, index: number) => void,
    sorted?: boolean, // false by default
    reversed?: boolean, // false by default
);
~~~

### Parameter {#parameters}

- `callback` - (erforderlich) eine Callback-Funktion, die für jede ausgewählte Aufgabe ausgeführt wird. Die Funktion nimmt zwei Parameter entgegen:
    - `id` - die ID einer ausgewählten Aufgabe
    - `index` - der Index der aktuellen Aufgabe
- `sorted` - (optional) legt fest, ob die Methode die IDs der ausgewählten Aufgaben nach der Anzeigereihenfolge in der Liste sortieren soll (`true`) oder nicht (`false`)
- `reversed` - (optional) legt fest, ob die Methode über die ausgewählten Aufgaben in umgekehrter Reihenfolge iterieren soll (`true`) oder nicht (`false`)

### Beispiel {#example}

~~~js {22-24,27-29,32-34,37-39}
const { ToDo, Toolbar } = todo;

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
    selected: ["1.2", "1.1", "2.2", "2.1"],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - deaktiviert; reversed - deaktiviert;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.2", "1.1", "2.2", "2.1"]
});

// sorted - aktiviert; reversed - deaktiviert;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.1", "1.2", "2.1", "2.2"]
}, true);

// sorted - deaktiviert; reversed - aktiviert;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.1", "2.2", "1.1", "1.2"]
}, false, true);

// sorted - aktiviert; reversed - aktiviert;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.2", "2.1", "1.2", "1.1"]
}, true, true);
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
