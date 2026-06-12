---
sidebar_label: setConfig()
title: setConfig Method
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die setConfig-Methode der Toolbar. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# setConfig()

### Beschreibung {#description}

@short: Setzt die Konfiguration der Toolbar-Komponente


### Verwendung {#usage}

~~~js
setConfig(config: object): void;
~~~

### Parameter {#parameters}
 
- `config` - (erforderlich) ein Objekt mit Toolbar-Konfigurationen. Die vollständige Liste der Eigenschaften finden Sie [hier](category/toolbar-properties.md)

### Beispiel {#example}

~~~js {13-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.setConfig({
    items: ["combo", "menu"]
});
~~~
