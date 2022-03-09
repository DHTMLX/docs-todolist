---
sidebar_label: open-task-menu
title: open-task-menu Event
description: You can learn about the open-task-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-task-menu

### Description

@short: Fires when opening the menu of a task

### Usage

~~~js
"open-task-menu": ({
    id: string | number,
    coords: { x: number, y: number },
}) => void;
~~~

### Parameters

The callback of the **open-task-menu** event can take an object with the following parameters:

- `id` - (required) the ID of a task
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate