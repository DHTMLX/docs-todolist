---
sidebar_label: select-task
title: select-task Event
description: You can learn about the select-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# select-task

### Description

@short: Fires when selecting a task

### Usage

~~~js
"select-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **select-task** event can take an object with the following parameters:

- `id` - (required) the id of a task
 