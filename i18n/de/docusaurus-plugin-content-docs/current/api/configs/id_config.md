---
sidebar_label: id
title: id Config
description: Sie können mehr über die id-Konfiguration in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# id

### Beschreibung {#description}

@short: Optional. Die ID der To Do List

:::info
Automatisch generiert; gewährleistet die korrekte Funktion der Komponententeile, z. B. der Toolbar
:::

### Verwendung {#usage}

~~~js
id?: string | number;
~~~

### Beispiel {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// To-do-Liste erstellen
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    id: "root"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~
