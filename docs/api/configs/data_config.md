---
sidebar_label: data
title: data Config
description: You can learn about the data config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# data

### Description

@short: Required. Specifies an array of data objects to set into the list

### Usage

~~~js
data: [
    {
        id?: string | number;
        parent?: string | number;
        description?: string;
        checked?: boolean;
        collapsed?: boolean;
        assigned?: string[] | number[];
        [key: string]?: any;
    },
    {...} // more data objects
];
~~~

### Parameters

The **data** property presents an array of task objects. Each object includes the following set of parameters:

- `id` - (optional) the id of the item
- `parent` - (optional) the id of the parent item. The value of the parameter is **undefined** for root items
- `description`- (optional) the text of the item; **""** by default
- `checked`- (optional) marks the item as completed; **false** by default
- `collapsed`- (optional) defines whether the item is collapsed (in case the item has child items), **false** by default
- `assigned`- (optional) an array with id(s) of the users assigned to the item
- `[key: string]`- (optional) a set of custom properties