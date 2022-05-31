---
sidebar_label: set-project
title: set-project Event
description: You can learn about the set-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# set-project

### Description

@short: Fires when changing the active project

:::info
The event fires when you use the [setProject] method to change the currently active project
:::

### Usage

~~~js
"set-project": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **set-project** event can take an object with the following parameters:

- `id` - (required) the ID of a newly active project

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

// subscribe to the "set-project" event
list.api.on("set-project", ({id}) => {
    console.log("The active project is changed to", id);
});
~~~

**Related article:** [Operations with projects](guides/project_operations.md#changing-the-active-project)