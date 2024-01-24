---
sidebar_label: eachSelected()
title: eachSelected Method
description: You can learn about the eachSelected method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# eachSelected()

### Description

@short: Iterates over all selected tasks

### Usage

~~~js
eachSelected(
    callback: (id: string | number, index: number) => void,
    sorted?: boolean, // false by default
    reversed?: boolean, // false by default
);
~~~

### Parameters

- `callback` - (required) a callback function to run for each selected task. The function takes two parameters:
    - `id` - the ID of a selected task
    - `index` - the index of the current task
- `sorted` - (optional) defines whether the method should sort IDs of the selected tasks by the order they are displayed in the list (**true**) or not (**false**)
- `reversed` - (optional) defines whether the method should iterate over selected tasks in the reverse order (**true**) or not (**false**)

### Example

~~~js {22-24,27-29,32-34,37-39}
const { ToDo, Toolbar } = todo;

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
    selected: ["1.2", "1.1", "2.2", "2.1"],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - disable; reversed - disable;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.2", "1.1", "2.2", "2.1"]
});

// sorted - enable; reversed - disable;
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.1", "1.2", "2.1", "2.2"]
}, true);

// sorted - disable; reversed - enable;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.1", "2.2", "1.1", "1.2"]
}, false, true);

// sorted - enable; reversed - enable;
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.2", "2.1", "1.2", "1.1"]
}, true, true);
~~~

**Change log:** Added in v1.1

**Related article:** [Multiple select and bulk operations](guides/multiselection.md)