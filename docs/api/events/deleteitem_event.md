---
sidebar_label: delete-item
title: delete-item Event
description: You can learn about the delete-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# delete-item

### Description

@short: fires when removing an item

### Usage

~~~js
"delete-item": ({
    id: string | number;
}) => void;
~~~

### Parameters

The callback of the **delete-item** event can take an object with the following parameters:

- `id` - (required) the ID of the removed item