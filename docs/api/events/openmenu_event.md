---
sidebar_label: open-menu
title: open-menu Event
description: You can learn about the open-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-menu

### Description

@short: Fires when opening the menu of a task/project

### Usage

~~~js
"open-menu": ({
    id: string | number,
    type: "task" | "user" | "project",
    coords: { x: number, y: number }
}) => void;
~~~

### Parameters

The callback of the **open-menu** event can take an object with the following parameters:

- `id` - (required) the ID of a task/project
- `type` - (required) the type of a menu. There are three types of menu:
  - `task` (by default) - the task menu
  - `user` - the user menu
  - `project` - the project menu
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate