---
sidebar_label: uncheck-task
title: uncheck-task Event
description: You can learn about the uncheck-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# uncheck-task

### Description

@short: Fires when a task is marked as uncompleted

### Usage

~~~js
"uncheck-task": ({
    id: string | number
}) => void;
~~~

### Parameters

The callback of the **uncheck-task** event can take an object with the following parameters:

- `id` - (required) the id of a task