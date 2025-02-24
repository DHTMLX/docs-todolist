---
sidebar_label: items
title: items Config
description: You can learn about the items config of Toolbar in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# items

### Description

@short: Optional. Specifies controls that will be shown in the toolbar of To Do List

### Usage

~~~js
items?: [
    "combo",
    "search",
    "menu",
    "undo",
    "redo"
    custom_control // string or function
];
~~~

### Default config

~~~js
items: ["combo", "search", "menu"]
~~~

### Parameters

The **items** array can include the following parameters:

- `"combo"` - the combo control for choosing a project
- `"search"` - the search bar
- `"menu"` - the menu with a set of options which allow you to:
    - sort tasks in the ascending/descending order by the following criteria: 
        - by text
        - by due date
        - by completion date
        - by creation date
        - by editing date
    - hide/show completed tasks
    - to add a new project, rename or delete a currently active project
- `"undo"` - the control that reverts the last operation
- `"redo"` - the control that repeats the action that was reverted by the undo action
- `"custom_item"` - a custom control specified either as a string or a function

:::tip
You can specify your own structure of the toolbar by enumerating necessary elements in the **items** array in the desired order
:::

### Example

~~~js {12-19}
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
    items: [
        `<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
        "search",
        "menu",
        "undo",
        "redo",
        `<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
    ]
});
~~~

**Change log:** The `"undo"` and `"redo"` parameters were added in v1.3

**Related articles:**
- [Configuration](guides/configuration.md#toolbar)
- [Customization](guides/customization.md#toolbar)
