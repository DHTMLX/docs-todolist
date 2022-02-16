---
sidebar_label: unindent-item
title: unindent-item Event
description: You can learn about the unindent-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unindent-item

### Description

@short: fires when the nesting level of an item is promoted by one

### Usage

~~~js
"unindent-item": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **unindent-item** event can take an object with the following parameters:

- `id` - (required) the id of the item