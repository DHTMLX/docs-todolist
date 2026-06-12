---
sidebar_label: getTasks()
title: getTasks Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die getTasks-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# getTasks()

### Beschreibung {#description}

@short: Gibt ein Promise mit einem Array aller Aufgabenobjekte zurück

:::info
Die `getTasks()`-Methode ist Teil des `RestDataProvider`-Services für die Arbeit mit einem Server
:::

### Verwendung {#usage}

~~~js
getTasks(): Promise<obj[]>;
~~~

### Antwort {#response}

Die `getTasks()`-Methode sendet eine Anfrage mit der `GET`-Methode an den Server und gibt **ein Promise** mit den Aufgabendaten zurück.


### Beispiel {#example}

~~~js {5,8}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getTasks(),
    restProvider.getProjects(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
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
