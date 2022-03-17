---
sidebar_label: close-menu
title: close-menu Event
description: You can learn about the close-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-menu

### Description

@short: Fires when closing the opened menu of a task/project

### Usage

~~~js
"close-task-menu": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **close-menu** event can take an object with the following parameters:

- `id` - (required) the ID of a task/project
