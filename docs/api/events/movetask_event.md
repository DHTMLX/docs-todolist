---
sidebar_label: move-task
title: move-task Event
description: You can learn about the move-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# move-task

### Description

@short: Fires when moving a task

### Usage

~~~js
"move-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    operation?: "indent" | "unindent" | "project",
    batch?: (string| number)[]
}) => void;
~~~

### Parameters

The callback of the **move-task** event can take an object with the following parameters:

- `id` - (required) the ID of the moved task
- `parent` - (optional) the ID of the parent task
- `project` - (optional) the ID of the project
- `targetId` - (optional) the ID of the target task
- `reverse` - (optional) **true**, if the task is pasted before the target task; otherwise, **false**
- Additional parameters that can be applied to the [RestDataProvider](guides/working_with_server.md) work:
    - `operation` - (optional) an operation type performed on a task; values: **indent** - demoting the task nesting level by one, **unindent** - promoting the task nesting level by one, **project** - moving a task to another project; if no value is set, it indicates changing a task position within a project it belongs to
    - `batch` - (optional) an array of IDs of the tasks on which an operation is perfromed 

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

// subscribe to the "move-task" event
list.api.on("move-task", ({id}) => {
    console.log("The", id, "task is moved"); 
});
~~~ 

**Related article:** [Operations with tasks](guides/task_operations.md#moving-a-task)