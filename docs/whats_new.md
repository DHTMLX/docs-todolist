---
sidebar_label: What's new
title: What's New
description: You can learn a new information about DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# What's new

If you are updating To Do List from an older version, check [Migration to newer version](/migration/) for details.

## Version 1.3.1

Released on April 3, 2025

### Fixes

- The build does not include the *todo.es.d.ts* and *todo.d.ts* files of imported libraries

## Version 1.3

Released on February 27, 2025

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-3/)

### New functionality

- You can manage the history of changes in a separate project or in the whole app via the [`history`](/api/configs/history_config) property and [`undo()`](/api/methods/undo_method)/[`redo()`](/api/methods/redo_method) methods
- You can customize a context menu via the [`menu`](/api/configs/menu_config) property ([Example](https://snippet.dhtmlx.com/slpjstbb))

### New API

- The [`history`](/api/configs/history_config) property allows you to enable/disable the history of changes in a separate project or in the whole app and limit the number of stored actions
- The [`undo()`](/api/methods/undo_method)/[`redo()`](/api/methods/redo_method) methods allows you to manage the history of changes
- The [`menu`](/api/configs/menu_config) property allows you to customize a context menu ([Example](https://snippet.dhtmlx.com/cmfqmg00))

### Updates

- The [`getState()`](/api/internal/getstate_method) and [`getReactiveState()`](/api/internal/getreactivestate_method) methods return the `historyState` object
- The [`items`](/api/toolbar_api/configs/items_config) property of Toolbar was extended by `"undo"` and `"redo"` parameters that allow you to display controls for managing history of changes
- The **POST** [`/tasks`](/api/rest_api/routes/post_routes/post_tasks) and [`/projects`](/api/rest_api/routes/post_routes/post_projects) routes were extended by the `id` parameter, that allows you to manage history changes on backend
- The **DELETE** [`/tasks`](/api/rest_api/routes/delete_routes/delete_tasks) route was extended by the `batch` payload. The `id` parameter related to the task to be deleted become optional. You can delete multiple tasks by once

### Fixes

- Careless dragging of tasks can leave clones all over the window
- Tasks of a new project are not displayed after switch to another project
- Calendar popup for the due date does not close on click outside

## Version 1.2.12

Released on November 15, 2024

### Fixes

- Menus do not hide on an outer click

## Version 1.2.10

Released on September 19, 2024

### Fixes

- RestDataProvider API. Incorrect processing of temp IDs stored in arrays before sending to the server

## Version 1.2.9

Released on August 26, 2024

### Fixes

- Script error when sorting an empty project
- Submenus don't work on touch devices
- Incorrect types for the `api` object

## Version 1.2.8

Released on February 29, 2024

### Fixes

- Broken build on npm server

## Version 1.2.7

Released on February 6, 2024

### Fixes

- Problem with pressing Enter when renaming a project
- Problem with pressing Enter when searching for projects
- Overriding wx styles when using with complex widgets. Refer to the [Stylization](/guides/stylization/) guide for details

## Version 1.2.5

Released on December 7, 2023

### Fixes

- The script error occurs when calling the unused menu item

## Version 1.2.4

Released on December 7, 2023

### Fixes

- Moving items between new projects doesn't work

## Version 1.2.3

Released on September 13, 2023

### Updates

- An ability to import component as ES module

## Version 1.2.1

Released on August 28, 2023

### Fixes

- Move a datepicker to the top level
- When opening the calendar in a task, the task text displays above the calendar
- When opening a context menu, it has wrong positioning

## Version 1.2

Released on May 16, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-2/)

### New functionality

- You can prioritize your tasks using context menu or the corresponding API ([Example](https://snippet.dhtmlx.com/5cymicwt))
- You can sort tasks by priorities
- [Multiuser backend](/guides/working_with_server/#multiuser-backend) allows you to track changes of other users in a real time ([Example](https://snippet.dhtmlx.com/82ayq2lk))
- Displaying To Do List tasks in a Table view. Integration with the [JavaScript DataGrid](https://dhtmlx.com/docs/products/dhtmlxGrid/) component ([Example](https://snippet.dhtmlx.com/e97idjs8))

### New API

The [`priorities`](/api/configs/priorities_config) property allows you to apply an initial priority to the tasks

### Updates

- The [`tasks`](/api/configs/tasks_config) property was extended by the ***priority*** parameter. This parameter allows users to specify an initial priority
- The [`taskShape`](/api/configs/taskshape_config) property was extended by the ***priority*** parameter. This parameter allows user to manage the priority appearance of the card
- The extended list of [localized options](/guides/localization/)
### Fixes

- Setting users without **users[n].avatar** property invokes an error

## Version 1.1

Released on October 10, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-to-do-list-1-1/)

### Breaking changes

The new release introduces some changes to the `taskShape` property. Check the [Migration article](/migration/#10---11) to keep in step with the latest version.

### New functionality

- Drag-n-drop:
    - the ability to [configure or disable the functionality](/guides/configuration/#drag-n-drop)
    - new events: [`start-drag`](/api/events/startdrag_event/), [`drag`](/api/events/drag_event/), [`end-drag`](/api/events/enddrag_event/)
- Multi-select and bulk operations:
    - the ability to [select](../#selecting-multiple-tasks) and [manage](../#managing-multiple-tasks) multiple tasks using keyboard shortcuts
    - the ability to manage multiple tasks via menu
    - the ability to [select and manage multiple tasks via API](/guides/multiselection/):
        - new [`selected`](/api/configs/selected_config/) property
        - new `join` parameter for the methods: [`selectTask()`](/api/methods/selecttask_method/), [`copyTask()`](/api/methods/copytask_method/)
        - new `join` parameter for the events: [`select-task`](/api/events/selecttask_event/), [`copy-task`](/api/events/copytask_event/)
        - new method: [`eachSelected()`](/api/methods/eachselected_method/)
        - updated method: [`getSelection()`](/api/methods/getselection_method/) 
    - the ability to unselect all tasks via the [`unselectTask()`](/api/methods/unselecttask_method/) method
- [To Do List with hidden completed tasks](/guides/hide_completed_tasks/#initial-mode)
- [Showing/hiding completed tasks](/guides/hide_completed_tasks/#switching-between-modes):
    - via Toolbar menu
    - via API:
        - new methods: [`hideCompletedTasks()`](/api/methods/hidecompletedtasks_method/), [`showCompletedTasks()`](/api/methods/showcompletedtasks_method/)
        - new events: [`hide-completed-tasks`](/api/events/hidecompletedtasks_event/), [`show-completed-tasks`](/api/events/showcompletedtasks_event/)
        - new `hideCompleted` parameter for the methods: [`hasChildren()`](/api/methods/haschildren_method/), [`getChildrenIds()`](/api/methods/getchildrenids_method/)
- [Task sorting](/guides/sorting_filtering_tasks/#sorting-tasks):
    - via Toolbar menu
    - via API:
        - new method: [`setSort()`](/api/methods/setsort_method/)
        - new event: [`set-sort`](/api/events/setsort_event/)
        - extended list of parameters of the [`tasks`](/api/configs/tasks_config/) property
- New events for managing the menu: [`open-menu`](/api/events/openmenu_event/) and [`close-menu`](/api/events/closemenu_event/)

### Updates

- [Extended list of locale options](/guides/localization/)

## Version 1.0.1

Released on July 5, 2022

### Fixes

- Significantly improved work of API

## Version 1.0

Released on June 20, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-list-1-0-advanced-task-assignment-inline-editing-handy-keyboard-navigation/)

### Initial functionality

- The ability [to load data for **tasks**, **projects**, **users**, **tags**, **activeProject**](/guides/loading_data/)
- The ability to work with **projects** in the following ways:
    - [via API](/guides/project_index/):
        - [change the active project](/api/methods/setproject_method/)
        - [add new projects](/api/methods/addproject_method/)
        - [update projects](/api/methods/updateproject_method/)
        - [delete projects](/api/methods/deleteproject_method/)
    - [via UI](../#toolbar):
        - switch between projects
        - add, rename, or delete projects
        - search for the necessary projects
- The ability to work with **tasks** in the following ways:
    - [via API](/guides/task_index/):
        - [add new tasks](/api/methods/addtask_method/)
        - [update tasks](/api/methods/updatetask_method/)
        - [delete tasks](/api/methods/deletetask_method/)
        - [move tasks](/api/methods/movetask_method/)
        - [copy](/api/methods/copytask_method/) and [paste](/api/methods/pastetask_method/) tasks
        - [check](/api/methods/checktask_method/) and [uncheck](/api/methods/unchecktask_method/) tasks
        - [collapse](/api/methods/collapsetask_method/) and [expand](/api/methods/expandtask_method/) tasks
        - [select](/api/methods/selecttask_method/) and [unselect](/api/methods/unselecttask_method/) tasks
        - change the indent level of tasks: [indentTask()](/api/methods/indenttask_method/) / [unindentTask()](/api/methods/unindenttask_method/)
        - [assign](/api/methods/assignuser_method/) and [unassign](/api/methods/unassignuser_method/) users
        - [filter tasks](/api/methods/setfilter_method/)
    - [via UI](../#managing-a-task):
        - add, copy and paste, select, move, indent/unindent, delete tasks
        - search for tasks (by symbols or hashtags)
        - edit tasks:
            - [edit the content of a task by double-click on it](/guides/inline_editing/): enter text, numbers, hashtags, dates
            - assign/unassign users
            - set due date
- The ability to configure **tasks appearance and behavior**:
    - [counter of completed subtasks](/guides/configuration/#counter-of-completed-subtasks)
    - [date format](/guides/configuration/#date-format)
    - [due date validation](/guides/configuration/#due-date-validation)
    - [mode of marking tasks complete](/guides/configuration/#mode-of-marking-tasks-complete)
- The ability to [configure](/guides/configuration/#toolbar) and [customize](/guides/customization/#toolbar) **Toolbar**
- [Keyboard navigation](/api/events/keypressontodo_event/#keyboard-shortcuts)
- [Read-only mode](/guides/readonly_mode/)
- [Localization](/guides/localization/)
- [Backend integration](/guides/working_with_server/) (Go and Node)
- [Integration with other DHTMLX widgets](/guides/integration/)
- Cross browser compatibility
- Touch support

### API

- **To Do List API**: 
    - [methods](/api/overview/methods_overview/)
    - internal API:
        - [Event Bus methods](/category/event-bus-methods/)
        - [State methods](/category/state-methods/)
    - [events](/api/overview/events_overview/)
    - [properties](/api/overview/configs_overview/)
- **Toolbar API**:
    - [methods](/category/toolbar-methods/)
    - [properties](/category/toolbar-properties/)
- **RestDataProvider API**:
    - [REST methods](/category/rest-methods/)
