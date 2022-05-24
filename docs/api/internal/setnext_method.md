---
sidebar_label: api.setNext()
title: api.setNext Method
description: You can learn about the setNext method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api.setNext()

### Description

@short: Allows adding some action into the Event Bus order

### Usage

~~~js
api.setNext(next: any): void;
~~~

### Parameters

- `next` - (required) the action to be included into the **Event Bus** order


### Example

~~~js {20}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjects(),
    restProvider.getTasks(),
]).then(([tasks, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        projects,
        activeProject,
    });
    const toolbar = new Toolbar("#toolbar", {
        api: list.api,
    });

    list.api.setNext(restProvider);
    restProvider.setAPI(list.api);
});
~~~

:::info
You need to include **RestDataProvider** into the **Event Bus** order to perform operations with data (**adding, deleting** etc) and send the corresponding requests to the server
:::