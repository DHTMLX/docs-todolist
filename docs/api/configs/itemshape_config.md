---
sidebar_label: itemShape
title: itemShape Config
description: You can learn about the itemShape config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# itemShape

### Description

@short: Optional. An object with configuration settings of the appearance of List items

### Usage

~~~js
itemShape?: {
    counter?: {
        type?: "percentage" | "number",
    }
}
~~~

### Parameters

To configure the item's appearance, you can specify the following parameters in the **itemShape** object:

- `counter` - (optional) an object with settings for the counter of completed child tasks:
    - `type` - (optional) the type of display of the counter. There are two types:
        - *"number"* - the value of the counter is displayed as a ratio between two numbers: the number of completed child tasks and the total number of child tasks
        - *"percentage"* - the value of the counter is displayed as a percentage