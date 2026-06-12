---
sidebar_label: priorities
title: priorities Config
description: Sie können mehr über die priorities-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# priorities

### Beschreibung {#description}

@short: Optional. Gibt ein Array von Objekten mit den Prioritätsdaten an

### Verwendung {#usage}

~~~js
priorities?: [
    {
        id: number,
        label: string,
        hotkey?: string,
        color?: string,
    },
    { ... } // weitere Prioritätseinträge
];
~~~

### Parameter {#parameters}

Die Eigenschaft `priorities` enthält ein Array von Prioritätsobjekten. Jedes Objekt umfasst die folgenden Parameter:

- `id` - (erforderlich) die Prioritäts-ID
- `label` - (erforderlich) die Prioritätsbezeichnung
- `hotkey` - (optional) der Name eines benutzerdefinierten Tastaturkürzels zum Anwenden einer Priorität. Um eine benutzerdefinierte Tastenkombination zu definieren, müssen Sie ein benutzerdefiniertes Event behandeln, wie im folgenden Beispiel gezeigt
- `color` - (optional) die Prioritätsfarbe

:::info
Wenn der Parameter `color` nicht angegeben ist, wendet das Widget eine der Standardfarben an:

`"#ff5252" "#ffc975" "#0ab169" "#607D8B" "#00C7B5"`

`"#03A9F4" "#9575CD" "#F06292" "#FF9800"`
:::

### Standardkonfiguration {#default-config}

~~~jsx {}
const priorities: [
    {
        id: 1,
        label: "High",
        color: "#ff5252",
        hotkey: "Alt+1"
    },
    {
        id: 2,
        label: "Medium",
        color: "#ffc975",
        hotkey: "Alt+2"
    },
    {
        id: 3,
        label: "Low",
        color: "#0ab169",
        hotkey: "Alt+3"
    },
];
~~~

### Beispiel {#example}

~~~js {7-28,34,37-47}
const { ToDo } = todo;

const tasks = [ ... ];
const users = [ ... ];
const projects = [ ... ];

const priorities = [
    {
        id: 1,
        label: "Critical",
        color: "#f33",
    },
    {
        id: 2,
        label: "Major",
        color: "rgba(255, 225, 0, 1)",
    },
    {
        id: 3,
        label: "Normal",
        color: "hsla(170, 100%, 40%, 1)",
    },
    {
        id: 4,
        label: "Minor",
        hotkey: "Alt+M", // Das "keydown"-Event behandeln, um die Kombination "Alt+M" zu definieren
    },
];

const list = new ToDo ("#root", {
    tasks,
    users,
    projects,
    priorities
});

// Benutzerdefinierter Event-Handler für das Tastenkürzel "Alt+M"
document.addEventListener("keydown", event => {
    if (event.altKey && event.key.toLocaleLowerCase() === "m") {
        list.eachSelected(id => {
            list.updateTask({
                id,
                task: { priority: 4 }
            });
        });
    }
});
~~~

**Verwandte Artikel:**
- [Daten laden und speichern](guides/loading_data.md)

**Verwandtes Beispiel:** [To-do-Liste. Benutzerdefinierte Tastenkürzel zum Festlegen von Prioritäten](https://snippet.dhtmlx.com/5cymicwt?tag=todolist)
