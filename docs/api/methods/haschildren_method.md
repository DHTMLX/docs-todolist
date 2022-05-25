---
sidebar_label: hasChildren()
title: hasChildren Method
description: You can learn about the hasChildren method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# hasChildren()

### Description

@short: Checks whether the specified task has child tasks


### Usage

~~~js
hasChildren({
    id: string | number;
    filtered?: boolean // false by default
}): boolean;
~~~

### Parameters

- `id` - (required) the ID of the task
- `filtered` - (optional) if **false**, the filtered child tasks will be also included into the result 

:::tip
The **filtered** parameter is used if the filtering has been applied
:::

### Returns

The method returns `true` if the task has children; otherwise, returns `false`

### Example

~~~js {17,20,23-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// check whether the task has children (before filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true

// filter the tasks
list.setFilter({ match: "3", highlight: true });

// check whether the task has children (after filtering)
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~