---
sidebar_label: Hiding completed tasks
title: Show/hide completed tasks
description: You can learn about how to hide or show completed tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Show/hide completed tasks

## Initial mode

The To Do List has two display modes for tasks:

- show all tasks on the page (*default*)
- hide completed tasks from the page

Initialize the To Do List with completed tasks hidden to focus only on outstanding tasks. Enable the `taskHide` setting of the `completed` parameter of the [`taskShape`](api/configs/taskshape_config.md) property. The example below hides completed tasks on initialization:

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

Switch between the two modes after initialization in two ways:

- through the **Completed tasks → Show/Hide** option of the [Toolbar menu](../../#toolbar)
- through the [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) and [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md) methods

The snippet below toggles the visibility of completed tasks:

~~~js
list.hideCompletedTasks(); 
// or
list.showCompletedTasks(); 
~~~
