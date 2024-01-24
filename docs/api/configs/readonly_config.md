---
sidebar_label: readonly
title: readonly Config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# readonly

### Description

@short: Optional. Makes To Do List readonly

:::tip
After you enable the readonly mode, the *add Task* button and *3 dots* icons will be hidden in the toolbar and list

In the *readonly* mode it is only possible to mark tasks as completed/uncompleted
:::

### Usage

~~~js
readonly?: boolean;
~~~

### Default config

~~~jsx {}
readonly: false // readonly mode is disabled
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
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Related article:** [Read-only mode](guides/readonly_mode.md)