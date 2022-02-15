---
sidebar_label: keypress-on-todo
title: keypress-on-todo Event
description: You can learn about the keypress-on-todo event in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# keypress-on-todo

## Description

@short: fires when an item is in focus at the time of using key navigation

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

## Keyboard shortcuts 

There are two groups of keyboard shortcuts:

- keyboard shortcuts **in the default mode**, i.e. when the editing mode of an item is not activated

| Keyboard shortcut   |Key code| Description                                                          |
| :--------- |--| :------------------------------------------------------------------- |
| **Escape** |escape| Closes the menu if it is opened for the item when the key is pressed |
| **Enter** |enter| Creates a new task on the same level as the selected one, moves selection to the created task and opens the editor |
| **Space** |space| Marks an item as complete or incomplete depending on its initial state |
| **Delete/<br>Backspace** |delete/<br>backspace | Removes the selected item by the following logic:<br> - after removing a child item, moves the selection down/up until it reaches the parent item <br>- after removing a parent item, moves the selection down to the next parent item if it's exist; otherwise, moves the selection up to the previous parent item |
| **ArrowUp** |arrowup| Moves the selection up to the previous item |
| **ArrowDown** |arrowdown| Moves the selection down to the next item |
| **ArrowRight** |arrowright| Expands the collapsed parent item |
| **ArrowLeft** |arrowleft| Collapses the expanded parent item. If the item is already collapsed or does not have child items, moves selection to the parent item 
| **Ctrl+ArrowUp** |ctrl+arrowup| Moves the selected item up within the same level |
| **Ctrl+ArrowDown** |ctrl+arrowdown| Moves the selected item down within the same level | 
| **Tab** |tab| Increases the nesting level of the item (up to the maximum possible level) |
| **Shift+Tab** |shift+tab| Decreases the nesting level of the item (up to the minimum possible level) |
| **Ctrl+Enter** |ctrl+enter| Opens the editor of the selected item |
| **Ctrl+D** |ctrl+d| Duplicates the selected item at the same level |
| **Ctrl+C** |ctrl+c| Copies the selected item into the clipboard, including all child items |
| **Ctrl+V** |ctrl+v| Pastes the copied items to the same level as the currently selected item. It is possible to paste a copied item to any level, the structure of the copied item is saved |

- keyboard shortcuts **in the editing mode**

| Keyboard shortcut |Key code| Description |
| :---------------- |--| :---------- |
| **Escape** |escape| Closes the editor without saving any changes you've made |
| **Enter** |enter| Closes the editor and saves the changes |
| **Shift+Enter** |shift+enter| Creates a new paragraph |
 