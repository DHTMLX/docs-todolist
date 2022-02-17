---
sidebar_label: paste-item
title: paste-item Event
description: You can learn about the paste-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# paste-item

### Description

@short: fires when the item is pasted from the clipboard into the specified position

### Usage

~~~js
"paste-item": ({
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}) => void;
~~~

### Parameters

The callback of the **paste-item** event can take an object with the following parameters:

- `parent` - (optional) the ID of the future parent item
- `targetId` - (optional) the ID of the target item where the item is pasted
- `reverse` - (optional) **true**, if the item is pasted before the target item; otherwise, **false**