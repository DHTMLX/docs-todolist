---
sidebar_label: unselectTask()
title: unselectTask Method
description: You can learn about the unselectTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unselectTask()

### Description

@short: Unselects a task(s)

### Usage

~~~js
unselectTask({
    id: string | number | null
}): void;
~~~

### Parameters

- `id` - (required) the id of the task to be unselected

:::info
Passing `id: null` to the method unselects all selected tasks and invokes the [`unselect-task`](api/events/unselecttask_event.md) event for each of them
:::


### Example

~~~js {17,20}
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

// select a task
list.selectTask({ id: "1.1"});

// unselect the selected task
list.unselectTask({ id: "1.1" });
~~~

**Change log:** The ability to pass `id: null` to the method was added in v1.1

**Related article:** [Multiple select and bulk operations](guides/multiselection.md)