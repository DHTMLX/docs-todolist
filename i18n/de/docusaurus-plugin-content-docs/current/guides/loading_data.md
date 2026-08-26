---
sidebar_label: Daten laden und speichern
title: Daten laden und speichern
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie das Laden und Speichern von Daten funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Daten laden und speichern

## Daten zum Laden vorbereiten {#prepare-data-to-load}

DHTMLX To Do List akzeptiert über seine Konfigurationseigenschaften folgende Datentypen:

- [`tasks`](api/configs/tasks_config.md) - Liste der Aufgaben
- [`projects`](api/configs/projects_config.md) - Liste der Projekte
- [`users`](api/configs/users_config.md) - Liste der Benutzer
- [`priorities`](api/configs/priorities_config.md) - Liste der Prioritäten
- [`tags`](api/configs/tags_config.md) - Liste der Tags
- [`activeProject`](api/configs/activeproject_config.md) - ID des aktiven Projekts

Bereiten Sie die Daten in einer separaten Datei vor. Das folgende Beispiel gibt einen Datensatz mit Aufgaben, Projekten, Benutzern und Prioritäten zurück:

~~~js title="data.js"
function getData() {

    // Daten für Aufgaben
    const tasks = [
        // Daten für Aufgaben des "widgets"-Projekts
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets",
            priority: 1
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt",
            priority: 1
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler",
            priority: 2
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram",
            priority: 3
        },
        // Daten für Aufgaben des "introduction"-Projekts
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: null
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: [
                "user_2",
                "user_1",
                "user_3",
            ],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: null
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: [
                "user_2"
            ],
            collapsed: false,
            priority: null
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false,
            priority: 3
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false,
            priority: null
        },
        // weitere Aufgaben-Objekte
    ];

    // Daten für Projekte
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        },
        // weitere Projekt-Objekte
    ];

    // Daten für Benutzer
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar: "../avatar_02.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar: "../avatar_05.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar: "../avatar_21.jpg"
        },
        // weitere Benutzer-Objekte
    ];

    // Daten für Prioritäten
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
            hotkey: "Alt+M",
        },
        // weitere Prioritäts-Objekte
    ];

    return { tasks, projects, users, priorities };
}
~~~

Binden Sie die Datei auf der Seite ein, damit das Projekt die Daten verwenden kann:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

Destrukturieren Sie das zurückgegebene Objekt, um auf die einzelnen Datensätze zuzugreifen:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## Aus einer lokalen Quelle laden {#load-from-a-local-source}

### Daten bei der Initialisierung laden {#load-data-on-initialization}

Laden Sie [vordefinierte Daten](guides/loading_data.md#prepare-data-to-load) beim Initialisieren in die To-Do-Liste. Das folgende Beispiel übergibt Daten über Konfigurationseigenschaften:

~~~js {2,5-8} title="index.js"
const { ToDo } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
});
~~~

### Daten nach der Initialisierung laden {#load-data-after-initialization}

Um Daten in eine bereits initialisierte To-Do-Liste zu laden, verwenden Sie die Methode [`parse()`](api/methods/parse_method.md). Das folgende Code-Snippet parst Daten in eine bereits initialisierte Liste:

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// Daten in die Komponente parsen
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## Zustand speichern und wiederherstellen {#save-and-restore-state}

Um den aktuellen Zustand zu speichern, verwenden Sie die Methode [`serialize()`](api/methods/serialize_method.md). Sie wandelt die aktuellen Daten in ein JSON-Objekt um. Das folgende Snippet speichert den serialisierten Zustand:

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    priorities: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

Übergeben Sie den gespeicherten Zustand mit der Methode `parse()` an eine andere To-Do-Liste. Das folgende Beispiel stellt den Zustand in einer neuen Instanz wieder her:

~~~js
// neue To-Do-Liste erstellen
const list2 =  new ToDo("#root2", {});

// Zustand einer To-Do-Liste in eine andere parsen
list2.parse(state);
~~~
