---
sidebar_label: show-completed-tasks
title: show-completed-tasks Event
description: You can learn about the show-completed-tasks event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# show-completed-tasks

### Description

@short: Fires when To Do List is switched to the mode of showing completed tasks

### Usage

~~~js
"show-completed-tasks": () => void;
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

// subscribe to the "show-completed-tasks" event
list.api.on("show-completed-tasks", () => {
    console.log("The mode of showing of completed tasks is enabled"); 
});
~~~

**Change log:** Added in v1.1

**Related article:** [Show/hide completed tasks](guides/hide_completed_tasks.md)