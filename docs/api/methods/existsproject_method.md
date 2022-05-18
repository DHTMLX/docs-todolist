---
sidebar_label: existsProject()
title: existsProject Method
description: You can learn about the existsProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# existsProject()

### Description

@short: Checks whether the specified project exists in the component


### Usage

~~~js
existsProject({ id: string | number }): boolean;
~~~

### Parameters

- `id` - (required) the ID of the project

### Returns

The method returns `true` if the project exists; otherwise, `false`

### Example

~~~js {27-28}
const { ToDo, Toolbar } = todo;
const { data, users } = getData();

const component = new ToDo("#root", {
	data,
	users,
	projects: [
		{
			id: "first",
			label: "First project",
		},
		{
			id: "second",
			label: "Second project",
		},
		{
			id: "third",
			label: "Third project",
		},
	]
});

const toolbar = new Toolbar("#toolbar", {
	api: component.api,
});

component.existsProject({ id: 1 }); // -> false
component.existsProject({ id: "first" }); // -> true
~~~