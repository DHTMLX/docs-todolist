---
sidebar_label: tasks
title: tasks Config
description: Sie können mehr über die tasks-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# tasks

### Beschreibung {#description}

@short: Optional. Legt ein Array von Aufgabenobjekten fest, die in die Liste eingefügt werden

### Verwendung {#usage}

~~~js
tasks?: [
    {
        id?: string | number,
        parent?: string | number,
        project?: string | number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        priority?: number | null,
        [key: string]?: any
    },
    {...} // weitere Aufgabenobjekte
];
~~~

### Parameter {#parameters}

Die Eigenschaft `tasks` enthält ein Array von Aufgabenobjekten. Jedes Objekt umfasst die folgenden Parameter:

- `id` - (optional) die ID einer Aufgabe
- `parent` - (optional) die ID der übergeordneten Aufgabe. Der Wert des Parameters ist `null | undefined` für Stammaufgaben
- `project` - (optional) die ID des Projekts, dem die Aufgabe zugeordnet werden soll. Um die Projekte zu initialisieren, verwenden Sie die Eigenschaft [projects](api/configs/projects_config.md).

:::info
Wenn Projekte initialisiert sind, geben Sie die ID des gewünschten Projekts für die Stammaufgabe an, um sie in diesem Projekt anzuzeigen.

Wenn Sie die Projekt-ID für die Stammaufgabe nicht angeben oder auf *null* bzw. *undefined* setzen, gehört die Aufgabe zum Abschnitt *Kein Projekt*.
:::

- `text` - (optional) der Text der Aufgabe
- `checked` - (optional) markiert die Aufgabe als erledigt
- `collapsed` - (optional) legt fest, ob die Aufgabe anfänglich eingeklappt ist (sofern die Aufgabe Unteraufgaben besitzt)
- `assigned` - (optional) ein Array mit der/den ID(s) der der Aufgabe zugewiesenen Personen. Um die Liste der Zugewiesenen zu initialisieren, verwenden Sie die Eigenschaft [users](api/configs/users_config.md).
- `due_date` - (optional) das Datum, bis zu dem die Aufgabe abgeschlossen sein muss
- `creation_date` - (optional) das Erstellungsdatum der Aufgabe (automatisch generiert)
- `completion_date` - (optional) das Abschlussdatum der Aufgabe (automatisch generiert, wenn Sie eine Aufgabe als erledigt markieren; automatisch entfernt, wenn Sie eine Aufgabe als nicht erledigt markieren)
- `edited_date` - (optional) das Datum der letzten Bearbeitung der Aufgabe (automatisch generiert, wenn Sie den Text der Aufgabe ändern)
- `priority` - (optional) die Priorität der Aufgabe. Um Prioritäten festzulegen, verwenden Sie die Eigenschaft [priorities](api/configs/priorities_config.md).
- `[key: string]` - (optional) ein Satz benutzerdefinierter Eigenschaften

### Beispiel {#example}

~~~js {3-30,42}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date(),
        priority: 1
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
        priority: 2
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
        priority: null
    },
];

const users = [
    { id: "user_1", label: "John" },
    { id: "user_2", label: "Kate" },
];

const projects = [
    { id: "books", label: "Books" },
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

**Änderungsprotokoll:** Der Parameter `priority` wurde in v1.2 hinzugefügt

**Verwandte Artikel:**
- [Daten laden und speichern](guides/loading_data.md)
- [Aufgaben verwalten](guides/task_index.md)
