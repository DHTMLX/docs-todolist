---
sidebar_label: Hide completed tasks
title: Show/hide completed tasks
description: You can learn about how to hide or show completed tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Show/hide completed tasks

## Set the initial mode

To Do List supports two display modes:

- all tasks are visible (default)
- completed tasks are hidden

To initialize To Do List with completed tasks hidden, set `taskHide` to `true` in the `completed` parameter of [`taskShape`](/api/configs/taskshape_config/):

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

Switch between modes after initialization in two ways:

- Select **Completed tasks → Show/Hide** in the [Toolbar menu](../../#toolbar).
- Use the [`hideCompletedTasks()`](/api/methods/hidecompletedtasks_method/) and [`showCompletedTasks()`](/api/methods/showcompletedtasks_method/) methods to switch programmatically.

The following code snippet demonstrates switching modes programmatically:

~~~js
list.hideCompletedTasks();
// or
list.showCompletedTasks();
~~~

## React to mode changes

Use the `hide-completed-tasks` and `show-completed-tasks` events to track when the display mode changes:

~~~js
list.api.on("hide-completed-tasks", () => {
    console.log("Completed tasks are now hidden");
});

list.api.on("show-completed-tasks", () => {
    console.log("Completed tasks are now visible");
});
~~~
