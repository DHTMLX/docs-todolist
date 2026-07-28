---
sidebar_label: closeInlineEditor()
title: closeInlineEditor Method
description: Sie können die closeInlineEditor-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# closeInlineEditor()

### Beschreibung {#description}

@short: Schließt den Inline-Editor einer Aufgabe/eines Projekts

### Verwendung {#usage}

~~~js
closeInlineEditor({
    id: string | number,
    save?: boolean
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe/eines Projekts
- `save` - (optional) legt fest, ob die Änderungen beim Schließen des Editors gespeichert werden sollen; standardmäßig `true`

### Beispiel {#example}

~~~js {17-20}
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

// Inline-Editor der Aufgabe schließen, ohne die Änderungen zu speichern
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

**Verwandter Artikel:** [Inline-Bearbeitung](guides/inline_editing.md)
