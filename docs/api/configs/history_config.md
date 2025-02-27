---
sidebar_label: history 
title: history Config
description: You can learn about the history config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# history

### Description

@short: Optional. Enables/disables managing the history of changes

:::info
Using the `history` property you can enable/disable managing the history of changes in To Do List. If you set the `history` property  to `false`, you will not be able to manage the history of changes using [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) methods and controls on Toolbar.
:::

### Usage

~~~js
history?: boolean; 
// or 
history?: { 
    projects?: boolean, 
    limit?: number 
};
~~~

### Parameters

To configure the `history` property, you can use the **short** or **extended** approach:

The **short** approach:

- `history` - (optional) enables/disables the history of changes in To Do List

The **extended** approach:
- `history` - (optional) the object with extended settings that configure the history of changes. Here you can specify the following parameters:
    - `projects` - (optional) enables/disables the branching of history

    :::info
    If you set the the `projects` parameter to `true`, you will be able to manage the history of changes for each project separately; otherwise, you will be able to manage the history of changes for the whole app.
    :::

    - `limit` - (optional) limits the number of history operations

### Default config

~~~jsx {}
history: true
~~~

### Example

~~~js {9}
const { ToDo } = todo;
const { tasks, users, projects } = getData();

// create To Do List
new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});
~~~

**Change log:** The `history` config was added in v1.3

**Related API:**
    - [`redo`](api/methods/redo_method.md)
    - [`undo`](api/methods/undo_method.md)
