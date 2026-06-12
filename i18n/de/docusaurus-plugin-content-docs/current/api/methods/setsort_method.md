---
sidebar_label: setSort()
title: setSort Methode
description: Sie können mehr über die setSort-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# setSort()

### Beschreibung {#description}

@short: Sortiert die Aufgaben des aktiven Projekts nach den angegebenen Parametern

### Verwendung {#usage}

~~~js
setSort({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean
}): void;
~~~

### Parameter {#parameters}

- `by` - (optional) das Suchkriterium (entweder der Schlüssel des [Aufgaben-Attributs](api/configs/tasks_config.md#parameters) oder eine Suchfunktion, die einen String zurückgibt)
- `dir` - (optional) die Sortierrichtung: "asc" oder "desc"
- `tree` - (optional) aktiviert/deaktiviert die Sortierung für untergeordnete Aufgaben; standardmäßig `false`

### Beispiel {#example}

~~~js {21-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "a", text: "A" },
        { id: "ac", text: "C", parent: "a" },
        { id: "ad", text: "D", parent: "a" },
        { id: "aa", text: "A", parent: "a" },
        { id: "ab", text: "B", parent: "a" },
        { id: "c", text: "C" },
        { id: "d", text: "D" },
        { id: "b", text: "B" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Aufgaben aufsteigend nach dem Parameter "text" sortieren
list.setSort({
    by: task => task.id, // oder by: "text"
    dir: "asc",
    // tree: true // Baum-Sortierung aktivieren, standardmäßig false
});
~~~

**Änderungsprotokoll:** Hinzugefügt in v1.1

**Verwandter Artikel:** [Aufgaben sortieren und filtern](guides/sorting_filtering_tasks.md)
