---
sidebar_label: Assigning users to tasks
title: Assigning users to tasks
description: descr
---

# Assigning users to tasks

The list of users is specified via the [assign](../../api/configs/assign_config/) configuration property of To do list.

~~~js
~~~

To assign the users to necessary tasks, pass the id(s) of the users to the **assigned** parameter of the related [data](../../api/configs/data_config/) object:

~~~js
~~~

As a result, the related tasks will display avatars of the assigned users.

[image]

To view the list of users assigned to a task, click on the users avatars. To close the opened list, click outside it.

:::info
The [itemShape](../../api/configs/itemshape_config/)  property lets you customize the appearance of the avatars.
:::

## Opening/closing the list of assigned users

To open/close the list of assigned users dynamically, call the corresponding [openUserList](../../api/methods/openuserlist_method/) and [closeUserList](../../api/methods/closeuserlist_method/) methods:

~~~js
~~~

## Assigning/unassigning users

There are two ways to assign/unassign users to a task:

- via the **Assign to** option of the task menu
- via the corresponding [assignUser](../../api/methods/assignuser_method/) and [unassignUser](../../api/methods/unassignuser_method/) methods, for example:

~~~js
~~~
