---
sidebar_label: assign-user
title: assign-user Event
description: You can learn about the assign-user event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# assign-user

### Description

@short: Fires when a user is assigned to a task

### Usage

~~~js
"assign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Parameters

The callback of the **assign-user** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `userId` - (required) the id of the user assigned to the task

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

// subscribe to the "assign-user" event
list.api.on("assign-user", ({id, userId}) => {
    console.log("The", userId, "user is assigned to the", id, "task"); 
});
~~~