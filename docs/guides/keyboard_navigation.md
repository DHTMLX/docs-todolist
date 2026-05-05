---
sidebar_label: Keyboard navigation
title: Keyboard navigation
description: You can learn about keyboard navigation in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Keyboard navigation

DHTMLX To Do List supports full keyboard navigation, allowing you to create, manage, and organize tasks without using a mouse.

Keyboard shortcuts become active when a task is in focus. To focus a task, click on it or use **ArrowUp** / **ArrowDown** to navigate the list.

:::tip
Key shortcuts are **not available** when the focus is set on the Search bar in the Toolbar.
:::

:::info
Keyboard navigation is not available when the [**readonly**](/api/configs/readonly_config/) mode is enabled.
:::

## Default mode

The following shortcuts work when the inline editor is **not** open.

### Navigation and selection

| Keyboard shortcut | Description |
| :--- | :--- |
| **ArrowUp** | Moves selection to the previous task |
| **ArrowDown** | Moves selection to the next task |
| **ArrowRight** | Expands a collapsed parent task |
| **ArrowLeft** | Collapses an expanded parent task. If the task is already collapsed or has no children, moves selection to the parent task |
| **Shift+ArrowUp** | Extends selection to the task above. If that task is already selected, deselects it |
| **Shift+ArrowDown** | Extends selection to the task below (including its children). If that task is already selected, deselects it |
| **Ctrl(Cmd)+Click** / **Ctrl(Cmd)+Shift+Click** | Selects or deselects multiple tasks with all their children. If a selected task has selected parents, deselects the task and its parents. If a selected task has selected children, deselects only the task itself |
| **Shift+Click** | Selects a range of tasks between the currently selected task and the clicked task |

:::info
To learn more about working with multiple selected tasks, see the [Multiselection](/guides/multiselection/) guide.
:::

### Task management

| Keyboard shortcut | Description |
| :--- | :--- |
| **Enter** | Creates a new task at the same level as the selected one, moves selection to it, and opens the editor |
| **Ctrl(Cmd)+Enter** | Opens the inline editor for the selected task |
| **Space** | Marks the selected task as complete. If already complete, marks it as incomplete |
| **Delete** / **Backspace** | Removes the selected task. After removal, selection moves down to the next task, or up to the parent task if no next task exists |
| **Tab** | Demotes the task — moves it one nesting level deeper |
| **Shift+Tab** | Promotes the task — moves it one nesting level up |
| **Ctrl+ArrowUp** | Moves the selected task up within the same level |
| **Ctrl+ArrowDown** | Moves the selected task down within the same level |
| **Ctrl(Cmd)+D** | Duplicates the selected task at the same level |
| **Ctrl(Cmd)+C** | Copies the selected task (including all child tasks) to the clipboard |
| **Ctrl(Cmd)+V** | Pastes the copied task at the same level as the currently selected task, preserving the original structure |
| **Escape** | Closes the context menu for the task if it is open. Pressing again closes the editor, resets any active filtering, and collapses search results in the Toolbar |

## Editing mode

The following shortcuts work when the inline editor is **open**.

| Keyboard shortcut | Description |
| :--- | :--- |
| **Enter** | Saves changes and closes the editor |
| **Shift+Enter** | Inserts a new paragraph within the editor |
| **Escape** | Closes the editor without saving any changes |

## Related articles

- [keypress-on-todo](/api/events/keypressontodo_event/) event — use this event to intercept key presses and implement custom behavior
- [Inline editing](/guides/inline_editing/) — learn how to manage the editor programmatically
- [Multiselection](/guides/multiselection/) — working with multiple selected tasks
