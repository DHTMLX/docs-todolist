---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Vue

:::tip
Familiarize yourself with basic Vue concepts and patterns before reading this guide. Refer to the [Vue 3 documentation](https://vuejs.org/guide/introduction.html#getting-started) to refresh your knowledge.
:::

DHTMLX To Do List is compatible with Vue 3. For a complete example, see the [demo on GitHub](https://github.com/DHTMLX/vue-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Node.js](https://nodejs.org/en/).
:::

Create a Vue project:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official Vue scaffolding tool. See the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application) for details.

Name the project `my-vue-todo-app`.

### Install dependencies

Navigate to the app directory:

~~~json
cd my-vue-todo-app
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

Create a new file in `src/components/` and name it `ToDo.vue`.

#### Import source files

Open `ToDo.vue` and import To Do List source files. The import path depends on the version you use:

- For the PRO version installed from a local folder, use these import paths:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

If the package is minified, import `todo.min.css` instead.

- For the trial version, use these import paths:

~~~html title="ToDo.vue"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

This guide uses the trial version.

#### Set containers and initialize To Do List

The following code snippet sets up the component and initializes To Do List and Toolbar in `mounted()`:

~~~html {2,7-8,10-14} title="ToDo.vue"
<script>
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default {
    mounted() {
        // initialize To Do List
        this.todo = new ToDo(this.$refs.todo_container, {});

        // initialize Toolbar
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.todo.api, // connect To Do List to Toolbar
            // other configuration properties
        });
    },

    unmounted() {
        this.todo.destructor(); // remove To Do List
        this.toolbar.destructor(); // remove Toolbar
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

#### Add styles

Add global styles for To Do List and its containers to your stylesheet (for example, `src/assets/main.css`):

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

Create `data.js` in `src/` with sample data:

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

Open `App.vue`, import the data, and pass it to `<ToDo/>` as props:

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

Open `ToDo.vue` and apply the props to the To Do List configuration:

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

Use the [`parse()`](/api/methods/parse_method/) method inside `mounted()` to load data instead:

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

Call `parse()` again at any point to reload data with new values.

The component is ready. When added to the page, it initializes To Do List with data. See the [API docs](/api/overview/configs_overview/) for the full list of configuration properties.

#### Handle events

To Do List fires an event on each user action. Use these events to react to changes. See the [full list of events](/api/overview/events_overview/).

The following code snippet handles the `add-task` event inside `mounted()`:

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

### Step 3. Add To Do List to the app

Open `App.vue` and replace the default code:

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

Start the app to see To Do List loaded with data.

![To Do List initialization](/assets/trial_todolist.png)

Customize the code to fit your requirements. Find the complete example on [GitHub](https://github.com/DHTMLX/vue-todolist-demo).
