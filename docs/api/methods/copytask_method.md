---
sidebar_label: copyTask()
title: copyTask Method
description: You can learn about the copyTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# copyTask()

### Description

@short: Copies a task into the clipboard and pastes into the specified position

:::info
The method lets you copy/paste a task or just copy it into the clipboard
 
The method copies a task together with all its children
:::

### Usage

~~~js
copyTask({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the ID of a task

:::info
If you need to copy (and paste!) a task, pass the following parameters to the method to define a new position of the task:
:::

- `parent` - (optional) the ID of the future parent task
- `project` - (optional) the ID of the project where the task should be pasted
- `targetId` - (optional) the ID of the target task where the copied task will be pasted
- `reverse` - (optional) defines the position where the copied task will be pasted: **before** the target task or **after** it