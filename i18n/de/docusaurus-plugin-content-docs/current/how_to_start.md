---
sidebar_label: Erste Schritte
title: Erste Schritte
description: Sie können erfahren, wie Sie mit DHTMLX To Do List arbeiten. Erkunden Sie Entwicklerhandbücher und die API-Referenz in der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Erste Schritte {#how-to-start}

Dieses Tutorial zeigt Ihnen, wie Sie eine voll funktionsfähige To-Do-Liste erstellen und in Ihre Webanwendung einbinden.

![Voll funktionsfähige DHTMLX To Do List auf einer Webseite](/img/todolist.png)

Nach Abschluss aller folgenden Schritte erhalten Sie eine einsatzbereite To-Do-Liste, die Sie nach Ihren Wünschen konfigurieren und im praktischen Einsatz nutzen können.

## Schritt 1. Quelldateien einbinden {#step-1-include-source-files}

:::info
Laden Sie das To-Do-List-Paket [**hier**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) herunter und entpacken Sie es in einen Ordner Ihres zukünftigen Projekts.
:::

Erstellen Sie zunächst eine HTML-Datei mit dem Namen *index.html*. Binden Sie anschließend die Quelldateien von DHTMLX To Do List in diese Datei ein.

Sie müssen die folgenden zwei Dateien einbinden:

- die JS-Datei von To Do List
- die CSS-Datei von To Do List

~~~html title="index.html" {5-6}
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <script>
        // Ihr Code kommt hier hin
        </script>
    </body>
</html>
~~~

### To Do List über npm oder yarn installieren {#installing-to-do-list-via-npm-or-yarn}

Sie können JavaScript To Do List mit dem `yarn`- oder `npm`-Paketmanager in Ihr Projekt importieren.

#### Testversion von To Do List über npm oder yarn installieren {#installing-trial-to-do-list-via-npm-or-yarn}

:::info
Wenn Sie die Testversion von To Do List verwenden möchten, laden Sie das [**Testpaket von To Do List**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Beachten Sie, dass die Testversion von To Do List nur 30 Tage verfügbar ist.
:::

#### PRO-Version von To Do List über npm oder yarn installieren {#installing-pro-to-do-list-via-npm-or-yarn}

:::info
Sie können im [Kundenbereich](https://dhtmlx.com/clients/) direkt auf das private DHTMLX-**npm** zugreifen, indem Sie Ihren Login und Ihr Passwort für **npm** generieren. Eine detaillierte Installationsanleitung finden Sie ebenfalls dort. Bitte beachten Sie, dass der Zugriff auf das private **npm** nur während einer aktiven proprietären To-Do-List-Lizenz möglich ist.
:::

## Schritt 2. To Do List erstellen {#step-2-create-to-do-list}

Jetzt können Sie eine To-Do-Liste zur Seite hinzufügen. Dazu müssen Sie zwei DIV-Container anlegen, in denen die To-Do-Liste und ihre Toolbar platziert werden. Gehen Sie dazu folgendermaßen vor:

- Legen Sie zwei DIV-Container in der Datei *index.html* fest
- Initialisieren Sie To Do List und die Toolbar über die Konstruktoren `new ToDo()` bzw. `new Toolbar()`

~~~js title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo; // Objekt-Destrukturierung anwenden
            
            const list = new ToDo("#root", {
                // Konfigurationseigenschaften 
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
                // weitere Konfigurationseigenschaften  
            });
        </script>
    </body>
</html>
~~~

:::note
Verwenden Sie die Objekt-Destrukturierung, um das globale `todo`-Objekt in zwei Variablen aufzuteilen: ToDo und Toolbar. 

Dieser Schritt ist nicht erforderlich, wenn Sie die Konstruktoren `new todo.ToDo()` und `new todo.Toolbar()` verwenden.
:::

:::info
Die Toolbar ist ein optionaler Teil der To-Do-List-Oberfläche. Um eine To-Do-Liste ohne Toolbar zu erstellen, können Sie einen einzelnen DIV-Container angeben und die Liste über den Konstruktor `new ToDo()` initialisieren.
:::

Weitere Informationen zur Initialisierung von To Do List finden Sie im Artikel [Initialisierung](guides/initialization.md).

## Schritt 3. Daten in To Do List laden {#step-3-load-data-into-to-do-list}

Wie Sie sehen, haben wir die To-Do-Liste initialisiert, sie ist jedoch noch leer. In diesem Schritt erfahren Sie, wie Sie die Komponente mit Daten befüllen.

:::info
Sie können diesen Schritt überspringen, wenn Sie eine leere Komponente auf der Seite anzeigen möchten.
:::

Bereiten Sie zunächst die Daten vor, die in die Komponente geladen werden sollen. Die Daten können folgende Informationsmengen enthalten: [`tasks`](api/configs/tasks_config.md), [`projects`](api/configs/projects_config.md), [`users`](api/configs/users_config.md), [`tags`](api/configs/tags_config.md) und [`activeProject`](api/configs/activeproject_config.md)

Am bequemsten ist es, die Daten in einer separaten Datei vorzubereiten, zum Beispiel:

~~~js title="data.js"
function getData() {
    // Daten für Aufgaben
    const tasks = [
        // Daten für Aufgaben des Projekts "widgets"
        { "id": "widgets", "project": "widgets", "text": "\u{1F389} DHTMLX widgets" },
        { "id": "gantt", "project": "widgets", "parent": "widgets", "text": "Gantt" },
        { "id": "scheduler", "project": "widgets", "parent": "widgets", "text": "Scheduler" },
        { "id": "diagram", "project": "widgets", "parent": "widgets", "text": "Diagram" },
        
        // Daten für Aufgaben des Projekts "introduction"    
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [ "user_2", "user_1", "user_3" ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [ "user_2" ],
            "collapsed": false
        },
        {
            "id": "1652097809882",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false
        },
        {
            "id": "1652097809887",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            "checked": false
        },
        // weitere Aufgaben-Objekte
    ];

    // Daten für Benutzer
    const users = [
        { "id": "user_1", "label": "Don Smith", "avatar": "../avatar_02.jpg" },
        { "id": "user_2", "label": "Nadia Chasey", "avatar": "../avatar_05.jpg" },
        { "id": "user_3", "label": "Mike Young", "avatar": "../avatar_21.jpg" },
        // weitere Benutzer-Objekte
    ];

    // Daten für Projekte
    const projects = [
        { "id": "introduction", "label": "Introduction to DHTMLX To Do List" },
        { "id": "widgets", "label": "Our widgets" },
        // weitere Projekt-Objekte
    ];

    return { projects, users, tasks };
}
~~~

Jetzt können Sie die To-Do-Liste mit Daten befüllen. Geben Sie dazu die entsprechenden Eigenschaften im Konfigurationsobjekt der Komponente an:

~~~js {8,16,18-22} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">

        <script src="../data.js"></script>
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo;
            const { tasks, users, projects } = getData();

            const list = new ToDo("#root", {
                tasks,
                users,
                projects
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
            });
        </script>
    </body>
</html>
~~~

Weitere Informationen zum Laden von Daten in To Do List finden Sie im Artikel [Datenladen](guides/loading_data.md).

## Schritt 4. To Do List konfigurieren {#step-4-configure-to-do-list}

Jetzt können Sie die gewünschte Konfiguration der To-Do-Liste festlegen. 

Wie Sie bereits wissen, besteht To Do List aus zwei separaten Oberflächen: Liste und Toolbar. Jede davon verfügt über eine eigene Liste von Konfigurationsoptionen:

- Liste der [To-Do-List-Eigenschaften](api/overview/configs_overview.md) ansehen
- Liste der [Toolbar-Eigenschaften](category/toolbar-properties.md) ansehen

Als Beispiel aktivieren wir den *Nur-Lesen*-Modus für Ihre To-Do-Liste, legen ein aktives Projekt fest und zeigen in der Toolbar nur die Suchleiste an:

~~~js {5-6,11}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    activeProject: "introduction",
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search"]
});
~~~

## Wie geht es weiter {#whats-next}

Sie verfügen nun über eine einsatzbereite To-Do-Liste. Sie können Ihre eigenen Daten laden und die Komponente nach Ihren Anforderungen konfigurieren.

Wenn Sie tiefer in die Welt von To Do List eintauchen möchten, empfehlen wir folgende Themen:

- [To-Do-List-Übersicht](/)
- [Handbücher](category/guides.md)
- [API](category/api.md)
