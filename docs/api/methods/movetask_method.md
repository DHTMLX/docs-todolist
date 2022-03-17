---
sidebar_label: moveTask()
title: moveTask Method
description: You can learn about the moveTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# moveTask()

### Description

@short: Moves a task to the specified position

A parent task is moved together with its children.

### Usage

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameters

- `id` - (optional) the ID of the task to be moved
- `project` - (optional) the ID of the project<br>
:::info
To move a task to the project-free section, specify the value of the parameter to **null**
:::
- `parent` - (optional) the ID of the parent task
- `targetId` - (optional) the ID of the target task where the moved task will be pasted
- `reverse` - (optional) defines the position where the moved task will be pasted: **before** or **after** the target task