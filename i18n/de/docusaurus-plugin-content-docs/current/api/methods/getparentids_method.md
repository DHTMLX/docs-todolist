---
sidebar_label: getParentIds()
title: getParentIds-Methode
description: Sie können mehr über die getParentIds-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# getParentIds()

### Beschreibung {#description}

@short: Gibt die IDs der übergeordneten Aufgaben der angegebenen untergeordneten Aufgabe zurück


### Verwendung {#usage}

~~~js
getParentIds({
    id: string | number
}): (string|number)[];
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID der Aufgabe

### Rückgabewert {#returns}

Die Methode gibt ein Array mit den IDs der übergeordneten Aufgaben zurück

### Beispiel {#example}

~~~js {20}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// übergeordnete Aufgaben abrufen
console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

**Verwandter Artikel:** [Aufgabenobjekt/ID](guides/task_object.md)
