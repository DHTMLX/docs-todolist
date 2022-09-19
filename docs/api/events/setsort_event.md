---
sidebar_label: set-sort
title: set-sort Event
description: You can learn about the set-sort event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# set-sort

### Description

@short: Fires when sorting tasks

### Usage

~~~js
"set-sort": ({
    by?: string | ((task: object) => string),
    dir?: "asc" | "desc",
    tree?: boolean,
}) => void;
~~~

### Parameters

The callback of the **set-sort** event can take an object with the following parameters:

- `by` - (optional) the search criterion (either the key of the [task attribute](api/configs/tasks_config.md#parameters) or a search function which returns a string)
- `dir` - (optional) the direction of sorting: "asc" or "desc"
- `tree` - (optional) defines whether sorting for child tasks is enabled

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

// subscribe to the "set-sort" event
list.api.on("set-sort", ({ by, dir, tree }) => {
    console.log(by, dir, tree);
});
~~~

**Related article:** [Sorting and filtering tasks](guides/sorting_filtering_tasks.md)