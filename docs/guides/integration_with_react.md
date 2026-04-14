---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://react.dev/learn).
:::

DHTMLX To Do List is compatible with React. For a working example, see the [Example on GitHub](https://github.com/DHTMLX/react-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Vite](https://vite.dev/) (optional) and [Node.js](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**. Let's name the project as **my-react-todo-app**:

~~~json
npx create-react-app my-react-todo-app
~~~

### Install dependencies

Go to the newly created app directory:

~~~json
cd my-react-todo-app
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

The app runs on localhost (for example `http://localhost:3000`).

## Create To Do List

Stop the app and install the To Do List package before continuing.

### Step 1. Install the package

Download the [trial To Do List package](/how_to_start/#installing-to-do-list-via-npm-or-yarn) and follow the steps in the README file. The trial version is available for 30 days.

### Step 2. Create the component

Create a React component to add To Do List with Toolbar to the application. Create a new file in the *src/* directory and name it *ToDo.jsx*.

#### Import source files

Open *ToDo.jsx* and import To Do List source files. Note that:

- if you use PRO version and install the To Do List package from a local folder, the import paths look like this:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
~~~

Depending on the package, source files may be minified. In that case, import *todo.min.css* instead.

- if you use the trial version of To Do List, specify the following paths:

~~~jsx title="ToDo.jsx"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import "@dhx/trial-todolist/dist/todo.css";
~~~

This tutorial uses the **trial** version of To Do List.

#### Set containers and add To Do List with Toolbar

To display To Do List with Toolbar on the page, create containers for both components and initialize them with the corresponding constructors:

~~~jsx {2,6-7,10-11,13-17} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css"; // include To Do List styles

export default function ToDoComponent(props) {
    let toolbar_container = useRef(); // initialize container for Toolbar
    let todo_container = useRef(); // initialize container for To Do List 

    useEffect(() => {
        // initialize the To Do List component
        const todo = new ToDo(todo_container.current, {});

        // initialize the Toolbar component
        const toolbar = new Toolbar(toolbar_container.current, {
            api: todo.api, // provide To Do List inner API
            // other configuration properties
        });

        return () => {
            todo.destructor(); // destruct To Do List
            toolbar.destructor(); // destruct Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={todo_container} className="widget"></div>
            </div>
}
~~~

#### Add styles

Provide the styles for To Do List and its containers. Use the *index.css* file to specify the required styles:

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

Create the *data.js* file in the *src/* directory and add your data:

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

Open *App.js*, import the data, and pass the data to the `<ToDo/>` component as props:

~~~jsx {2,5-6} title="App.js"
import ToDo from "./ToDo";
import { getData } from "./data";

function App() {
    const { tasks, users, projects } = getData(); 
    return <ToDo tasks={tasks} users={users} projects={projects} />;
}

export default App;
~~~

Open *ToDo.jsx* and apply the props to the To Do List configuration object:

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

You can also use the [`parse()`](/api/methods/parse_method/) method inside the `useEffect()` method of React to load data into To Do List:

~~~jsx {9-11,21} title="ToDo.jsx"
import { useEffect, useRef } from "react";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export default function ToDoComponent(props) {
    let todo_container = useRef();
    let toolbar_container = useRef();

    let tasks = props.tasks; 
    let users = props.users; 
    let projects = props.users;

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

The `parse(data)` method reloads data on each applied change.

The To Do List component is ready to use. When added to the page, the component initializes with data. See the [To Do List API docs](/api/overview/configs_overview/) for the full list of available properties.

#### Handle events

When a user performs an action in To Do List, the action triggers an event. Use events to detect actions and run custom code. See the [full list of events](/api/overview/events_overview/).

Open *ToDo.jsx* and extend the `useEffect()` method:

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

Open *App.js* and replace the default code:

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

![To Do List initialization](../assets/trial_todolist.png)

The integration is complete. Customize the code to match your requirements. Find the final example on [GitHub](https://github.com/DHTMLX/react-todolist-demo).
