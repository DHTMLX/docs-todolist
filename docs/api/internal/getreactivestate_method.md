---
sidebar_label: api.getReactiveState()
title: api.getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of the DataStore of To do list 

### Usage

~~~js
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following properties:

~~~js
{
    activeProject: {set: any, update: any, subscribe: any}
    data: {...}
    id: {...}
    projects: {...}
    readonly: {...}
    tags: {...}
    taskShape: {...}
    selected: {...}
    users: {...}
}
~~~

### Example

~~~js {12-15}
const { ToDo, Toolbar } = todo;
const { data, users, projects } = getData();

// create To do list
const component = new ToDo("#root", {
    data,
    users,
	projects
});

// subscribe to the task selection
component.api.getReactiveState().selected.subscribe((value) => {
    console.log(value);
    // other actions
});
~~~