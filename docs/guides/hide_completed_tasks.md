---
sidebar_label: Hiding completed tasks
title: Show/hide completed tasks
description: You can learn about how to hide or show completed tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Show/hide completed tasks

## Set the initial mode

To Do List supports two display modes:

- all tasks are visible (default)
- completed tasks are hidden

Initialize To Do List in the hidden mode to focus on incomplete tasks. Enable the `taskHide` setting in the `completed` parameter of [`taskShape`](api/configs/taskshape_config.md):

~~~js {6}
const list = new ToDo("#root", {
    tasks,
    taskShape: {
        completed: {
            behavior: "manual",
            taskHide: true
        }
    }
});
~~~

## Switch between modes

Switch between the two modes at any time after initialization in two ways:

- via the **Completed tasks → Show/Hide** option of the [Toolbar menu](../../#toolbar)

- via the [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) and [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md) methods:

~~~js
list.hideCompletedTasks();
// or
list.showCompletedTasks();
~~~