---
sidebar_label: openInlineEditor()
title: openInlineEditor Methode
description: Sie können die openInlineEditor-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List herunter.
---

# openInlineEditor()

### Beschreibung {#description}

@short: Öffnet den Inline-Editor einer Aufgabe/eines Projekts

### Verwendung {#usage}

~~~js
openInlineEditor({
    id: string | number,
    type?: "task" | "project"
}): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID einer Aufgabe/eines Projekts
- `type` - (optional) der Typ des Elements: "task" (standardmäßig) oder "project"

### Beispiel {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Inline-Editor der Aufgabe öffnen
list.openInlineEditor({ 
    id: "1.1.1",
});
~~~

**Verwandter Artikel:** [Inline-Bearbeitung](guides/inline_editing.md)
