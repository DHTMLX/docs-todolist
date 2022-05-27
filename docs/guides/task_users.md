---
sidebar_label: Task users
title: Task users
description: descr
---

# Task users

The list of users is specified via the [users](../../api/configs/users_config/) configuration property of To do list.

~~~js
const users = [
    { id: "user_1", label: "John", path: "../avatar_02.jpg" },
    { id: "user_2", label: "Kate", path: "../avatar_03.jpg" },
];

const list = new ToDo("#root", { users });
~~~

To assign users to the necessary task on the initialization stage, pass the id(s) of the users to the **assigned** parameter of the related [task](../../api/configs/tasks_config/) object:

~~~js
const tasks = [
    {
        id: "2",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1", "user_2" ],
    },
    {
        id: "3",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { id: "user_1", label: "John", path: "../avatar_02.jpg" },
    { id: "user_2", label: "Kate", path: "../avatar_03.jpg" },
];

const list = new ToDo("#root", {
    tasks,
    users
});
~~~

As a result, the assigned users will be displayed to the right of the task.

```todo
[image]
```

To view the list of users assigned to a task, click on the users avatars. To close the opened list, click outside it.

## Assigning/unassigning users

There are two ways to assign/unassign users to a task after initialization of the component:

- via the **Assign to** option of the task menu
- via the corresponding [assignUser()](../../api/methods/assignuser_method/) and [unassignUser()](../../api/methods/unassignuser_method/) methods, for example:

~~~js
// assign a user to the task
list.assignUser({
    id: "3",
    userId: "user_1"
});

// unassign a user from the task
list.unassignUser({
    id: "2",
    userId: "user_1"
});
~~~