---
sidebar_label: Operations with tasks
title: Operations with tasks
description: You can learn about operations with tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Operations with tasks

## Adding a new task

To add a new task to the list, use the [`addTask()`](../../api/methods/addtask_method/) method:

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

## Copying/pasting a task

### Copy and paste

The quickest way to copy and paste a task is use the [`copyTask()`](../../api/methods/copytask_method/) method. For that, it is necessary to pass the following parameters to the method: 
- the ID of the task that you want to copy and paste
- the ID of the future project (if it exists)
- the ID of the target task where the copied task should be pasted
- other parameters are optional

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // resets copies of other tasks and copies only this task
    project: "p_2", // ID of the future project (if exists)
    parent: "2.1", // ID of the future parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // the task will be pasted before the target one
});
~~~

### Copy to the clipboard

To copy a necessary task to the clipboard without its further pasting, pass the ID of the task to the [`copyTask()`](../../api/methods/copytask_method/) method:

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Saving IDs of other copies

:::info
If you want to copy the task and save other previously copied tasks, you need to pass the **join: true** parameter to the [`copyTask()`](../../api/methods/copytask_method/) method. Otherwise, only the specified task will be copied, all others copies created earlier will be reset.
:::

### Paste from the clipboard

You can paste the copied task from the clipboard to the necessary place via the [`pasteTask()`](../../api/methods/pastetask_method/) method:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

## Updating a task

To dynamically update parameters of a task, apply the [`updateTask()`](../../api/methods/updatetask_method/) method:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## Moving a task

To move a task to another position, use the [`moveTask()`](../../api/methods/movetask_method/) method:

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project:"p_2", // ID of the future project (if exists)
    parent: "2", // ID of the future parent
    targetId: "2.1", // ID of the target task
    reverse: true // the task will be placed before the target one
});
~~~

:::note
If you move a parent task, it will be moved together with its subtasks.
:::

## Deleting a task

To delete a task, use the [`deleteTask()`](../../api/methods/deletetask_method/) method:

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
The method removes the task with all its child tasks
:::

## Expanding/collapsing a task

To collapse a task, use the [`collapseTask()`](../../api/methods/collapsetask_method/) method. The method takes the ID of the task as a parameter:

~~~js
list.collapseTask({ id: "1.1" });

~~~

To expand a collapsed task by its ID, use the [`expandTask()`](../../api/methods/expandtask_method/) method:

~~~js
list.expandTask({ id: "1.1" });
~~~

## Marking a task complete/incomplete

You may mark the necessary task as complete/incomplete via the corresponding [`checkTask()`](../../api/methods/checktask_method/) and [`uncheckTask()`](../../api/methods/unchecktask_method/) methods:

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

When `manual: false` is set, the result of applying the method depends on the value which is specified for the **behavior** attribute of the **completed** parameter of the [`taskShape`](api/configs/taskshape_config.md) property. 

If the "auto" mode is specified via the **taskShape** property but you need to check/uncheck the task in the "manual" mode, set the **manual** parameter of the [`checkTask()`](../../api/methods/checktask_method/) or [`uncheckTask()`](../../api/methods/unchecktask_method/) method to *true*:

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

## Changing the indent level of a task

To change the nesting level of a task dynamically, use the following two methods:

- [`indentTask()`](../../api/methods/indenttask_method/) - to demote the nesting level of a task to one lower level

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

- [`unindentTask()`](../../api/methods/unindenttask_method/) - to promote the nesting level of the task to one higher level

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
The result of applying the methods depends on the structure of the list
:::

## Filtering tasks

You can find the tasks that match the specified criteria with the help of the [`setFilter()`](../../api/methods/setfilter_method/) method. The method supports the *strict* mode of filtering that allows you to filter tasks by the exact match.

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