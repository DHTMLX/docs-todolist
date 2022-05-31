---
sidebar_label: keypress-on-todo
title: keypress-on-todo Event
description: You can learn about the keypress-on-todo event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# keypress-on-todo

## Description

@short: Fires when a task is in focus at the time of using key navigation

## Usage

~~~js
"keypress-on-todo": ({
    code: string,
    event: KeyboardEvent
}) => void;
~~~

### Parameters

The callback of the **keypress-on-todo** event can take an object with the following parameters:

- `code` - (required) the code of the pressed key or a combination of the pressed keys in the *lower case*. The full lists of keyboard shortcuts and their codes are given [below](#keyboard-shortcuts)
- `event` - (required) a native [event object](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) 

:::info
To handle the inner events, you can use the [**Event Bus methods**](category/event-bus-methods.md)
:::

### Example

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
	tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// subscribe to the "keypress-on-todo" event
list.api.on("keypress-on-todo", ({code, event}) => {
    console.log("The", code, "key is pressed"); 
});
~~~ 

## Keyboard shortcuts 

There are two groups of keyboard shortcuts:

1\. Keyboard shortcuts **in the default mode**, i.e. when the editing mode of a task is not activated

| Keyboard shortcut   |Key code| Description                                                          |
| :--------- |--| :------------------------------------------------------------------- |
| **Escape** |escape| Closes the menu if it is opened for the task when the key is pressed. Pressing again will close the editor, reset filtering, and collapse search results in the Toolbar|

:::tip
The key codes described below are not available if focus is set on the Search bar of the Toolbar.
:::

| Keyboard shortcut   |Key code| Description                                                          |
| :--------- |--| :------------------------------------------------------------------- |
| **Enter** |enter| Creates a new task on the same level as the selected one, moves selection to the created task and opens the editor |
| **Space** |space| Marks a task as complete or incomplete depending on its initial state |
| **Delete/<br>Backspace** |delete/<br>backspace | Removes the selected task by the following logic:<br> - after removing a child task, moves the selection down/up until it reaches the parent task <br>- after removing a parent task, moves the selection down to the next parent task if it's exist; otherwise, moves the selection up to the previous parent task |
| **ArrowUp** |arrowup| Moves the selection up to the previous task |
| **ArrowDown** |arrowdown| Moves the selection down to the next task |
| **ArrowRight** |arrowright| Expands the collapsed parent task |
| **ArrowLeft** |arrowleft| Collapses the expanded parent task. If the task is already collapsed or does not have child tasks, moves selection to the parent task | 
| **Ctrl+ArrowUp** |ctrl+arrowup| Moves the selected task up within the same level |
| **Ctrl+ArrowDown** |ctrl+arrowdown| Moves the selected task down within the same level | 
| **Tab** |tab| Demotes the nesting level of the task to one lower level |
| **Shift+Tab** |shift+tab| Promotes the nesting level of the task to one higher level|
| **Ctrl(Cmd)+Enter** |ctrl+enter| Opens the editor of the selected task |
| **Ctrl(Cmd)+D** |ctrl+d| Duplicates the selected task at the same level |
| **Ctrl(Cmd)+C** |ctrl+c| Copies the selected task into the clipboard, including all child tasks |
| **Ctrl(Cmd)+V** |ctrl+v| Pastes the copied tasks to the same level as the currently selected task. It is possible to paste a copied task to any level, the structure of the copied task is saved |

2\. Keyboard shortcuts **in the editing mode**

| Keyboard shortcut |Key code| Description |
| :---------------- |--| :---------- |
| **Escape** |escape| Closes the editor without saving any changes you've made |
| **Enter** |enter| Closes the editor and saves the changes |
| **Shift+Enter** |shift+enter| Creates a new paragraph |
 