---
sidebar_label: indent-task
title: indent-task Event
description: You can learn about the indent-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# indent-task

### Description

@short: Fires when the nesting level of a task is demoted by one

### Usage

~~~js
"indent-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **indent-task** event can take an object with the following parameters:

- `id` - (required) the id of a task