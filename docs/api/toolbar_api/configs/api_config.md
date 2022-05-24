---
sidebar_label: api
title: api Config
description: You can learn about the api config of Toolbar in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# api

### Description

@short: Required. An object with the internal API of To do list

:::info
Usage of the internal API of To do list is necessary for correct work of the search bar and controls located in the Toolbar
:::

### Usage

~~~js
api: object;
~~~

### Example

~~~js {11}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~