---
sidebar_label: add-project
title: add-project Event
description: You can learn about the add-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-project

### Description

@short: Fires when adding a new project

### Usage

~~~js
"add-project": ({
    id: string | number,
    project?: object
}) => void;
~~~

### Parameters

The callback of the **add-project** event can take an object with the following parameters:

- `id` - (required) the ID of the created project
- `project` - (optional) an object with project parameters:
  - `label` - (optional) the name of the project

:::info
To handle the inner events, you can use the [**Event Bus methods**](category/event-bus-methods.md)
:::

### Example

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// subscribe to the "add-project" event
list.api.on("add-project", ({id, project}) => {
    console.log("A new ", project.label, " project with ID:", id, "is added");
});
~~~

**Related article:** [Operations with projects](guides/project_operations.md#adding-a-new-project)