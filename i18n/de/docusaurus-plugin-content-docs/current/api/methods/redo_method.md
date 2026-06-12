---
sidebar_label: redo()
title: redo-Methode
description: Sie können die redo-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# redo()

### Beschreibung {#description}

@short: Wiederholt die Aktion, die durch die Undo-Aktion rückgängig gemacht wurde

:::info
Wenn Sie den Parameter [`history.projects`](api/configs/history_config.md) auf `true` setzen, können Sie den Änderungsverlauf für jedes Projekt separat verwalten; andernfalls verwalten Sie den Änderungsverlauf für die gesamte App.
:::

### Verwendung {#usage}

~~~js
redo(): void;
~~~

### Beispiel {#example}

~~~js {10,15}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// To Do List erstellen
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: true, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
list.redo();
~~~

**Änderungsprotokoll:** Die `redo()`-Methode wurde in v1.3 hinzugefügt

**Verwandte API:**
    - [`history`](api/configs/history_config.md)
    - [`undo`](api/methods/undo_method.md)
