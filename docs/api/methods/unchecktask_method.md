---
sidebar_label: uncheckTask()
title: uncheckTask Method
description: You can learn about the uncheckTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# uncheckTask()

### Description

@short: Marks a task as incomplete

### Usage

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### Parameters

- `id` - (required) the id of a task
- `manual` - (optional) enables/disables the "manual" mode. If `false`, the task will be marked as uncompleted in the "auto" mode. See the **behavior** parameter of the [taskShape](api/configs/taskshape_config.md) property

### Example

~~~js {21-24,26-29}
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


list.checkTask({ 
    id: "1.1.1", // mark the task and its parent as complete
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true // mark only the specified task as incomplete
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false // or mark the task and its parent as incomplete
});
~~~