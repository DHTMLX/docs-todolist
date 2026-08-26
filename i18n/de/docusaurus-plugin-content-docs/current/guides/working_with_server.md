---
sidebar_label: Mit dem Server arbeiten
title: Mit dem Server arbeiten
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie alles über die Arbeit mit dem Server. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---
# Mit dem Server arbeiten

DHTMLX To Do List funktioniert sowohl mit Client- als auch mit Server-Daten. Das Widget stellt keine speziellen Backend-Anforderungen und lässt sich mit jeder Plattform verbinden, die eine REST-API unterstützt.

:::info
Das Widget wird mit dem integrierten [**Go**](https://github.com/web-widgets/todo-go)- und [**Node**](https://github.com/web-widgets/todo-node)-Backend ausgeliefert. Sie können auch eigene Server-Skripte verwenden.
:::

## RestDataProvider

Die To-Do-Liste stellt den `RestDataProvider`-Dienst bereit, der mit einem REST-Backend kommuniziert und folgende Datenoperationen verarbeitet:

- `"add-task"` - eine Aufgabe hinzufügen
- `"update-task"` - eine Aufgabe aktualisieren
- `"delete-task"` - eine Aufgabe löschen
- `"add-project"` - ein Projekt hinzufügen
- `"update-project"` - ein Projekt aktualisieren
- `"delete-project"` - ein Projekt löschen
- `"set-project"` - das aktive Projekt festlegen
- `"move-task"` - eine Aufgabe verschieben
- `"clone-task"` - eine Aufgabe klonen

## REST-Methoden {#rest-methods}

Der `RestDataProvider`-Dienst enthält folgende REST-Methoden für das dynamische Laden von Daten:

- [`getProjects()`](api/rest_api/methods/getprojects_method.md) - gibt ein Promise mit den **Projektdaten** zurück
- [`getProjectTasks()`](api/rest_api/methods/getprojecttasks_method.md) - gibt ein Promise mit den **Aufgabendaten** des angegebenen `project` zurück
- [`getTags()`](api/rest_api/methods/gettags_method.md) - gibt ein Promise mit der Liste der **Standard-Tags** zurück
- [`getTasks()`](api/rest_api/methods/gettasks_method.md) - gibt ein Promise mit den **Aufgabendaten** zurück
- [`getUsers()`](api/rest_api/methods/getusers_method.md) - gibt ein Promise mit den **Benutzerdaten** zurück
- [`setAPI()`](api/rest_api/methods/setapi_method.md) - setzt die API der To-Do-List-Komponente in den RestDataProvider
- [`send()`](api/rest_api/methods/send_method.md) - sendet eine Anfrage an den Server und gibt je nach Anfrage ein Promise mit oder ohne Daten zurück

## Mit dem Backend interagieren {#interact-with-the-backend}

Um mit dem Server zu interagieren, verbinden Sie `RestDataProvider` mit den Server-Skripten. Das integrierte Backend ist in zwei Repositories verfügbar:

- [**Go**](https://github.com/web-widgets/todo-go) - Go-Backend
- [**Node**](https://github.com/web-widgets/todo-node) - Node.js-Backend

Sie können auch ein eigenes Backend erstellen.

:::tip
Wenn Sie ein eigenes Backend verwenden, finden Sie weitere Informationen im Thema [**REST-API-Routen**](api/rest_api/routes/rest_routes_overview.md).
:::

Um `RestDataProvider` mit dem Backend zu verbinden, rufen Sie den Konstruktor `new RestDataProvider()` auf und übergeben Sie die entsprechende **URL** als Parameter. Das folgende Beispiel initialisiert die To-Do-Liste mit vom Server geladenen Daten:

~~~js {4-5,23-24}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "https://some_backend_url";
const restProvider = new RestDataProvider(url);
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
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

:::info
Binden Sie `RestDataProvider` in die **Event Bus**-Reihenfolge über die Methode [`api.setNext()`](api/internal/setnext_method.md) ein, um Datenoperationen (Hinzufügen, Löschen und weitere Aktionen) durchzuführen und die entsprechenden Anfragen an den Server zu senden.
:::

### Beispiel {#example}

Der folgende Code-Ausschnitt verbindet `RestDataProvider` mit dem Backend und lädt Server-Daten dynamisch:

<iframe src="https://snippet.dhtmlx.com/hnk06gm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Mehrbenutzer-Backend {#multiuser-backend}

Die Mehrbenutzer-Funktion ermöglicht es mehreren Benutzern, dieselben Aufgaben in Echtzeit und ohne Seitenaktualisierungen zu verwalten. Änderungen anderer Benutzer sind sofort sichtbar.

Vor der Initialisierung der To-Do-Liste müssen Sie sich auf dem Server authentifizieren. Das folgende Beispiel definiert eine `login()`-Funktion:

~~~js
const login = (url) => {
    const token = sessionStorage.getItem("login-token");
    if (token) {
        return Promise.resolve(token);
    }
    return fetch(url + "/login?id=1")
        .then(raw => raw.text())
        .then(token => {
            sessionStorage.setItem("login-token", token);
            return token;
        });
}
~~~

Die `login()`-Funktion gibt das Server-Token zurück, das für alle weiteren Interaktionen mit dem Server benötigt wird. Fügen Sie das Token in jede Anfrage als Wert des `Remote-Token`-Headers ein. Der folgende Code-Ausschnitt setzt den Token-Header:

~~~js
login(url).then(token => {
    const restProvider = new todo.RestDataProvider(url);
    restProvider.setHeaders({
        "Remote-Token": token,
    });
~~~

Fügen Sie nach der Initialisierung einen WebSocket hinzu, um auf Ereignisse vom Server zu lauschen. Das folgende Beispiel richtet den WebSocket und die Handler ein:

~~~js {14-16,18-24}
Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getUsers(),
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, users, projects, tags]) => {
    const list = new todo.ToDo("#root", {
        tasks, users, projects, tags, activeProject,
    });
    const toolbar = new todo.Toolbar("#toolbar", {
        api: list.api,
    });

    // Daten vom Client zum Server speichern
    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);

    // Updates vom Server zum Client empfangen
    const events = new todo.RemoteEvents(url + "/api/v1", token);
    const handlers = todo.todoUpdates(
        list.api,
        restProvider.getIDResolver()
    );
    events.on(handlers);
});
~~~

### Beispiel {#example-multiuser}

Der folgende Code-Ausschnitt konfiguriert das Mehrbenutzer-Backend, um Änderungen anderer Benutzer in Echtzeit zu verfolgen:

<iframe src="https://snippet.dhtmlx.com/82ayq2lk?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Server-Ereignisse anpassen {#customize-server-events}

Definieren Sie eigene Logik für die Verarbeitung von Server-Ereignissen. Übergeben Sie das `handlers`-Objekt an die Methode `RemoteEvents.on(handlers)`. Das `handlers`-Objekt hat folgende Struktur:

~~~js
{
    "tasks": tasksHandler: function(obj: any),
    "projects": projectsHandler: function(obj: any)
}
~~~

Wenn eine Änderung auf dem Server stattfindet, gibt der Server den Namen des geänderten Elements zurück. Die Namen können je nach Server-Logik variieren.

Die aktualisierten Daten kommen im `obj`-Argument des Handlers an. Das Feld `type` gibt die Operation an:

- für `tasks`: `"add-task"`, `"update-task"`, `"delete-task"`, `"move-task"`, `"clone-task"`
- für `projects`: `"add-project"`, `"update-project"`, `"delete-project"`, `"set-sort"`

Der folgende Code-Ausschnitt zeigt die Implementierungsdetails:

~~~js
const todoInstance = new todo.ToDo("#root", config);
const restProvider = new todo.RestDataProvider(url);
const idResolver = restProvider.getIDResolver();
const TaskID = 1;
const ProjID = 2;

const resolveTask = (data: any) => {
    for (const key in obj) {
        if (typeof obj[key] == "object") {
            resolveTask(obj[key]);
            continue;
        }
        if (key == "id" || key == "targetId" || key == "parent") {
            obj[key] = idResolver(obj[key], TaskID) || null;
        }
        if (key == "project") {
            obj[key] = idResolver(obj[key], ProjID) || null;
        }
    }
    return obj;
};

const tasksHandler = (obj: any) => {
    resolveTask(obj); // Client-IDs mit Server-IDs synchronisieren
    switch (obj.type) {
        case "add-task":
            todoInstance.api.exec("add-task", {
                id: obj.data.id,
                project: obj.data.project,
                parent: obj.data.parent,
                targetId: obj.data.targetId,
                reverse: obj.data.reverse,
                task: { ...obj.data.task },
                skipProvider: true // verhindert, dass der Client die Anfrage an den Server sendet
            })
            break;
        // weitere Operationen
    }
};

const handlers = {
    tasks: tasksHandler
};

const remoteEvents = new todo.RemoteEvents(remoteEventsURL, token);
remoteEvents.on(handlers);
~~~

Die Methode `RestDataProvider.getIDResolver()` gibt eine Funktion zurück, die Client-IDs mit Server-IDs synchronisiert. Wenn der Client ein neues Objekt (Aufgabe oder Projekt) erstellt, hat das empfangene Objekt eine temporäre ID und eine entsprechende Server-ID im `RestDataProvider`. Die Funktion `idResolver()` synchronisiert die Client-ID mit der Server-ID. Die Funktion hat folgendes Format: `idResolver(id: TID, type: number)`.

Das Argument `type` ist der Modelltyp und nimmt folgende Werte an:

- `TaskID` - `1`
- `ProjID` - `2`

Um zu verhindern, dass die Anfrage an den Server gesendet wird, übergeben Sie das Flag `skipProvider: true` an die Methode `todoInstance.api.exec()`.
