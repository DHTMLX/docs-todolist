---
sidebar_label: assign-user
title: assign-user Event
description: You can learn about the assign-user event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# assign-user

### Description

@short: Fires when a user is assigned to a task

### Usage

~~~js
"assign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### Parameters

The callback of the **assign-user** event can take an object with the following parameters:

- `id` - (required) the id of a task
- `userId` - (required) the id of the user assigned to the task