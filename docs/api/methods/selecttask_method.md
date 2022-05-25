---
sidebar_label: selectTask()
title: selectTask Method
description: You can learn about the selectTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# selectTask()

### Description

@short: Selects the specified task by its ID

### Usage

~~~js
selectTask({
    id: string | number | null
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task

### Example

~~~js {17-19}
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

// select the task
list.selectTask({ 
    id: "1.1",
});
~~~