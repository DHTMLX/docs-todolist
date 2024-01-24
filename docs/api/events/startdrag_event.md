---
sidebar_label: start-drag
title: start-drag Event
description: You can learn about the start-drag event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# start-drag

### Description

@short: Fires when the user starts to drag the tasks

### Usage

~~~js
"start-drag":({
    start: string | number,
    mode: "move" | "copy"
}) => void;
~~~

### Parameters

The callback of the **start-drag** event can take an object with the following parameters:

- `start` - (required) the ID of the task from which the dragging process has started
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

// subscribe to the "start-drag" event
list.api.on("start-drag", ({ start, mode }) => {
    console.log(start, mode);
});
~~~

**Change log:** Added in v1.1

**Related article:** [Drag-n-drop](guides/configuration.md#drag-n-drop)