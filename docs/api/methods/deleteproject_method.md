---
sidebar_label: deleteProject()
title: deleteProject Method
description: You can learn about the deleteProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# deleteProject()

### Description

@short: Removes a project

:::note
The tasks linked to the project won't be removed.They will be moved to the *"No project"* section
:::

### Usage

~~~js
deleteProject({
    id: string | number
}): void;
~~~

### Parameters

- `id` - (required) the ID of a project

### Example

~~~js {16}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// remove a project
list.deleteProject({ id: "first" });
~~~

**Related article:** [Operations with projects](guides/project_operations.md)