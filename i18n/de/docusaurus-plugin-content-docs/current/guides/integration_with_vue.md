---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript To-Do-List-Bibliothek erfahren Sie, wie die Integration mit Vue funktioniert. Sehen Sie sich Entwicklerleitfäden und die API-Referenz an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX To Do List herunter.
---

# Integration mit Vue

:::tip
Machen Sie sich mit den grundlegenden Konzepten und Mustern von [**Vue**](https://vuejs.org/) vertraut, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie die [**Vue-3-Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX To Do List ist mit **Vue 3** kompatibel. Die folgenden Beispiele zeigen, wie Sie beide zusammen verwenden. Ein vollständiges Projekt finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-todolist-demo).

## Projekt erstellen {#create-a-project}

Erstellen Sie ein neues Vue-Projekt und installieren Sie die Abhängigkeiten.

:::info
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Vue**-Projekt zu erstellen, führen Sie folgenden Befehl aus:

~~~bash
npm create vue@latest
~~~

Der Befehl installiert und führt `create-vue` aus, das offizielle Projektgerüst-Werkzeug für **Vue**. Weitere Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Benennen Sie das Projekt *my-vue-todo-app*.

### Abhängigkeiten installieren {#install-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~bash
cd my-vue-todo-app
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

Erstellen Sie eine Vue-Komponente, um die To-Do-Liste mit der Toolbar in die Anwendung einzubinden. Fügen Sie im Verzeichnis *src/components/* eine neue Datei namens *ToDo.vue* hinzu.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *ToDo.vue* und importieren Sie die Quelldateien der To-Do-Liste. Wählen Sie einen der beiden Importpfade:

- PRO-Version aus einem lokalen Ordner installiert - Import aus `dhx-todolist-package`
- Testversion - Import aus `@dhx/trial-todolist`

Das folgende Beispiel importiert aus dem PRO-Paket:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

Je nach Paket können die Quelldateien minifiziert sein. Importieren Sie die CSS-Datei in diesem Fall als *todo.min.css*.

Das folgende Snippet importiert aus dem Testpaket:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

Dieses Tutorial verwendet die **Testversion**.

#### Container festlegen und To-Do-Liste mit Toolbar hinzufügen {#set-containers-and-add-the-to-do-list-with-toolbar}

Um die To-Do-Liste mit der Toolbar auf der Seite anzuzeigen, erstellen Sie Container für beide Komponenten und initialisieren Sie diese mit den Konstruktoren. Das folgende Beispiel initialisiert die Komponenten innerhalb des `mounted()`-Hooks:

~~~html {2,7-8,10-14} title="ToDo.vue"
<script>
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default {
    mounted() {
        // To-Do-List-Komponente initialisieren
        this.todo = new ToDo(this.$refs.todo_container, {});

        // Toolbar-Komponente initialisieren
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api, // innere API der To-Do-Liste bereitstellen
            // weitere Konfigurationseigenschaften
        });
    },

    unmounted() {
        this.todo.destructor(); // To-Do-Liste zerstören
        this.toolbar.destructor(); // Toolbar zerstören
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="todo_container" style="height: calc(100% - 56px);"></div>
    </div>
</template>
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

Öffnen Sie *App.vue*, importieren Sie die Daten und initialisieren Sie diese über die interne `data()`-Methode. Übergeben Sie die Daten als **Props** an die `<ToDo/>`-Komponente:

~~~html {3,7-14,19} title="App.vue"
<script>
import ToDo from "./components/ToDo.vue";
import { getData } from "./data";

export default {
    components: { ToDo },
    data() {
        const { users, projects, tasks } = getData();
        return {
            users,
            projects,
            tasks
        };
    }
};
</script>

<template>
    <ToDo :users="users" :tasks="tasks" :projects="projects" />
</template>
~~~

Öffnen Sie *ToDo.vue* und wenden Sie die übergebenen **Props** auf das Konfigurationsobjekt der To-Do-Liste an. Das folgende Snippet übergibt Benutzer-, Aufgaben- und Projektdaten über die Konfiguration:

~~~html {6,10-12} title="ToDo.vue"
<script>
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default {
    props: ["tasks", "users", "projects"],

    mounted() {
        this.todo = new ToDo(this.$refs.todo_container, {
            users: this.users,
            tasks: this.tasks,
            projects: this.projects,
            // weitere Konfigurationseigenschaften
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api,
            // weitere Konfigurationseigenschaften
        });
    },

    unmounted() {
        this.todo.destructor();
        this.toolbar.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="todo_container" style="height: calc(100% - 56px);"></div>
    </div>
</template>
~~~

Sie können auch die Methode [`parse()`](api/methods/parse_method.md) innerhalb von `mounted()` verwenden, um Daten in die To-Do-Liste zu laden. Das folgende Beispiel lädt Daten nach der Initialisierung mit `parse()`:

~~~html {6,16-20} title="ToDo.vue"
<script>
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default {
    props: ["tasks", "users", "projects"],

    mounted() {
        this.todo = new ToDo(this.$refs.todo_container, {});

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api,
            // weitere Konfigurationseigenschaften
        });

        this.todo.parse({
            users: this.users,
            tasks: this.tasks,
            projects: this.projects
        });
    },

    unmounted() {
        this.todo.destructor();
        this.toolbar.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="todo_container" style="height: calc(100% - 56px);"></div>
    </div>
</template>
~~~

Jeder Aufruf von `parse(data)` ersetzt den aktuellen Datensatz.

Die Komponente rendert jetzt eine befüllte To-Do-Liste. Weitere verfügbare Eigenschaften finden Sie in der [Konfigurationsübersicht](api/overview/configs_overview.md).

#### Events verarbeiten {#handle-events}

Abonnieren Sie Events, um auf Benutzeraktionen zu reagieren. Siehe die [vollständige Event-Liste](api/overview/events_overview.md).

Öffnen Sie *ToDo.vue* und vervollständigen Sie die Methode `mounted()`. Das folgende Snippet registriert einen Handler für das `add-task`-Event:

~~~html {8-10} title="ToDo.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.todo = new ToDo(this.$refs.todo_container, {});

        this.todo.api.on("add-task", ({ id }) => {
            console.log("A new task is added", id);
        });
    },

    unmounted() {
        this.todo.destructor();
    }
}
</script>

// ...
~~~

### Schritt 3. To-Do-Liste in die App einbinden {#step-3-add-the-to-do-list-into-the-app}

Um die Komponente in die App einzubinden, öffnen Sie *App.vue* und ersetzen Sie den Standard-Code durch das folgende Snippet:

~~~html title="App.vue"
<script>
import ToDo from "./components/ToDo.vue";
import { getData } from "./data";

export default {
    components: { ToDo },
    data() {
        const { users, projects, tasks } = getData();
        return {
            users,
            projects,
            tasks
        };
    }
};
</script>

<template>
    <ToDo :users="users" :tasks="tasks" :projects="projects" />
</template>
~~~

Starten Sie die App. Die To-Do-Liste wird mit Beispieldaten gerendert:

![In einer Vue-Anwendung gerendertes DHTMLX To Do List mit Beispieldaten](/img/trial_todolist.png)

Das vollständige Projekt finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-todolist-demo).
