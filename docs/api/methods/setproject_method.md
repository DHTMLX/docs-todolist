---
sidebar_label: setProject()
title: setProject Method
description: You can learn about the setProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setProject()

### Description

@short: Sets the specified project as an active one

### Usage

~~~js
setProject({
    id: string | number | null
}): void;
~~~

### Parameters

- `id` - (required) the ID of a project. To display the *No project* section, set ID to **null**

### Example

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	projects: [
		{ id: "first", label: "First project" },
		{ id: "second", label: "Second project" },
		{ id: "third", label: "Third project" },
	],
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// change an active project
list.setProject({
    id: "first"
});
~~~

**Related article:** [Operations with projects](guides/project_operations.md)