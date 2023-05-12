---
sidebar_label: Loading and storing data
title: Loading and storing data
description: You can learn about loading and storing data in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Loading and storing data

## Preparing data to load

There are the following types of information which can be loaded into DHTMLX To Do List:

- [**tasks**](api/configs/tasks_config.md)
- [**projects**](api/configs/projects_config.md)
- [**users**](api/configs/users_config.md)
- [**priorities**](api/configs/priorities_config.md)
- [**tags**](api/configs/tags_config.md)
- [**activeProject**](api/configs/activeproject_config.md)

You can prepare data in a separate file. Here is an example of an appropriate data set:

~~~js title="data.js"
function getData() {

    // data for tasks
    const tasks = [
        // data for tasks of the "widgets" project
        {
            "id": "widgets",
            "project": "widgets",
            "text": "\u{1F389} DHTMLX widgets"
        },
        {
            "id": "gantt",
            "project": "widgets",
            "parent": "widgets",
            "text": "Gantt"
        },
        {
            "id": "scheduler",
            "project": "widgets",
            "parent": "widgets",
            "text": "Scheduler"
        },
        {
            "id": "diagram",
            "project": "widgets",
            "parent": "widgets",
            "text": "Diagram"
        },
        // data for tasks of the "introduction" project    
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [
                "user_2",
                "user_1",
                "user_3",
            ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [
                "user_2"
            ],
            "collapsed": false
        },
        {
            "id": "1652097809882",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false
        },
        {
            "id": "1652097809887",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            "checked": false
        },
        // more task objects
    ];

    // data for projects
    const projects = [
        {
            "id": "introduction",
            "label": "Introduction to DHTMLX To Do List"
        },
        {
            "id": "widgets",
            "label": "Our widgets"
        },
        // more project objects
    ];

    // data for users
    const users = [
        {
            "id": "user_1",
            "label": "Don Smith",
            "avatar": "../avatar_02.jpg"
        },
        {
            "id": "user_2",
            "label": "Nadia Chasey",
            "avatar": "../avatar_05.jpg"
        },
        {
            "id": "user_3",
            "label": "Mike Young",
            "avatar": "../avatar_21.jpg"
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

To be able to load and operate the data in your project, include the file on the page:

~~~html title="index.html"
<script src="../data.js"></script>
~~~

And apply the object destructuring: 

~~~js title="index.js"
const { tasks, users, projects } = getData();
~~~

## Loading from local source

### Loading data on initialization

You can load [a predefined data](guides/loading_data.md#preparing-data-to-load) into To Do List on the initialization stage in the following way:

~~~js {2,5-8} title="index.js"
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    priorities
});
~~~

### Loading data after initialization

To load data from a local data source after initialization of the To Do List, use the [`parse()`](api/methods/parse_method.md) method:

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

## Saving and restoring state

To save the current state of a To Do, use the [`serialize()`](api/methods/serialize_method.md) method. It converts the data of the To Do List into a JSON object.

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

Then you can parse the data stored in the saved state array to a different To Do List. For example:

~~~js
// creating a new To Do
const list2 =  new ToDo("#root2", {});

// parsing the state of To Do List into another To Do List
list2.parse(state);
~~~