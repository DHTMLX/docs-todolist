---
sidebar_label: Konfiguration
title: Konfiguration
description: Sie erfahren mehr über die Konfiguration der DHTMLX JavaScript To Do List-Bibliothek in der Dokumentation. Durchsuchen Sie Entwickleranleitungen und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX To Do List herunter.
---

# Konfiguration

Passen Sie die Einstellungen von DHTMLX To Do List an Ihre Anforderungen an. Die verfügbaren Konfigurationsoptionen ermöglichen Ihnen:

- [das Erscheinungsbild des Fortschritts-Badges zu konfigurieren, das den Abschluss von Aufgaben anzeigt](#counter-of-completed-subtasks)
- [das Datumsformat zu konfigurieren](#date-format)
- [Drag-n-Drop von Aufgaben zu konfigurieren oder zu deaktivieren](#drag-n-drop)
- [die Validierung der Fälligkeitsdaten von Aufgaben zu deaktivieren](#due-date-validation)
- [den Modus zum Markieren abgeschlossener Aufgaben zu ändern](#mode-of-marking-tasks-complete)
- [das Erscheinungsbild der Toolbar zu konfigurieren](#toolbar)
- [den Änderungsverlauf zu verwalten](#history-of-changes)
- [zu konfigurieren, wie abgeschlossene Aufgaben ausgeblendet werden](#hiding-mode-for-completed-tasks)
- [die To Do List im schreibgeschützten Modus zu initialisieren](#read-only-mode)

:::tip
Um Konfigurationsparameter nach der Initialisierung dynamisch zu ändern, verwenden Sie die Methode [`setConfig()`](api/methods/setconfig_method.md). Die Methode zerstört die aktuelle Komponente und erstellt sie mit den zusammengeführten Einstellungen neu. Rufen Sie anschließend das entsprechende [Toolbar `setConfig()`](api/toolbar_api/methods/setconfig_method.md) auf, um die Toolbar an die neue API zu binden.
:::

## Aufgaben {#tasks}

### Zähler abgeschlossener Unteraufgaben {#counter-of-completed-subtasks}

Ändern Sie den Zählertyp, der anzeigt, wie viele Kindaufgaben abgeschlossen sind.

![Zähler abgeschlossener Teilaufgaben in DHTMLX To Do List](/img/counter.png)

Standardmäßig zeigt jede übergeordnete Aufgabe einen Zähler als Verhältnis abgeschlossener Kindaufgaben zur Gesamtanzahl der Kindaufgaben an.

Um den Zählerwert als Prozentsatz darzustellen, setzen Sie `taskShape.counter.type` auf `"percentage"`. Weitere Details finden Sie in der [`taskShape`](api/configs/taskshape_config.md)-Referenz. Das folgende Beispiel schaltet den Zähler in den Prozentmodus:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        counter: {
            type: "percentage" // standardmäßig "number"
        }
    }
});
~~~

**Verwandtes Beispiel:** [To do list. Unteraufgaben-Zähler und Datumsformat](https://snippet.dhtmlx.com/magidhw8)

### Datumsformat {#date-format}

Standardmäßig zeigt die To Do List Datumsangaben im Format `"%d %M %Y"` an (zum Beispiel *09 Mar 2033*). Um ein anderes Format anzugeben, verwenden Sie den Parameter `date` der Eigenschaft [`taskShape`](api/configs/taskshape_config.md). Der folgende Ausschnitt setzt ein durch Schrägstriche getrenntes Datumsformat:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d/%m/%Y", // standardmäßig "%d %M %Y"
            validate: true
        }
    }
});
~~~

**Verwandtes Beispiel:** [To do list. Unteraufgaben-Zähler und Datumsformat](https://snippet.dhtmlx.com/magidhw8)

Prüfen Sie [die Liste der verfügbaren Zeichen](api/configs/taskshape_config.md#list-of-characters).

### Drag-n-Drop {#drag-n-drop}

Drag-n-Drop ist standardmäßig aktiviert. [Wählen Sie eine oder mehrere Aufgaben aus](/#selecting-tasks) und ziehen Sie die gesamte Auswahl auf einmal. Um eine Kopie der ausgewählten Aufgaben zu erstellen, halten Sie während des Drag-n-Drop die *Alt*-Taste gedrückt.

Verwenden Sie die Eigenschaft [`drag`](api/configs/drag_config.md), um:

- zu verhindern, dass eingeklappte Aufgaben beim Überfahren mit der Maus während des Drag-n-Drop aufgeklappt werden
- Drag-n-Drop vollständig zu deaktivieren

Das folgende Beispiel hält eingeklappte Aufgaben geschlossen, wenn der Benutzer Elemente über sie zieht:

~~~js {7}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false // standardmäßig true
    }
});
~~~

Der folgende Ausschnitt deaktiviert Drag-n-Drop vollständig:

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // standardmäßig true
});
~~~

Abonnieren Sie Drag-Events, um den Drag-n-Drop-Lebenszyklus zu verfolgen:

- [`start-drag`](api/events/startdrag_event.md) — wird ausgelöst, wenn der Benutzer Aufgaben zu ziehen beginnt; liefert die Quell-Aufgaben-ID und den Modus (`"move"` oder `"copy"`)
- [`drag`](api/events/drag_event.md) — wird ausgelöst, während der Benutzer Aufgaben zieht
- [`end-drag`](api/events/enddrag_event.md) — wird ausgelöst, wenn das Ziehen abgeschlossen ist; liefert die Ziel-ID, die Ablageposition (`"top"`, `"bottom"`, `"in"` oder `null`) und den Modus

Der folgende Ausschnitt protokolliert Beginn und Ende einer Ziehoperation:

~~~js
list.api.on("start-drag", ({ start, mode }) => {
    console.log("drag started from", start, "in", mode, "mode");
});

list.api.on("end-drag", ({ target, dropPosition, mode }) => {
    console.log("dropped on", target, "at", dropPosition, "in", mode, "mode");
});
~~~

*Änderungsprotokoll:* Die Events `start-drag` und `end-drag` wurden in v1.1 hinzugefügt.

### Fälligkeitsdatum-Validierung {#due-date-validation}

Wenn Sie für eine Aufgabe ein [Fälligkeitsdatum](api/configs/tasks_config.md) angeben, verfolgt die Fälligkeitsdatum-Validierung den Abschluss der Aufgabe. Das Fälligkeitsdatum erscheint grün, bis die Aufgabe überfällig wird.

![Aufgabe mit grün hervorgehobenem Fälligkeitsdatum in DHTMLX To Do List](/img/due_date.png)

Die Datumsangaben überfälliger Aufgaben erscheinen in Rot.

![Überfällige Aufgabe mit rot hervorgehobenem Fälligkeitsdatum in DHTMLX To Do List](/img/overdue_task.png)

Die Validierung ist standardmäßig aktiviert. Um sie zu deaktivieren, setzen Sie `taskShape.date.validate` auf `false`. Weitere Details finden Sie in der [`taskShape`](api/configs/taskshape_config.md)-Referenz. Der folgende Code-Ausschnitt deaktiviert die Fälligkeitsdatum-Validierung:

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d %M %Y",
            validate: false // standardmäßig true
        }
    }
});
~~~

In dieser Konfiguration erscheinen die Fälligkeitsdaten grau.

### Modus zum Markieren abgeschlossener Aufgaben {#mode-of-marking-tasks-complete}

Standardmäßig hakt die To Do List Aufgaben im `"auto"`-Modus ab und hebt die Markierung auf:

- alle Kindaufgaben einer Aufgabe als abgeschlossen markieren → die übergeordnete Aufgabe wird automatisch als abgeschlossen markiert
- die übergeordnete Aufgabe als abgeschlossen markieren → alle Kindaufgaben werden automatisch als abgeschlossen markiert
- mindestens eine Kindaufgabe einer abgeschlossenen Aufgabe als nicht abgeschlossen markieren → die übergeordnete Aufgabe wird automatisch als nicht abgeschlossen markiert
- die übergeordnete Aufgabe als nicht abgeschlossen markieren → alle Kindaufgaben werden automatisch als nicht abgeschlossen markiert

Um dieses Verhalten zu deaktivieren und den `"manual"`-Modus zu aktivieren, setzen Sie `taskShape.completed.behavior` auf `"manual"`. Weitere Details finden Sie in der [`taskShape`](api/configs/taskshape_config.md)-Referenz. Das folgende Beispiel aktiviert den manuellen Modus:

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            behavior: "manual" // standardmäßig "auto"
        }
    }
});
~~~

**Verwandtes Beispiel:** [To do list. Zwei Varianten zum Markieren einer übergeordneten Aufgabe als erledigt](https://snippet.dhtmlx.com/5892fcr2)

## Änderungsverlauf {#history-of-changes}

Die To Do List verfolgt den Änderungsverlauf standardmäßig. Benutzer können Operationen über die Methoden [`undo()`](api/methods/undo_method.md) und [`redo()`](api/methods/redo_method.md) rückgängig machen und wiederholen.

Verwenden Sie die Eigenschaft [`history`](api/configs/history_config.md), um dieses Verhalten zu konfigurieren. Die Eigenschaft akzeptiert einen booleschen Wert (Kurzform) oder ein Objekt mit erweiterten Einstellungen:

- `projects` — Verzweigung des Verlaufs aktivieren, sodass jedes Projekt einen separaten Verlauf führt; wenn auf `false` gesetzt, teilt die gesamte App einen gemeinsamen Verlauf
- `limit` — maximale Anzahl der zu speichernden Verlaufsoperationen

Das folgende Beispiel begrenzt den Verlauf auf 20 Operationen und deaktiviert die projektbezogene Verzweigung:

~~~js {9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});

list.addTask({ task: { text: "New task" } });
list.undo(); // letzte Aktion rückgängig machen
list.redo(); // wiederherstellen
~~~

Um die Verlaufsverwaltung vollständig zu deaktivieren, setzen Sie die Eigenschaft auf `false`. Die Methoden `undo()` und `redo()` werden dann nicht mehr verfügbar, und die entsprechenden Toolbar-Steuerelemente werden ausgeblendet.

*Änderungsprotokoll:* Die Konfiguration `history` sowie die Methoden `undo()` und `redo()` wurden in v1.3 hinzugefügt.

## Toolbar {#toolbar}

Die Toolbar erscheint oben in der Komponente und wird separat [initialisiert](guides/initialization.md#initialize-toolbar) und [konfiguriert](category/toolbar-properties.md).

Um die Standardstruktur der Toolbar zu ändern, verwenden Sie die Konfigurationseigenschaft [`items`](api/toolbar_api/configs/items_config.md) der Toolbar-Komponente. Der folgende Ausschnitt behält nur die Such- und Combo-Steuerelemente:

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

Die Eigenschaft `items` legt fest, welche Steuerelemente die Toolbar rendert. Listen Sie sie in der gewünschten Reihenfolge auf.

## Ausblendmodus für abgeschlossene Aufgaben {#hiding-mode-for-completed-tasks}

Weitere Details finden Sie unter [Abgeschlossene Aufgaben ausblenden](guides/hide_completed_tasks.md).

## Schreibgeschützter Modus {#read-only-mode}

Der Abschnitt [Schreibgeschützter Modus](guides/readonly_mode.md) erklärt, wie die To Do List schreibgeschützt gemacht werden kann.
