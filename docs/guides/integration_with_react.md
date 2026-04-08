---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with React

:::tip
Familiarize yourself with basic React concepts and patterns before reading this guide. Refer to the [React documentation](https://react.dev/learn) to refresh your knowledge.
:::

DHTMLX To Do List is compatible with React. For a complete example, see the [demo on GitHub](https://github.com/DHTMLX/react-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Vite](https://vite.dev/) (optional) and [Node.js](https://nodejs.org/en/).
:::

Create a new `my-react-todo-app` project. You can use plain React or React with Vite:

~~~json
npx create-react-app my-react-todo-app
~~~

### Install dependencies

Navigate to the new app directory:

~~~json
cd my-react-todo-app
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

Create a new file in `src/` and name it `ToDo.jsx`.

#### Import source files

Open `ToDo.jsx` and import To Do List source files. The import path depends on the version you use:

- For the PRO version installed from a local folder, use these import paths:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

If the package is minified, import `todo.min.css` instead.

- For the trial version, use these import paths:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import "@dhx/trial-todolist/dist/todo.css";
~~~

This guide uses the trial version.

#### Set containers and initialize To Do List

The following code snippet sets up the component and initializes To Do List and Toolbar inside `useEffect()`:

~~~jsx {2,6-7,10-11,13-17} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css"; // include To Do List styles

export default function ToDoComponent(props) {
    let toolbar_container = useRef(); // container for Toolbar
    let todo_container = useRef(); // container for To Do List 

    useEffect(() => {
        // initialize To Do List
        const todo = new ToDo(todo_container.current, {});

        // initialize Toolbar
        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api, // connect To Do List to Toolbar
            // other configuration properties
        });

        return () => {
            todo.destructor(); // remove To Do List
            toolbar.destructor(); // remove Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

#### Add styles

Add styles for To Do List and its containers to `index.css`:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* specify styles for To Do List and Toolbar container*/
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* specify styles for To Do List container*/
.widget {
    height: calc(100% - 56px);
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

Open `App.js`, import the data, and pass it to the `<ToDo/>` component as props:

~~~jsx {2,5-6} title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData(); 
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Open `ToDo.jsx` and apply the props to the To Do List configuration:

~~~jsx {5,11-13} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const todo = new ToDo(todo_container.current, {
            users: props.users, // apply user data
            tasks: props.tasks, // apply task data
            projects: props.projects, // apply project data
            // other configuration properties
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api,
            // other configuration properties
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

Use the [`parse()`](/api/methods/parse_method/) method inside `useEffect()` to load data instead:

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
            // other configuration properties
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

Call `parse()` again at any point to reload data with new values.

The component is ready. When added to the page, it initializes To Do List with data. See the [API docs](/api/overview/configs_overview/) for the full list of configuration properties.

#### Handle events

To Do List fires an event on each user action. Use these events to react to changes. See the [full list of events](/api/overview/events_overview/).

The following code snippet handles the `add-task` event inside `useEffect()`:

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

### Step 3. Add To Do List to the app

Open `App.js` and replace the default code:

~~~jsx title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData();
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Start the app to see To Do List loaded with data.

![To Do List initialization](/assets/trial_todolist.png)

Customize the code to fit your requirements. Find the complete example on [GitHub](https://github.com/DHTMLX/react-todolist-demo).
