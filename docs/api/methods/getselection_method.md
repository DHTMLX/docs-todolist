---
sidebar_label: getSelection()
title: getSelection Method
description: You can learn about the getSelection method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getSelection()

### Description

@short: Gets an array with ID of the selected task

### Usage

~~~js
getSelection(): (string | number | null)[];
~~~

### Returns

The method returns an array with ID of the selected task

### Example

~~~js {21}
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

list.selectTask({ 
    id: "1.1",
});

// get ID of the selected task
console.log(list.getSelection()); // -> ["1.1"]
~~~

**Related article:** [Task object/Id](guides/task_object.md)