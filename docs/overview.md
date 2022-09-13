---
sidebar_label: To Do List overview
title: DHTMLX To Do List overview
slug: /
description: You can have an overview of DHTMLX JavaScript To Do List library in the DHTMLX documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# DHTMLX To Do List overview

DHTMLX To Do List is an easy to use component for maintaining the tasks. The To Do List widget is a great planning tool that helps to achieve your goals and save the time. The component allows you to create infinite number of projects, add unlimited number of tasks and subtasks there, drag and drop tasks to change their order or priority level, and much more.

## To Do List structure

The interface of the To Do List component consists of two parts: [Toolbar](#toolbar) and [List](#list).

### Toolbar

**Toolbar** is a top part of the To Do List which includes:

- a **combo** control for switching between projects, and searching for the necessary project

![toolbar](assets/toolbar.png)

- a **search bar** for searching for the needed tasks

![toolbar](assets/search_field.png)

- a **menu** for adding a new project, and renaming or deleting a currently active project

![toolbar](assets/project_menu.png)

:::info
You can change the toolbar structure by adding custom elements or changing the order of the built-in controls. Read more in the [**Configuration**](guides/configuration.md#toolbar) and [**Customization**](guides/customization.md#toolbar) sections.
:::

### List

The **list of tasks** is the main part of the To Do List interface intended for adding new tasks, editing, or deleting the existing ones. You can easily configure the appearance of tasks. Read more in the [Configuration](guides/configuration.md) section. 

![list](assets/list.png)

## Managing a task

### Adding a new task

- To add a new task into the beginning of the list, click on the **+ Add task** button in the top navigation panel

- To add a new task under the necessary one, select the task and press `Enter`

- To add a subtask, add a new task under the selected one and press `Tab`. Use `Shift + Tab` to promote the nesting level of the task

- To copy a task, click on it and press `Ctrl (Cmd) + C`. To paste a task, press `Ctrl (Cmd) + V`
- To copy a task down, click on it and press `Ctrl (Cmd) + D`
- To copy a task during drag-n-drop, press `Alt` while dragging-and-dropping it

### Editing a task

- To edit a task, double-click on the task record in the list or press `Ctrl (Cmd) + Enter`. Then, make the changes and press `Enter`
> It is possible to enter text, numbers, hashtags, dates. For more details, read [Supported formats of data](guides/inline_editing.md#supported-formats-of-data).

- To mark a task as complete/incomplete, click on the checkbox to the left of the task or press `Space`

- To collapse/expand a task with subtasks, click on the arrow icon to the left of the task or press `Arrow Left`/ `Arrow Right`

- To set a due date for the task, open the task menu, select **Set due date** and choose the date via the date picker

- To change the due date of the task, click the due date shown in the task and choose the necessary date 

- To assign people to the task, open the task menu, hover **Assign to** and select the necessary people in the dropdown list. To unassign people from the task, unselect them in the dropdown list

![menu](assets/menu.png)

### Moving a task

- To move a task withing a project, select the task and press `Ctrl (Cmd)` + `Arrow Up`/ `Arrow Down` or use drag-n-drop
- To move a task to another project, open the task menu, hover **Move to** and select the necessary project in the dropdown list

### Deleting a task

- To delete a task, select it and press `Backspace`/`Delete`

## Selecting tasks

- To select multiple tasks, you can:
    - hold down the `Ctrl (Cmd)` key and click on the desired tasks to select
    - hold down the `Ctrl (Cmd) + Shift` keys and click on the desired tasks to select
- To select a range of tasks, click on the first task, hold down the `Shift` key, then click on the last task and release `Shift`
- To select a task above/below the current one, press `Shift` + `Arrow Up`/ `Arrow Down` 

:::info
You can select the tasks only if they are visible on the page, i.e. tasks which stay visible after filtering or hiding completed tasks.
:::

## Managing multiple tasks

After you have selected multiple tasks, you can perform a set of operations over them, namely:

- To delete tasks by pressing `Backspace`/`Delete`
- To copy tasks via `Ctrl (Cmd) + C` and paste them via `Ctrl (Cmd) + V`. The tasks which are selected in the chaotic order will be structured depending on the structure of the data
- To copy tasks down via `Ctrl (Cmd) + D` 
- To drag-n-drop tasks
- To copy tasks via pressing `Alt` while dragging-and-dropping them
- To move tasks withing a project via `Ctrl (Cmd)` + `Arrow Up`/ `Arrow Down`
- To mark tasks as complete/incomplete by pressing `Space`
- To change the nesting level of tasks via `Tab`/ `Shift + Tab` 

:::note
The nesting level of the tasks which are selected with their parent will not change.
:::

:::info
Read the [**keyboard shortcuts**](api/events/keypressontodo_event.md#keyboard-shortcuts) section for more detail
:::

## What's next

Once you have a short overview of To Do List you are ready to learn how to display the component on the page. Follow the directions given in the [How to start](how_to_start/) article. 