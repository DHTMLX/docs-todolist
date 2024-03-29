---
sidebar_label: getProjectTasks()
title: getProjectTasks Method
description: You can learn about the getProjectTasks method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getProjectTasks()

### Description

@short: Gets a promise with an array of tasks objects for the specified project

:::info
The **getProjectTasks()** method is a part of the **RestDataProvider** service intended for working with a server
:::

### Usage

~~~js
getProjectTasks(id: string | number | null): Promise<obj[]>;
~~~

### Parameters

| Name       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`       |  string, number, null    | *Required*. The ID of the project |

### Response

The **getProjectTasks()** method sends a request to the server by the **GET** method and returns **a promise** with data on the tasks of the specified project.


### Example

~~~js {5,8}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
    restProvider.getProjects(),
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
---

**Related articles**: [Working with Server](guides/working_with_server.md)