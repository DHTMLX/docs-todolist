---
sidebar_label: check-task
title: check-task Event
description: You can learn about the check-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# check-task

### Description

@short: fires when a task is marked as completed

### Usage

~~~js
"check-task": ({
    id: string | number,
}) => void;
~~~

### Parameters

The callback of the **check-task** event can take an object with the following parameters:

- `id` - (required) the id of a task