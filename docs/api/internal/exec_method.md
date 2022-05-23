---
sidebar_label: api.exec()
title: api.exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.exec()

### Description

@short: Allows triggering the inner events

### Usage

~~~js
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (required) the event to be fired
- `config` - (required) an object with configuration parameters (see the event to be fired)

### Events

:::info
The full list of the To Do List internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const component = new ToDo("#root", {
    tasks,
    users,
	projects
});

// add a new project
component.api.exec("add-project", { project: { label: "New project" } });
~~~