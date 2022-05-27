---
sidebar_label: getChildrenIds()
title: getChildrenIds Method
description: You can learn about the getChildrenIds method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getChildrenIds()

### Description

@short: Returns the IDs of child tasks of the specified parent task


### Usage

~~~js
getChildrenIds({
    id: string | number,
    filtered?: boolean, // false by default
    tree?: boolean // true by default
}): (string|number)[];
~~~

### Parameters

- `id` - (required) the ID of the parent task
- `filtered` - (optional) if **false**, the filtered child tasks will be also included into the result 
- `tree` - (optional) if **true**, all child tasks will be included into the result; if **false**, only first-level children of the parent task will be included

:::tip
The **filtered** parameter can be used if the filtering has been applied
:::

### Returns

The method returns an array of children's ID

### Example

~~~js {20-21,24,27-28,30-31}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ],
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// get children of the task before filtering
console.log(list.getChildrenIds({ id: "1" })); // ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // ['1.1', '1.2']

// filter the tasks
console.log(list.setFilter({ match: "#tag1", highlight: true }));

// get children of the task after filtering
console.log(list.getChildrenIds({ id: "1" })); // -> ['1.1', '1.1.1', '1.2']
console.log(list.getChildrenIds({ id: "1", tree: false })); // -> ['1.1', '1.2']

console.log(list.getChildrenIds({ id: "1", filtered: true })); // -> ['1.1', '1.1.1']
console.log(list.getChildrenIds({ id: "1", filtered: true, tree: false })); // -> ['1.1']
~~~