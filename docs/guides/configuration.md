---
sidebar_label: Configuration
title: Configuration
description: You can learn about the To Do List Configuration in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Configuration

Adjust the settings of DHTMLX To Do List to fit your needs. The available configuration options let you:

- [configure the appearance of the badge that displays task completion progress](#counter-of-completed-subtasks)
- [configure the format of dates](#date-format)
- [configure or disable drag-n-drop of tasks](#drag-n-drop)
- [disable validation for due dates of tasks](#due-date-validation)
- [change the mode used for marking tasks done](#mode-of-marking-tasks-complete)
- [configure the appearance of the toolbar](#toolbar)
- [manage the history of changes](#history-of-changes)

You can also configure the mode of [hiding completed tasks](#mode-of-hiding-completed-tasks) and initialize the To Do List in the [readonly](#read-only-mode) mode.

:::tip
To change configuration parameters dynamically after initialization, use the [`setConfig()`](api/methods/setconfig_method.md) method. The method destroys the current component and creates a new one with the merged settings, so call the matching [Toolbar `setConfig()`](api/toolbar_api/methods/setconfig_method.md) afterward to rebind the Toolbar to the new API.
:::

## Tasks

### Counter of completed subtasks

Change the type of the counter that renders the progress of child task completion.

![counter](../assets/counter.png)

By default, each parent task shows a counter as a ratio of completed child tasks to the total number of child tasks.

To display the counter value as a percentage, set the `type: "percentage"` attribute inside the `counter` parameter of the [`taskShape`](api/configs/taskshape_config.md) property. The example below switches the counter to percentage mode:

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

### Date format

By default, the To Do List displays dates in the `"%d %M %Y"` format (for example, *09 Mar 2033*). To specify another format, use the `date` parameter of the [`taskShape`](api/configs/taskshape_config.md) property. The following snippet sets a slash-separated date format:

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

Check [the list of available characters](api/configs/taskshape_config.md#list-of-characters).

### Drag-n-drop

The default configuration of the To Do List includes drag-n-drop. [Select one or several tasks](../../#selecting-tasks) and drag them vertically at once. To create a copy of the selected tasks, hold the *Alt* key during drag-n-drop.

Use the [`drag`](api/configs/drag_config.md) property to:

- prevent collapsed tasks from expanding on hover during drag-n-drop
- disable drag-n-drop entirely

The example below keeps collapsed tasks closed when the user drags items over them:

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

The following snippet disables drag-n-drop entirely:

~~~js {6}
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        ...
    ],
    drag: false // true by default
});
~~~

Subscribe to drag events to track the drag-n-drop lifecycle:

- [`start-drag`](api/events/startdrag_event.md) — fires when the user starts dragging tasks; provides the source task id and the mode (`"move"` or `"copy"`)
- [`drag`](api/events/drag_event.md) — fires while the user drags tasks
- [`end-drag`](api/events/enddrag_event.md) — fires when the drag completes; provides the target id, drop position (`"top"`, `"bottom"`, `"in"`, or `null`), and the mode

The snippet below logs the start and end of a drag operation:

~~~js
list.api.on("start-drag", ({ start, mode }) => {
    console.log("drag started from", start, "in", mode, "mode");
});

list.api.on("end-drag", ({ target, dropPosition, mode }) => {
    console.log("dropped on", target, "at", dropPosition, "in", mode, "mode");
});
~~~

*Change log:* The `start-drag` and `end-drag` events were added in v1.1.

### Due date validation

If you specify a [due date](api/configs/tasks_config.md) for a task, due date validation tracks task completion. The due date appears in green until the task becomes overdue.

![due_date](../assets/due_date.png)

Dates of tasks that have not been completed by the due date appear in red.

![due_date](../assets/overdue_task.png)

This validation works by default.

To disable this functionality, set the `validate` setting inside the `date` parameter of the [`taskShape`](api/configs/taskshape_config.md) property to `false`. The code snippet below turns off due date validation:

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

In this configuration, the due dates appear grey.

### Mode of marking tasks complete

By default, the To Do List checks and unchecks tasks in the `"auto"` mode:

- mark all children of a task as completed → the parent task becomes completed automatically
- mark the parent task as completed → all child tasks become completed automatically
- mark at least one child of a completed task as uncompleted → the parent task becomes uncompleted automatically
- mark the parent task as uncompleted → all child tasks become uncompleted automatically

To disable this behavior and activate the `"manual"` mode, apply the `behavior: "manual"` setting of the `completed` parameter of the [`taskShape`](api/configs/taskshape_config.md) property. The example below activates manual mode:

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

## History of changes

The To Do List tracks the history of changes by default. Users can revert and repeat operations through the [`undo()`](api/methods/undo_method.md) and [`redo()`](api/methods/redo_method.md) methods.

Use the [`history`](api/configs/history_config.md) property to configure this behavior. The property accepts a boolean (short form) or an object with extended settings:

- `projects` — enable branching of history so that each project keeps a separate history; the whole app shares one history when set to `false`
- `limit` — maximum number of history operations to keep

The example below limits history to 20 operations and disables per-project branching:

~~~js {9}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});

list.addTask({ task: { text: "New task" } });
list.undo(); // revert the last action
list.redo(); // restore it
~~~

To disable history management entirely, set the property to `false`. The `undo()` and `redo()` methods become unavailable, and the corresponding Toolbar controls hide.

*Change log:* The `history` config, `undo()`, and `redo()` methods were added in v1.3.

## Toolbar

The toolbar is the top part of the To Do List, [initialized](guides/initialization.md#initialize-toolbar) and [configured](category/toolbar-properties.md) separately from the To Do List.

To change the default structure of the toolbar, use the [`items`](api/toolbar_api/configs/items_config.md) configuration property of the Toolbar component. The snippet below keeps only the search and combo controls:

~~~js
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search", "combo"]
});
~~~

The `items` property defines which controls appear in the toolbar. List the controls in the `items` array in the order you want them to appear.

## Mode of hiding completed tasks

The [Hide completed tasks](guides/hide_completed_tasks.md) section explains how to hide completed tasks from the To Do List.

## Read-only mode

The [Read-only mode](guides/readonly_mode.md) section explains how to make the To Do List read-only.
