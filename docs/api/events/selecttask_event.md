---
sidebar_label: select-task
title: select-task Event
description: You can learn about the select-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# select-task

### Description

@short: Fires when selecting a task

### Usage

~~~js
"select-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **select-task** event can take an object with the following parameters:

- `id` - (required) the id of a task

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

// subscribe to the "select-task" event
list.api.on("select-task", ({id}) => {
    console.log("The", id, "task is selected");
});
~~~