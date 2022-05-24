---
sidebar_label: assignUser()
title: assignUser Method
description: You can learn about the assignUser method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# assignUser()

### Description

@short: Assigns a user to the specified task

### Usage

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of the task
- `userId` - (required) the id of the user to be assigned to the task

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.assignUser({
	id: "2",
    userId: "user_2"
});
~~~