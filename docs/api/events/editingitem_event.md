---
sidebar_label: editing-item
title: editing-item Event
description: You can learn about the editing-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# editing-item

### Description

@short: Fires when the value of a task/project is edited via the inline editor

### Usage

~~~js
"editing-item": ({
    id: string | number,
    currentValue: string,
}) => void;
~~~

### Parameters

The callback of the **editing-item** event can take an object with the following parameters:

- `id` - (required) the id of a task/project
- `currentValue` - (required) the current (but not saved) value of the task/project