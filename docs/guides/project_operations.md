---
sidebar_label: Operations with projects
title: Operations with projects
description: descr
---

# Operations with projects

## Changing the active project

It is possible to change the currently active project via the [setProject()](../../api/methods/setproject_method/) method. It takes the id of a project as a parameter:

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

## Adding a new project

You may create a new project via the [addProject()](../../api/methods/addproject_method/) method:

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

## Updating a project

To dynamically update parameters of a project, apply the [updateProject()](../../api/methods/updateproject_method/) method. For instance, you can update the label of the project:

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

## Deleting a project

To remove an unnecessary project, apply the [deleteProject()](../../api/methods/deleteproject_method/) method:

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
The tasks linked to the project won't be removed. They will be moved to the *"No project"* section

~~~js
console.log(list.getTask({id: "1"})); // -> {id: '1', text: 'Task 1', project: null}
~~~
:::