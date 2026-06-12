---
sidebar_label: keypress-on-todo
title: keypress-on-todo Event
description: In der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren Sie mehr über das keypress-on-todo-Event. Lesen Sie Entwickleranleitungen und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# keypress-on-todo

## Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Aufgabe den Fokus hat und die Tastaturnavigation verwendet wird

## Verwendung {#usage}

~~~js
"keypress-on-todo": ({
    code: string,
    event: KeyboardEvent
}) => void;
~~~

### Parameter {#parameters}

Der Callback des `keypress-on-todo`-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `code` - (erforderlich) der Code der gedrückten Taste oder einer Tastenkombination in *Kleinbuchstaben*. Die vollständigen Listen der Tastaturkürzel und ihrer Codes finden Sie [unten](#keyboard-shortcuts)
- `event` - (erforderlich) ein natives [Event-Objekt](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus-Methoden**](category/event-bus-methods.md) verwenden.
:::

### Beispiel {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Abonnieren des "keypress-on-todo"-Events
list.api.on("keypress-on-todo", ({code, event}) => {
    console.log("The", code, "key is pressed"); 
});
~~~

## Tastaturkürzel {#keyboard-shortcuts}

### Standard-Modus {#default-mode}

Die folgenden Kürzel funktionieren, wenn der Inline-Editor **geschlossen** ist.

| Tastaturkürzel | Tastencode | Beschreibung |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Escape</kbd> | `escape` | Schließt das Menü, wenn es für die Aufgabe geöffnet ist. Erneutes Drücken schließt den Editor, setzt die Filterung zurück und blendet Suchergebnisse in der Toolbar aus |

:::tip
Die unten beschriebenen **Tastencodes** sind nicht verfügbar, wenn der Fokus auf der Suchleiste der Toolbar liegt.
:::

| Tastaturkürzel | Tastencode | Beschreibung |
| :---------------- | -------- | :------------------------------------------------------------------- |
| <kbd>Enter</kbd> | `enter` | Erstellt eine neue Aufgabe auf derselben Ebene wie die ausgewählte, verschiebt die Auswahl zur erstellten Aufgabe und öffnet den Editor |
| <kbd>ArrowUp</kbd> | `arrowup` | Verschiebt die Auswahl nach oben zur vorherigen Aufgabe |
| <kbd>ArrowDown</kbd> | `arrowdown` | Verschiebt die Auswahl nach unten zur nächsten Aufgabe |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | `ctrl+enter` | Öffnet den Editor der ausgewählten Aufgabe |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> /<br/> <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> <br/> hinzugefügt in v1.1 | `ctrl` /<br/> `ctrl+shift` | Wählt mehrere Aufgaben einschließlich aller untergeordneten Aufgaben aus.<br/> Ist die Aufgabe bereits ausgewählt, wird die Auswahl aufgehoben; dabei gilt:<br/> - Sind übergeordnete Aufgaben der Aufgabe ebenfalls ausgewählt, wird die Auswahl der Aufgabe zusammen mit ihren übergeordneten Aufgaben aufgehoben.<br/> - Sind untergeordnete Aufgaben der Aufgabe ebenfalls ausgewählt, wird nur die Aufgabe selbst abgewählt.|
| <kbd>Shift</kbd>+<kbd>Click</kbd> <br/> hinzugefügt in v1.1| `shift` | Wählt einen Bereich von Aufgaben aus |
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> <br/> hinzugefügt in v1.1| `shift+arrowup` | Wählt die Aufgabe oberhalb der aktuellen aus.<br/> Ist die obige Aufgabe bereits ausgewählt, wird ihre Auswahl aufgehoben |
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> <br/> hinzugefügt in v1.1| `shift+arrowdown` | Wählt die Aufgabe (und alle ihre untergeordneten Aufgaben) unterhalb der aktuellen aus.<br/> Ist die untere Aufgabe bereits ausgewählt, wird ihre Auswahl aufgehoben |
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | `ctrl+arrowup` | Verschiebt die ausgewählte Aufgabe innerhalb derselben Ebene nach oben |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | `ctrl+arrowdown` | Verschiebt die ausgewählte Aufgabe innerhalb derselben Ebene nach unten |
| <kbd>Space</kbd> | `space` | Markiert eine Aufgabe je nach aktuellem Status als erledigt oder unerledigt |
| <kbd>Delete</kbd> /<br/><kbd>Backspace</kbd> | `delete` /<br/>`backspace` | Entfernt die ausgewählte Aufgabe nach folgender Logik:<br/> - Nach dem Entfernen einer untergeordneten Aufgabe wird die Auswahl nach unten/oben verschoben, bis die übergeordnete Aufgabe erreicht wird <br/>- Nach dem Entfernen einer übergeordneten Aufgabe wird die Auswahl nach unten zur nächsten übergeordneten Aufgabe verschoben, falls vorhanden; andernfalls nach oben zur vorherigen übergeordneten Aufgabe |
| <kbd>ArrowRight</kbd> | `arrowright` | Klappt die zusammengefasste übergeordnete Aufgabe auf |
| <kbd>ArrowLeft</kbd> | `arrowleft` | Klappt die aufgeklappte übergeordnete Aufgabe ein. Ist die Aufgabe bereits eingeklappt oder hat keine untergeordneten Aufgaben, wird die Auswahl zur übergeordneten Aufgabe verschoben |
| <kbd>Tab</kbd> | `tab` | Stuft die Verschachtelungsebene der Aufgabe um eine Ebene tiefer |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | `shift+tab` | Stuft die Verschachtelungsebene der Aufgabe um eine Ebene höher |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | `ctrl+d` | Dupliziert die ausgewählte Aufgabe auf derselben Ebene |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | `ctrl+c` | Kopiert die ausgewählte Aufgabe einschließlich aller untergeordneten Aufgaben in die Zwischenablage |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | `ctrl+v` | Fügt die kopierte Aufgabe auf derselben Ebene wie die aktuell ausgewählte Aufgabe ein. Die kopierte Aufgabe kann auf beliebiger Ebene eingefügt werden, wobei die Struktur der kopierten Aufgabe erhalten bleibt |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Z</kbd> | `ctrl+z` | Macht die letzte Aktion rückgängig (Undo) |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Y</kbd> /<br/><kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | `ctrl+y` /<br/>`ctrl+shift+z` | Stellt die rückgängig gemachte Aktion wieder her (Redo) |
| <kbd>Alt</kbd>+<kbd>1</kbd> /<br/><kbd>Alt</kbd>+<kbd>2</kbd> /<br/><kbd>Alt</kbd>+<kbd>3</kbd> | `alt+1` /<br/>`alt+2` /<br/>`alt+3` | Legt die Priorität der ausgewählten Aufgabe fest (entspricht dem Hotkey des jeweiligen [`priorities`](api/configs/priorities_config.md)-Eintrags) |
| <kbd>Alt</kbd>+<kbd>0</kbd> | `alt+0` | Setzt die Priorität der ausgewählten Aufgabe zurück |

### Bearbeitungsmodus {#editing-mode}

Die folgenden Kürzel funktionieren, wenn der Inline-Editor **geöffnet** ist.

| Tastaturkürzel | Tastencode | Beschreibung |
| :---------------- | -------- | :---------- |
| <kbd>Escape</kbd> | `escape` | Schließt den Editor, ohne vorgenommene Änderungen zu speichern |
| <kbd>Enter</kbd> | `enter` | Schließt den Editor und speichert die Änderungen |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | `shift+enter` | Erstellt einen neuen Absatz |
