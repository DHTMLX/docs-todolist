---
sidebar_label: close-inline-editor
title: close-inline-editor Event
description: You can learn about the close-inline-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-inline-editor

### Description

@short: Fires when closing the inline editor of a task/project

### Usage

~~~js
"close-inline-editor": ({
    id: string | number,
    save: boolean
}) => void;
~~~

### Parameters

The callback of the **close-inline-editor** event can take an object with the following parameters:

- `id` - (required) the id of a task/project
- `save` - (required) **true** if the made changes have been saved after closing the editor; otherwise, **false**

:::info
To handle the inner events, you can use the [**Event Bus methods**](category/event-bus-methods.md)
:::

### Example

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
	tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// subscribe to the "close-inline-editor" event
list.api.on("close-inline-editor", ({id, save}) => {
    console.log("The inline editor is closed for the", id, "item"); 
});
~~~

**Related article:** [Inline editing](guides/inline_editing.md#working-with-editor)