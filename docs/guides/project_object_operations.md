---
sidebar_label: Project object
title: Project object
description: You can learn about project object in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Project object

## Getting a project object

To get a project object, use the [`getProject()`](api/methods/getproject_method.md) method:

~~~js {13}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

## Checking if a project exists

To check whether a project exists or not, use the [`existsProject()`](api/methods/existsproject_method.md) method:

~~~js {13-14}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~