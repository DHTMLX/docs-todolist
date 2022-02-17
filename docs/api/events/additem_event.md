---
sidebar_label: add-item
title: add-item Event
description: You can learn about the add-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-item

### Description

@short: fires when adding a new item

### Usage

~~~js
"add-item": ({
    id: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
    item: object;
}) => void;
~~~

### Parameters

The callback of the **add-item** event can take an object with the following parameters:

- `id` - (required) the ID of the added item
- `parent` - (optional) the ID of the parent item
- `targetId` - (optional) the ID of the adjacent item
- `reverse` - (optional) **true**, if the item is added before the adjacent item; otherwise, **false**
- `item` - (required) the object of the added item