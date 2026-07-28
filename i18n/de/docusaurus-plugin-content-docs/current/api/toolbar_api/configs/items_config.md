---
sidebar_label: items
title: items Config
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die items-Konfiguration der Toolbar. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# items

### Beschreibung {#description}

@short: Optional. Legt die Steuerelemente fest, die in der Toolbar der To Do List angezeigt werden

### Verwendung {#usage}

~~~js
items?: [
    "combo",
    "search",
    "menu",
    "undo",
    "redo"
    custom_control // string or function
];
~~~

### Standardkonfiguration {#default-config}

~~~js
items: ["combo", "search", "menu"]
~~~

### Parameter {#parameters}

Das Array `items` kann folgende Parameter enthalten:

- `"combo"` - das Combo-Steuerelement zur Auswahl eines Projekts
- `"search"` - die Suchleiste
- `"menu"` - das Menü mit einer Reihe von Optionen, mit denen Sie Folgendes tun können:
    - Aufgaben in aufsteigender/absteigender Reihenfolge nach folgenden Kriterien sortieren:
        - nach Text
        - nach Fälligkeitsdatum
        - nach Abschlussdatum
        - nach Erstellungsdatum
        - nach Bearbeitungsdatum
    - erledigte Aufgaben ausblenden/anzeigen
    - ein neues Projekt hinzufügen, das aktuell aktive Projekt umbenennen oder löschen
- `"undo"` - das Steuerelement, das den letzten Vorgang rückgängig macht
- `"redo"` - das Steuerelement, das die durch "Undo" rückgängig gemachte Aktion wiederholt
- `"custom_item"` - ein benutzerdefiniertes Steuerelement, das entweder als String oder als Funktion angegeben wird

:::tip
Sie können eine eigene Toolbar-Struktur definieren, indem Sie die gewünschten Elemente in der `items`-Array in der gewünschten Reihenfolge aufführen
:::

### Beispiel {#example}

~~~js {12-19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: [
        `<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
        "search",
        "menu",
        "undo",
        "redo",
        `<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
    ]
});
~~~

**Changelog:** Die Parameter `"undo"` und `"redo"` wurden in v1.3 hinzugefügt

**Verwandte Artikel:**
- [Konfiguration](guides/configuration.md#toolbar)
- [Anpassung](guides/customization.md#customize-the-toolbar)
