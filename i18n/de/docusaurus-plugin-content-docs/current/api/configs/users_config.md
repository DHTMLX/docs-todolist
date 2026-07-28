---
sidebar_label: users
title: users Config
description: Sie können mehr über die users-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# users

### Beschreibung {#description}

@short: Optional. Legt ein Array von Objekten fest, die die Benutzerdaten enthalten

### Verwendung {#usage}

~~~js
users?: [
    {
        id: string | number,
        label: string,
        avatar?: string,
        color?: string,
    },
    {...} // weitere Benutzerobjekte
];
~~~

### Parameter {#parameters}

Die Eigenschaft `users` enthält ein Array von Personenobjekten. Jedes Objekt umfasst die folgenden Parameter:

- `id` - (erforderlich) die ID einer Person
- `label` - (erforderlich) die Beschreibung der Person
- `avatar` - (optional) ein Pfad zum Bild der Person
- `color` - (optional) die Farbe des Symbols, wenn kein Bild hochgeladen wurde

:::info
Wenn der Parameter `color` nicht angegeben ist, wird die Farbe aus dem Standard-Farbsatz verwendet.
:::

### Beispiel {#example}

~~~js {29-40,48}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date()
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { 
        id: "user_1",
        label: "John",
        avatar: "../avatar_02.jpg" 
    },
    { 
        id: "user_2", 
        label: "Kate",
        avatar: "../avatar_03.jpg"  
    },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Verwandte Artikel:**
- [Daten laden und speichern](guides/loading_data.md)
- [Aufgabenbenutzer](guides/task_users.md)
