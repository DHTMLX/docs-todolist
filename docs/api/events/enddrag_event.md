---
sidebar_label: end-drag
title: end-drag Event
description: You can learn about the end-drag event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# end-drag

### Description

@short: Fires when dragging of tasks has been finished

### Usage

~~~js
"end-drag":({
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null,
    mode: "move" | "copy"
}) => void;
~~~

### Parameters

The callback of the **end-drag** event can take an object with the following parameters:

- `target` - (required) the ID of the task from which the dragging process has started
- `dropPosition` - (required) the position where the dragged tasks has been dropped:
    - `top` - above the target task
    - `bottom` - below the target task
    - `in` - over the target task
- `mode` - (required) the mode of drag-n-drop:
    - `move` - the move mode
    - `copy` - the copy mode

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
list.api.on("drag", ({ target, dropPosition, mode }) => {
    console.log(target, dropPosition, mode);
});
~~~

**Change log:** Added in v1.1

**Related article:** [Drag-n-drop](guides/configuration.md#drag-n-drop)