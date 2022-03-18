---
sidebar_label: updateProject()
title: updateProject Method
description: You can learn about the updateProject method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# updateProject()

### Description

@short: Updates configuration parameters of a project

### Usage

~~~js
updateProject({
    id: string | number,
    project: object
}): void;
~~~

### Parameters

- `id` - (required) the ID of the project to be updated
- `project` - (required) an object with a hash of project's parameters which need to be updated:
  - `label` - (optional) the name of the project