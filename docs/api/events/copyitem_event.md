---
sidebar_label: copy-item
title: copy-item Event
description: You can learn about the copy-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copy-item

### Description

@short: fires when the item is copied into the clipboard

### Usage

~~~js
"copy-item": ({
    id: string | number;
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **copy-item** event takes an object with the following parameters:

- `id` - (required) the id of the item

:::info 
In case the copied item is also pasted from the clipboard into another position, the object can take three more parameters:
:::

- `parent` - (optional) the ID of the parent item
- `targetId` - (optional) the ID of the target item where the copied item is pasted
- `reverse` - (optional) **true**, if the copied item is pasted before the target item; otherwise, **false**
 