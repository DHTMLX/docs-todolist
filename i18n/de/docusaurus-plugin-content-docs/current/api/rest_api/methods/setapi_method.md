---
sidebar_label: setAPI()
title: setAPI Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die setAPI-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# setAPI()

### Beschreibung {#description}

@short: Erforderlich. Übergibt die API der To Do List-Komponente an den RestDataProvider

:::info
Die `setAPI()`-Methode ist für die korrekte Funktion der RestDataProvider-Methoden erforderlich.
:::

### Verwendung {#usage}

~~~js
setAPI(api: IApi): void;
~~~

### Parameter {#parameters}

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `api`       |  object   | *Erforderlich*. Ein API-Objekt der Komponente |


### Beispiel {#example}

~~~js {5,12,23}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
]).then(([tasks, users, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
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

**Verwandte Artikel**: [Mit dem Server arbeiten](guides/working_with_server.md)
