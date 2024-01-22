---
sidebar_label: deleteTask()
title: deleteTask Method
description: You can learn about the deleteTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# deleteTask()

### Description

@short: Removes the specified task from DataStore 

:::note
The method removes the task with all its child tasks
:::

### Usage

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the ID of the task to be removed

### Example

~~~js {17-19} title="Example 1. Deleting one task"
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

~~~js title="Example 2. Deleting multiple tasks"
const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
		{ id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
		{ id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.1"],
});

// delete selected tasks
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

**Related articles:**
- [Operations with tasks](guides/task_operations.md)
- [Multiple select and bulk operations](guides/multiselection.md)