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
    save: boolean,
}) => void;
~~~

### Parameters

The callback of the **close-inline-editor** event can take an object with the following parameters:

- `id` - (required) the id of a task/project
- `save` - (required) **true** if the made changes have been saved after closing the editor; otherwise, **false**