---
sidebar_label: users
title: users Config
description: You can learn about the users config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# users

### Description

@short: Optional. An array of user objects

### Usage

~~~js
users?: [
    {
        id: string | number,
        label: string,
        path?: string,
        color?: string,
    },
    {...} // more user objects
];
~~~

### Parameters

The **users** property presents an array of user objects. Each object includes the following set of parameters:

- `id` - (required) the id of the user
- `label` - (required) the description of the user
- `path` - (optional) a path to the image of the user
- `color` - (optional) the color of the user if the image isn't uploaded<br>
:::info
If the **color** parameter is not specified, the color from the default set of colors will be applied.
:::