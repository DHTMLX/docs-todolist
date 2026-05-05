---
sidebar_label: keypress-on-todo
title: keypress-on-todo Event
description: You can learn about the keypress-on-todo event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# keypress-on-todo

## Description

@short: Fires when a task is in focus at the time of using key navigation

## Usage

~~~js
"keypress-on-todo": ({
    code: string,
    event: KeyboardEvent
}) => void;
~~~

### Parameters

The callback of the **keypress-on-todo** event can take an object with the following parameters:

- `code` - (required) the code of the pressed key or a combination of the pressed keys in the *lower case*. The full lists of keyboard shortcuts and their codes are given [below](#keyboard-shortcuts)
- `event` - (required) a native [event object](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) 

:::info
To handle the inner events, you can use the [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// subscribe to the "keypress-on-todo" event
list.api.on("keypress-on-todo", ({code, event}) => {
    console.log("The", code, "key is pressed"); 
});
~~~

## Keyboard shortcuts

:::info
Refer to the [**Keyboard navigation**](guides/keyboard_navigation.md) guide for more information.
:::
