---
sidebar_label: drag
title: drag Config
description: Sie können mehr über die drag-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# drag

### Beschreibung {#description}

@short: Optional. Legt die Einstellungen für Drag-and-Drop fest

:::note
Beim Drag-and-Drop von Aufgaben auf Touch-Geräten gibt es eine Verzögerung von 500 ms.
:::

### Verwendung {#usage}

~~~js
drag?: boolean;
//oder 
drag?: {
    expand?: boolean
};
~~~

### Parameter {#parameters}

Um Drag-and-Drop zu konfigurieren, können Sie entweder die **Kurzform** oder die **erweiterte** Option verwenden.

Die **Kurzform**:

- `drag` - (optional) aktiviert/deaktiviert das Drag-and-Drop von Aufgaben

Die **erweiterte** Option:

- `drag` - (optional) ein Objekt mit Einstellungen für Drag-and-Drop. Das Objekt kann den folgenden Parameter enthalten:
    - `expand` - (optional) legt fest, ob eingeklappte Aufgaben beim Darüberziehen während des Drag-and-Drop ausgeklappt werden sollen

### Standardkonfiguration {#default-config}

~~~js
drag: true
// oder
drag: {
    expand: true
}
~~~

### Beispiel {#example}

~~~js {9-11}
const { ToDo, Toolbar } = todo;

// To-do-Liste erstellen
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Änderungsprotokoll:** In v1.1 hinzugefügt

**Verwandter Artikel:** [Konfiguration](guides/configuration.md#drag-n-drop)
