---
sidebar_label: Multiple select and bulk operations
title: Multiple select and bulk operations
description: You can learn about selection of multiple tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Multiple select and bulk operations

The To Do List library lets you select multiple tasks and manage them at once.

![Multiselection](../assets/multiselection.png)

:::info
Learn how to [select](/#selecting-tasks) and [manage multiple tasks](/#managing-multiple-tasks) through the UI.
:::

## Initially selected tasks

To create a To Do List with initially selected tasks, use the [`selected`](api/configs/selected_config.md) configuration property. The example below preselects three tasks on initialization:

~~~js {12}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()); // ["1.1", "1.2", "2.2"]
~~~

## Select tasks

Use the [`selectTask()`](api/methods/selecttask_method.md) method to select tasks after initialization. The method takes two parameters:

- `id` — id of the task to select
- `join` — whether to add the task to the existing selection

### Select one task

By default, the `join` parameter is set to `false`. The method selects only the specified task and resets the previously selected ones.

The following code snippet replaces the current selection with a single task:

~~~js {19}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "1.2", "2.2"],
});

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ 
    id: "2.1", 
    join: false // reset selection of previously selected tasks
});

console.log(list.getSelection()) // ["2.1"]
~~~

### Select multiple tasks

To select multiple tasks, set the `join` parameter to `true`. The `selectTask()` method then adds the specified task to the current selection.

The example below selects several tasks in a loop:

~~~js {14-18}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ]
});

const selected = ["1.1", "1.2", "2.2"];

for (id of selected) {
    list.selectTask({ id, join: true });
}

console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]
~~~

The snippet below adds one more task to the existing selection:

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## Get all selected tasks

To get the ids of all currently selected tasks, use the [`getSelection()`](api/methods/getselection_method.md) method. The example below shows the difference between the unsorted and sorted output:

~~~js
// sorted - disable
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - enable
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

Enable the `sorted` parameter to get IDs of the selected tasks in the order they appear on screen.

## Manage selected tasks

After selecting multiple tasks, apply operations to all of them at once.

The library provides the [`eachSelected()`](api/methods/eachselected_method.md) method to iterate over all selected tasks. The method takes additional parameters — `sorted` and `reversed` — that control sorting and iteration direction.

The example below deletes all selected tasks:

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

### List of available operations

You can perform the following bulk operations over multiple selected tasks through API methods:

- [`copyTask()`](api/methods/copytask_method.md) — copy tasks
- [`pasteTask()`](api/methods/pastetask_method.md) — paste tasks
- [`moveTask()`](api/methods/movetask_method.md) — move tasks
- [`deleteTask()`](api/methods/deletetask_method.md) — delete tasks
- [`checkTask()`](api/methods/checktask_method.md), [`uncheckTask()`](api/methods/unchecktask_method.md) — mark tasks complete or incomplete
- [`indentTask()`](api/methods/indenttask_method.md), [`unindentTask()`](api/methods/unindenttask_method.md) — demote or promote the nesting level of tasks

## Reset selection

### Unselect one task

To remove selection from one task, pass the task id as a parameter to the [`unselectTask()`](api/methods/unselecttask_method.md) method. The snippet below unselects a single task:

~~~js
list.unselectTask({ id: "1.1" });
~~~

### Unselect all tasks

To unselect all currently selected tasks, pass `id: null` to the [`unselectTask()`](api/methods/unselecttask_method.md) method:

~~~js
list.unselectTask({ id: null });
~~~

## Keyboard shortcuts

:::info
Refer to the [**Keyboard navigation**](guides/keyboard_navigation.md) guide for more information.
:::
