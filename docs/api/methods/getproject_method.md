---
sidebar_label: getProject()
title: getProject Method
description: You can learn about the getProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getProject()

### Description

@short: Gets an object of the project by its ID

### Usage

~~~js
getProject({ id: string | number }): object;
~~~

### Parameters

- `id` - (required) the ID of the project

### Returns

The method returns an object with data of the project

### Example

~~~js {18}
const { ToDo, Toolbar } = todo;
const { tasks, users } = getData();

const list = new ToDo("#root", {
	tasks,
	users,
	projects: [
		{ id: "first", label: "First project" },
		{ id: "second", label: "Second project" },
		{ id: "third", label: "Third project" },
	]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~