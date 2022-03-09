---
sidebar_label: update-task
title: update-task Event
description: You can learn about the update-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-task

### Description

@short: Fires when updating a task

### Usage

~~~js
"update-task": ({
    id: string | number;
    task: object;
}) => void;
~~~

### Parameters

The callback of the **update-task** event can take an object with the following parameters:

- `id` - (required) the id of the updated task
- `task` - (required) the object of the updated task