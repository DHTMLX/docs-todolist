---
sidebar_label: paste-task
title: paste-task Event
description: You can learn about the paste-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# paste-task

### Description

@short: Fires when the task is pasted from the clipboard into the specified position

### Usage

~~~js
"paste-task": ({
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **paste-task** event can take an object with the following parameters:

- `parent` - (optional) the ID of the future parent task
- `targetId` - (optional) the ID of the target task where the task is pasted
- `reverse` - (optional) **true**, if the task is pasted before the target task; otherwise, **false**