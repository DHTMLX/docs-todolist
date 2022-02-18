---
sidebar_label: click-menu-item
title: click-menu-item Event
description: You can learn about the click-menu-item event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# click-menu-item

### Description

@short: fires when the user clicks on the item of the menu

### Usage

~~~js
"click-menu-item": ({
    id: string | number,
    action: string,
    extra?: string,
}) => void;
~~~

### Parameters

The callback of the **click-menu-item** event can take an object with the following parameters:

- `id` - (required) the id of a list item
- `action` - (required) the ID of a clicked menu item
- `extra` - (optional) the ID of a clicked submenu item