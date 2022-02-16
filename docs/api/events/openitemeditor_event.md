---
sidebar_label: open-item-editor
title: open-item-editor Event
description: You can learn about the open-item-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# open-item-editor

### Description

@short: fires when opening the inline editor of an item

### Usage

~~~js
"open-item-editor": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **open-item-editor** event can take an object with the following parameters:

- `id` - (required) the id of the item
 