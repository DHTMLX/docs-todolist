---
sidebar_label: undo()
title: undo Method
description: You can learn about the undo method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# undo()

### Description

@short: Reverts the last operation in To Do List

:::info
If you set the [`history.projects`](api/configs/history_config.md) parameter to `true`, you will be able to manage history of changes for each project separately; otherwise, you will be able to manage history for whole app.
:::

### Usage

~~~js
undo(): void;
~~~

### Example

~~~js {10,14}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: false, limit: 10 }
});

list.addTask({ text: "New task 1 });
list.undo();
~~~

**Change log:** The `undo()` method was added in v1.3

**Related API:**
    - [`history`](api/configs/history_config.md)
    - [`redo`](api/methods/redo_method.md)
