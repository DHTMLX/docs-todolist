---
sidebar_label: edit-item
title: edit-item Event
description: You can learn about the edit-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# edit-item

### Description

@short: Fires when the value of a task/project is edited via the inline editor

### Usage

~~~js
"edit-item": ({
    id: string | number,
    currentValue: string
}) => void;
~~~

### Parameters

The callback of the **edit-item** event can take an object with the following parameters:

- `id` - (required) the id of a task/project
- `currentValue` - (required) the current (but not saved) value of the task/project

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

// subscribe to the "edit-item" event
list.api.on("edit-item", ({id, currentValue}) => {
    console.log("The current value of the", id, "item is", currentValue); 
});
~~~