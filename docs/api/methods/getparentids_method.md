---
sidebar_label: getParentIds()
title: getParentIds Method
description: You can learn about the getParentIds method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getParentIds()

### Description

@short: Returns the IDs of parent tasks of the specified child task


### Usage

~~~js
getParentIds({
    id: string | number
}): (string|number)[];
~~~

### Parameters

- `id` - (required) the ID of the task

### Returns

The method returns an array of parent's ID

### Example

~~~js {}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

list.getParentIds({ id: "1.1.2" }); //  ['1.1', '1']
~~~