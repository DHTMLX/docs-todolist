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
- `manual` - (optional) if `true`, marks the task in the "manual" mode. If `false`, the result of applying the method depends on the value which is specified for the **behavior** attribute of the **selectable** parameter of the [taskShape](api/configs/taskshape_config.md) property

### Example

~~~js {16-19,21-24}
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

list.checkTask({ 
    id: "1.1.1",
    manual: true // mark the specified task as completed in the "manual" mode
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)