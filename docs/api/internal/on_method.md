---
sidebar_label: api.on()
title: api.on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.on()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~js
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) the event to be fired
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)

### Events

:::info
The full list of the To Do List internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const component = new ToDo("#root", {
    tasks,
    users,
	projects
});

// output the project data to console when you remove it
component.api.intercept("delete-project", ({ id }) => {
    console.log( "The id of the project", { id });
});
~~~