---
sidebar_label: open-menu
title: open-menu Event
description: You can learn about the open-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-menu

### Description

@short: Fires when opening the menu

### Usage

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "toolbar",
    source?: (string | number)[]
});
~~~

### Parameters

The callback of the **open-menu** event can take an object with the following parameters:

- `id` - (required) the ID of an item for which menu is opened
- `type` - (required) the type of a menu
- `source` - (optional) an array with ID(s) of task(s) for which operation(s) will be performed

### Example

~~~js
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// subscribe to the "open-menu" event
list.api.on("open-menu", ({id, type, source}) => {
    console.log("The menu is opened", id, type, source); 
});
~~~

**Change log:** Added in v1.1