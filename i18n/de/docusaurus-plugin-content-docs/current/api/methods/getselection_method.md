---
sidebar_label: getSelection()
title: getSelection-Methode
description: Sie können mehr über die getSelection-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# getSelection()

### Beschreibung {#description}

@short: Gibt ein Array mit der ID der ausgewählten Aufgabe zurück

### Verwendung {#usage}

~~~js
getSelection({
    sorted?: boolean,
}): (string | number)[];
~~~

### Parameter {#parameters}

- `sorted` - (optional) wenn `true`, werden die IDs der ausgewählten Aufgaben nach ihrer Anzeigereihenfolge in der Liste sortiert; wenn `false`, werden die IDs der Aufgaben ohne Sortierung ausgegeben

### Rückgabewert {#returns}

Die Methode gibt ein Array mit den IDs der ausgewählten Aufgaben zurück

### Beispiel {#example}

~~~js {20,23}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Sortierung deaktiviert
console.log(list.getSelection({ sorted: false })); // ["1.2", "1.1", "2.2", "2.1"]

// Sortierung aktiviert
console.log(list.getSelection({ sorted: true })); // ["1.1", "1.2", "2.1", "2.2"]
~~~

**Änderungsprotokoll**: Der Parameter `sorted` wurde in v1.1 hinzugefügt

**Verwandter Artikel**: 
- [Aufgabenobjekt/ID](guides/task_object.md)
- [Mehrfachauswahl und Massenoperationen](guides/multiselection.md)
