---
sidebar_label: tasks
title: tasks Config
description: You can learn about the tasks config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# tasks

### Description

@short: Required. Specifies an array of task objects to set into the list

### Usage

~~~js
tasks: [
    {
        id?: string | number,
        parent?: string | number,
        project?: string | number,
        text?: string,
        checked?: boolean,
        collapsed?: boolean,
        assigned?: string[] | number[],
        due_date?: Date | string,
        [key: string]?: any
    },
    {...} // more task objects
];
~~~

### Parameters

The **tasks** property presents an array of task objects. Each object includes the following set of parameters:

- `id` - (optional) the id of a task
- `parent` - (optional) the id of the parent task. The value of the parameter is **undefined** for root tasks
- `project` - (optional) the id of the project where the task should be rendered. To initialize the projects, use the **projects** property.<br>
:::info
If there are projects initialized, specify the ID of the necessary project for the root task to display it in this project.<br><br>
If you don't specify the project ID for the task or set it to *null* or *undefined*, the task will belong to the section without a project.
:::<br>
- `text`- (optional) the text of the task; **""** by default
- `checked`- (optional) marks the task as completed; **false** by default
- `collapsed`- (optional) defines whether the task is collapsed initially (in case the task has subtasks), **false** by default
- `assigned`- (optional) an array with id(s) of the users assigned to the task
- `due_date` - (optional) the date when the task must be completed
- `[key: string]`- (optional) a set of custom properties