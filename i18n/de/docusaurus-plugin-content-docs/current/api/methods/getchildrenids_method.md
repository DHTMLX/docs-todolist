---
sidebar_label: getChildrenIds()
title: getChildrenIds-Methode
description: Sie können mehr über die getChildrenIds-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# getChildrenIds()

### Beschreibung {#description}

@short: Gibt die IDs der untergeordneten Aufgaben der angegebenen übergeordneten Aufgabe zurück


### Verwendung {#usage}

~~~js
getChildrenIds({
    id: string | number,
    filtered?: boolean, // false by default
    tree?: boolean, // true by default
    hideCompleted?: boolean // false by default
}): (string|number)[];
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der übergeordneten Aufgabe
- `filtered` - (optional) wenn `false`, werden auch gefilterte untergeordnete Aufgaben in das Ergebnis einbezogen
- `tree` - (optional) wenn `true`, werden alle untergeordneten Aufgaben in das Ergebnis einbezogen; wenn `false`, werden nur die direkt untergeordneten Aufgaben der übergeordneten Aufgabe einbezogen
- `hideCompleted` - (optional) wenn `false`, werden abgeschlossene Aufgaben in das Ergebnis einbezogen; andernfalls werden sie ausgeschlossen

:::tip
Der Parameter `filtered` kann verwendet werden, wenn eine Filterung angewendet wurde
:::

### Rückgabewert {#returns}

Die Methode gibt ein Array mit den IDs der untergeordneten Aufgaben zurück

### Beispiel {#example}

~~~js {17-19,22,25-27,29-31}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// untergeordnete Aufgaben vor der Filterung abrufen
console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true })); // ['1.1', '1.2']

// Aufgaben filtern
list.setFilter({ match: "#tag1", highlight: true });

// untergeordnete Aufgaben nach der Filterung abrufen
console.log(list.getChildrenIds({ id: "1" })); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // -> ['1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", hideCompleted: true})); // -> ['1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, hideCompleted: true })); // -> ['1.1']
~~~

**Changelog:** Der Parameter `hideCompleted` wurde in v1.1 hinzugefügt

**Verwandter Artikel:** [Aufgabenobjekt/ID](guides/task_object.md)
