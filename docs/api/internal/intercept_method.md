---
sidebar_label: api.intercept()
title: api.intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.intercept()

### Description

@short: Allows intercepting and preventing the inner events

### Usage

~~~js
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameters

- `event` - (required) the event to be fired
- `callback` - (required) a callback to be performed (the callback arguments will depend on the event to be fired)

### Events

:::info
The full list of the To Do List internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { data, users, projects } = getData();

// create To do list
const component = new ToDo("#root", {
    data,
    users,
	projects
});

// forbid removing a project with the "first" ID
component.api.intercept("delete-project", ({ id }) => {
    if(id == "first"){
        return false;
    }
});
~~~