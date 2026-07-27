---
sidebar_label: api.setNext()
title: api.setNext Methode
description: Sie können mehr über die setNext-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.setNext()

### Beschreibung {#description}

@short: Ermöglicht das Hinzufügen einer Aktion in die Event Bus-Reihenfolge

### Verwendung {#usage}

~~~js
api.setNext(next: any): void;
~~~

### Parameter {#parameters}

- `next` - (erforderlich) die Aktion, die in die **Event Bus**-Reihenfolge aufgenommen werden soll

### Beispiel {#example}

~~~js {20}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
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

:::info
Sie müssen `RestDataProvider` in die **Event Bus**-Reihenfolge aufnehmen, um Datenoperationen (**Hinzufügen, Löschen** usw.) durchzuführen und die entsprechenden Anfragen an den Server zu senden
:::
