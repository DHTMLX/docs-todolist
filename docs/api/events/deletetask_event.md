---
sidebar_label: delete-task
title: delete-task Event
description: You can learn about the delete-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# delete-task

### Description

@short: Fires when removing a task

### Usage

~~~js
"delete-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **delete-task** event can take an object with the following parameters:

- `id` - (required) the ID of a removed task

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

// subscribe to the "delete-task" event
list.api.on("delete-task", ({id}) => {
    console.log("The", id, "task is removed"); 
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md#deleting-a-task)