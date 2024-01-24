---
sidebar_label: clone-task
title: clone-task Event
description: You can learn about the clone-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# clone-task

### Description

@short: Fires when a task is pasted from the clipboard into the specified position 

The event fires after the [paste-task](api/events/pastetask_event.md) event

### Usage

~~~js
"clone-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    batch: obj[]
}) => void;
~~~

### Parameters

The callback of the **clone-task** event can take an object with the following parameters:

- `parent` - (optional) the ID of the parent task
- `project` - (optional) the ID of the project
- `targetId` - (optional) the ID of the target task where the task was pasted
- `batch` - (required) an array of objects that were created on copying and then pasted

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

// subscribe to the "clone-task" event
list.api.on("clone-task", (obj) => {
    console.log(obj); 
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md#copyingpasting-a-task)