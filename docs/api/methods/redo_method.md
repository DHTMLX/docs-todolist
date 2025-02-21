---
sidebar_label: redo()
title: redo Method
description: You can learn about the redo method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# redo()

### Description

@short: Repeats the action that was reverted by the undo action

### Usage

~~~js
redo(): void;
~~~

### Example

~~~js {10,13}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: true, limit: 10 }
});

list.redo();
~~~

**Change log:** The `redo()` method was added in v1.3

**Related API:**
    - [`history`](api/configs/history_config.md)
    - [`undo`](api/methods/undo_method.md)
