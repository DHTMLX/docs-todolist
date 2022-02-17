---
sidebar_label: addItem()
title: addItem Method
description: You can learn about the addItem method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# addItem()

### Description

@short: adds a new item into the list

### Usage

~~~js
addItem({
    id?: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
    item: object;
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the new item
- `parent` - (optional) the ID of the future parent item
- `targetId` - (optional) the ID of the future target item where the new item will be added
- `reverse` - (optional) defines where the new item will be added: **before** or **after** the target item
- `item` - (required) the data object of the new item