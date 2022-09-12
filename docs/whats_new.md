---
sidebar_label: What's new
title: What's New
description: You can learn a new information about DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# What's new

If you are updating To Do List from an older version, check [Migration to newer version](migration.md) for details.

## Version 1.1

Released on

## New functionality

- new `taskHide` option of the `completed` parameter of the [taskShape](api/configs/taskshape_config.md) property. 
- The ability to initialize To Do List in the mode when [all completed tasks will be hidden](guides/configuration.md#mode-of-displaying-completed-tasks)
- the ability to show or hide completed tasks via [API methods](guides/task_operations.md#hidingshowing-completed-tasks) or via Toolbar menu

- new `hideCompleted` parameter of the [`hasChildren()`](api/methods/haschildren_method.md) method
- new `hideCompleted` parameter of the [`getChildrenIds()`](api/methods/getchildrenids_method.md) method

## Version 1.0.1

Released on July 5, 2022

### Fixes

- Significantly improved work of API

## Version 1.0

Released on June 20, 2022

### Initial functionality

- The ability [to load data for **tasks**, **projects**, **users**, **tags**, **activeProject**](guides/loading_data.md)
- The ability to work with **projects** in the following ways:
    - [via API](guides/project_index.md):
        - [change the active project](api/methods/setproject_method.md)
        - [add new projects](api/methods/addproject_method.md)
        - [update projects](api/methods/updateproject_method.md)
        - [delete projects](api/methods/deleteproject_method.md)
    - [via UI](../#toolbar):
        - switch between projects
        - add, rename, or delete projects
        - search for the necessary projects
- The ability to work with **tasks** in the following ways:
    - [via API](guides/task_index.md):
        - [add new tasks](api/methods/addtask_method.md)
        - [update tasks](api/methods/updatetask_method.md)
        - [delete tasks](api/methods/deletetask_method.md)
        - [move tasks](api/methods/movetask_method.md)
        - [copy](api/methods/copytask_method.md) and [paste](api/methods/pastetask_method.md) tasks
        - [check](api/methods/checktask_method.md) and [uncheck](api/methods/unchecktask_method.md) tasks
        - [collapse](api/methods/collapsetask_method.md) and [expand](api/methods/expandtask_method.md) tasks
        - [select](api/methods/selecttask_method.md) and [unselect](api/methods/unselecttask_method.md) tasks
        - change the indent level of tasks: [indentTask()](api/methods/indenttask_method.md) / [unindentTask()](api/methods/unindenttask_method.md)
        - [assign](api/methods/assignuser_method.md) and [unassign](api/methods/unassignuser_method.md) users
        - [filter tasks](api/methods/setfilter_method.md)
    - [via UI](../#managing-a-task):
        - add, copy and paste, select, move, indent/unindent, delete tasks
        - search for tasks (by symbols or hashtags)
        - edit tasks:
            - [edit the content of a task by double-click on it](guides/inline_editing.md): enter text, numbers, hashtags, dates
            - assign/unassign users
            - set due date
- The ability to configure **tasks appearance and behavior**:
    - [counter of completed subtasks](guides/configuration.md#counter-of-completed-subtasks)
    - [date format](guides/configuration.md#date-format)
    - [due date validation](guides/configuration.md#due-date-validation)
    - [mode of marking tasks complete](guides/configuration.md#mode-of-marking-tasks-complete)
- The ability to [configure](guides/configuration.md#toolbar) and [customize](guides/customization.md#toolbar) **Toolbar**
- [Keyboard navigation](api/events/keypressontodo_event.md#keyboard-shortcuts)
- [Read-only mode](guides/readonly_mode.md)
- [Localization](guides/localization.md)
- [Backend integration](guides/working_with_server.md) (Go and Node)
- [Integration with other DHTMLX widgets](guides/integration.md)
- Cross browser compatibility

### API

- **To Do List API**: 
    - [methods](api/overview/methods_overview.md)
    - internal API:
        - [Event Bus methods](category/event-bus-methods.md)
        - [State methods](category/state-methods.md)
    - [events](api/overview/events_overview.md)
    - [properties](api/overview/configs_overview.md)
- **Toolbar API**:
    - [methods](category/toolbar-methods.md)
    - [properties](category/toolbar-properties.md)
- **RestDataProvider API**:
    - [REST methods](category/rest-methods.md)





