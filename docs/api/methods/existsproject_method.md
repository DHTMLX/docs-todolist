---
sidebar_label: existsProject()
title: existsProject Method
description: You can learn about the existsProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# existsProject()

### Description

@short: Checks whether the specified project exists in DataStore


### Usage

~~~js
existsProject({ id: string | number }): boolean;
~~~

### Parameters

- `id` - (required) the ID of the project

### Returns

The method returns `true` if the project exists; otherwise, `false`

### Example

~~~js {16-17}
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

// check whether projects exist
list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~

**Related article:** [Project object](guides/project_object_operations.md)