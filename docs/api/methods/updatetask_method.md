---
sidebar_label: updateTask()
title: updateTask Method
description: You can learn about the updateTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# updateTask()

### Description

@short: Updates configuration parameters of a task

### Usage

~~~js
updateTask({
    id: string | number,
    task: object
}): void;
~~~

### Parameters

- `id` - (required) the id of the task to be updated
- `task` - (required) an object with a hash of task's properties which need to be updated. The full list of the task parameters can be found [here](api/configs/tasks_config.md)

### Example

~~~js {17-24}
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

// update some configuration of the task
list.updateTask({ 
    id: "1.1",
    task: {
        text: "Completed task"
    }
});
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)