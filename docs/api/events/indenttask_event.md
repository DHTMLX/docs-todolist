---
sidebar_label: indent-task
title: indent-task Event
description: You can learn about the indent-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# indent-task

### Description

@short: Fires when the nesting level of a task is demoted by one

### Usage

~~~js
"indent-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **indent-task** event can take an object with the following parameters:

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

// subscribe to the "indent-task" event
list.api.on("indent-task", ({id}) => {
    console.log("The nesting level of the", id, "task is demoted by one"); 
});
~~~ 

**Related article:** [Operations with tasks](guides/task_operations.md#changing-the-indent-level-of-a-task)