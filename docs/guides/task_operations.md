---
sidebar_label: Operations with tasks
title: Operations with tasks
description: You can learn about operations with tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Operations with tasks

## Add a new task

To add a new task to the list, use the [`addTask()`](/api/methods/addtask_method/) method:

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

Use the [`copyTask()`](/api/methods/copytask_method/) method to copy and paste a task. Pass the following parameters to the method:

- the ID of the task to copy and paste
- the ID of the target project (if it exists)
- the ID of the target task where the copied task is pasted
- other parameters are optional

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // resets copies of other tasks and copies only this task
    project: "p_2", // ID of the target project (if exists)
    parent: "2.1", // ID of the target parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // the task is pasted before the target one
});
~~~

### Copy to the clipboard

To copy a task to the clipboard without pasting, pass the task ID to the [`copyTask()`](/api/methods/copytask_method/) method:

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Save IDs of other copies

:::info
To copy a task and keep other previously copied tasks, pass `join: true` to the [`copyTask()`](/api/methods/copytask_method/) method. If you do not pass this parameter, only the specified task is copied and earlier copies are reset.
:::

### Paste from the clipboard

Paste the copied task from the clipboard with the [`pasteTask()`](/api/methods/pastetask_method/) method:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

## Update a task

To update parameters of a task, use the [`updateTask()`](/api/methods/updatetask_method/) method:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## Move a task

To move a task to another position, use the [`moveTask()`](/api/methods/movetask_method/) method:

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project:"p_2", // ID of the target project (if exists)
    parent: "2", // ID of the target parent
    targetId: "2.1", // ID of the target task
    reverse: true // the task is placed before the target one
});
~~~

:::note
A parent task moves together with its subtasks.
:::

## Delete a task

To delete a task, use the [`deleteTask()`](/api/methods/deletetask_method/) method:

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
The method removes the task with all its child tasks.
:::

## Expand and collapse tasks

To collapse a task, use the [`collapseTask()`](/api/methods/collapsetask_method/) method. The method takes the ID of the task as a parameter:

~~~js
list.collapseTask({ id: "1.1" });

~~~

To expand a collapsed task by its ID, use the [`expandTask()`](/api/methods/expandtask_method/) method:

~~~js
list.expandTask({ id: "1.1" });
~~~

## Mark a task complete or incomplete

Mark a task complete or incomplete with the [`checkTask()`](/api/methods/checktask_method/) and [`uncheckTask()`](/api/methods/unchecktask_method/) methods:

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

When `manual: false` is set, the result depends on the `behavior` attribute of the `completed` parameter in [`taskShape`](/api/configs/taskshape_config/).

If `taskShape` uses the `"auto"` mode but you need to check or uncheck the task manually, set the `manual` parameter of [`checkTask()`](/api/methods/checktask_method/) or [`uncheckTask()`](/api/methods/unchecktask_method/) to `true`:

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

To change the nesting level of a task, use the following methods:

- [`indentTask()`](/api/methods/indenttask_method/) — demote a task's nesting level by one

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

- [`unindentTask()`](/api/methods/unindenttask_method/) — promote a task's nesting level by one

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
The result depends on the structure of the list.
:::

## Filter tasks

Use the [`setFilter()`](/api/methods/setfilter_method/) method to find tasks that match specified criteria. The method supports the `strict` mode of filtering to match tasks by exact value.

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
