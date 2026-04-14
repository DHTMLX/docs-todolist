---
sidebar_label: Multiple select and bulk operations
title: Multiple select and bulk operations
description: You can learn about selection of multiple tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Multiple select and bulk operations

To Do List lets you select multiple tasks and manage them at once. This guide covers how to initialize To Do List with pre-selected tasks, select tasks after initialization, retrieve selected task IDs, perform bulk operations, and reset selection.

![Multiselection](../assets/multiselection.png)

:::info
Learn how to [select](../../#selecting-tasks) and [manage multiple tasks](../../#managing-multiple-tasks) via UI
:::

## Set initially selected tasks

Use the [`selected`](api/configs/selected_config.md) configuration property to initialize To Do List with pre-selected tasks:

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

- `id` — the ID of the task to select
- `join` — defines whether To Do List adds the task to the existing selection or replaces it

### Select one task

By default, `join` is `false`. The method selects only the specified task and clears the previous selection.

The following code snippet demonstrates single-task selection:

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
    join: false // resets selection of previously selected tasks
});

console.log(list.getSelection()) // ["2.1"]
~~~

### Select multiple tasks

Set `join` to `true` to add a task to the existing selection without clearing previously selected tasks.

The following code snippet selects several tasks at once:

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

The following code snippet adds one more task to an existing selection:

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## Get all selected tasks

Use the [`getSelection()`](api/methods/getselection_method.md) method to retrieve the IDs of all currently selected tasks:

~~~js
// sorted - disabled
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - enabled
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

Set `sorted` to `true` to return task IDs in the order they appear in the list.

## Manage selected tasks

Use the [`eachSelected()`](api/methods/eachselected_method.md) method to iterate over all selected tasks and apply an operation to each one. The `sorted` and `reversed` parameters control the iteration order.

The following code snippet deletes all selected tasks:

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

The following API methods support bulk operations on multiple selected tasks:

### Available bulk operations

- [`copyTask()`](../../api/methods/copytask_method/) — copy tasks
- [`pasteTask()`](../../api/methods/pastetask_method/) — paste tasks
- [`moveTask()`](../../api/methods/movetask_method/) — move tasks
- [`deleteTask()`](../../api/methods/deletetask_method/) — delete tasks
- [`checkTask()`](../../api/methods/checktask_method/), [`uncheckTask()`](../../api/methods/unchecktask_method/) — mark tasks complete or incomplete
- [`indentTask()`](../../api/methods/indenttask_method/), [`unindentTask()`](../../api/methods/unindenttask_method/) — change the nesting level of tasks

## Reset selection

### Unselect one task

To remove a task from the selection, pass the task ID to the [`unselectTask()`](../../api/methods/unselecttask_method/) method:

~~~js
list.unselectTask({ id: "1.1" });
~~~

### Unselect all tasks

To clear the entire selection, pass `id: null` to the [`unselectTask()`](../../api/methods/unselecttask_method/) method:

~~~js
list.unselectTask({ id: null });
~~~






