---
sidebar_label: Hiding completed tasks
title: Show/hide completed tasks
description: You can learn about how to hide or show completed tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Show/hide completed tasks

## Initial mode

The To Do List has two display modes for tasks:

- show all tasks (*default*)
- hide completed tasks

Hide completed tasks on startup so users focus on outstanding ones. Set `taskShape.completed.taskHide` to `true`. See the [`taskShape`](api/configs/taskshape_config.md) reference for details. The example below hides completed tasks on initialization:

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

## Switch between modes {#switching-between-modes}

After initialization, switch between modes in one of two ways:

- through the **Completed tasks → Show/Hide** option of the [Toolbar menu](../../#toolbar)
- through the [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) and [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md) methods

The snippet below shows how to hide or show completed tasks at runtime:

~~~js
list.hideCompletedTasks();
// or
list.showCompletedTasks();
~~~
