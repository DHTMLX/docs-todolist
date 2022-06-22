---
sidebar_label: api.getStores()
title: api.getStores Method
description: You can learn about the getStores method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.getStores()

### Description

@short: Gets an object with the DataStore object of To Do List 

### Usage

~~~js
api.getStores(): object;
~~~

### Returns

The method returns an object with **DataStore**:

~~~js
state: DataStore // ( object )
~~~

### Example

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
	projects
});

const stores = list.api.getStores();
console.log(stores);
~~~