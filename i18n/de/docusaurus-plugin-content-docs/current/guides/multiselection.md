---
sidebar_label: Mehrfachauswahl und Massenoperationen
title: Mehrfachauswahl und Massenoperationen
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über die Auswahl mehrerer Aufgaben. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Mehrfachauswahl und Massenoperationen {#multiple-select-and-bulk-operations}

Die To Do List-Bibliothek ermöglicht die Auswahl mehrerer Aufgaben und deren gleichzeitige Verwaltung.

![Mehrfachauswahl](../assets/multiselection.png)

:::info
Erfahren Sie, wie Sie Aufgaben über die Benutzeroberfläche [auswählen](/#selecting-tasks) und [mehrere Aufgaben verwalten](/#managing-multiple-tasks).
:::

## Anfänglich ausgewählte Aufgaben {#initially-selected-tasks}

Um eine To Do List mit anfänglich ausgewählten Aufgaben zu erstellen, verwenden Sie die Konfigurationseigenschaft [`selected`](api/configs/selected_config.md). Das folgende Beispiel wählt drei Aufgaben bei der Initialisierung vor:

~~~js {12}
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
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()); // ["1.1", "1.2", "2.2"]
~~~

## Aufgaben auswählen {#select-tasks}

Verwenden Sie die Methode [`selectTask()`](api/methods/selecttask_method.md), um Aufgaben nach der Initialisierung auszuwählen. Die Methode nimmt zwei Parameter entgegen:

- `id` — ID der auszuwählenden Aufgabe
- `join` — ob die Aufgabe zur bestehenden Auswahl hinzugefügt werden soll

### Eine Aufgabe auswählen {#select-one-task}

Standardmäßig ist der Parameter `join` auf `false` gesetzt. Die Methode wählt nur die angegebene Aufgabe aus und setzt die zuvor ausgewählten zurück.

Der folgende Code-Ausschnitt ersetzt die aktuelle Auswahl durch eine einzelne Aufgabe:

~~~js {19}
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
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ 
    id: "2.1", 
    join: false // Auswahl der zuvor ausgewählten Aufgaben zurücksetzen
});

console.log(list.getSelection()) // ["2.1"]
~~~

### Mehrere Aufgaben auswählen {#select-multiple-tasks}

Um mehrere Aufgaben auszuwählen, setzen Sie den Parameter `join` auf `true`. Die Methode `selectTask()` fügt die angegebene Aufgabe dann zur aktuellen Auswahl hinzu.

Das folgende Beispiel wählt mehrere Aufgaben in einer Schleife aus:

~~~js {14-18}
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
    ]
});

const selected = ["1.1", "1.2", "2.2"];

for (id of selected) {
    list.selectTask({ id, join: true });
}

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]
~~~

Der folgende Code-Ausschnitt fügt der bestehenden Auswahl eine weitere Aufgabe hinzu:

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## Alle ausgewählten Aufgaben abrufen {#get-all-selected-tasks}

Um die IDs aller aktuell ausgewählten Aufgaben abzurufen, verwenden Sie die Methode [`getSelection()`](api/methods/getselection_method.md). Das folgende Beispiel zeigt den Unterschied zwischen unsortierter und sortierter Ausgabe:

~~~js
// sortiert - deaktiviert
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// sortiert - aktiviert
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

Aktivieren Sie den Parameter `sorted`, um die IDs der ausgewählten Aufgaben in der Reihenfolge zu erhalten, in der sie auf dem Bildschirm erscheinen.

## Ausgewählte Aufgaben verwalten {#manage-selected-tasks}

Nach der Auswahl mehrerer Aufgaben können Operationen auf alle gleichzeitig angewendet werden.

Die Bibliothek stellt die Methode [`eachSelected()`](api/methods/eachselected_method.md) zur Verfügung, um über alle ausgewählten Aufgaben zu iterieren. Die Methode nimmt zusätzliche Parameter entgegen — `sorted` und `reversed` — die Sortierung und Iterationsrichtung steuern.

Das folgende Beispiel löscht alle ausgewählten Aufgaben:

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

### Liste der verfügbaren Operationen {#list-of-available-operations}

Über API-Methoden können folgende Massenoperationen für mehrere ausgewählte Aufgaben durchgeführt werden:

- [`copyTask()`](api/methods/copytask_method.md) — Aufgaben kopieren
- [`pasteTask()`](api/methods/pastetask_method.md) — Aufgaben einfügen
- [`moveTask()`](api/methods/movetask_method.md) — Aufgaben verschieben
- [`deleteTask()`](api/methods/deletetask_method.md) — Aufgaben löschen
- [`checkTask()`](api/methods/checktask_method.md), [`uncheckTask()`](api/methods/unchecktask_method.md) — Aufgaben als erledigt oder unerledigt markieren
- [`indentTask()`](api/methods/indenttask_method.md), [`unindentTask()`](api/methods/unindenttask_method.md) — Verschachtelungsebene von Aufgaben erhöhen oder verringern

## Auswahl zurücksetzen {#reset-selection}

### Eine Aufgabe abwählen {#unselect-one-task}

Um die Auswahl einer Aufgabe aufzuheben, übergeben Sie die Aufgaben-ID als Parameter an die Methode [`unselectTask()`](api/methods/unselecttask_method.md). Der folgende Code-Ausschnitt hebt die Auswahl einer einzelnen Aufgabe auf:

~~~js
list.unselectTask({ id: "1.1" });
~~~

### Alle Aufgaben abwählen {#unselect-all-tasks}

Um die Auswahl aller aktuell ausgewählten Aufgaben aufzuheben, übergeben Sie `id: null` an die Methode [`unselectTask()`](api/methods/unselecttask_method.md):

~~~js
list.unselectTask({ id: null });
~~~

## Tastaturkürzel {#keyboard-shortcuts}

:::info
Weitere Informationen finden Sie im Handbuch zur [**Tastaturnavigation**](guides/keyboard_navigation.md).
:::
