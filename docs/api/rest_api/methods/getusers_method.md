---
sidebar_label: getUsers()
title: getUsers Method
description: You can learn about the getUsers method of the RestDataProvider in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# getUsers()

### Description

@short: Gets a promise with an array of users objects

:::info
The **getUsers()** method is a part of the **RestDataProvider** service intended for working with a server
:::

### Usage

~~~js
getUsers(): Promise<obj[]>;
~~~

### Response

The **getUsers()** method sends a request to the server by the **GET** method and returns **a promise** with the users data.


### Example

~~~js {5,9}
const { ToDo, Toolbar, RestDataProvider } = todo;

const activeProject = null;
const url = "http://localhost:3000";
const restProvider = new RestDataProvider(url);

Promise.all([
    restProvider.getProjectTasks(activeProject),
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

---

**Related articles**: [Working with Server](guides/working_with_server.md)