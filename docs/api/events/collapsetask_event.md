---
sidebar_label: collapse-task
title: collapse-task Event
description: You can learn about the collapse-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# collapse-task

### Description

@short: Fires when collapsing a task

### Usage

~~~js
"collapse-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **collapse-task** event can take an object with the following parameters:

- `id` - (required) the id of a task

:::info
To handle the inner events, you can use the [**Event Bus methods**](category/event-bus-methods.md)
:::

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

// subscribe to the "collapse-task" event
list.api.on("collapse-task", ({id}) => {
    console.log("The", id, "task is collapsed"); 
});
~~~ 