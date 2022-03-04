---
sidebar_label: unindent-task
title: unindent-task Event
description: You can learn about the unindent-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unindent-task

### Description

@short: fires when the nesting level of a task is promoted by one

### Usage

~~~js
"unindent-task": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **unindent-task** event can take an object with the following parameters:

- `id` - (required) the id of a task