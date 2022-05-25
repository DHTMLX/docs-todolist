---
sidebar_label: unassign-user
title: unassign-user Event
description: You can learn about the unassign-user event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unassign-user

### Description

@short: Fires when a user is unassigned from a task

### Usage

~~~js
"unassign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Parameters

The callback of the **unassign-user** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `userId` - (required) the id of the user unassigned from the task

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

// subscribe to the "unassign-user" event
list.api.on("unassign-user", ({id, userId}) => {
    console.log("The", userId, "user is unassigned from the", id, "task");
});
~~~