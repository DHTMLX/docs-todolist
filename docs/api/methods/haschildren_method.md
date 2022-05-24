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

~~~js {}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.2", text: "Task 1.1.2 #tag1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});



console.log(list.hasChildren({ id: "1.1" })); // -> true

// filter the tasks
list.setFilter({ match: "3", highlight: true });

// after filtering
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~