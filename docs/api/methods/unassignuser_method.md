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

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// create To do list
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users: [
        { "id": "user_1", "label": "John" },
        { "id": "user_2", "label": "Kate" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// unassign the user from the task
list.unassignUser({
	id: "1.1",
    userId: "user_2"
});
~~~

**Related article:** [Task users](guides/task_users.md)