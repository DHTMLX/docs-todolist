---
sidebar_label: Task assignees
title: Task assignees
description: You can learn about task assignees in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Task assignees

Delegate tasks to one or several people.

## Configure task assignees

Specify the list of assignees through the [`users`](api/configs/users_config.md) configuration property of the To Do List. The example below defines four users:

~~~js
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    { id: "user_2", label: "Nadia Chasey", avatar: "../avatar_63.jpg" },
    { id: "user_3", label: "Mike Young", avatar: "../avatar_03.jpg" },
    { id: "user_4", label: "Elvira Webb", avatar: "../avatar_33.jpg" }
];

const list = new ToDo("#root", { users });
~~~

## Set assignees on initialization

To assign people to a task on the initialization stage, pass the ids of the assignees to the `assigned` parameter of the related [`task`](api/configs/tasks_config.md) object. The snippet below assigns four users to a task:

~~~js {11}
const users = [
    { id: "user_1", label: "Don Smith", avatar: "../avatar_61.jpg"},
    ...
];

const tasks = [
    {
        id: "2",
        project: "introduction",
        text: "You can assign task performers using the menu.",
        assigned: [ "user_1", "user_2", "user_3", "user_4" ],
    }
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

The assigned people appear to the right of the task.

![users](../assets/users.png)

To view the list of people assigned to a task, click on the people avatars. To close the opened list, click outside it.

## Change task assignees

Reassign or remove a task assignee after the To Do List initialization in two ways:

- through the **Assign to** option of the task menu
- through the [`assignUser()`](api/methods/assignuser_method.md) and [`unassignUser()`](api/methods/unassignuser_method.md) methods

The example below assigns a user to one task and removes a user from another:

~~~js
// assign a person to the task
list.assignUser({
    id: "3",
    userId: "user_1"
});

// unassign a person from the task
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~
