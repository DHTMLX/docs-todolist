---
sidebar_label: activeProject
title: activeProject Config
description: You can learn about the activeProject config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# activeProject

### Description

@short: Optional. The ID of the active project

:::info
If the specified active project doesn't exist or there are no projects loaded into To Do List at all, the *No project* section will be displayed on initialization of the component. 

The tasks will belong to the *No project* section in the following cases:
- if the **project** parameter is not specified in the [object of the root task](../../configs/tasks_config/)
- if **project: null | undefined** is specified in the [object of the root task](../../configs/tasks_config/)
:::

### Usage

~~~js
activeProject?: string | number;
~~~

:::info
If **activeProject** is not specified and there are no tasks which belong to the *No project* section, the first project from the list of project objects will be loaded as an active one.
:::

### Example

~~~js {4-7,11-12}
const { ToDo, Toolbar } = todo;

// projects data
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// create To do list
const list = new ToDo("#root", {
	projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Related article:** [Managing projects](guides/project_index.md)