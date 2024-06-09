---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX To Do List is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX To Do List with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's name the project as **my-svelte-todo-app** and go to the app directory:

~~~json
cd my-svelte-todo-app
~~~

Install dependencies and run the app. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn install
yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating To Do List

Now you should get the DHTMLX To Do List code. First of all, stop the app and proceed with installing the To Do List package.

### Step 1. Package installation

Download the [**trial To Do List package**](/how_to_start/#installing-to-do-list-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial To Do List is available 30 days only.

### Step 2. Component creation

Now you need to create a Svelte component, to add a To Do List into the application. Let's create a new file in the ***src/*** directory and name it ***ToDo.svelte***.

#### Importing source files

Open the ***ToDo.svelte*** file and import To Do List source files. Note that:

- if you use PRO version and install the To Do List package from a local folder, the import paths look like this:

~~~html title="ToDo.svelte"
import { ToDo } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **todo.min.css**.

- if you use the trial version of To Do List, specify the following paths:

~~~html title="ToDo.svelte"
import { ToDo } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
~~~

In this tutorial you can see how to configure the **trial** version of To Do List.

#### Setting the container and adding To Do List

To display To Do List on the page, you need to set the container to render the component inside. Check the code below:

~~~html {5,8} title="ToDo.svelte"
<script>
    import { ToDo } from "@dhx/trial-todolist";
    import "@dhx/trial-todolist/dist/todo.css"
    
    let container;
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

Then you need to render To Do List in the container. Use the `new ToDo()` constructor inside the `onMount()` method of Svelte, to initialize To Do List inside of the container:

~~~html {4,8-10} title="ToDo.svelte"
<script>
    import { ToDo } from "@dhx/trial-todolist";
    import "@dhx/trial-todolist/dist/todo.css";
    import { onMount } from "svelte";

    let container;

    onMount(() => {
        new ToDo(container,{}); 
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

#### Loading data

To add data into the To Do List, we need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx title="data.js"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1,
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2,
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg",
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

Then open the ***App.svelte*** file, import data, and pass it into the new created `<ToDo/>` components as **props**:

~~~html {3-4,7} title="App.svelte"
<script>
    // ...
    import { getData } from "./data.js";
    const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

Open the ***ToDo.svelte*** file and apply the passed **props** to the To Do List configuration object:

~~~html {3-5,10-12} title="App.svelte"
<script>
    // ...
    export let users;
    export let tasks;
    export let projects;

    let container;
    onMount(() => {
        new ToDo(container, {
            users, 
            tasks, 
            projects
        })
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

You can also use the [`parse()`](/api/methods/parse_method/) method inside the `onMount()` method of Svelte to load data into To Do List:

~~~html {3-5,10} title="ToDo.svelte"
<script>
    // ...
    export let users;
    export let tasks;
    export let projects;

    let container;
    onMount(() => {
        const todo = new ToDo(container, {});
        todo.parse({ users, tasks, projects });
    });
</script>
<!-- ... -->
~~~

Now the To Do List component is ready. When the element will be added to the page, it will initialize the To Do List object with data. You can provide necessary configuration settings as well. Visit our [To Do List API docs](/api/overview/configs_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the To Do List, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***ToDo.svelte*** and complete the `onMount()` method as in:

~~~jsx title="ToDo.svelte"
onMount(() => {
    const todo = new ToDo(container, { columns, cards });
    todo.events.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
});
~~~

### Step 3. Adding To Do List into the app

To add the component into the app, open the **App.svelte** file and replace the default code with the following one:

~~~html title="App.svelte"
<script>
    import ToDo from "./ToDo.svelte";
    import { getData } from "./data.js";
    
    const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

After that, you can start the app to see To Do List loaded with data on a page.

![To Do List initialization](../assets/trial_todolist.png)

Now you know how to integrate DHTMLX To Do List with Svelte. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-todolist-demo).
