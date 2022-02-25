---
sidebar_label: Task operations
title: Task operations
description: descr
---

# Task operations

## Adding a new task

To add a new task to the list, use the [addItem()] method:

~~~js
~~~

## Deleting a task

To delete a task, use the [deleteItem()] method:

~~~js
~~~

## Updating task's properties

To dynamically update properties of a task object, apply the [updateItem()] method:

~~~js
~~~

## Moving a task

To move a task to another position, use the [moveItem()] method:

~~~js
~~~

:::note
If you move a parent task, it will be moved together with its subtasks.
:::

## Copying/pasting a task

### Copy and paste

The quickest way to copy and paste a task is use the [copyItem()] method. For that, it is necessary to pass the following parameters to the method: 
- the ID of the task that you want to copy and paste
- the ID of the target task where the copied task should be pasted
- another two parameters (**parent** and **reverse**) are optional

~~~js
~~~

### Copy to the clipboard

To copy a necessary task to the clipboard without its further pasting, pass just the ID of the task to the [copyItem()] method:

~~~js
~~~

### Paste from the clipboard

The copied task can be pasted from the clipboard into a new position via the [pasteItem()] method:

~~~js
~~~

## Selecting/unselecting a task

To select a particular task, pass the ID of the task as a parameter to the [selectItem()] method:

~~~js
~~~

To remove selection from a selected task, pass the ID of the task as a parameter to the [unselectItem()] method:

~~~js
~~~


To remove selection from all previously selected tasks, use the [unselectItem()] method without parameters:

~~~js
~~~

## Expanding/collapsing a task

To expand a collapsed task by its ID use the [expandItem()] method:

~~~js
~~~

To collapse a task, use the [collapseItem()] method. The method takes the ID of the task as a parameter:

~~~js
~~~

## Marking a task complete/incomplete

You may mark the necessary task as complete/uncomplete via the corresponding [checkItem()] and [uncheckItem()] methods. Both methods take one parameter - the ID of a task:

~~~js
// marks the task as complete

// marks the task as uncomplete

~~~

## Indenting/outdenting a task

To change the nesting level of a task dynamically, use the following two methods:
- [indentItem()] - to demote the nesting level of a task to one lower level

~~~js
~~~

- [unindentItem()] - to promote the nesting level of the item to one higher level

~~~js
~~~

:::info
The result of applying the methods depends on the structure of the list.
:::