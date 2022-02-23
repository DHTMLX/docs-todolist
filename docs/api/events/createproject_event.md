---
sidebar_label: create-project
title: create-project Event
description: You can learn about the create-project event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# create-project

### Description

@short: fires when creating a new project

### Usage

~~~js
"create-project": ({
    id: string | number;
}) => void;
~~~

### Parameters

The callback of the **create-project** event can take an object with the following parameters:

- `id` - (required) the ID of the created project