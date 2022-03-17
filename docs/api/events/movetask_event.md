---
sidebar_label: move-task
title: move-task Event
description: You can learn about the move-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# move-task

### Description

@short: Fires when moving a task

### Usage

~~~js
"move-task": ({
    id: string | number;
    parent?: string | number | null;
    project?: string | number | null;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **move-task** event can take an object with the following parameters:

- `id` - (required) the ID of the moved task
- `parent` - (optional) the ID of the parent task
- `project` - (optional) the ID of the project
- `targetId` - (optional) the ID of the target task
- `reverse` - (optional) **true**, if the task is pasted before the target task; otherwise, **false**