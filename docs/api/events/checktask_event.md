---
sidebar_label: check-task
title: check-task Event
description: You can learn about the check-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# check-task

### Description

@short: Fires when a task is marked as completed

### Usage

~~~js
"check-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### Parameters

The callback of the **check-task** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `manual` - (optional) **true** if the task is marked as completed in the "manual" mode

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

// subscribe to the "check-task" event
list.api.on("check-task", ({id}) => {
    console.log("The", id, "task is marked as completed"); 
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md#marking-a-task-completeincomplete)