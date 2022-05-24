---
sidebar_label: existsTask()
title: existsTask Method
description: You can learn about the existsTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# existsTask()

### Description

@short: Checks whether the specified task exists in the component


### Usage

~~~js
existsTask({ id: string | number }): boolean;
~~~

### Parameters

- `id` - (required) the ID of the task

### Returns

The method returns `true` if the task exists; otherwise, `false`

### Example

~~~js {18-19}
const { ToDo, Toolbar } = todo;
const { users, projects } = getData();

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

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~