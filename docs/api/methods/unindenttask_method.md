---
sidebar_label: unindentTask()
title: unindentTask Method
description: You can learn about the unindentTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unindentTask()

### Description

@short: Promotes the nesting level of the task to one higher level, depending on the nearby task in the data set

### Usage

~~~js
unindentTask({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of a task

### Example

~~~js {17-19,21}
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

// promote the nesting level of the task
list.unindentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

**Related article:** [Operations with tasks](guides/task_operations.md)