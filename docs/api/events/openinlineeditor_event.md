---
sidebar_label: open-inline-editor
title: open-inline-editor Event
description: You can learn about the open-inline-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-inline-editor

### Description

@short: Fires when opening the inline editor of a task/project

### Usage

~~~js
"open-inline-editor": ({
    id: string | number,
    type: "task" | "project"
}) => void;
~~~

### Parameters

The callback of the **open-inline-editor** event can take an object with the following parameters:

- `id` - (required) the id of a task/project
- `type` - (required) the type of the item: "task" or "project"
 