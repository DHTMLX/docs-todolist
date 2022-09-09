---
sidebar_label: selected
title: selected Config
description: You can learn about the selected config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# selected

### Description

@short: Optional. An array of tasks' IDs which need to be selected on initialization of To Do List

### Usage

~~~js
selected?: string[] | number[];
~~~

### Example

~~~js {11}
const { ToDo, Toolbar } = todo;

// create To do list
const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Change log:** Added in v1.1