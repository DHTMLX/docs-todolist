---
sidebar_label: setFilter()
title: setFilter Method
description: You can learn about the setFilter method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setFilter()

### Description

@short: Filters tasks by the specified criteria within an active project

### Usage

~~~js
setFilter({
    match: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}): void;
~~~

### Parameters

- `match` - (required) a pattern to match
- `by` - (optional) the parameter of the **task** object for searching; by default, *text*
- `highlight` - (optional) defines whether the matches found should be highlighted 
- `strict` - (optional) enables the *strict* mode of filtering. The searching will be implemented by the exact match

:::info
To reset filtering, pass `match: null` to the method
:::

### Example

~~~js {13-16,19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// filter data by the specified rules
list.setFilter({
    match: "ran",
    highlight: true
});

// reset filtering
list.setFilter({ match: null });
~~~

**Related article:** [Sorting and filtering tasks](guides/sorting_filtering_tasks.md)