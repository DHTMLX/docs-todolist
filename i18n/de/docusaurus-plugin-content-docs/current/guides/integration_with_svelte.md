---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie die Integration mit Svelte funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Integration mit Svelte

:::tip
Machen Sie sich mit den grundlegenden Konzepten und Mustern von **Svelte** vertraut, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie die [**Svelte-Dokumentation**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX To Do List ist mit **Svelte** kompatibel. Die folgenden Beispiele zeigen, wie Sie beide zusammen verwenden. Ein vollständiges Projekt finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).

## Projekt erstellen {#create-a-project}

Erstellen Sie ein neues Svelte-Projekt und installieren Sie die Abhängigkeiten.

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie ein **Svelte**-Projekt auf eine von zwei Arten:

- Verwenden Sie [**SvelteKit**](https://kit.svelte.dev/)
- Verwenden Sie **Svelte mit Vite** ohne SvelteKit

Das folgende Beispiel erstellt ein Svelte- und Vite-Projekt:

~~~bash
npm create vite@latest
~~~

Weitere Details finden Sie im [zugehörigen Artikel](https://svelte.dev/docs/svelte/overview).

### Abhängigkeiten installieren {#install-dependencies}

Benennen Sie das Projekt *my-svelte-todo-app* und wechseln Sie in das App-Verzeichnis:

~~~bash
cd my-svelte-todo-app
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
npm run dev
~~~

Die App läuft unter einer Localhost-Adresse (z. B. `http://localhost:3000`).

## To-Do-Liste erstellen {#create-the-to-do-list}

Stoppen Sie die App und installieren Sie das To-Do-List-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [**To-Do-List-Testpaket**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) herunter und folgen Sie den Anweisungen in der README-Datei. Die Testversion ist nur 30 Tage lang verfügbar.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine Svelte-Komponente, um die To-Do-Liste mit der Toolbar in die Anwendung einzubinden. Fügen Sie im Verzeichnis *src/* eine neue Datei namens *ToDo.svelte* hinzu.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *ToDo.svelte* und importieren Sie die Quelldateien der To-Do-Liste. Wählen Sie einen der beiden Importpfade:

- PRO-Version aus einem lokalen Ordner installiert — Import aus `dhx-todolist-package`
- Testversion — Import aus `@dhx/trial-todolist`

Das folgende Beispiel importiert aus dem PRO-Paket:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

Je nach Paket können die Quelldateien minifiziert sein. Importieren Sie die CSS-Datei in diesem Fall als *todo.min.css*.

Das folgende Snippet importiert aus dem Testpaket:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

Dieses Tutorial verwendet die **Testversion**.

#### Container festlegen und To-Do-Liste mit Toolbar hinzufügen {#set-containers-and-add-the-to-do-list-with-toolbar}

Um die To-Do-Liste mit der Toolbar auf der Seite anzuzeigen, erstellen Sie Container für beide Komponenten und initialisieren Sie diese mit den Konstruktoren. Das folgende Beispiel bindet die Container und initialisiert die Komponenten innerhalb von `onMount`:

~~~html {3,6,10-11,13-17,27-28} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

let toolbar_container, todo_container; // Container für To-Do-Liste und Toolbar initialisieren
let todo, toolbar;

onMount(() => {
    // To-Do-List-Komponente initialisieren
    todo = new ToDo(todo_container, {})

    // Toolbar-Komponente initialisieren
    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, // innere API der To-Do-Liste bereitstellen
        // weitere Konfigurationseigenschaften
    })
});

onDestroy(() => {
    todo.destructor(); // To-Do-Liste zerstören
    toolbar.destructor(); // Toolbar zerstören
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
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

Öffnen Sie *App.svelte*, importieren Sie die Daten und übergeben Sie diese als **Props** an die `<ToDo/>`-Komponente:

~~~html {3,5,8} title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Öffnen Sie *ToDo.svelte* und wenden Sie die übergebenen **Props** auf das Konfigurationsobjekt der To-Do-Liste an. Das folgende Snippet übergibt Benutzer-, Aufgaben- und Projektdaten über die Konfiguration:

~~~html {6-8,15-17} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {
        users,
        tasks,
        projects,
        // weitere Konfigurationseigenschaften
    })

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, 
        // weitere Konfigurationseigenschaften
    })
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Sie können auch die Methode [`parse()`](api/methods/parse_method.md) innerhalb von `onMount()` verwenden, um Daten in die To-Do-Liste zu laden. Das folgende Beispiel lädt Daten nach der Initialisierung mit `parse()`:

~~~html {6-8,21} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {})

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api,
        // weitere Konfigurationseigenschaften
    })

    todo.parse({ tasks, users, projects });
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Jeder Aufruf von `parse(data)` ersetzt den aktuellen Datensatz.

Die Komponente rendert jetzt eine befüllte To-Do-Liste. Weitere verfügbare Eigenschaften finden Sie in der [Konfigurationsübersicht](api/overview/configs_overview.md).

#### Events verarbeiten {#handle-events}

Abonnieren Sie Events, um auf Benutzeraktionen zu reagieren. Siehe die [vollständige Event-Liste](api/overview/events_overview.md).

Öffnen Sie *ToDo.svelte* und vervollständigen Sie die Methode `onMount()`. Das folgende Snippet registriert einen Handler für das `add-task`-Event:

~~~html {8-10} title="ToDo.svelte"
<script>
// ...
let todo;

onMount(() => {
    todo = new ToDo(todo_container, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
});

onDestroy(() => {
    todo.destructor();
});
</script>

// ...
~~~

### Schritt 3. To-Do-Liste in die App einbinden {#step-3-add-the-to-do-list-into-the-app}

Um die Komponente in die App einzubinden, öffnen Sie *App.svelte* und ersetzen Sie den Standard-Code durch das folgende Snippet:

~~~html title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Starten Sie die App — die To-Do-Liste wird mit Beispieldaten gerendert:

![In einer Svelte-Anwendung gerendertes DHTMLX To Do List mit Beispieldaten](/img/trial_todolist.png)

Das vollständige Projekt finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).
