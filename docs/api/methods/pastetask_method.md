---
sidebar_label: pasteTask()
title: pasteTask Method
description: You can learn about the pasteTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# pasteTask()

### Description

@short: Pastes the copied task from the clipboard into the specified position

### Usage

~~~js
pasteTask({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameters

- `parent` - (optional) the ID of the future parent task
- `project` - (optional) the ID of the project where the task should be pasted
- `targetId` - (optional) the ID of the target task where the copied task should be pasted
- `reverse` - (optional) defines the position where the copied task will be pasted: **before** the target task (*true*) or **after** it (*false* by default)

### Example

~~~js {17-19,22-25}
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

// copy "Task 1.1" into clipboard
list.copyTask({ 
    id: "1.1",
});

// paste the copied task after "Task 1.2"
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

**Related API:** [copyTask()](api/methods/copytask_method.md)

**Related article:** [Operations with tasks](guides/task_operations.md)