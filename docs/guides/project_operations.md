---
sidebar_label: Operations with projects
title: Operations with projects
description: You can learn about operations with projects in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Operations with projects

## Change the active project {#changing-the-active-project}

To change the currently active project, use the [`setProject()`](api/methods/setproject_method.md) method. The method takes the project id as a parameter. The example below switches the active project after initialization:

~~~js {9,16}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", {
    projects,
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.setProject({ id: "first" });
~~~

## Add a new project {#adding-a-new-project}

To create a new project, use the [`addProject()`](api/methods/addproject_method.md) method. The snippet below adds a fourth project:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

## Update a project {#updating-a-project}

To update parameters of a project dynamically, apply the [`updateProject()`](api/methods/updateproject_method.md) method. The example below renames a project label:

~~~js {13-18}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const list = new ToDo("#root", { projects });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

## Delete a project {#deleting-a-project}

To remove a project, apply the [`deleteProject()`](api/methods/deleteproject_method.md) method. The snippet below deletes a project:

~~~js {17}
const projects = [
    { id: "first", label: "First project" },
    { id: "second", label: "Second project" },
    { id: "third", label: "Third project" },
];

const tasks = [
    { id: "1", text: "Task 1", project: "first" },
];

const list = new ToDo("#root", { projects, tasks });

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.deleteProject({ id: "first" });
~~~

:::note
Tasks linked to the project are not removed. The tasks move to the *"No project"* section.

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::
