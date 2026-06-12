---
sidebar_label: api.getStores()
title: api.getStores Methode
description: Sie können mehr über die getStores-Methode in der Dokumentation der DHTMLX JavaScript To Do List-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# api.getStores()

### Beschreibung {#description}

@short: Gibt ein Objekt mit dem DataStore-Objekt der To Do List zurück

### Verwendung {#usage}

~~~js
api.getStores(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit `DataStore` zurück:

~~~js
state: DataStore // ( object )
~~~

### Beispiel {#example}

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const stores = list.api.getStores();
console.log(stores);
~~~
