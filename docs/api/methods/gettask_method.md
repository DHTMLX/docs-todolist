---
sidebar_label: getTask()
title: getTask Method
description: You can learn about the getTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getTask()

### Description

@short: Gets an object of the task by its ID

### Usage

~~~js
getTask({ id: string | number }): object;
~~~

### Parameters

- `id` - (required) the ID of the task

### Returns

The method returns an object with data of the task

### Example

~~~js {19}
const { ToDo, Toolbar } = todo;
const { projects, users } = getData();

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// get the data object of the task
list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~