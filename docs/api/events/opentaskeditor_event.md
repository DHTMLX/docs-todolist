---
sidebar_label: open-task-editor
title: open-task-editor Event
description: You can learn about the open-task-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-task-editor

### Description

@short: fires when opening the inline editor of a task

### Usage

~~~js
"open-task-editor": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **open-task-editor** event can take an object with the following parameters:

- `id` - (required) the id of a task
 