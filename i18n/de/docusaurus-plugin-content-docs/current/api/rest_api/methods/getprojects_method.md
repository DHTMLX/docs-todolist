---
sidebar_label: getProjects()
title: getProjects Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die getProjects-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# getProjects()

### Beschreibung {#description}

@short: Gibt ein Promise mit einem Array von Projektobjekten zurück

:::info
Die `getProjects()`-Methode ist Teil des `RestDataProvider`-Services für die Arbeit mit einem Server
:::

### Verwendung {#usage}

~~~js
getProjects(): Promise<obj[]>;
~~~

### Antwort {#response}

Die `getProjects()`-Methode sendet eine Anfrage mit der `GET`-Methode an den Server und gibt **ein Promise** mit den Projektdaten zurück.


### Beispiel {#example}

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~
---

**Verwandte Artikel:** [Mit dem Server arbeiten](guides/working_with_server.md)
