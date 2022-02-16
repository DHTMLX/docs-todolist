---
sidebar_label: indent-item
title: indent-item Event
description: You can learn about the indent-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# indent-item

### Description

@short: fires when the nesting level of an item is demoted by one

### Usage

~~~js
"indent-item": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **indent-item** event can take an object with the following parameters:

- `id` - (required) the id of the item