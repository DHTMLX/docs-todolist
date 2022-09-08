---
sidebar_label: hide-completed-tasks
title: hide-completed-tasks Event
description: You can learn about the hide-completed-tasks event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# hide-completed-tasks

### Description

@short: Fires when To Do List is switched to the mode of hiding completed tasks

### Usage

~~~js
"hide-completed-tasks": () => void;
~~~

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

// subscribe to the "hide-completed-tasks" event
list.api.on("hide-completed-tasks", () => {
    console.log("The mode of hiding of completed tasks is enabled"); 
});
~~~

**Change log:** Added in v1.1

**Related article:**

