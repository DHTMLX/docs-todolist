---
sidebar_label: pasteTask()
title: pasteTask Method
description: You can learn about the pasteTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# pasteTask()

### Description

@short: pastes the copied task from the clipboard into the specified position

### Usage

~~~js
pasteTask({
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}): void;
~~~

### Parameters

- `parent` - (optional) the ID of the future parent task
- `targetId` - (optional) the ID of the target task where the copied task will be pasted
- `reverse` - (optional) defines the position where the copied task will be pasted: **before** the target task or **after** it