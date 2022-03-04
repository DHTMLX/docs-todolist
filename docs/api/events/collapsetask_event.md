---
sidebar_label: collapse-task
title: collapse-task Event
description: You can learn about the collapse-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# collapse-task

### Description

@short: fires when collapsing a task

### Usage

~~~js
"collapse-task": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **collapse-task** event can take an object with the following parameters:

- `id` - (required) the id of a task
 