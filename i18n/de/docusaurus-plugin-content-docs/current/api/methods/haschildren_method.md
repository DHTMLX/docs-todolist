---
sidebar_label: hasChildren()
title: hasChildren-Methode
description: Sie können mehr über die hasChildren-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# hasChildren()

### Beschreibung {#description}

@short: Prüft, ob die angegebene Aufgabe untergeordnete Aufgaben hat


### Verwendung {#usage}

~~~js
hasChildren({
    id: string | number,
    filtered?: boolean, // false by default
    hideCompleted?: boolean // false by default
}): boolean;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe
- `filtered` - (optional) wenn `false`, werden auch gefilterte untergeordnete Aufgaben in das Ergebnis einbezogen; andernfalls werden sie ausgeschlossen
- `hideCompleted` - (optional) wenn `false`, werden abgeschlossene Aufgaben in das Ergebnis einbezogen; andernfalls werden sie ausgeschlossen

:::tip
Der Parameter `filtered` wird verwendet, wenn eine Filterung angewendet wurde
:::

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Aufgabe untergeordnete Aufgaben hat; andernfalls gibt sie `false` zurück

### Beispiel {#example}

~~~js {17,19,22,25-26,28}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1 #tag3" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// prüfen, ob die Aufgabe untergeordnete Aufgaben hat (vor der Filterung)
console.log(list.hasChildren({ id: "1.1" })); // -> true

console.log(list.hasChildren({ id: "1.1", hideCompleted: true})); // -> false

// Aufgaben filtern
list.setFilter({ match: "#tag3", highlight: true });

// prüfen, ob die Aufgabe untergeordnete Aufgaben hat (nach der Filterung)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false

console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

**Änderungsprotokoll**: Der Parameter `hideCompleted` wurde in v1.1 hinzugefügt

**Verwandter Artikel**: [Aufgabenobjekt/ID](guides/task_object.md)
