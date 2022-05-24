---
sidebar_label: addTask()
title: addTask() Method
description: You can learn about the addTask method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# addTask()

### Description

@short: Adds a new task into the list

### Usage

~~~js
addTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}): void;
~~~

### Parameters

- `id` - (optional) the ID of a new task
- `parent` - (optional) the ID of the parent task
- `project` - (optional) the ID of the project. By default, the ID of the [currently active project](../../configs/activeproject_config/)<br>
:::info
In case the active project is specified but you need to add a task into the *No project* section, specify the value of the parameter to **null**
:::
- `targetId` - (optional) the ID of the future target task where the new task will be added
- `reverse` - (optional) defines the position where the new task will be added: **before** or **after** the target task
- `task` - (required) the data object of the new task. The full list of the task parameters can be found [here](api/configs/tasks_config.md)

:::info
If you specify the **id**, **parent**, **project** parameters of the method, you don't need to specify them in the task object
:::

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
	projects,
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// add a new task
list.addTask({
	id: "4",
    project: "books",
    parent: "1",
    targetId: "2",
    reverse: true,
    task: {
        text: "The Count of Monte Cristo",
        assigned: ["user_1", "user_2"],
    }
});
~~~