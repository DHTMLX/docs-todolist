---
sidebar_label: collapseTask()
title: collapseTask Method
description: You can learn about the collapseTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# collapseTask()

### Description

@short: Collapses a task by its id

### Usage

~~~js
collapseTask({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of the task to be collapsed

### Example

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// collapse the task
list.collapseTask({ 
    id: "1",
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)