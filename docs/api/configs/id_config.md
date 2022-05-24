---
sidebar_label: id
title: id Config
description: You can learn about the id config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# id

### Description

@short: Optional. The ID of the To Do List

:::info
Auto-generated, provides correct work of the component parts, such as Toolbar
:::

### Usage

~~~js
id?: string | number;
~~~

### Example

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
	projects,
    id: "1"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~