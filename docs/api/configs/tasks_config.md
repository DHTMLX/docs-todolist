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
        assigned?: (string | number)[],
        due_date?: Date | string,
        creation_date?: Date | string,
        completion_date?: Date | string,
        edited_date?: Date | string,
        [key: string]?: any
    },
    {...} // more task objects
];
~~~

### Parameters

The **tasks** property presents an array of task objects. Each object includes the following set of parameters:

- `id` - (optional) the id of a task
- `parent` - (optional) the id of the parent task. The value of the parameter is **null | undefined** for root tasks
- `project` - (optional) the id of the project where the task should be rendered. To initialize the projects, use the [projects](api/configs/projects_config.md) property.<br>
:::info
If there are projects initialized, specify the ID of the necessary project for the root task to display it in this project.<br><br>
If you don't specify the project ID for the root task or set it to *null* or *undefined*, the task will belong to the *No project* section.
:::<br>
- `text` - (optional) the text of the task
- `checked` - (optional) marks the task as completed
- `collapsed` - (optional) defines whether the task is collapsed initially (in case the task has subtasks)
- `assigned` - (optional) an array with ID(s) of the people assigned to the task. To initialize the list of assignees, use the [users](api/configs/users_config.md) property.
- `due_date` - (optional) the date when the task must be completed
- `creation_date` - (optional) the date of the task creation (auto-generated)
- `completion_date` - (optional) the date of the task completion (auto-generated when you mark a task as complete; auto-removed when you mark a task as incomplete)
- `edited_date` - (optional) the date of the task editing (auto-generated when you change the text of the task)
- `[key: string]`- (optional) a set of custom properties

### Example

~~~js {3-27,39}
const { ToDo, Toolbar } = todo;

const tasks = [
    {
        id: "1",
        project: "books",
        // parent: null,
        text: "Read books",
        collapsed: false,
        due_date: new Date()
    },
    {
        id: "2",
        project: "books",
        parent: "1",
        text: "Don Quixote",
        assigned: [ "user_1" ],
    },
    {
        id: "3",
        project: "books",
        parent: "1",
        text: "The Great Gatsby",
        assigned: [ "user_2" ],
        checked: true,
    },
];

const users = [
    { "id": "user_1", "label": "John" },
    { "id": "user_2", "label": "Kate" },
];

const projects = [
    { "id": "books", "label": "Books" },
];

const list = new ToDo("#root", {
	tasks,
	users,
	projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Change log:** The `creation_date`, `completion_date`, `edited_date` parameters were added in v1.1

**Related articles:** 
- [Loading and storing data](guides/loading_data.md)
- [Managing tasks](guides/task_index.md)