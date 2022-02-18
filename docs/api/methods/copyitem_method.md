---
sidebar_label: copyItem()
title: copyItem Method
description: You can learn about the copyItem method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copyItem()

### Description

@short: copies an item into the clipboard and pastes into the specified position

### Usage

~~~js
copyItem({
    id?: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the item
- `parent` - (optional) the ID of the future parent item
- `targetId` - (optional) the ID of the target item where the copied item will be pasted
- `reverse` - (optional) defines the position where the copied item will be pasted: **before** the target item or **after** it