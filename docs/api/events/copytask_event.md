---
sidebar_label: copy-task
title: copy-task Event
description: You can learn about the copy-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copy-task

### Description

@short: fires when a task is copied into the clipboard

### Usage

~~~js
"copy-task": ({
    id: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **copy-task** event takes an object with the following parameters:

- `id` - (required) the id of a task

:::info 
In case the copied task is also pasted from the clipboard into another position, the object can take three more parameters:
:::

- `parent` - (optional) the ID of the parent task
- `targetId` - (optional) the ID of the target task where the copied task is pasted
- `reverse` - (optional) **true**, if the copied task is pasted before the target task; otherwise, **false**
 