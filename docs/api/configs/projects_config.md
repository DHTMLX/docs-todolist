---
sidebar_label: projects
title: projects Config
description: You can learn about the projects config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# projects

### Description

@short: Optional. Specifies an array of project objects to set into the list

### Usage

~~~js
projects?: [
    {
        id: string | number,
        label: string
    },
    {...} // more projects
];
~~~

### Parameters

- `id` - (required) the id of a project
- `label` - (required) the name of a project. It is displayed in the list of available projects