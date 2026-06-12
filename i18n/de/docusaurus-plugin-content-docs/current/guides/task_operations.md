---
sidebar_label: Operationen mit Aufgaben
title: Operationen mit Aufgaben
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über Operationen mit Aufgaben. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Operationen mit Aufgaben

## Eine neue Aufgabe hinzufügen {#adding-a-new-task}

Um eine neue Aufgabe zur Liste hinzuzufügen, verwenden Sie die Methode [`addTask()`](api/methods/addtask_method.md). Das folgende Beispiel fügt eine Aufgabe unter einem angegebenen übergeordneten Element hinzu:

~~~js
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

## Eine Aufgabe kopieren und einfügen {#copyingpasting-a-task}

### Kopieren und Einfügen

Die schnellste Möglichkeit, eine Aufgabe zu kopieren und einzufügen, bietet die Methode [`copyTask()`](api/methods/copytask_method.md). Übergeben Sie die folgenden Parameter:

- `id` — ID der zu kopierenden Aufgabe
- `project` — ID des Zielprojekts, sofern vorhanden
- `targetId` — ID der Zielaufgabe, an der die kopierte Aufgabe eingefügt wird
- weitere Parameter sind optional

Der folgende Code-Ausschnitt kopiert eine Aufgabe in ein neues Projekt:

~~~js
list.copyTask({ 
    id: "1.1", // ID der zu kopierenden Aufgabe
    join: false, // setzt Kopien anderer Aufgaben zurück und kopiert nur diese Aufgabe
    project: "p_2", // ID des Zielprojekts (sofern vorhanden)
    parent: "2.1", // ID der zukünftigen übergeordneten Aufgabe
    targetId: "2.1.2", // ID der Zielaufgabe
    reverse: true // Aufgabe vor der Zielaufgabe einfügen
});
~~~

### In die Zwischenablage kopieren

Um eine Aufgabe in die Zwischenablage zu kopieren, ohne sie einzufügen, übergeben Sie die Aufgaben-ID an die Methode [`copyTask()`](api/methods/copytask_method.md):

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### IDs anderer Kopien beibehalten

:::info
Um eine Aufgabe zu kopieren und zuvor kopierte Aufgaben beizubehalten, übergeben Sie `join: true` an die Methode [`copyTask()`](api/methods/copytask_method.md). Andernfalls kopiert die Methode nur die angegebene Aufgabe und setzt alle früheren Kopien zurück.
:::

### Aus der Zwischenablage einfügen

Fügen Sie eine kopierte Aufgabe aus der Zwischenablage an der gewünschten Stelle ein — über die Methode [`pasteTask()`](api/methods/pastetask_method.md). Der folgende Code-Ausschnitt fügt die kopierte Aufgabe neben einer Zielaufgabe ein:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

:::info
Das Ereignis [`clone-task`](api/events/clonetask_event.md) wird nach [`paste-task`](api/events/pastetask_event.md) ausgelöst, wenn der Inhalt der Zwischenablage an der Zielposition landet. Der Callback erhält die übergeordnete ID, die Projekt-ID, die Ziel-ID sowie ein `batch`-Array mit den geklonten Aufgabenobjekten.
:::

## Eine Aufgabe aktualisieren {#updating-a-task}

Um Parameter einer Aufgabe dynamisch zu ändern, verwenden Sie die Methode [`updateTask()`](api/methods/updatetask_method.md). Das folgende Beispiel ändert den Text einer Aufgabe:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Abgeschlossene Aufgabe"
    }
});
~~~

## Eine Aufgabe verschieben {#moving-a-task}

Um eine Aufgabe an eine andere Position zu verschieben, verwenden Sie die Methode [`moveTask()`](api/methods/movetask_method.md). Der folgende Code-Ausschnitt verschiebt eine Aufgabe in ein anderes Projekt:

~~~js
list.moveTask({ 
    id: "1.1", // ID der zu verschiebenden Aufgabe
    project:"p_2", // ID des Zielprojekts (sofern vorhanden)
    parent: "2", // ID der zukünftigen übergeordneten Aufgabe
    targetId: "2.1", // ID der Zielaufgabe
    reverse: true // Aufgabe vor der Zielaufgabe platzieren
});
~~~

:::note
Eine übergeordnete Aufgabe wird zusammen mit ihren Unteraufgaben verschoben.
:::

## Eine Aufgabe löschen {#deleting-a-task}

Um eine Aufgabe zu löschen, verwenden Sie die Methode [`deleteTask()`](api/methods/deletetask_method.md):

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
Die Methode entfernt die Aufgabe zusammen mit allen ihren Unteraufgaben.
:::

## Eine Aufgabe auf- und zuklappen {#expandingcollapsing-a-task}

Um eine Aufgabe einzuklappen, verwenden Sie die Methode [`collapseTask()`](api/methods/collapsetask_method.md). Die Methode erwartet die Aufgaben-ID als Parameter:

~~~js
list.collapseTask({ id: "1.1" });

~~~

Um eine eingeklappte Aufgabe anhand ihrer ID aufzuklappen, verwenden Sie die Methode [`expandTask()`](api/methods/expandtask_method.md):

~~~js
list.expandTask({ id: "1.1" });
~~~

## Kontextmenü {#context-menu}

Jede Aufgabe und jeder Benutzer verfügt über ein Kontextmenü. Verfolgen Sie dessen Aktivität mit zwei Ereignissen:

- [`open-menu`](api/events/openmenu_event.md) — wird ausgelöst, wenn das Menü geöffnet wird; liefert die Element-ID, den Menütyp und optional ein Array von Aufgaben-IDs (`source`) für Batch-Operationen
- [`close-menu`](api/events/closemenu_event.md) — wird ausgelöst, wenn das Menü geschlossen wird; liefert die Element-ID und den Menütyp

Das folgende Beispiel protokolliert die Lebenszyklusereignisse des Menüs:

~~~js
list.api.on("open-menu", ({ id, type, source }) => {
    console.log("menu opened for", id, "type", type, "source", source);
});

list.api.on("close-menu", ({ id, type }) => {
    console.log("menu closed for", id, "type", type);
});
~~~

*Änderungsprotokoll:* Die Ereignisse `open-menu` und `close-menu` wurden in v1.1 hinzugefügt.

## Eine Aufgabe als abgeschlossen oder offen markieren {#marking-a-task-completeincomplete}

Markieren Sie eine Aufgabe als abgeschlossen oder offen — über die Methoden [`checkTask()`](api/methods/checktask_method.md) und [`uncheckTask()`](api/methods/unchecktask_method.md). Das folgende Beispiel zeigt beide Aufrufe:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

Wenn `manual: false`, hängt das Ergebnis von `taskShape.completed.behavior` ab (siehe Referenz zu [`taskShape`](api/configs/taskshape_config.md) für Details).

Wenn `taskShape.completed.behavior` auf `"auto"` gesetzt ist, Sie aber einmalig manuell markieren möchten, setzen Sie `manual: true`:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: true
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true
});
~~~

## Die Einrückungsebene einer Aufgabe ändern {#changing-the-indent-level-of-a-task}

Ändern Sie die Verschachtelungsebene einer Aufgabe dynamisch mit folgenden Methoden:

- [`indentTask()`](api/methods/indenttask_method.md) — Verschachtelungsebene einer Aufgabe um eine Ebene nach unten verschieben
- [`unindentTask()`](api/methods/unindenttask_method.md) — Verschachtelungsebene einer Aufgabe um eine Ebene nach oben verschieben

Der folgende Code-Ausschnitt verschiebt eine Aufgabe eine Ebene tiefer:

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.indentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

Das folgende Beispiel verschiebt eine Aufgabe eine Ebene höher:

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.unindentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

:::info
Befindet sich die Aufgabe bereits auf der obersten Ebene, hat `unindentTask()` keine Wirkung.
:::

## Aufgaben filtern {#filter-tasks}

Suchen Sie Aufgaben, die den angegebenen Kriterien entsprechen, mit der Methode [`setFilter()`](api/methods/setfilter_method.md). Die Methode unterstützt den *strict*-Modus für exakte Übereinstimmungen. Der folgende Code-Ausschnitt filtert Aufgaben nach einem Hashtag:

~~~js
// Daten nach den angegebenen Regeln filtern
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

Um den Filter zurückzusetzen, übergeben Sie `match: null`:

~~~js
// Filter zurücksetzen
list.setFilter({ match: null });
~~~

## Rückgängig machen und Wiederholen {#undo-and-redo}

Die To-Do-Liste verfolgt den Änderungsverlauf standardmäßig. Um die letzte Operation rückgängig zu machen, rufen Sie die Methode [`undo()`](api/methods/undo_method.md) auf. Um eine durch `undo()` rückgängig gemachte Operation wiederherzustellen, rufen Sie die Methode [`redo()`](api/methods/redo_method.md) auf:

~~~js
list.addTask({ task: { text: "New task" } });

list.undo(); // Hinzufügen rückgängig machen
list.redo(); // wiederherstellen
~~~

Der Umfang und die Tiefe des Verlaufs werden durch die Konfigurationseigenschaft [`history`](api/configs/history_config.md) bestimmt. Weitere Informationen finden Sie unter [Konfiguration → Änderungsverlauf](guides/configuration.md#history-of-changes).

*Änderungsprotokoll:* Die Methoden `undo()` und `redo()` wurden in v1.3 hinzugefügt.
