---
sidebar_label: Loading and storing data
title: Loading and storing data
description: You can learn about loading and storing data in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Loading and storing data

## Prepare data to load

DHTMLX To Do List accepts the following types of data through its configuration properties:

- [`tasks`](api/configs/tasks_config.md) - list of tasks
- [`projects`](api/configs/projects_config.md) - list of projects
- [`users`](api/configs/users_config.md) - list of users
- [`priorities`](api/configs/priorities_config.md) - list of priorities
- [`tags`](api/configs/tags_config.md) - list of tags
- [`activeProject`](api/configs/activeproject_config.md) - id of the active project

Prepare data in a separate file. The example below returns a data set with tasks, projects, users, and priorities:

~~~js title="data.js"
function getData() {

    // data for tasks
    const tasks = [
        // data for tasks of the "widgets" project
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets",
            priority: 1
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt",
            priority: 1
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler",
            priority: 2
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram",
            priority: 3
        },
        // data for tasks of the "introduction" project    
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: null
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: [
                "user_2",
                "user_1",
                "user_3",
            ],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: null
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: [
                "user_2"
            ],
            collapsed: false,
            priority: null
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false,
            priority: 3
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false,
            priority: null
        },
        // more task objects
    ];

    // data for projects
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        },
        // more project objects
    ];

    // data for users
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar: "../avatar_02.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar: "../avatar_05.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar: "../avatar_21.jpg"
        },
        // more user objects
    ];

    // data for priorities
    const priorities = [
        {
            id: 1,
            label: "Critical",
            color: "#f33",
        },
        {
            id: 2,
            label: "Major",
            color: "rgba(255, 225, 0, 1)",
        },
        {
            id: 3,
            label: "Normal",
            color: "hsla(170, 100%, 40%, 1)",
        },
        {
            id: 4,
            label: "Minor",
            hotkey: "Alt+M",
        },
        // more priority objects
    ];

    return { tasks, projects, users, priorities };
}
~~~

Include the file on the page so the project can use the data:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

Destructure the returned object to access individual data sets:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## Load from a local source

### Load data on initialization

Load [predefined data](guides/loading_data.md#prepare-data-to-load) into the To Do List at initialization. The example below passes data through configuration properties:

~~~js {2,5-8} title="index.js"
const { ToDo } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities,
});
~~~

### Load data after initialization

To load data into an initialized To Do List, use the [`parse()`](api/methods/parse_method.md) method. The following code snippet parses data into an already initialized List:

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// parse data into the component
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## Save and restore state

To save the current state, use the [`serialize()`](api/methods/serialize_method.md) method. It converts the current data into a JSON object. The snippet below stores the serialized state:

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    priorities: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

Pass the saved state to another To Do List with the `parse()` method. The example below restores the state into a new instance:

~~~js
// create a new To Do
const list2 =  new ToDo("#root2", {});

// parse the state of one To Do List into another
list2.parse(state);
~~~
