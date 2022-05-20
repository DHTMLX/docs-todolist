---
sidebar_label: api.getState()
title: api.getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.getState()

### Description

@short: Gets an object with the current properties of the DataStore of To do list 

### Usage

~~~js
api.getState(): object;
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

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { data, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    data,
    users,
	projects
});

const state = list.api.getState();
console.log(state);
~~~