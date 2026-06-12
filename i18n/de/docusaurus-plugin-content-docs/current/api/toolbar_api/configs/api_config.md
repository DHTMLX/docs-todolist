---
sidebar_label: api
title: api Config
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die api-Konfiguration der Toolbar. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api

### Beschreibung {#description}

@short: Erforderlich. Ein Objekt mit der internen API der To Do List

:::info
Die Verwendung der internen API der To Do List ist für die korrekte Funktion der Suchleiste und der Steuerelemente in der Toolbar notwendig
:::

### Verwendung {#usage}

~~~js
api: object;
~~~

### Beispiel {#example}

~~~js {11}
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
});
~~~

**Verwandter Artikel:**
- [Initialisierung](guides/initialization.md)
