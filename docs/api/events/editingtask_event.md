---
sidebar_label: editing-task
title: editing-task Event
description: You can learn about the editing-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# editing-task

### Description

@short: Fires when the value of a task is edited via the inline editor

### Usage

~~~js
"editing-task": ({
    id: string | number,
    currentValue: string,
}) => void;
~~~

### Parameters

The callback of the **editing-task** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `currentValue` - (required) the current (but not saved) value of the task