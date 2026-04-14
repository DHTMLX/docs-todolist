---
sidebar_label: Task assignees
title: Task assignees
description: You can learn about task assignees in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Task assignees

You can delegate tasks to one or several people.

## Configure task assignees

Specify the list of assignees with the [`users`](../../api/configs/users_config/) configuration property.

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

To assign users to a task on initialization, pass the assignee IDs to the `assigned` parameter of the [`task`](../../api/configs/tasks_config/) object:

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

The assigned users appear to the right of the task.

![users](../assets/users.png)

To view the assignees of a task, click the avatars. Click outside the list to close it.

## Change task assignees

Re-assign or remove a task assignee after initialization in two ways:

- via the **Assign to** option of the task menu
- via the [`assignUser()`](../../api/methods/assignuser_method/) and [`unassignUser()`](../../api/methods/unassignuser_method/) methods, for example:

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
