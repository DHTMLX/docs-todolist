---
sidebar_label: uncheckTask()
title: uncheckTask Method
description: You can learn about the uncheckTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# uncheckTask()

### Description

@short: Marks a task as uncompleted

### Usage

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### Parameters

- `id` - (required) the id of a task
- `manual` - (optional) defines whether the task must be marked as uncompleted in the "manual" or "auto" mode. See the **behavior** parameter of the [taskShape](api/configs/taskshape_config.md) property

~~~js {}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});


list.checkTask({ 
    id: "1.1.2", // mark the task and its parent as completed
});


list.uncheckTask({ 
    id: "1.1.2",
    manual: true // mark only the specified task as uncompleted
});

list.uncheckTask({ 
    id: "1.1.2",
    manual: false // or mark the task and its parent as uncompleted
});
~~~