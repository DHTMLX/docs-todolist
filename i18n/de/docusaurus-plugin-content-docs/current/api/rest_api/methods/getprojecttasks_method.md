---
sidebar_label: getProjectTasks()
title: getProjectTasks Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die getProjectTasks-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# getProjectTasks()

### Beschreibung {#description}

@short: Gibt ein Promise mit einem Array von Aufgabenobjekten für das angegebene Projekt zurück

:::info
Die `getProjectTasks()`-Methode ist Teil des `RestDataProvider`-Services für die Arbeit mit einem Server
:::

### Verwendung {#usage}

~~~js
getProjectTasks(id: string | number | null): Promise<obj[]>;
~~~

### Parameter {#parameters}

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `id`       |  string, number, null    | *Erforderlich*. Die ID des Projekts |

### Antwort {#response}

Die `getProjectTasks()`-Methode sendet eine Anfrage mit der `GET`-Methode an den Server und gibt **ein Promise** mit den Aufgabendaten des angegebenen Projekts zurück.


### Beispiel {#example}

~~~js {5,8}
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
