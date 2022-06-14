---
sidebar_label: What's new
title: What's New
description: You can learn a new information about DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# What's new

## Version 1.0

Released on ...

### Initial functionality

- The ability [to load data for **tasks**, **projects**, **users**, **tags**, **activeProject**](guides/loading_data.md)
- The ability to work with **projects** in the following way:
    - [via API](guides/project_index.md):
        - [change the active project](api/methods/setproject_method.md)
        - [add new projects](api/methods/addproject_method.md)
        - [update projects](api/methods/updateproject_method.md)
        - [delete projects](api/methods/deleteproject_method.md)
    - [via UI](../#toolbar):
        - switch between projects
        - add, rename, or delete projects
        - search for the necessary projects
- The ability to work with **tasks** in the following way:
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
    - [via UI](../#managing-tasks):
        - add, copy and paste, select, move, indent/unindent, delete tasks
        - search for tasks (by symbols or hashtags)
        - edit tasks:
            - [edit the content of a task by double-click on it](guides/inline_editing.md): enter text, numbers, emojis, hashtags, dates
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
- Integration with other DHTMLX widgets
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





