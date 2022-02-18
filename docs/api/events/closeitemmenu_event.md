---
sidebar_label: close-item-menu
title: close-item-menu Event
description: You can learn about the close-item-menu event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-item-menu

### Description

@short: fires when closing the opened menu of the item

### Usage

~~~js
"close-item-menu": ({
    id: string | number,
    coords: { x: number, y: number },
}) => void;
~~~

### Parameters

The callback of the **close-item-menu** event can take an object with the following parameters:

- `id` - (required) the ID of the item
- `coords` - (required) an object with the x and y coordinates of the menu:
    - `x` - (required) the value of the x coordinate
    - `y` - (required) the value of the y coordinate