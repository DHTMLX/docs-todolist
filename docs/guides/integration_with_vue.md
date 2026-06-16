---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Vue

:::tip
Familiarize yourself with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX To Do List is compatible with **Vue 3**. The examples below show how to use them together. For a complete project, see the [**example on GitHub**](https://github.com/DHTMLX/vue-todolist-demo).

## Create a project

Scaffold a new Vue project and install dependencies.

:::info
Before you create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~bash
npm create vue@latest
~~~

The command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Name the project *my-vue-todo-app*.

### Install dependencies

Go to the app directory:

~~~bash
cd my-vue-todo-app
~~~

Install dependencies and start the dev server with a package manager.

Run the following commands with [**yarn**](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Run the following commands with [**npm**](https://www.npmjs.com/):

~~~bash
npm install
npm run dev
~~~

The app runs on a localhost address (for example, `http://localhost:3000`).

## Create the To Do List

Stop the app and install the To Do List package.

### Step 1. Install the package

Download the [**trial To Do List package**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) and follow the steps in the README file. The trial version is available for 30 days only.

### Step 2. Create the component

Create a Vue component to add the To Do List with the Toolbar into the application. In the *src/components/* directory, add a new file named *ToDo.vue*.

#### Import source files

Open *ToDo.vue* and import the To Do List source files. Choose one of two import paths:

- PRO version installed from a local folder — import from `dhx-todolist-package`
- trial version — import from `@dhx/trial-todolist`

The example below imports from the PRO package:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

Depending on the package, the source files can be minified. Import the CSS file as *todo.min.css* in that case.

The snippet below imports from the trial package:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

This tutorial uses the **trial** version.

#### Set containers and add the To Do List with Toolbar

To display the To Do List with the Toolbar on the page, create containers for both components and initialize them with the constructors. The example below initializes the components inside the `mounted()` hook:

~~~html {2,7-8,10-14} title="ToDo.vue"
<script>
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default {
    mounted() {
        // initialize the To Do List component
        this.todo = new ToDo(this.$refs.todo_container, {});

        // initialize the Toolbar component
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api, // provide To Do List inner API
            // other configuration properties
        });
    },

    unmounted() {
        this.todo.destructor(); // destruct To Do List
        this.toolbar.destructor(); // destruct Toolbar
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

#### Load data

Create the *data.js* file in the *src/* directory and add data into it. The following example exports a `getData()` function that returns tasks, users, and projects:

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

Open *App.vue*, import the data, and initialize it through the inner `data()` method. Pass the data into the `<ToDo/>` component as **props**:

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

Go to *ToDo.vue* and apply the passed **props** to the To Do List configuration object. The snippet below passes user, task, and project data through configuration:

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
            // other configuration properties
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api,
            // other configuration properties
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

You can also use the [`parse()`](api/methods/parse_method.md) method inside `mounted()` to load data into the To Do List. The example below loads data with `parse()` after initialization:

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
            // other configuration properties
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

Each call to `parse(data)` replaces the current dataset.

The component now renders a populated To Do List. See the [configuration overview](api/overview/configs_overview.md) for other available properties.

#### Handle events

Subscribe to events to react to user actions. See the [full list of events](api/overview/events_overview.md).

Open *ToDo.vue* and complete the `mounted()` method. The snippet below attaches a handler to the `add-task` event:

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

### Step 3. Add the To Do List into the app

To add the component into the app, open *App.vue* and replace the default code with the following snippet:

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

Start the app — the To Do List renders with sample data:

![DHTMLX To Do List rendered in a Vue application with sample data](/img/trial_todolist.png)

Find the complete project on [**GitHub**](https://github.com/DHTMLX/vue-todolist-demo).
