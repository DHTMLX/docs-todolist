---
sidebar_label: deleteTask()
title: deleteTask Method
description: You can learn about the deleteTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# deleteTask()

### Description

@short: Removes the specified task from the datastore 

### Usage

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the ID of the task to be removed

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

// delete the task
list.deleteTask({ 
    id: "1.2",
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)