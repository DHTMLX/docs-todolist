---
sidebar_label: setAPI()
title: setAPI Method
description: You can learn about the setAPI method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setAPI()

### Description

@short: Required. Sets API of the To Do List component into RestDataProvider

:::info
The **setAPI()** method is required for correct work of the RestDataProvider methods
:::

### Usage

~~~js
setAPI(api: IApi): void;
~~~

### Parameters

- `api` - (required) API object of the component

### Example

~~~js {5,11,22}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getUsers(),
    restProvider.getProjects(),
]).then(([tasks, users, projects]) => {
    const list = new ToDo("#root", {
        tasks,
        users,
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