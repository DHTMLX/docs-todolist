---
sidebar_label: Loading and storing data
title: Loading and storing data
description: You can learn about loading and storing data in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Loading and storing data

## Prepare data to load

Load the following data types into To Do List:

- [`tasks`](/api/configs/tasks_config/) — array of task objects
- [`projects`](/api/configs/projects_config/) — array of project objects
- [`users`](/api/configs/users_config/) — array of user objects
- [`priorities`](/api/configs/priorities_config/) — array of priority objects
- [`tags`](/api/configs/tags_config/) — list of tag strings
- [`activeProject`](/api/configs/activeproject_config/) — ID of the initially active project

The following code snippet shows a sample data file with tasks, projects, users, and priorities:

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

Include the data file on your page:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

Apply object destructuring to extract the data:

~~~js title="index.js"
const { tasks, users, projects, priorities } = getData();
~~~

## Load from a local source

### Load data on initialization

The following code snippet passes [predefined data](#prepare-data-to-load) to the constructor on initialization:

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

Use the [`parse()`](/api/methods/parse_method/) method to load data after initialization:

~~~js {3,5,12-17} title="index.js"
const { ToDo, Toolbar } = todo;

const { users, projects, tasks, priorities } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// load data into To Do List
list.parse({
    tasks,
    users,
    projects,
    priorities
});
~~~

## Save and restore state

Use the [`serialize()`](/api/methods/serialize_method/) method to save the current state. The method converts To Do List data into a JSON object:

~~~js
const state = list.serialize();
// {
//    tasks: [{...}, {...}, ...],
//    users: [{...}, {...}, ...],
//    projects: [{...}, {...}, ...],
//    tags: [],
//    activeProject: string,
// }
~~~

The following code snippet loads the saved state into a new To Do List instance:

~~~js
// create a new To Do List
const list2 =  new ToDo("#root2", {});

// load the saved state into the new list
list2.parse(state);
~~~
