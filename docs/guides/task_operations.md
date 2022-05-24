---
sidebar_label: Task operations
title: Task operations
description: descr
---

# Task operations

Use task menu
Use key navigation
Call API methods that are described below

## Adding a new task

To add a new task to the list, use the [addTask()](../../api/methods/addtask_method/) method:

~~~js
~~~

## Deleting a task

To delete a task, use the [deleteTask()](../../api/methods/deletetask_method/) method:

~~~js
~~~

## Updating a task

To dynamically update parameters of a task, apply the [updateTask()](../../api/methods/updatetask_method/) method:

~~~js
~~~

## Moving a task

To move a task to another position, use the [moveTask()](../../api/methods/movetask_method/) method:

~~~js
~~~

:::note
If you move a parent task, it will be moved together with its subtasks.
:::

## Copying/pasting a task

### Copy and paste

The quickest way to copy and paste a task is use the [copyTask()](../../api/methods/copytask_method/) method. For that, it is necessary to pass the following parameters to the method: 
- the ID of the task that you want to copy and paste
- the ID of the target task where the copied task should be pasted
- another two parameters (**parent** and **reverse**) are optional

~~~js
~~~

### Copy to the clipboard

To copy a necessary task to the clipboard without its further pasting, pass just the ID of the task to the [copyTask()](../../api/methods/copytask_method/) method:

~~~js
~~~

### Paste from the clipboard

The copied task can be pasted from the clipboard into a new position via the [pasteTask()](../../api/methods/pastetask_method/) method:

~~~js
~~~

## Selecting/unselecting a task

To select a particular task, pass the ID of the task as a parameter to the [selectTask()](../../api/methods/selecttask_method/) method:

~~~js
~~~

:::tip
To get the ID of the currently selected task, use the [getSelectionTask()](../../api/methods/getselectiontask_method/) method
:::

To remove selection from a selected task, pass the ID of the task as a parameter to the [unselectTask()](../../api/methods/unselecttask_method/) method:

~~~js
~~~


To remove selection from all previously selected tasks, use the [unselectTask()](../../api/methods/unselecttask_method/) method without parameters:

~~~js
~~~

## Expanding/collapsing a task

To expand a collapsed task by its ID use the [expandTask()](../../api/methods/expandtask_method/) method:

~~~js
~~~

To collapse a task, use the [collapseTask()](../../api/methods/collapsetask_method/) method. The method takes the ID of the task as a parameter:

~~~js
~~~

## Marking a task complete/incomplete

You may mark the necessary task as complete/uncomplete via the corresponding [checkTask()](../../api/methods/checktask_method/) and [uncheckTask()](../../api/methods/unchecktask_method/) methods. Both methods take one parameter - the ID of a task:

~~~js
// marks the task as complete

// marks the task as uncomplete

~~~

## Indenting/outdenting a task

To change the nesting level of a task dynamically, use the following two methods:
- [indentTask()](../../api/methods/indenttask_method/) - to demote the nesting level of a task to one lower level

~~~js
~~~

- [unindentTask()](../../api/methods/unindenttask_method/) - to promote the nesting level of the task to one higher level

~~~js
~~~

:::info
The result of applying the methods depends on the structure of the list.
:::

## Filtering tasks

You can find the tasks that match the specified criteria with the help of the [setFilter()](../../api/methods/setfilter_method/) method. The method supports the *strict* mode of filtering that allows you to filter tasks by the exact match.

~~~js
// create To do list
const list = new ToDo("#root", {
	tasks,
	users,
	projects,
	tags,
});

// filter data by the specified rules
list.setFilter({
	match: "ran",
	highlight: true,
	strict: true
});
~~~

To reset filtering, call the method without parameters:

~~~js
// reset filtering
list.setFilter({});
~~~