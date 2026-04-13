---
sidebar_label: Multiple select and bulk operations
title: Multiple select and bulk operations
description: You can learn about selection of multiple tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Multiple select and bulk operations

The To Do List library allows you to select multiple tasks and manage them at once.

![Multiselection](/assets/multiselection.png)

:::info
Learn how to [select](../../#selecting-tasks) and [manage multiple tasks](../../#managing-multiple-tasks) via the UI.
:::

## Set initially selected tasks

Use the [`selected`](/api/configs/selected_config/) configuration property to specify tasks that are selected on initialization:

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

Use the [`selectTask()`](/api/methods/selecttask_method/) method to select tasks after initialization. The method takes two parameters:

- `id` — ID of the task to select
- `join` — if `true`, adds the task to the current selection without resetting previously selected tasks

### Select one task

By default, `join` is `false`. The method selects only the specified task and clears the previous selection.

The following code snippet selects a single task, clearing the previous selection:

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

To select multiple tasks, set `join` to `true`. The `selectTask()` method adds the task to the current selection without resetting previously selected tasks.

The following code snippet uses `selectTask()` with `join: true` to select multiple tasks at once:

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

The following code snippet adds one more task to the current selection:

~~~js {3}
console.log(list.getSelection()) // ["1.1", "1.2", "2.2"]

list.selectTask({ id: "2.1", join: true });

console.log(list.getSelection()) // ["1.1", "1.2", "2.2", "2.1"]
~~~

## Get all selected tasks

To get all tasks that are currently selected, use the [`getSelection()`](/api/methods/getselection_method/) method:

~~~js
// sorted - disable;
list.getSelection({ sorted: false }); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - enable;
list.getSelection({ sorted: true }); // ["1.1", "1.2", "2.1", "2.2"]
~~~

Enable `sorted` to get IDs in the order they appear in the list.

## Manage selected tasks

Apply bulk operations to all selected tasks at once.

Use the [`eachSelected()`](/api/methods/eachselected_method/) method to iterate over all selected tasks. The `sorted` and `reversed` parameters control the sort order and iteration direction.

For example, the following code snippet deletes all selected tasks:

~~~js
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

Check the full list of available operations you can perform over multiple tasks [below](#list-of-available-operations).

### List of available operations

Use the following methods to perform bulk operations on selected tasks:

- [`copyTask()`](/api/methods/copytask_method/) — copy selected tasks
- [`pasteTask()`](/api/methods/pastetask_method/) — paste copied tasks
- [`moveTask()`](/api/methods/movetask_method/) — move selected tasks
- [`deleteTask()`](/api/methods/deletetask_method/) — delete selected tasks
- [`checkTask()`](/api/methods/checktask_method/), [`uncheckTask()`](/api/methods/unchecktask_method/) — mark selected tasks complete or incomplete
- [`indentTask()`](/api/methods/indenttask_method/), [`unindentTask()`](/api/methods/unindenttask_method/) — change the nesting level of selected tasks

## Reset selection

### Unselect one task

To unselect a specific task, pass the task ID to the [`unselectTask()`](/api/methods/unselecttask_method/) method:

~~~js
list.unselectTask({ id: "1.1" });
~~~

### Unselect all tasks

To unselect all selected tasks, pass `id: null` to [`unselectTask()`](/api/methods/unselecttask_method/):

~~~js
list.unselectTask({ id: null });
~~~

## React to selection changes

To Do List fires events when you select or unselect tasks. Use these events to react to changes.

- [`select-task`](/api/events/selecttask_event/) — fires when a task is selected
- [`unselect-task`](/api/events/unselecttask_event/) — fires when a task is unselected

The following code snippet handles the `select-task` event:

~~~js
list.api.on("select-task", ({ id, join }) => {
    console.log("Selected task:", id);
});
~~~
