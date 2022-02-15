---
sidebar_label: expand-item
title: expand-item Event
description: You can learn about the expand-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# expand-item

### Description

@short: fires when expanding an item

### Usage

~~~js
"expand-item": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **expand-item** event can take an object with the following parameters:

- `id` - (required) the id of an expanded item
 