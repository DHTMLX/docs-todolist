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
    id: string | number,
    join?: boolean // false by default
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task
- `join` - (optional) if **true**, adds the specified task to the collection of selected tasks, saving the IDs of previously selected tasks 

:::info
Calling the method with `join: false` invokes the [`unselect-task`](api/events/unselecttask_event.md) event for previously selected tasks
:::

### Example

~~~js {10,17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

list.selectTask({ 
    id: "1.1.1",
    join: true
});

console.log(list.getSelection()); // -> ['1.1', '1.1.1']
~~~

**Change log:** The `join` parameter was added in v1.1

**Related article:** [Operations with tasks](guides/task_operations.md)