---
sidebar_label: close-task-editor
title: close-task-editor Event
description: You can learn about the close-task-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-task-editor

### Description

@short: Fires when closing the inline editor of a task

### Usage

~~~js
"close-task-editor": ({
    id: string | number,
    save: boolean,
}) => void;
~~~

### Parameters

The callback of the **close-task-editor** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `save` - (required) **true** if the made changes have been saved after closing the editor; otherwise, **false**