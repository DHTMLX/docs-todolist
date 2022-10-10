---
sidebar_label: checkTask()
title: checkTask Method
description: You can learn about the checkTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# checkTask()

### Description

@short: Marks a task as complete

### Usage

~~~js
checkTask({
    id: string | number,
    manual?: boolean // false by default
}): void;
~~~

### Parameters

- `id` - (required) the id of a task
- `manual` - (optional) if `true`, marks the task in the "manual" mode. If `false`, the result of applying the method depends on the value which is specified for the **behavior** attribute of the **completed** parameter of the [taskShape](api/configs/taskshape_config.md) property

### Example

~~~js {17-20} title="Example 1. Checking one task"
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

// mark the specified task as completed
list.checkTask({ 
    id: "1.1.1",
    manual: true  // 'true' - ignores the value of the "behavior" attribute of the "completed" parameter of the "taskShape" property
});
~~~

~~~js title="Example 2. Checking multiple tasks"
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
    selected: ["1.1", "2.2"],
});

// check selected tasks
list.eachSelected(id => {
    list.checkTask({ id });
}, true);
~~~

**Related articles:**
- [Operations with tasks](guides/task_operations.md#selectingunselecting-a-task)
- [Multiple select and bulk operations](guides/multiselection.md)