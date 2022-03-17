---
sidebar_label: openMenu()
title: openMenu Method
description: You can learn about the openMenu method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# openMenu()

### Description

@short: Opens the menu of a task/project at the specified coordinates

### Usage

~~~js
openMenu({
    id: string | number,
    type?: "task" | "user" | "project",
    coords: { x: number, y: number }
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task/project
- `type` - (optional) the type of a menu. There are three types of menu:
  - `task` (by default) - the task menu
  - `user` - the user menu
  - `project` - the project menu
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate