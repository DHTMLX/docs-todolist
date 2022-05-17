---
sidebar_label: getProjects()
title: getProjects Method
description: You can learn about the getProjects method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getProjects()

### Description

@short: Gets a promise with an array of projects objects

:::info
The **getProjects()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~js
getProjects(): Promise<obj[]>;
~~~

### Returns

The **getProjects()** method sends a request to the server by the **GET** method and returns **a promise** with data of the projects


### Example

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
]).then(([data, projects]) => {
    const component = new ToDo("#root", {
        data,
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