---
sidebar_label: openTaskMenu()
title: openTaskMenu Method
description: You can learn about the openTaskMenu method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# openTaskMenu()

### Description

@short: Opens the menu of a task at the specified coordinates

### Usage

~~~js
openTaskenu({
    id: string | number,
    coords: { x: number, y: number },
    context?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate