---
sidebar_label: Data loading
title: Data loading
description: You can learn about data loading in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Data loading

## Preparing data to load

DHTMLX To do list takes data in the JSON format. There are the following types of data which can be loaded into the component: 

- [**tasks**](api/configs/tasks_config.md)
- [**projects**](api/configs/projects_config.md)
- [**users**](api/configs/users_config.md)
- [**tags**](api/configs/tags_config.md)

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

    // data for users
    const users = [
        {
            "id": "user_1",
            "label": "Don Smith",
            "path": "../avatar_02.jpg"
        },
        {
            "id": "user_2",
            "label": "Nadia Chasey",
            "path": "../avatar_05.jpg"
        },
        {
            "id": "user_3",
            "label": "Mike Young",
            "path": "../avatar_21.jpg"
        },
        // more user objects
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

You can load [a predefined data](guides/loading_data.md#preparing-data-to-load) into To do list on the initialization stage in the following way:

~~~js {2,4-8} title="index.js"
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects
});
~~~

### Loading data after initialization

To load data from a local data source after initialization of the To Do List, use the [parse()](api/methods/parse_method.md) method:

~~~js {2,4,11-15} title="index.js"
const { ToDo, Toolbar } = todo;
const { users, projects, tasks } = getData();

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: component.api,
});

// parse data into the component
list.parse({
    tasks,
    users,
    projects
});
~~~