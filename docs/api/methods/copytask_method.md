---
sidebar_label: copyTask()
title: copyTask Method
description: You can learn about the copyTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copyTask()

### Description

@short: Copies a task into the clipboard and pastes into the specified position

:::info
The method lets you copy and paste a task or just copy it into the clipboard
 
The method copies a task together with all its children
:::

### Usage

~~~js
copyTask({
    id: string | number,
    join?: boolean, // false by default
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task
- `join` - (optional) if **true**, adds the specified task to the list of tasks to copy; child tasks are added automatically. If **false**, resets all previous copies (that is only the last specified task will be copied)

:::info
If you need to copy (and paste!) a task, pass the following parameters to the method to define a new position of the task:
:::

- `parent` - (optional) the ID of the future parent task
- `project` - (optional) the ID of the project where the task should be pasted
- `targetId` - (optional) the ID of the target task where the copied task will be pasted
- `reverse` - (optional) defines the position where the copied task will be pasted: **before** the target task (*true*) or **after** it (*false* by default)

:::tip
You can copy a task only one time during one operation
:::

### Example

~~~js {23-29} title="Example 1. Copying one task"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
		{ id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
		{ id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
		{ id: "2.1.2", text: "Task 2.1.2", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// copy "Task 1.1" to the "Project 2" and paste it before "Task 2.1.2"
list.copyTask({ 
    id: "1.1",
    project: "p_2",
    parent: "2.1",
    targetId: "2.1.2",
    reverse: true
});
~~~

~~~js title="Example 2. Copying multiple tasks"
const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1"},
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "2", text: "Task 2"},
        { id: "2.1", text: "Task 2.1", parent: "2" },
		{ id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
		{ id: "2.1.2", text: "Task 2.1.2", parent: "2.1" },
        { id: "3", text: "Task 3" },
    ],
    selected: ["2", "3"]
});

// copy selected tasks
list.eachSelected(id => {
    list.copyTask({
        id,
        join: true,
    });
}, true);

// paste copied tasks
list.pasteTask({
    targetId: "2", 
});

// unselect tasks
list.unselectTask({ id: null });
~~~

**Change log:** The `join` parameter was added in v1.1

**Related article:** [Operations with tasks](guides/task_operations.md)

