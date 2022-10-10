---
sidebar_label: close-menu
title: close-menu Event
description: You can learn about the close-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-menu

### Description

@short: Fires when closing the menu

### Usage

~~~js
"close-menu": ({
    id: string | number;
    type: "task" | "user" | "toolbar";
});
~~~

### Parameters

The callback of the **close-menu** event can take an object with the following parameters:

- `id` - (required) the ID of an item for which menu is closed
- `type` - (required) the type of a menu

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

// subscribe to the "close-menu" event
list.api.on("close-menu", ({id, type}) => {
    console.log("The menu is closed", id, type); 
});
~~~

**Change log:** Added in v1.1