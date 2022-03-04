---
sidebar_label: add-task
title: add-task Event
description: You can learn about the add-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-task

### Description

@short: fires when adding a new task

### Usage

~~~js
"add-task": ({
    id: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
    task: object;
}) => void;
~~~

### Parameters

The callback of the **add-task** event can take an object with the following parameters:

- `id` - (required) the ID of the added task
- `parent` - (optional) the ID of the parent task
- `targetId` - (optional) the ID of the target task
- `reverse` - (optional) **true**, if the task is added before the target task; otherwise, **false**
- `task` - (required) the object of the added task