---
sidebar_label: delete-project
title: delete-project Event
description: You can learn about the delete-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# delete-project

### Description

@short: Fires when removing a project

### Usage

~~~js
"delete-project": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **delete-project** event can take an object with the following parameters:

- `id` - (required) the ID of a project

### Example

~~~js {15-17}
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

// subscribe to the "delete-project" event
list.api.on("delete-project", ({id}) => {
    console.log("The project with ID:", id, "is removed");
});
~~~