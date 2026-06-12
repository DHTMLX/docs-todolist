---
sidebar_label: Aufgabenobjekt/ID
title: Aufgabenobjekt/ID
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über Aufgabenobjekte und Aufgaben-IDs. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Aufgabenobjekt/Id

## Ein Aufgabenobjekt abrufen {#get-a-task-object}

Um ein Aufgabenobjekt abzurufen, verwenden Sie die Methode [`getTask()`](api/methods/gettask_method.md). Das folgende Beispiel ruft eine Aufgabe anhand ihrer ID ab:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## Prüfen, ob eine Aufgabe vorhanden ist {#check-if-a-task-exists}

Um zu prüfen, ob eine Aufgabe vorhanden ist, verwenden Sie die Methode [`existsTask()`](api/methods/existstask_method.md). Der folgende Code-Ausschnitt prüft zwei IDs:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

## Unteraufgaben-IDs abrufen {#get-child-ids}

Um die Unteraufgaben einer Aufgabe abzurufen, verwenden Sie die Methode [`getChildrenIds()`](api/methods/getchildrenids_method.md). Das folgende Beispiel gibt alle Nachkommen einer Aufgabe zurück:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
~~~

Durch Filtern können einige Aufgaben auf der Seite ausgeblendet werden. Der Parameter `filtered` legt fest, ob ausgeblendete Aufgaben im Ergebnis erscheinen. Setzen Sie ihn auf `true`, um sie auszuschließen (Standard ist `false`). Der folgende Code-Ausschnitt zeigt beide Optionen:

~~~js
// Aufgaben filtern
list.setFilter({ match: "#tag1", highlight: true });

// Unteraufgaben nach dem Filtern abrufen
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// Den Parameter "filtered" aktivieren
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

Setzen Sie `tree` auf `false`, um nur Unteraufgaben der ersten Ebene zurückzugeben:

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

Setzen Sie `hideCompleted` auf `true`, um abgeschlossene Unteraufgaben auszuschließen. Das folgende Beispiel kombiniert `filtered`, `tree` und `hideCompleted` auf verschiedene Weisen:

~~~js {4,11,18,21}
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// vor dem Filtern
console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: false })); // -> ['1.1', '1.1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: true })); // ['1.1', '1.2']

// Aufgaben filtern
list.setFilter({ match: "#tag1", highlight: true });

// nach dem Filtern
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: true })); // -> ['1.1']

console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: true})); // -> ['1.1', '1.2']
~~~

## Prüfen, ob eine Aufgabe Unteraufgaben hat {#check-if-a-task-has-children}

Um zu prüfen, ob eine Aufgabe Unteraufgaben besitzt, verwenden Sie die Methode [`hasChildren()`](api/methods/haschildren_method.md). Der folgende Code-Ausschnitt bestätigt, dass eine Aufgabe Unteraufgaben hat:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// prüfen, ob die Aufgabe Unteraufgaben hat (vor dem Filtern)
console.log(list.hasChildren({ id: "1.1" })); // -> true
~~~

Durch Filtern können einige Aufgaben auf der Seite ausgeblendet werden. Der Parameter `filtered` legt fest, ob gefilterte (ausgeblendete) Aufgaben im Ergebnis erscheinen (`filtered: false` standardmäßig) oder nicht (`filtered: true`):

~~~js
// Aufgaben filtern
list.setFilter({ match: "#tag3", highlight: true });

// prüfen, ob die Aufgabe Unteraufgaben hat (nach dem Filtern)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

Setzen Sie `hideCompleted` auf `true`, um abgeschlossene Aufgaben aus dem Ergebnis auszuschließen:

~~~js {4,9}
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false
~~~

## Übergeordnete IDs abrufen {#get-parent-ids}

Um die übergeordneten Aufgaben einer Aufgabe abzurufen, verwenden Sie die Methode [`getParentIds()`](api/methods/getparentids_method.md). Das folgende Beispiel gibt die vollständige Elternkette einer Aufgabe zurück:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

## IDs ausgewählter Aufgaben abrufen {#get-ids-of-selected-tasks}

Um die IDs aller aktuell ausgewählten Aufgaben abzurufen, verwenden Sie die Methode [`getSelection()`](api/methods/getselection_method.md). Der folgende Code-Ausschnitt initialisiert die To-Do-Liste mit vorausgewählten Aufgaben und fügt eine weitere Auswahl hinzu:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { 
    tasks,
    selected: ["1.1", "1.2"]
});

list.selectTask({
    id: "1.1.1",
    join: true
});

console.log(list.getSelection({ sorted: false })); // -> ["1.1", "1.2", "1.1.1"]
~~~
