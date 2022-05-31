---
sidebar_label: users
title: users Config
description: You can learn about the users config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# users

### Description

@short: Optional. An array of user objects

### Usage

~~~js
users?: [
    {
        id: string | number,
        label: string,
        path?: string,
        color?: string,
    },
    {...} // more user objects
];
~~~

### Parameters

The **users** property presents an array of user objects. Each object includes the following set of parameters:

- `id` - (required) the id of a user
- `label` - (required) the description of the user
- `path` - (optional) a path to the image of the user
- `color` - (optional) the color of the user if the image isn't uploaded<br>
:::info
If the **color** parameter is not specified, the color from the default set of colors will be applied.
:::

### Example

~~~js {29-40,48}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: "30 08 2022"
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { 
        id: "user_1",
        label: "John",
        path: "../avatar_02.jpg" 
    },
    { 
        id: "user_2", 
        label: "Kate",
        path: "../avatar_03.jpg"  
    },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
	tasks,
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Related articles:**
- [Loading and storing data](guides/loading_data.md)
- [Task users](guides/task_users.md)