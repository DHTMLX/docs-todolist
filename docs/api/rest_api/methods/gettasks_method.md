---
sidebar_label: getTasks()
title: getTasks Method
description: You can learn about the getTasks method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getTasks()

### Description

@short: Gets a promise with an array of all tasks objects

:::info
The **getTasks()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~js
getTasks(): Promise<obj[]>;
~~~

### Returns

The **getTasks()** method sends a request to the server by the **GET** method and returns **a promise** with the tasks data


### Example

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
]).then(([tasks, projects]) => {
    const component = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: component.api,
    });

    component.api.setNext(restProvider);
    restProvider.setAPI(component.api);
});
~~~