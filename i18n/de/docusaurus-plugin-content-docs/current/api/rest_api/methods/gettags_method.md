---
sidebar_label: getTags()
title: getTags Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die getTags-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# getTags()

### Beschreibung {#description}

@short: Gibt ein Promise mit einem Array der Standard-Tags zurück

:::info
Die `getTags()`-Methode ist Teil des `RestDataProvider`-Services für die Arbeit mit einem Server
:::

### Verwendung {#usage}

~~~js
getTags(): Promise<string[]>;
~~~

### Antwort {#response}

Die `getTags()`-Methode sendet eine Anfrage mit der `GET`-Methode an den Server und gibt **ein Promise** mit der Liste der standardmäßig festgelegten Tags zurück.


### Beispiel {#example}

~~~js {5,10}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        tags,
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

**Verwandte Artikel**: [Mit dem Server arbeiten](guides/working_with_server.md)
