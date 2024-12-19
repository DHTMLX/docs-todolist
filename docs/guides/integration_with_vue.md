---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX To Do List is compatible with **Vue**. We have prepared code examples on how to use DHTMLX To Do List with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-todolist-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-todo-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-todo-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn
yarn start
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating To Do List

Now you should get the DHTMLX To Do List source code. First of all, stop the app and proceed with installing the To Do List package.

### Step 1. Package installation

Download the [**trial To Do List package**](/how_to_start/#installing-to-do-list-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial To Do List is available 30 days only.

### Step 2. Component creation

Now you need to create a Vue component, to add To Do List with Toolbar into the application. Create a new file in the ***src/components/*** directory and name it ***ToDo.vue***.

#### Import source files

Open the ***ToDo.vue*** file and import To Do List source files. Note that:

- if you use PRO version and install the To Do List package from a local folder, the import paths look like this:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **todo.min.css**.

- if you use the trial version of To Do List, specify the following paths:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of To Do List.

#### Setting containers and adding To Do List with Toolbar

To display To Do List with Toolbar on the page, you need to create containers for To Do List and Toolbar, and initialize these components using the corresponding constructors:

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

#### Loading data

To add data into the To Do List, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<ToDo/>` component as **props**:

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

Go to the ***ToDo.vue*** file and apply the passed **props** to the To Do List configuration object:

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

You can also use the [`parse()`](/api/methods/parse_method/) method inside the `mounted()` method of Vue to load data into To Do List:

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

The `parse(data)` method provides data reloading on each applied change.

Now the To Do List component is ready to use. When the element will be added to the page, it will initialize the To Do List with data. You can provide necessary configuration settings as well. Visit our [To Do List API docs](/api/overview/configs_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the To Do List, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***ToDo.vue*** and complete the `mounted()` method:

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

### Step 3. Adding To Do List into the app

To add the component into the app, open the **App.vue** file and replace the default code with the following one:

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

After that, you can start the app to see To Do List loaded with data on a page.

![To Do List initialization](../assets/trial_todolist.png)

Now you know how to integrate DHTMLX To Do List with Vue. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/vue-todolist-demo).
