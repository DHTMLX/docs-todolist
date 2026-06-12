---
sidebar_label: undo()
title: undo Methode
description: Sie können mehr über die undo-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX To Do List.
---

# undo()

### Beschreibung {#description}

@short: Macht die letzte Operation in der To Do List rückgängig

:::info
Wenn Sie den Parameter [`history.projects`](api/configs/history_config.md) auf `true` setzen, können Sie den Änderungsverlauf für jedes Projekt separat verwalten; andernfalls verwalten Sie den Änderungsverlauf für die gesamte Anwendung.
:::

### Verwendung {#usage}

~~~js
undo(): void;
~~~

### Beispiel {#example}

~~~js {10,14}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List erstellen
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: false, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
~~~

**Änderungsprotokoll**: Die Methode `undo()` wurde in v1.3 hinzugefügt

**Verwandte API**:
    - [`history`](api/configs/history_config.md)
    - [`redo`](api/methods/redo_method.md)
