---
sidebar_label: moveItem()
title: moveItem Method
description: You can learn about the moveItem method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# moveItem()

### Description

@short: moves an item to the specified position

A parent item is moved together with its children.

### Usage

~~~js
moveItem({
    id?: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the item to be moved
- `parent` - (optional) the ID of the parent item
- `targetId` - (optional) the ID of the target item where the moved item will be pasted
- `reverse` - (optional) defines the position where the moved item will be pasted: **before** or **after** the target item