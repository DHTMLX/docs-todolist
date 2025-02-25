---
sidebar_label: api.getReactiveState()
title: api.getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of the DataStore of To Do List 

### Usage

~~~js
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following properties:

~~~js
{
    activeProject: object,
    tasks: object,
    id: object,
    projects: object,
    readonly: object,
    tags: object,
    taskShape: object,
    selected: object,
    users: object,
    historyState: object
}
~~~

### Example

~~~js {12-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// subscribe to the task selection
list.api.getReactiveState().selected.subscribe((value) => {
    console.log(value);
    // other actions
});
~~~

**Change log:** The `historyState` parameter was added in v1.3
