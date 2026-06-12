---
sidebar_label: history 
title: history Config
description: Sie können mehr über die history-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# history

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert die Verwaltung des Änderungsverlaufs

:::info
Mit der Eigenschaft `history` können Sie die Verwaltung des Änderungsverlaufs in To Do List aktivieren oder deaktivieren. Wenn Sie die Eigenschaft `history` auf `false` setzen, können Sie den Änderungsverlauf weder über die Methoden [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) noch über die Toolbar-Steuerelemente verwalten.
:::

### Verwendung {#usage}

~~~js
history?: boolean; 
// oder 
history?: { 
    projects?: boolean, 
    limit?: number 
};
~~~

### Parameter {#parameters}

Zum Konfigurieren der Eigenschaft `history` können Sie die **Kurzform** oder die **erweiterte** Methode verwenden:

Die **Kurzform**:

- `history` - (optional) aktiviert/deaktiviert den Änderungsverlauf in To Do List

Die **erweiterte** Methode:
- `history` - (optional) das Objekt mit erweiterten Einstellungen zur Konfiguration des Änderungsverlaufs. Hier können Sie die folgenden Parameter angeben:
    - `projects` - (optional) aktiviert/deaktiviert die Verzweigung des Verlaufs

    :::info
    Wenn Sie den Parameter `projects` auf `true` setzen, können Sie den Änderungsverlauf für jedes Projekt separat verwalten; andernfalls wird der Änderungsverlauf für die gesamte App verwaltet.
    :::

    - `limit` - (optional) begrenzt die Anzahl der Verlaufsoperationen

### Standardkonfiguration {#default-config}

~~~jsx {}
history: true
~~~

### Beispiel {#example}

~~~js {9}
const { ToDo } = todo;
const { tasks, users, projects } = getData();

// To-do-Liste erstellen
new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});
~~~

**Änderungsprotokoll:** Die Konfiguration `history` wurde in v1.3 hinzugefügt

**Verwandte API:**
    - [`redo`](api/methods/redo_method.md)
    - [`undo`](api/methods/undo_method.md)
