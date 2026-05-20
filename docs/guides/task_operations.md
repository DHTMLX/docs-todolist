---
sidebar_label: Operations with tasks
title: Operations with tasks
description: You can learn about operations with tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Operations with tasks

## Add a new task {#adding-a-new-task}

To add a new task to the list, use the [`addTask()`](api/methods/addtask_method.md) method. The example below adds a task under a specified parent:

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

## Copy and paste a task {#copyingpasting-a-task}

### Copy and paste

The quickest way to copy and paste a task is the [`copyTask()`](api/methods/copytask_method.md) method. Pass the following parameters:

- `id` — id of the task to copy and paste
- `project` — id of the target project, if it exists
- `targetId` — id of the target task where the copied task is pasted
- other parameters are optional

The snippet below copies a task into a new project:

~~~js
list.copyTask({ 
    id: "1.1", // ID of the task to copy
    join: false, // resets copies of other tasks and copies only this task
    project: "p_2", // ID of the future project (if exists)
    parent: "2.1", // ID of the future parent
    targetId: "2.1.2", // ID of the target task
    reverse: true // paste the task before the target one
});
~~~

### Copy to the clipboard

To copy a task to the clipboard without pasting it, pass the task id to the [`copyTask()`](api/methods/copytask_method.md) method:

~~~js
list.copyTask({ 
    id: "1.1"
});
~~~

### Save ids of other copies

:::info
To copy a task and keep previously copied tasks, pass `join: true` to the [`copyTask()`](api/methods/copytask_method.md) method. Otherwise, the method copies only the specified task and resets all earlier copies.
:::

### Paste from the clipboard

Paste a copied task from the clipboard to the required place through the [`pasteTask()`](api/methods/pastetask_method.md) method. The snippet below pastes the copied task next to a target task:

~~~js
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

:::info
The [`clone-task`](api/events/clonetask_event.md) event fires after [`paste-task`](api/events/pastetask_event.md) when the clipboard content lands at the target position. The callback receives the parent id, the project id, the target id, and a `batch` array with the cloned task objects.
:::

## Update a task {#updating-a-task}

To update parameters of a task dynamically, use the [`updateTask()`](api/methods/updatetask_method.md) method. The example below changes the text of a task:

~~~js
list.updateTask({ 
    id: "1.1.1",
    task: {
        text: "Completed task"
    }
});
~~~

## Move a task {#moving-a-task}

To move a task to another position, use the [`moveTask()`](api/methods/movetask_method.md) method. The snippet below moves a task into another project:

~~~js
list.moveTask({ 
    id: "1.1", // ID of the task to move
    project:"p_2", // ID of the future project (if exists)
    parent: "2", // ID of the future parent
    targetId: "2.1", // ID of the target task
    reverse: true // place the task before the target one
});
~~~

:::note
A parent task moves together with its subtasks.
:::

## Delete a task {#deleting-a-task}

To delete a task, use the [`deleteTask()`](api/methods/deletetask_method.md) method:

~~~js
list.deleteTask({ id: "1.2" });
~~~

:::note
The method removes the task with all its child tasks.
:::

## Expand and collapse a task {#expandingcollapsing-a-task}

To collapse a task, use the [`collapseTask()`](api/methods/collapsetask_method.md) method. The method takes the task id as a parameter:

~~~js
list.collapseTask({ id: "1.1" });

~~~

To expand a collapsed task by its id, use the [`expandTask()`](api/methods/expandtask_method.md) method:

~~~js
list.expandTask({ id: "1.1" });
~~~

## Context menu

Open or close the context menu of a task, user, or project through API methods.

To open the menu at specific coordinates, use the [`openMenu()`](api/methods/openmenu_method.md) method. The method takes the item id, an optional menu type (`"task"` by default, `"user"`, or `"project"`), and the x/y coordinates:

~~~js
list.openMenu({
    id: "1.1",
    type: "task",
    coords: { x: 200, y: 150 }
});
~~~

To close the menu, use the [`closeMenu()`](api/methods/closemenu_method.md) method. Pass the item id to close a specific menu, or call the method without parameters to close the currently opened one:

~~~js
list.closeMenu({ id: "1.1" });
// or
list.closeMenu({});
~~~

Track menu activity with three events:

- [`open-menu`](api/events/openmenu_event.md) — fires when the menu opens; provides the item id, the menu type, and optionally an array of task ids for batch operations
- [`close-menu`](api/events/closemenu_event.md) — fires when the menu closes; provides the item id and the menu type
- [`click-menu-item`](api/events/clickmenuitem_event.md) — fires when the user clicks a menu item; provides the item id, the clicked action, and the optional submenu item id

The example below logs menu lifecycle events:

~~~js
list.api.on("open-menu", ({ id, type, source }) => {
    console.log("menu opened for", id, "type", type, "source", source);
});

list.api.on("click-menu-item", ({ id, action, extra }) => {
    console.log("menu item clicked:", action, extra, "for", id);
});

list.api.on("close-menu", ({ id, type }) => {
    console.log("menu closed for", id, "type", type);
});
~~~

*Change log:* The `open-menu` and `close-menu` events were added in v1.1.

## Mark a task complete or incomplete {#marking-a-task-completeincomplete}

Mark a task as complete or incomplete through the [`checkTask()`](api/methods/checktask_method.md) and [`uncheckTask()`](api/methods/unchecktask_method.md) methods. The example below shows both calls:

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

When `manual: false`, the result depends on `taskShape.completed.behavior` (see the [`taskShape`](api/configs/taskshape_config.md) reference for details).

If `taskShape.completed.behavior` is `"auto"` but you need a one-off manual check, set `manual: true`:

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

## Change the indent level of a task {#changing-the-indent-level-of-a-task}

Change the nesting level of a task dynamically through the following methods:

- [`indentTask()`](api/methods/indenttask_method.md) — demote the nesting level of a task by one
- [`unindentTask()`](api/methods/unindenttask_method.md) — promote the nesting level of a task by one

The snippet below demotes a task one level deeper:

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

The example below promotes a task one level up:

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
If the task is already at the top level, `unindentTask()` does nothing.
:::

## Filter tasks

Find tasks that match the specified criteria with the [`setFilter()`](api/methods/setfilter_method.md) method. The method supports the *strict* mode for exact-match filtering. The snippet below filters tasks by a hashtag:

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

To reset filtering, pass `match: null`:

~~~js
// reset filtering
list.setFilter({ match: null });
~~~

## Undo and redo

The To Do List tracks the history of changes by default. To revert the last operation, call the [`undo()`](api/methods/undo_method.md) method. To restore an operation reverted by `undo()`, call the [`redo()`](api/methods/redo_method.md) method:

~~~js
list.addTask({ task: { text: "New task" } });

list.undo(); // revert the addition
list.redo(); // restore it
~~~

The history scope and depth depend on the [`history`](api/configs/history_config.md) configuration property. See [Configuration → History of changes](guides/configuration.md#history-of-changes) for details.

*Change log:* The `undo()` and `redo()` methods were added in v1.3.
