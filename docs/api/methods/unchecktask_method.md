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

~~~js {22-25}
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