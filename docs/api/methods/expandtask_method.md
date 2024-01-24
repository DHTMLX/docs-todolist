---
sidebar_label: expandTask()
title: expandTask Method
description: You can learn about the expandTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# expandTask()

### Description

@short: Expands a collapsed task by its id

### Usage

~~~js
expandTask({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of the task to expand

### Example

~~~js {17-19,22-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
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
    id: "1.1",
});

// expand the collapsed task
list.expandTask({ 
    id: "1.1",
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)