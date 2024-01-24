---
sidebar_label: assignUser()
title: assignUser Method
description: You can learn about the assignUser method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# assignUser()

### Description

@short: Assigns a person to the specified task

### Usage

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### Parameters

- `id` - (required) the id of the task
- `userId` - (required) the id of the person to be assigned to the task

### Example

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// create To do list
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
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

// assign a user to the task
list.assignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**Related article:** [Task assignees](guides/task_users.md)