---
sidebar_label: set-filter
title: set-filter Event
description: You can learn about the set-filter event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# set-filter

### Description

@short: Fires when filtering data by the specified criteria

### Usage

~~~js
"set-filter": ({
    match?: string | null,
    by?: string,
    highlight?: boolean,
    strict?: boolean
}) => void;
~~~

### Parameters

The callback of the **set-filter** event can take an object with the following parameters:

- `match` - (optional) a pattern to match
- `by` - (optional) the parameter of the **task** object for searching
- `highlight` - (optional) defines whether the matches found are highlighted 
- `strict` - (optional) **true**, if the *strict* mode of filtering is enabled; otherwise, **false**

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To do list
const component = new ToDo("#root", {
	tasks,
	users,
	projects,
	tags,
});

// subscribe to the "set-filter" event
component.api.on("set-filter", (obj) => {
    console.log(obj);
});
~~~

