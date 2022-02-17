---
sidebar_label: update-item
title: update-item Event
description: You can learn about the update-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-item

### Description

@short: fires when updating an item

### Usage

~~~js
"update-item": ({
    id: string | number;
    item: object;
}) => void;
~~~

### Parameters

The callback of the **update-item** event can take an object with the following parameters:

- `id` - (required) the id of the updated item
- `item` - (required) the object of the updated item