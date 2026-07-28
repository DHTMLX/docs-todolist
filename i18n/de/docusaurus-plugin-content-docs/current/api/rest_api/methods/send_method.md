---
sidebar_label: send()
title: send Methode
description: In der Dokumentation der DHTMLX JavaScript To Do List Bibliothek erfahren Sie mehr über die send-Methode des RestDataProvider. Entwicklerleitfäden und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX To Do List.
---

# send()

### Beschreibung {#description}

@short: Sendet eine HTTP-Anfrage an den Server und gibt je nach Anfrage ein Promise mit oder ohne Daten zurück

Alle Anfragen an den Server werden mit der `send()`-Methode durchgeführt, die Teil des [`RestDataProvider`](guides/working_with_server.md#restdataprovider)-Services ist.


### Verwendung {#usage}

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): Promise<obj[]>
~~~

### Parameter {#parameters}


| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *Erforderlich*. Der Pfad zum Server, an den die Anfrage gesendet wird.            |
| `method`            |string             | *Erforderlich*. Der HTTP-Methodentyp (Get, Post, Put, Delete)            |
| `data`  | object        | *Optional*. Parameter, die an den Server gesendet werden. Standardmäßig werden die Parameter des ausgelösten Events gesendet. Sie können jedoch zusätzliche Parameter über ein benutzerdefiniertes Objekt hinzufügen. Siehe das [Beispiel](#examples) unten. |
| `headers`  |object       | *Optional*. Der Standard-Header ist der `Content-Type`-Header mit dem Wert *application/json*. Weitere optionale Header können mit dem Parameter `customHeaders` hinzugefügt werden. Siehe das [Beispiel](#examples) unten. |

### Antwort {#response}

Die Methode gibt das Promise-Objekt mit oder ohne Daten zurück, abhängig von der Anfrage.

Ein Promise wird bei erfolgreichem Anfragestatus zurückgegeben. Bei einer fehlgeschlagenen Anfrage (response.status == 500) wird eine Ausnahme mit einem Fehlertext ausgelöst.

Sie können konfigurieren, was zurückgegeben werden soll. Um auf eine fehlgeschlagene Anfrage zu reagieren, verwenden Sie die `catch`-Methode des zurückgegebenen Promise.

~~~js

restDataProvider.send(url, method, data)
.then(data => {
   ... // Erfolg: etwas mit den Daten tun
})
.catch(err => {
    ... // Fehler-Handler
});

~~~

### Beispiele {#examples}

Das folgende Beispiel zeigt, wie eine Anfrage mit zusätzlichen Parametern neben den Standardparametern gesendet wird:

~~~js {20-25}
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

    list.api.on("set-project", obj => {
    obj.custom = "custom event";
    restDataProvider.send(`tasks/projects/0`, "GET", obj).then(data => {
        list.api.parse({ tasks: data });
        return Promise.resolve();
    });
});

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});

~~~

Die folgenden Beispiele zeigen, wie der `send`-Methode weitere Header hinzugefügt werden können.

~~~js
const customHeaders = {
     "Authorization": "Bearer",
    "Custom header": "some value",
};

list.api.on("add-task", obj => {
    restDataProvider.send("tasks", "POST", obj, customHeaders);
});
~~~

Alternativ können Sie Header hinzufügen, indem Sie den RestDataProvider wie unten beschrieben überschreiben. Diese Vorgehensweise gibt Ihnen mehr Kontrolle über die an den Server gesendeten Daten:

~~~js {6-11}
const { ToDo, Toolbar, RestDataProvider } = todo;
...
// ToDo-Initialisierung
...

class MyDataProvider extends RestDataProvider {
  send(url, method, data, headers) {
      headers = { ...headers, "SomeToken": "abc" };
      return super.send(url, method, data, headers);
  }
}

const myProvider = new MyDataProvider(url);
list.api.setNext(myProvider);
myProvider.setAPI(list.api);
~~~ 
---

**Verwandte Artikel:** [Mit dem Server arbeiten](guides/working_with_server.md)
