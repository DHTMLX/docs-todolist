---
sidebar_label: addProject()
title: addProject Method
description: You can learn about the addProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# addProject()

### Description

@short: Adds a new project

### Usage

~~~js
addProject({
    id?: string | number,
    project?: object
}): void;
~~~

### Parameters

- `id` - (optional) the ID of a new project
- `project` - (optional) an object with parameters of the project:
  - `label` - (optional) a string with the name of the project

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
		projects,
		tags,
});

// add a new project
list.addProject({
		project: {label: "New project"}
});
~~~