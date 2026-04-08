---
sidebar_label: Configuration
title: Configuration
description: You can learn about the To Do List Configuration in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Configuration

DHTMLX To Do List provides the following configuration options:

- [Configure the subtask counter](#configure-the-subtask-counter) — set the progress display type for child tasks
- [Set the date format](#set-the-date-format) — define how dates appear in the list
- [Configure drag-n-drop](#configure-drag-n-drop) — control drag behavior or disable it
- [Configure due date validation](#configure-due-date-validation) — track task completion against due dates
- [Set the task completion mode](#set-the-task-completion-mode) — switch between auto and manual completion
- [Configure priority appearance](#configure-priority-appearance) — control priority cover and label visibility
- [Configure the toolbar](#toolbar) — customize toolbar controls and order
- [Hide completed tasks](#hide-completed-tasks) — remove completed tasks from view
- [Enable read-only mode](#enable-read-only-mode) — prevent task editing

## Tasks

Use the [`taskShape`](/api/configs/taskshape_config/) property to adjust task appearance and behavior.

### Configure the subtask counter

Use the `counter` parameter of `taskShape` to configure the progress counter for child tasks.

![counter](/assets/counter.png)

By default, the counter shows completed vs. total child tasks as a ratio.

To display progress as a percentage, set `type` to `"percentage"` in the `counter` parameter of [`taskShape`](/api/configs/taskshape_config/):

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        counter: {
            type: "percentage" // "number" by default
        }
    }
});
~~~

**Related sample:** [To do list. Subtask counter and date format](https://snippet.dhtmlx.com/magidhw8)

### Set the date format

By default, To Do List displays dates in the `"%d %M %Y"` format (for example, 09 Mar 2033). To specify another format, use the `date` parameter of [`taskShape`](/api/configs/taskshape_config/):

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d/%m/%Y", // "%d %M %Y" by default
            validate: true
        }
    }
});
~~~

**Related sample:** [To do list. Subtask counter and date format](https://snippet.dhtmlx.com/magidhw8)

Check [the list of available characters](/api/configs/taskshape_config/#list-of-characters).

### Configure drag-n-drop

To Do List includes drag-n-drop by default. [Select one or several tasks](../../#selecting-tasks) and drag them vertically. To copy the selected tasks, hold *Alt* during drag-n-drop.

Use the [`drag`](/api/configs/drag_config/) property to configure drag-n-drop behavior.

#### Prevent collapsed task expansion

To prevent collapsed tasks from expanding when hovered during drag-n-drop, set `expand` to `false`:

~~~js {7}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: {
        expand: false // true by default
    }
});
~~~

#### Disable drag-n-drop

To disable drag-n-drop entirely, set `drag` to `false`:

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // true by default
});
~~~

### Configure due date validation

If you specify a [due date](/api/configs/tasks_config/) for a task, due date validation tracks whether the task is completed on time. The due date appears green until the task becomes overdue.

![due_date](/assets/due_date.png)

Overdue task dates are highlighted in red.

![due_date](/assets/overdue_task.png)

Validation is active by default. To disable it, set `validate` to `false` in the `date` parameter of [`taskShape`](/api/configs/taskshape_config/):

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        date: {
            format: "%d %M %Y",
            validate: false // true by default
        }
    }
});
~~~

In this configuration, due dates appear grey.

### Set the task completion mode

Use the `completed` parameter of [`taskShape`](/api/configs/taskshape_config/) to control how marking tasks done affects parent and child tasks.

#### Auto mode

By default, task completion uses the `"auto"` mode:

- If you mark all child tasks as completed, the parent task becomes completed.
- If you mark the parent task as completed, all its children become completed.
- If you mark at least one child as uncompleted, the parent task becomes uncompleted.
- If you mark the parent task as uncompleted, all its children become uncompleted.

#### Manual mode

To activate the `"manual"` mode, set `behavior` to `"manual"` in the `completed` parameter of [`taskShape`](/api/configs/taskshape_config/):

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            behavior: "manual" // "auto" by default
        }
    }
});
~~~

**Related sample:** [To do list. Two variants of marking a parent task done](https://snippet.dhtmlx.com/5892fcr2)

### Configure priority appearance

Use the `priority` parameter of the [`taskShape`](/api/configs/taskshape_config/) property to control how task priorities appear in the list.

~~~js {5-10}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        priority: {
            cover: true, // show priority color cover
            label: true  // show priority label
        }
    }
});
~~~

## Toolbar

The Toolbar is the top part of To Do List. Initialize and configure it [separately](/guides/initialization/#initialize-toolbar) from the main component.

The `items` property accepts the following built-in controls: `"combo"`, `"search"`, `"menu"`, `"undo"`, and `"redo"`. You can also pass a custom string or function to add a custom control.

To change the toolbar structure, use the [`items`](/api/toolbar_api/configs/items_config/) property of the Toolbar component:

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

Use `items` to define which controls appear and in what order.

## Hide completed tasks

To hide completed tasks by default on initialization, set `taskHide` to `true` in the `completed` parameter of [`taskShape`](/api/configs/taskshape_config/):

~~~js {5-9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    taskShape: {
        completed: {
            taskHide: true // false by default
        }
    }
});
~~~

Read the details on advanced options for hiding completed tasks in the [related section](/guides/hide_completed_tasks/).

## Enable read-only mode

Read the details on how to make the To Do List read-only in the [related section](/guides/readonly_mode/).
