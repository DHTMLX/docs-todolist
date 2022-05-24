---
sidebar_label: unassignUser()
title: unassignUser Method
description: You can learn about the unassignUser method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unassignUser()

### Description

@short: Unassigns a user from the specified task

### Usage

~~~js
unassignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of a task
- `userId` - (required) the id of the user which needs to be unassigned from the task

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
	projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.unassignUser({
	id: "2",
    userId: "user_1"
});
~~~