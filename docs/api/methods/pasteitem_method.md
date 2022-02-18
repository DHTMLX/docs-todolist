---
sidebar_label: pasteItem()
title: pasteItem Method
description: You can learn about the pasteItem method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# pasteItem()

### Description

@short: pastes the copied item from the clipboard into the specified position

### Usage

~~~js
pasteItem({
    parent?: string | number;
    targetId?: string | number;
    reverse?: boolean;
}): void;
~~~

### Parameters

- `parent` - (optional) the ID of the future parent item
- `targetId` - (optional) the ID of the target item where the copied item will be pasted
- `reverse` - (optional) defines the position where the copied item will be pasted: **before** the target item or **after** it