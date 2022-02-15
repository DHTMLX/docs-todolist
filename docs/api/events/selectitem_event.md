---
sidebar_label: select-item
title: select-item Event
description: You can learn about the select-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# select-item

### Description

@short: fires when selecting an item

### Usage

~~~js
"select-item": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **select-item** event can take an object with the following parameters:

- `id` - (required) the id of the item
 