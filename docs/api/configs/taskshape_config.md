---
sidebar_label: taskShape
title: taskShape Config
description: You can learn about the taskShape config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# taskShape

### Description

@short: Optional. An object with configuration settings of the appearance of tasks

### Usage

~~~js
taskShape?: {
    counter?: {
        type?: "percentage" | "number",
    }
}
~~~

### Parameters

To configure the task's appearance, you can specify the following parameters in the **taskShape** object:

- `counter` - (optional) an object with settings for the counter of completed first-level subtasks:
    - `type` - (optional) the type of display of the counter. There are two types:
        - *"number"* - the value of the counter is displayed as a ratio between two numbers: the number of completed subtasks and the total number of subtasks
        - *"percentage"* - the value of the counter is displayed as a percentage