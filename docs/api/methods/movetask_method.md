---
sidebar_label: moveTask()
title: moveTask Method
description: You can learn about the moveTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# moveTask()

### Description

@short: Moves a task to the specified position

A parent task is moved together with its children.

### Usage

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the task to be moved
- `project` - (optional) the ID of the project<br>
:::info
To move a task to the *No project* section, specify the value of the parameter to **null**
:::
- `parent` - (optional) the ID of the parent task
- `targetId` - (optional) the ID of the target task where the moved task will be pasted
- `reverse` - (optional) defines the position where the moved task will be pasted: **before** the target task (*true*) or **after** it (*false* by default)

### Example

~~~js {22-28}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
		{ id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
		{ id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// move "Task 1.1" to "Project 2" and place it before "Task 2.1"
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
    targetId: "2.1",
    reverse: true
});

// move "Task 1.1" to "Project 2" and place it after "Task 2.1"
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)