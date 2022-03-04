---
sidebar_label: open-user-list
title: open-user-list Event
description: You can learn about the open-user-list event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-user-list

### Description

@short: fires when opening the list of the users assigned to the task

### Usage

~~~js
"open-user-list": ({
    id: string | number,
    coords:  { x: number, y: number },
}) => void;
~~~

### Parameters

The callback of the **open-user-list** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `coords` - (required) an object with the x and y coordinates of the user list:
    - `x` - (required) the x coordinate of the list position
    - `y` - (required) the y coordinate of the list position 