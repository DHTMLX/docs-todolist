---
sidebar_label: set-project
title: set-project Event
description: You can learn about the set-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# set-project

### Description

@short: fires when changing the active project

:::info
The event fires when you use the [setProject] method not the [activeProject] property to change the active project
:::

### Usage

~~~js
"set-project": ({
    id: string | number;
}) => void;
~~~

### Parameters

The callback of the **set-project** event can take an object with the following parameters:

- `id` - (required) the ID of a newly active project

