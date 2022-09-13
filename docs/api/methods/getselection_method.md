---
sidebar_label: getSelection()
title: getSelection Method
description: You can learn about the getSelection method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getSelection()

### Description

@short: Gets an array with ID of the selected task

### Usage

~~~js
getSelection({
    sorted?: boolean,
}): (string | number)[];
~~~

### Parameters

- `sorted` - (optional) if **true**, sorts IDs of selected tasks by the order they are displayed in the list; if **false**, outputs tasks' IDs without sorting

### Returns

The method returns an array with IDs of selected tasks

### Example

~~~js {20,23}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
		{ id: "2.1", text: "Task 2.1", parent: "2" },
		{ id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// sorted - disable;
console.log(list.getSelection({ sorted: false })); // ["1.2", "1.1", "2.2", "2.1"]

// sorted - enable;
console.log(list.getSelection({ sorted: true })); // ["1.1", "1.2", "2.1", "2.2"]
~~~

**Change log:** The `sorted` parameter was added in v1.1

**Related article:** [Task object/Id](guides/task_object.md)