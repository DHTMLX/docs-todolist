---
sidebar_label: close-item-editor
title: close-item-editor Event
description: You can learn about the open-item-editor event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# close-item-editor

### Description

@short: fires when closing the inline editor of an item

### Usage

~~~js
"close-item-editor": ({
    id: string | number,
    save: boolean,
}) => void;
~~~

### Parameters

The callback of the **close-item-editor** event can take an object with the following parameters:

- `id` - (required) the id of the item
- `save` - (required) **true** if the made changes have been saved after closing the editor; otherwise, **false**