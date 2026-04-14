---
sidebar_label: Operations with tasks
title: Operations with tasks
description: You can learn about operations with tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Operations with tasks

## Add a task

Use the [`addTask()`](../../api/methods/addtask_method/) method to add a task to the list:

~~~js
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

## Copy and paste a task

### Copy and paste

Use the [`copyTask()`](../../api/methods/copytask_method/) method to copy and paste a task. Pass the following parameters:

- the ID of the task to copy and paste
- the ID of the target project (if applicable)
- the ID of the target task where the copy is pasted
- other parameters are optional

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // reset other copies and copy only this task
    project: "p_2", // ID of the target project (if applicable)
    parent: "2.1", // ID of the target parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // paste the task before the target
});
~~~

### Copy to the clipboard

To copy a task to the clipboard without pasting, pass only the task ID to [`copyTask()`](../../api/methods/copytask_method/):

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Save IDs of other copies

:::info
To copy a task and preserve previously copied tasks, pass `join: true` to the [`copyTask()`](../../api/methods/copytask_method/) method. If you do not pass this parameter, only the specified task is copied and earlier copies are reset.
:::

### Paste from the clipboard

Paste the copied task to the target position with the [`pasteTask()`](../../api/methods/pastetask_method/) method:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

## Update a task

Use the [`updateTask()`](../../api/methods/updatetask_method/) method to update task parameters:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## Move a task

Use the [`moveTask()`](../../api/methods/movetask_method/) method to move a task to another position:

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project: "p_2", // ID of the target project (if applicable)
    parent: "2", // ID of the target parent
    targetId: "2.1", // ID of the target task
    reverse: true // place the task before the target
});
~~~

:::note
A parent task moves together with its subtasks.
:::

## Delete a task

Use the [`deleteTask()`](../../api/methods/deletetask_method/) method to delete a task:

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
The method removes the task together with all its child tasks.
:::

## Expand or collapse a task

Use the [`collapseTask()`](../../api/methods/collapsetask_method/) method to collapse a task:

~~~js
list.collapseTask({ id: "1.1" });
~~~

Use the [`expandTask()`](../../api/methods/expandtask_method/) method to expand a collapsed task:

~~~js
list.expandTask({ id: "1.1" });
~~~

## Mark a task complete or incomplete

Use the [`checkTask()`](../../api/methods/checktask_method/) and [`uncheckTask()`](../../api/methods/unchecktask_method/) methods to mark a task as complete or incomplete:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

With `manual: false`, the result depends on the `behavior` value in the `completed` parameter of [`taskShape`](api/configs/taskshape_config.md).

To check or uncheck a task in `"manual"` mode when `taskShape` uses `"auto"` mode, set the `manual` parameter to `true`:

~~~js
list.checkTask({ 
    id: "1.1.1",
    manual: true
});

list.uncheckTask({ 
    id: "1.1.1",
    manual: true
});
~~~

## Change the indent level of a task

Use the following methods to change the nesting level of a task:

- [`indentTask()`](../../api/methods/indenttask_method/) — demote the task one nesting level down

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.indentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

- [`unindentTask()`](../../api/methods/unindenttask_method/) — promote the task one nesting level up

~~~js
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

list.unindentTask({ id: "1.2" });

console.log(list.getParentIds({ id: "1.2" })); //  []
~~~

:::info
Results depend on the list structure.
:::

## Filter tasks

Use the [`setFilter()`](../../api/methods/setfilter_method/) method to find tasks that match specific criteria. The `strict` mode filters tasks by exact match.

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

To reset filtering, call the method without parameters:

~~~js
// reset filtering
list.setFilter({});
~~~