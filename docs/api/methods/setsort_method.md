---
sidebar_label: setSort()
title: setSort Method
description: You can learn about the setSort method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setSort()

### Description

@short: Sorts tasks of the active project by the specified parameters

### Usage

~~~js
setSort({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean
}): void;
~~~

### Parameters

- `by` - (optional) the search criterion (either the key of the [task attribute](api/configs/tasks_config.md#parameters) or a search function which returns a string)
- `dir` - (optional) the direction of sorting: "asc" or "desc"
- `tree` - (optional) enables/disables sorting for child tasks; **false** by default

### Example

~~~js {21-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "a", text: "A" },
		{ id: "ac", text: "C", parent: "a" },
		{ id: "ad", text: "D", parent: "a" },
		{ id: "aa", text: "A", parent: "a" },
		{ id: "ab", text: "B", parent: "a" },
        { id: "c", text: "C" },
        { id: "d", text: "D" },
        { id: "b", text: "B" },
    ],
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// sort tasks in ascending order by the "text" parameter
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

**Change log:** Added in v1.1

**Related article:** 