---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Svelte

:::tip
Familiarize yourself with basic Svelte concepts and patterns before reading this guide. Refer to the [Svelte documentation](https://svelte.dev/docs/svelte/overview) to refresh your knowledge.
:::

DHTMLX To Do List is compatible with Svelte. For a complete example, see the [demo on GitHub](https://github.com/DHTMLX/svelte-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Vite](https://vite.dev/) (optional) and [Node.js](https://nodejs.org/en/).
:::

Create a Svelte project using one of these options:

- [SvelteKit](https://kit.svelte.dev/)
- Svelte with Vite (without SvelteKit):

~~~json
npm create vite@latest
~~~

See the [Svelte documentation](https://svelte.dev/docs/svelte/overview) for details.

### Install dependencies

Name the project `my-svelte-todo-app` and navigate to the app directory:

~~~json
cd my-svelte-todo-app
~~~

Install dependencies and start the dev server using your package manager:

- With [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- With [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app runs on a local server (for example, `http://localhost:3000`).

## Create To Do List

Stop the app and install the To Do List package.

### Step 1. Install the package

Download the [trial To Do List package](/how_to_start/#installing-to-do-list-via-npm-or-yarn) and follow the README instructions. The trial is available for 30 days.

### Step 2. Create the component

Create a new file in *src/* and name it *ToDo.svelte*.

#### Import source files

Open *ToDo.svelte* and import To Do List source files. The import path depends on the version you use:

- For the PRO version installed from a local folder, use these import paths:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

If the package is minified, import *todo.min.css* instead.

- For the trial version, use these import paths:

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

This guide uses the trial version.

#### Set containers and initialize To Do List

The following code snippet sets up the component and initializes To Do List and Toolbar in `onMount()`:

~~~html {3,6,10-11,13-17,27-28} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

let toolbar_container, todo_container; // containers for To Do List and Toolbar
let todo, toolbar;

onMount(() => {
    // initialize To Do List
    todo = new ToDo(todo_container, {})

    // initialize Toolbar
    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, // connect To Do List to Toolbar
        // other configuration properties
    })
});

onDestroy(() => {
    todo.destructor(); // remove To Do List
    toolbar.destructor(); // remove Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### Add styles

Add global styles for To Do List and its containers to your stylesheet (for example, *src/app.css*):

~~~css
/* specify styles for the initial page */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* specify styles for To Do List and Toolbar container */
.component_container {
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
}
~~~

#### Load data

Create *data.js* in *src/* with sample data:

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

Open *App.svelte*, import the data, and pass the data to `<ToDo/>` as props:

~~~html {3,5,8} title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Open *ToDo.svelte* and apply the props to the To Do List configuration:

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
        users, // apply user data
        tasks, // apply task data
        projects, // apply project data
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, 
        // other configuration properties
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

Use the [`parse()`](/api/methods/parse_method/) method inside `onMount()` to load data instead:

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
        // other configuration properties
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

Call `parse()` again at any point to reload data with new values.

The component is ready. When added to the page, the component initializes To Do List with data. See the [API docs](/api/overview/configs_overview/) for the full list of configuration properties.

#### Handle events

To Do List fires an event on each user action. Use these events to react to changes. See the [full list of events](/api/overview/events_overview/).

The following code snippet handles the `add-task` event inside `onMount()`:

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

### Step 3. Add To Do List to the app

Open *App.svelte* and replace the default code:

~~~html title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Start the app to see To Do List loaded with data.

![To Do List initialization](/assets/trial_todolist.png)

Customize the code to fit your requirements. Find the complete example on [GitHub](https://github.com/DHTMLX/svelte-todolist-demo).
