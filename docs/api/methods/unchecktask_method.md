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
- `manual` - (optional) if `true`, marks the task in the "manual" mode. If `false`, the result of applying the method depends on the value which is specified for the **behavior** attribute of the **completed** parameter of the [taskShape](api/configs/taskshape_config.md) property

### Example

~~~js {22-25} title="Example 1. Unchecking one task"
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

// mark the task as completed
list.checkTask({ 
    id: "1.1.1", 
});

// mark the specified task as uncompleted
list.uncheckTask({ 
    id: "1.1.1",
    manual: true // 'true' - ignores the value of the "behavior" attribute of the "completed" parameter of the "taskShape" property
});
~~~

~~~js title="Example 2. Unchecking multiple tasks"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
		{ id: "1.1", text: "Task 1.1", parent: "1", checked: true },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1", checked: true },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
		{ id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
		{ id: "2.2", text: "Task 2.2", parent: "2", checked: true },
    ],
    selected: ["1.1", "2.2"],
});

// uncheck selected tasks
list.eachSelected(id => {
    list.uncheckTask({ id });
}, true);
~~~