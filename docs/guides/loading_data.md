---
sidebar_label: Loading and storing data
title: Loading and storing data
description: You can learn about loading and storing data in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Loading and storing data

## Prepare data to load

To Do List accepts the following data types:

- [`tasks`](api/configs/tasks_config.md) — task objects
- [`projects`](api/configs/projects_config.md) — project objects
- [`users`](api/configs/users_config.md) — user objects
- [`priorities`](api/configs/priorities_config.md) — priority objects
- [`tags`](api/configs/tags_config.md) — tag strings
- [`activeProject`](api/configs/activeproject_config.md) — the ID of the active project

Prepare data in a separate file. The following code snippet shows a sample data set:

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

Include the file on the page:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

Then apply object destructuring:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## Load from a local source

Use the following approaches to load data from a local source into To Do List.

### Load data on initialization

Pass the data as configuration properties when creating the To Do List instance:

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

To load data after initialization, use the [`parse()`](api/methods/parse_method.md) method:

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

Use the [`serialize()`](api/methods/serialize_method.md) method to save the current state of To Do List. The method converts the data into a JSON object:

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

Pass the saved state to another To Do List instance with `parse()`:

~~~js
// create a new To Do List
const list2 = new ToDo("#root2", {});

// parse the state into another To Do List
list2.parse(state);
~~~