---
sidebar_label: Operations with tasks
title: Operations with tasks
description: descr
---

# Operations with tasks

## Adding a new task

To add a new task to the list, use the [addTask()](../../api/methods/addtask_method/) method:

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

## Deleting a task

To delete a task, use the [deleteTask()](../../api/methods/deletetask_method/) method:

~~~js
list.deleteTask({ id: "1.2" });
~~~

## Updating a task

To dynamically update parameters of a task, apply the [updateTask()](../../api/methods/updatetask_method/) method:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task",
        checked: true
    }
});
~~~

## Moving a task

To move a task to another position, use the [moveTask()](../../api/methods/movetask_method/) method:

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

## Copying/pasting a task

### Copy and paste

The quickest way to copy and paste a task is use the [copyTask()](../../api/methods/copytask_method/) method. For that, it is necessary to pass the following parameters to the method: 
- the ID of the task that you want to copy and paste
- the ID of the future project (if it exists)
- the ID of the target task where the copied task should be pasted
- another two parameters (**parent** and **reverse**) are optional

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    project: "p_2", // ID of the future project (if exists)
    parent: "2.1", // ID of the future parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // the task will be pasted before the target one
});
~~~

### Copy to the clipboard

To copy a necessary task to the clipboard without its further pasting, pass just the ID of the task to the [copyTask()](../../api/methods/copytask_method/) method:

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Paste from the clipboard

You can paste the copied task from the clipboard to the necessary place via the [pasteTask()](../../api/methods/pastetask_method/) method:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

## Selecting/unselecting a task

To select a particular task, pass the ID of the task as a parameter to the [selectTask()](../../api/methods/selecttask_method/) method:

~~~js
list.selectTask({ 
    id: "1.1",
});
~~~

:::tip
To get the ID of the currently selected task, use the [getSelectionTask()](../../api/methods/getselectiontask_method/) method
:::

To remove selection from a selected task, pass the ID of the task as a parameter to the [unselectTask()](../../api/methods/unselecttask_method/) method:

~~~js
list.unselectTask({ id: "1.1" });
~~~

## Expanding/collapsing a task

To collapse a task, use the [collapseTask()](../../api/methods/collapsetask_method/) method. The method takes the ID of the task as a parameter:

~~~js
list.collapseTask({ id: "1.1" });

~~~

To expand a collapsed task by its ID, use the [expandTask()](../../api/methods/expandtask_method/) method:

~~~js
list.expandTask({ id: "1.1" });
~~~

## Marking a task complete/incomplete

You may mark the necessary task as complete/incomplete via the corresponding [checkTask()](../../api/methods/checktask_method/) and [uncheckTask()](../../api/methods/unchecktask_method/) methods

~~~js
// marks the task as complete in the "auto" mode
list.checkTask({ 
    id: "1.1.1",
    manual: false
});

// marks the task as incomplete in the "auto" mode
list.uncheckTask({ 
    id: "1.1.1",
    manual: false
});
~~~

If you need to check/uncheck only the specified task, enable the "manual" mode (*manual:true*). For more details on each mode, check the **behavior** parameter of the [taskShape](api/configs/taskshape_config.md) property

## Changing the indent level of a task

To change the nesting level a task dynamically, use the following two methods:

- [indentTask()](../../api/methods/indenttask_method/) - to demote the nesting level of a task to one lower level

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

- [unindentTask()](../../api/methods/unindenttask_method/) - to promote the nesting level of the task to one higher level

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

You can find the tasks that match the specified criteria with the help of the [setFilter()](../../api/methods/setfilter_method/) method. The method supports the *strict* mode of filtering that allows you to filter tasks by the exact match.

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