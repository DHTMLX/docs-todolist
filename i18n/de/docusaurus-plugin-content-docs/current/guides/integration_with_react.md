---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie die Integration mit React funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Integration mit React

:::tip
Machen Sie sich mit den grundlegenden Konzepten und Mustern von [**React**](https://react.dev) vertraut, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie die [**React-Dokumentation**](https://react.dev/learn).
:::

DHTMLX To Do List ist mit **React** kompatibel. Die folgenden Beispiele zeigen, wie Sie beide zusammen verwenden. Ein vollständiges Projekt finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-todolist-demo).

## Projekt erstellen {#create-a-project}

Erstellen Sie ein neues React-Projekt und installieren Sie die Abhängigkeiten.

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie ein einfaches **React**-Projekt oder verwenden Sie **React mit Vite**. Das folgende Beispiel benennt das Projekt *my-react-todo-app*:

~~~bash
npx create-react-app my-react-todo-app
~~~

### Abhängigkeiten installieren {#install-dependencies}

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~bash
cd my-react-todo-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit einem Paketmanager.

Führen Sie folgende Befehle mit [**yarn**](https://yarnpkg.com/) aus:

~~~bash
yarn
yarn start
~~~

Führen Sie folgende Befehle mit [**npm**](https://www.npmjs.com/) aus:

~~~bash
npm install
npm start
~~~

Die App läuft unter einer Localhost-Adresse (z. B. `http://localhost:3000`).

## To-Do-Liste erstellen {#create-the-to-do-list}

Stoppen Sie die App und installieren Sie das To-Do-List-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [**To-Do-List-Testpaket**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) herunter und folgen Sie den Anweisungen in der README-Datei. Die Testversion ist nur 30 Tage lang verfügbar.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine React-Komponente, um die To-Do-Liste mit der Toolbar in die Anwendung einzubinden. Fügen Sie im Verzeichnis *src/* eine neue Datei namens *ToDo.jsx* hinzu.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *ToDo.jsx* und importieren Sie die Quelldateien der To-Do-Liste. Wählen Sie einen der beiden Importpfade:

- PRO-Version aus einem lokalen Ordner installiert - Import aus `dhx-todolist-package`
- Testversion - Import aus `@dhx/trial-todolist`

Das folgende Beispiel importiert aus dem PRO-Paket:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

Je nach Paket können die Quelldateien minifiziert sein. Importieren Sie die CSS-Datei in diesem Fall als *todo.min.css*.

Das folgende Snippet importiert aus dem Testpaket:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import "@dhx/trial-todolist/dist/todo.css";
~~~

Dieses Tutorial verwendet die **Testversion**.

#### Container festlegen und To-Do-Liste mit Toolbar hinzufügen {#set-containers-and-add-the-to-do-list-with-toolbar}

Um die To-Do-Liste mit der Toolbar auf der Seite anzuzeigen, erstellen Sie Container für beide Komponenten und initialisieren Sie diese mit den Konstruktoren. Das folgende Beispiel rendert beide Container und initialisiert die Komponenten innerhalb von `useEffect`:

~~~jsx {2,6-7,10-11,13-17} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css"; // To-Do-List-Styles einbinden

export default function ToDoComponent(props) {
    let toolbar_container = useRef(); // Container für Toolbar initialisieren
    let todo_container = useRef(); // Container für To-Do-Liste initialisieren

    useEffect(() => {
        // To-Do-List-Komponente initialisieren
        const todo = new ToDo(todo_container.current, {});

        // Toolbar-Komponente initialisieren
        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api, // innere API der To-Do-Liste bereitstellen
            // weitere Konfigurationseigenschaften
        });

        return () => {
            todo.destructor(); // To-Do-Liste zerstören
            toolbar.destructor(); // Toolbar zerstören
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

#### Styles hinzufügen {#add-styles}

Richten Sie Styles ein, damit die To-Do-Liste korrekt dargestellt wird. Verwenden Sie die Datei *index.css*, um Styles für die To-Do-Liste und ihre Container festzulegen. Das folgende Beispiel definiert Layout-Abmessungen für die Seite:

~~~css title="index.css"
/* Styles für die Ausgangsseite */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* Styles für den To-Do-List- und Toolbar-Container */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* Styles für den To-Do-List-Container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden {#load-data}

Erstellen Sie die Datei *data.js* im Verzeichnis *src/* und fügen Sie Daten hinzu. Das folgende Beispiel exportiert eine `getData()`-Funktion, die Aufgaben, Benutzer und Projekte zurückgibt:

~~~jsx {2,19,28,38} title="data.js"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        // ...
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
~~~

Öffnen Sie *App.js* und importieren Sie die Daten. Übergeben Sie die Daten als **Props** an die `<ToDo/>`-Komponente, wie unten gezeigt:

~~~jsx {2,5-6} title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData(); 
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Öffnen Sie *ToDo.jsx* und wenden Sie die übergebenen **Props** auf das Konfigurationsobjekt der To-Do-Liste an. Das folgende Snippet übergibt Benutzer-, Aufgaben- und Projektdaten über die Konfiguration:

~~~jsx {5,11-13} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {
            users: props.users,
            tasks: props.tasks,
            projects: props.projects,
            // weitere Konfigurationseigenschaften
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // weitere Konfigurationseigenschaften
        });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

Sie können auch die Methode [`parse()`](api/methods/parse_method.md) innerhalb von `useEffect()` verwenden, um Daten in die To-Do-Liste zu laden. Das folgende Beispiel lädt Daten nach der Initialisierung mit `parse()`:

~~~jsx {9-11,21} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    let tasks = props.tasks;
    let users = props.users;
    let projects = props.projects;

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {});

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // weitere Konfigurationseigenschaften
        });
    
        todo.parse({ tasks, users, projects });

        return () => {
            todo.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

Jeder Aufruf von `parse(data)` ersetzt den aktuellen Datensatz.

Die Komponente rendert jetzt eine befüllte To-Do-Liste. Weitere verfügbare Eigenschaften finden Sie in der [Konfigurationsübersicht](api/overview/configs_overview.md).

#### Events verarbeiten {#handle-events}

Abonnieren Sie Events, um auf Benutzeraktionen zu reagieren. Siehe die [vollständige Event-Liste](api/overview/events_overview.md).

Öffnen Sie *ToDo.jsx* und vervollständigen Sie die Methode `useEffect()`. Das folgende Snippet registriert einen Handler für das `add-task`-Event:

~~~jsx {5-7} title="ToDo.jsx"
// ...
useEffect(() => {
    const todo = new ToDo(todo_container.current, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
    
    return () => {
        todo.destructor();
    };
}, []);
// ...
~~~

### Schritt 3. To-Do-Liste in die App einbinden {#step-3-add-the-to-do-list-into-the-app}

Um die Komponente in die App einzubinden, öffnen Sie *App.js* und ersetzen Sie den Standard-Code durch das folgende Snippet:

~~~jsx title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData();
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Starten Sie die App. Die To-Do-Liste wird mit Beispieldaten gerendert:

![In einer React-Anwendung gerendertes DHTMLX To Do List mit Beispieldaten](/img/trial_todolist.png)

Das vollständige Projekt finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-todolist-demo).
