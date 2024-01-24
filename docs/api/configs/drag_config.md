---
sidebar_label: drag
title: drag Config
description: You can learn about the drag config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# drag

### Description

@short: Optional. Specifies settings for drag-n-drop

:::note
There is 500ms delay when you drag-n-drop tasks on touch devices.
:::

### Usage

~~~js
drag?: boolean;
//or 
drag?: {
    expand?: boolean
};
~~~

### Parameters

To configure drag-n-drop, you can use either the **short** or **extended** option.

The **short** option:

- `drag` - (optional) enables/disables drag-n-drop of tasks

The **extended** option:

- `drag` - (optional) an object with settings for drag-n-drop. The object can include the following parameter:
    - `expand` - (optional) defines whether the collapsed tasks should expand when you hover them over during drag-n-drop

### Default config

~~~js
drag: true
// or
drag: {
    expand: true
}
~~~

### Example

~~~js {9-11}
const { ToDo, Toolbar } = todo;

// create To do list
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Change log:** Added in v1.1

**Related article:** [Configuration](guides/configuration.md#drag-n-drop)