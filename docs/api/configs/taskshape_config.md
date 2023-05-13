---
sidebar_label: taskShape
title: taskShape Config
description: You can learn about the taskShape config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# taskShape

### Description

@short: Optional. An object with settings for the appearance of tasks

### Usage

~~~js
taskShape?: {
    counter?: {
        type: "percentage" | "number", 
    },
    date?: {
        format: string,
        validate: boolean
    },
    completed?: {
        behavior: "manual" | "auto",
        taskHide: boolean
    },
    priority?: {
		cover: boolean,
		label: boolean
	}
};
~~~

### Default config

~~~js
taskShape: {
    counter: {
        type: "number", 
    },
    date: {
        format: "%d %M %Y",
        validate: true 
    },
    completed: {
        behavior: "auto",
        taskHide: false
    },
    priority: {
		cover: true,
		label: true
	}
}
~~~

### Parameters

To configure the task's appearance, you can specify the following parameters in the **taskShape** object:

- `counter` - (optional) an object with settings for the counter of completed first-level subtasks:
    - `type` - (required) the type of display of the counter. There are two types:
        - *"number"* - the value of the counter is displayed as a ratio between two numbers: the number of completed subtasks and the total number of subtasks
        - *"percentage"* - the value of the counter is displayed as a percentage
- `date` - (optional) an object with date settings:
    - `format` - (required) defines the format of displaying dates. By default, "%d %M %Y". The full list of available characters is given [below](#list-of-characters)
    - `validate` - (required) defines whether the **due_date** property of the [task object](api/configs/tasks_config.md) should be validated
- `completed` - (optional) an object with settings for managing the marking and display of completed tasks. It takes one parameter:
    - `behavior` - (required) sets behavior for the parent and child tasks when marking them as completed/uncompleted. There are two options:
        - *"auto"* - enables the **"auto"** mode:
            - When you mark all child tasks as completed, the parent task automatically becomes marked  as completed
            - When you mark the parent task as completed, all its child automatically become marked as completed
            - If you mark at least one child of a completed task as uncompleted, the task automatically becomes marked as uncompleted
            - If you mark the parent task as uncompleted, all its child automatically become uncompleted
        - *"manual"* - enables the **"manual"** mode. You need to manually mark each task (be it a child task or its parent) as completed
    - `taskHide` - (required) enables/disables the mode of hiding completed tasks from the list
- `priority` - (optional) - an object with settings that defines a priority appearance. Here you can specify the following parameters:
    - `cover` - (required) - specifies whether to show a priority cover
    - `label` - (required) - specifies whether to show a priority label

### Example

~~~js {10-26}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, priorities } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
	projects,
    priorities,
    taskShape: {
        counter: {
            type: "percentage",
        },
        date: {
            format: "%d %m %Y",
            validate: false,
        },
        completed: {
            behavior: "manual",
            taskHide: true,
        },
        priority: {
            cover: true,
            label: false,
        }
    }
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

### List of characters

DHTMLX To Do List uses the following characters for setting a date format:

| Character | Definition                                        |
|-----------|---------------------------------------------------|
| **%d**    | day as a number with leading zero, 01..31         |
| **%D**    | short name of the day, Su Mo Tu...                |
| **%l**    | full name of the day, Sunday Monday Tuesday...    |
| **%m**    | month as a number with leading zero, 01..12       |
| **%n**    | month as a number, 1..12                          |
| **%M**    | short name of the month, Jan Feb Mar...           |
| **%F**    | full name of the month, January February March... |
| **%y**    | year as a number, 2 digits                        |
| **%Y**    | year as a number, 4 digits                        |

:::tip
Check the [**Localization**](guides/localization.md) article to learn how to present the date labels in the necessary language
:::

**Change log:**

- The `priority` parameter was added in v1.2

**Related articles:**

- [Configuration](guides/configuration.md#tasks)
- [Show/hide completed tasks](guides/hide_completed_tasks.md)

**Related samples:**
- [To do list. Subtask counter and date format](https://snippet.dhtmlx.com/magidhw8)
- [To do list. Two variants of marking a parent task done](https://snippet.dhtmlx.com/5892fcr2)