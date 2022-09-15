---
sidebar_label: drag
title: drag Event
description: You can learn about the drag event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# drag

### Description

@short: Fires when the user drags the tasks

### Usage

~~~js
"drag":({
    start: string | number,
    source: (string | number)[],
    target: string | number | null
}) => void;
~~~

### Parameters

The callback of the **drag** event can take an object with the following parameters:

- `start` - (required) the ID of the task from which the dragging process has started
- `source` - (required) an array with IDs of dragged tasks
- `target` - (required) the ID of a potential target task

:::info
To handle the inner events, you can use the [**Event Bus methods**](category/event-bus-methods.md)
:::

### Example

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
	tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// subscribe to the "drag" event
list.api.on("drag", ({start, source, target}) => {
    console.log(start, source, target);
});
~~~

**Change log:** Added in v1.1