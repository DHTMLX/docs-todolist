---
sidebar_label: unselect-task
title: unselect-task Event
description: You can learn about the unselect-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# unselect-task

### Description

@short: fires when unselecting a task

### Usage

```js
"unselect-task": ({
    id: string | number,
}) => void;
```
### Parameters

The callback of the **unselect-task** event can take an object with the following parameters:

- `id` - (required) the id of a task
 