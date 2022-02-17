---
sidebar_label: move-item
title: move-item Event
description: You can learn about the move-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# move-item

### Description

@short: fires when moving an item

### Usage

~~~js
"move-item": ({
    id: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **move-item** event can take an object with the following parameters:

- `id` - (required) the ID of the moved item
- `parent` - (optional) the ID of the parent item
- `targetId` - (optional) the ID of the target item
- `reverse` - (optional) **true**, if the item is pasted before the target item; otherwise, **false**