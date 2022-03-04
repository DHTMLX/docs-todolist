---
sidebar_label: close-task-menu
title: close-task-menu Event
description: You can learn about the close-task-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-task-menu

### Description

@short: fires when closing the opened menu of a task

### Usage

~~~js
"close-task-menu": ({
    id: string | number,
    coords: { x: number, y: number },
}) => void;
~~~

### Parameters

The callback of the **close-task-menu** event can take an object with the following parameters:

- `id` - (required) the ID of a task
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate