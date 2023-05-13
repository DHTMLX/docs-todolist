---
sidebar_label: priorities
title: priorities Config
description: You can learn about the priorities config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# priorities

### Description

@short: Optional. Specifies an array of objects containing the priorities data

### Usage

~~~js
priorities?: [
    {
        id: number,
        label: string,
        color?: string,
        hotkey?: string,
    },
    { ... } // more priorities items
];
~~~

### Parameters

The **priorities** property presents an array of priorities objects. Each object includes the following set of parameters:

- `id` - (required) the priority id
- `label` - (required) the priority label
- `hotkey` - (optional) a hotkey combination to apply a priority
- `color` - (optional) the priority color

:::info
If the **color** parameter is not specified, the widget will apply one of the default colors:

`"#ff5252", "#ffc975", "#0ab169", "#607D8B", "#00C7B5",` 

` "#03A9F4", "#9575CD", "#F06292", "#FF9800"`
:::

### Default config

~~~jsx {}
const defaultPriorities: [
    {
        id: 1,
        label: "High",
        color: "#ff5252",
    },
    {
        id: 2,
        label: "Medium",
        color: "#ffc975",
    },
    {
        id: 3,
        label: "Low",
        color: "#0ab169",
    },
];
~~~

### Example

~~~js {7-28,34}
const { ToDo } = todo;

const tasks = [ ... ];
const users = [ ... ];
const projects = [ ... ];

const priorities = [
    {
        id: 1,
        label: "Critical",
        color: "#f33",
    },
    {
        id: 2,
        label: "Major",
        color: "rgba(255, 225, 0, 1)",
    },
    {
        id: 3,
        label: "Normal",
        color: "hsla(170, 100%, 40%, 1)",
    },
    {
        id: 4,
        label: "Minor",
        hotkey: "Alt+M",
    },
];

const list = new ToDo ("#root", {
	tasks,
	users,
	projects,
    priorities
});
~~~

**Related articles:**
- [Loading and storing data](guides/loading_data.md)
