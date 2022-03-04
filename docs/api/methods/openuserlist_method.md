---
sidebar_label: openUserList()
title: openUserList Method
description: You can learn about the openUserList method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# openUserList()

### Description

@short: opens the list of the users assigned to the task at the specified coordinates

### Usage

~~~js
openUserList({
    id: string | number,
    coords: { x: number, y: number },
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task
- `coords` - (required) an object with the x and y coordinates of the user list:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate