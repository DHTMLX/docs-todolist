---
sidebar_label: check-item
title: check-item Event
description: You can learn about the check-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# check-item

### Description

@short: fires when the item is marked as completed

### Usage

~~~js
"check-item": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **check-item** event can take an object with the following parameters:

- `id` - (required) the id of the item