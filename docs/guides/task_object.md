---
sidebar_label: Task object/Id
title: Task object/ID
description: You can learn about task object and task id in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Task object/Id

## Getting a task object

To get a task object, use the [getTask()](api/methods/gettask_method.md) method:

~~~js
const tasks = [
    { id: "1", text: "Task 1" },
    { id: "1.1", text: "Task 1.1", parent: "1" },
    { id: "1.2", text: "Task 1.2", parent: "1" },
];

const list = new ToDo("#root", { tasks });

list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

## Checking if a task exists

To check whether a task exists or not, use the [existsTask()](api/methods/existstask_method.md) method:

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

## Getting child Ids

To get the children of a task, use the [getChildrenIds()](api/methods/getchildrenids_method.md) method:

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

If you apply filtering, some tasks can become invisible on the page. The **filtered** parameter of the method gives you the ability to define whether the filtered (hidden) tasks must be included into the result (*filtered: false* by default) or not (*filtered: true*):

~~~js
// filter the tasks
list.setFilter({ match: "#tag1", highlight: true });

// get children of the task after filtering
console.log(list.getChildrenIds({ id: "1", filtered: false })); // -> ['1.1', '1.1.1', '1.2']

// enable the "filtered" parameter
console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
~~~

The **tree** parameter of the method allows you to get the IDs only for the first-level children of the task. For that, set the parameter to *false*:

~~~js
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
console.log(list.getChildrenIds({ id: "1", filtered: false, tree: false })); // -> ['1.1', '1.2']
~~~

The **hideCompleted** parameter of the method lets you get the IDs only of those children tasks which yet need to be done, excluding the completed ones. For that, set the parameter to *true*:

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

## Checking if a task has children

To check whether a task has child tasks, apply the [hasChildren()](api/methods/haschildren_method.md) method:

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

If you apply filtering, some tasks can become invisible on the page. The **filtered** parameter of the method gives you the ability to define whether the filtered (hidden) tasks must be included into the result (*filtered: false* by default) or not (*filtered: true*):

~~~js
// filter the tasks
list.setFilter({ match: "#tag3", highlight: true });

// check whether the task has children (after filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

The **hideCompleted** parameter of the method lets you exclude completed tasks from the result. For that, set the parameter to *true*:

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

## Getting parent Ids

To get the parents of a task, use the [getParentIds()](api/methods/getparentids_method.md) method:

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

## Getting Ids of selected tasks

To get IDs of all currently selected tasks, use the [getSelection()](api/methods/getselection_method.md) method:

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