---
sidebar_label: getTags()
title: getTags Method
description: You can learn about the getTags method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getTags()

### Description

@short: Gets a promise with an array of default tags

:::info
The **getTags()** method is a part of the **RestDataProvider** service intended for working with server
:::

### Usage

~~~js
getTags(): Promise<string[]>;
~~~

### Returns

The **getTags()** method sends a request to the server by the **GET** method and returns **a promise** with the list of tags which are set by default 


### Example

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTags(),
]).then(([tasks, projects, tags]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        tags,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~