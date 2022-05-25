---
sidebar_label: add-task
title: add-task Event
description: You can learn about the add-task event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# add-task

### Description

@short: Fires when adding a new task

### Usage

~~~js
"add-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}) => void;
~~~

### Parameters

The callback of the **add-task** event can take an object with the following parameters:

- `id` - (required) the ID of the added task
- `parent` - (optional) the ID of the parent task
- `project` - (optional) the ID of the project
- `targetId` - (optional) the ID of the target task
- `reverse` - (optional) **true**, if the task is added before the target task; otherwise, **false**
- `task` - (required) the object of the added task

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

// subscribe to the "add-task" event
list.api.on("add-task", (obj) => {
    console.log("A new task is added", obj);
});
~~~