---
sidebar_label: Task object/Id
title: Task object/ID
description: You can learn about task object and task id in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Task object/Id

## Get a task object

Use the [`getTask()`](api/methods/gettask_method.md) method to retrieve a task object:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## Check if a task exists

Use the [`existsTask()`](api/methods/existstask_method.md) method to check whether a task exists:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

## Get child IDs

Use the [`getChildrenIds()`](api/methods/getchildrenids_method.md) method to get the IDs of a task's children:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']
~~~

When filtering is active, some tasks become hidden. Use the `filtered` parameter to control whether hidden tasks are included in the result (`filtered: false` by default):

~~~js
// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// get children including hidden tasks
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// get children excluding hidden tasks
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

Set `tree` to `false` to return only first-level children:

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

Set `hideCompleted` to `true` to exclude completed child tasks from the result:

~~~js {4,11,18,21}
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// before filtering
console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: false })); // -> ['1.1', '1.1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", tree: true, hideCompleted: true })); // ['1.1', '1.2']

// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// after filtering
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: true, hideCompleted: true })); // -> ['1.1']

console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: false})); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: true, hideCompleted: true})); // -> ['1.1', '1.2']
~~~

## Check if a task has children

Use the [`hasChildren()`](api/methods/haschildren_method.md) method to check whether a task has child tasks:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

// check whether the task has children (before filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
~~~

When filtering is active, use the `filtered` parameter to control whether hidden tasks count as children (`filtered: false` by default):

~~~js
// filter the tasks
list.setFilter({ match: "#tag3", highlight: true });

// check whether the task has children (after filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

Set `hideCompleted` to `true` to exclude completed tasks from the result:

~~~js {4,9}
const tasks = [
    { id: "1", text: "Task 1 #tag1 #tag3" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false
~~~

## Get parent IDs

Use the [`getParentIds()`](api/methods/getparentids_method.md) method to get all ancestor IDs of a task:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

## Get IDs of selected tasks

Use the [`getSelection()`](api/methods/getselection_method.md) method to get the IDs of all currently selected tasks:

~~~js
const tasks = [
    { id: "1", text: "Task 1 #tag1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { 
    tasks,
    selected: ["1.1", "1.2"]
});

list.selectTask({
    id: "1.1.1",
    join: true
});

console.log(list.getSelection( sorted: false )); // -> ["1.1", "1.2", "1.1.1"]
~~~