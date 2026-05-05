---
sidebar_label: Keyboard navigation
title: Keyboard navigation
description: Reference of keyboard shortcuts in DHTMLX JavaScript To Do List — navigation, multiselection, task management, and inline editing.
---

# Keyboard navigation

DHTMLX To Do List supports full keyboard navigation, so you can create, manage, and organize tasks without a mouse.

Keyboard shortcuts work only when a task is focused. To focus a task, click on it or use <kbd>ArrowUp</kbd> / <kbd>ArrowDown</kbd> to navigate through the list.

:::tip
Keyboard shortcuts do **not** work when the Search bar in the Toolbar is focused.
:::

:::info
Keyboard navigation does not work in [`readonly`](api/configs/readonly_config.md) mode.
:::

## Default mode

The following shortcuts work when the inline editor is **closed**.

### Navigation and selection

| Keyboard shortcut | Description |
| :---------------- | :---------- |
| <kbd>ArrowUp</kbd> | Moves selection to the previous task |
| <kbd>ArrowDown</kbd> | Moves selection to the next task |
| <kbd>ArrowRight</kbd> | Expands a collapsed parent task |
| <kbd>ArrowLeft</kbd> | Collapses an expanded parent task. Otherwise (already collapsed or no children), moves selection to the parent task |
| <kbd>Shift</kbd>+<kbd>ArrowUp</kbd> | Extends selection to the task above. If that task is already selected, deselects it |
| <kbd>Shift</kbd>+<kbd>ArrowDown</kbd> | Extends selection to the task below (including its children). If that task is already selected, deselects it |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Click</kbd> / <kbd>Ctrl(Cmd)</kbd>+<kbd>Shift</kbd>+<kbd>Click</kbd> | Selects or deselects multiple tasks together with their children:<br/>• if the task has selected parents — deselects the task and its parents<br/>• if the task has selected children — deselects only the task itself |
| <kbd>Shift</kbd>+<kbd>Click</kbd> | Selects a range of tasks between the currently selected task and the clicked task |

:::info
To learn more about working with multiple selected tasks, see the [Multiselection](guides/multiselection.md) guide.
:::

### Task management

| Keyboard shortcut | Description |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | Creates a new task at the same level as the selected one, moves selection to it, and opens the editor |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>Enter</kbd> | Opens the inline editor for the selected task |
| <kbd>Space</kbd> | Marks the selected task as complete. If already complete, marks it as incomplete |
| <kbd>Delete</kbd> / <kbd>Backspace</kbd> | Removes the selected task. After removal, selection moves down to the next task, or up to the parent task if no next task exists |
| <kbd>Tab</kbd> | Demotes the task — moves it one nesting level deeper |
| <kbd>Shift</kbd>+<kbd>Tab</kbd> | Promotes the task — moves it one nesting level up |
| <kbd>Ctrl</kbd>+<kbd>ArrowUp</kbd> | Moves the selected task up within the same level |
| <kbd>Ctrl</kbd>+<kbd>ArrowDown</kbd> | Moves the selected task down within the same level |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>D</kbd> | Duplicates the selected task at the same level |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>C</kbd> | Copies the selected task (including all child tasks) to the clipboard |
| <kbd>Ctrl(Cmd)</kbd>+<kbd>V</kbd> | Pastes the copied task at the same level as the currently selected task, preserving the original structure |
| <kbd>Escape</kbd> | Closes the context menu if it is open. Press again to close the editor, reset active filtering, and collapse search results in the Toolbar |

## Editing mode

The following shortcuts work when the inline editor is **open**.

| Keyboard shortcut | Description |
| :---------------- | :---------- |
| <kbd>Enter</kbd> | Saves changes and closes the editor |
| <kbd>Shift</kbd>+<kbd>Enter</kbd> | Inserts a new paragraph within the editor |
| <kbd>Escape</kbd> | Closes the editor without saving any changes |

## Related articles

- [keypress-on-todo](api/events/keypressontodo_event.md) event — use this event to intercept key presses and implement custom behavior
- [Inline editing](guides/inline_editing.md) — learn how to manage the editor programmatically
- [Multiselection](guides/multiselection.md) — work with multiple selected tasks
