---
sidebar_label: update-task
title: update-task Event
description: You can learn about the update-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-task

### Description

@short: Fires when updating a task

### Usage

~~~js
"update-task": ({
    id: string | number,
    task: object,
    skipProvider?: boolean,
    batch?: object[]
}) => void;
~~~

### Parameters

The callback of the **update-task** event can take an object with the following parameters:

- `id` - (required) the id of the updated task
- `task` - (required) the object of the updated task
- Additional parameters that can be applied to the [RestDataProvider](guides/working_with_server.md) work:
  - `skipProvider` - (optional) allows skipping events sent to RestDataProvider; if **false (default)**, RestDataProvider works with the event, **true** - RestDataProvider skips the event
  - `batch` - (optional) an array of updated tasks objects

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

// subscribe to the "update-task" event
list.api.on("update-task", ({id, task}) => {
    console.log("The", id, "task is updated. New task object is", task);
});
~~~


**Related article:** [Operations with tasks](guides/task_operations.md#updating-a-task)