---
sidebar_label: update-project
title: update-project Event
description: You can learn about the update-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# update-project

### Description

@short: Fires when updating a project

### Usage

~~~js
"update-project": ({
    id: string | number,
    project: object
}) => void;
~~~

### Parameters

The callback of the **update-project** event can take an object with the following parameters:

- `id` - (required) the id of the updated project
- `project` - (required) the object of the updated project
    - `label` - (optional) the name of the project