---
sidebar_label: Inline editing
title: Inline editing
description: You can learn about inline editing in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Inline editing

Double-click a task or project to edit it inline. Inline editing is on by default.

:::tip
When you enable the [`readonly`](api/configs/readonly_config.md) mode of the To Do List, inline editing becomes unavailable.
:::

## Supported data formats {#supported-formats-of-data}

The inline editor accepts three types of data: text and numbers, hashtags, and dates.

### Text and numbers

Type any text or numbers directly into the inline editor.

### Hashtags

Use hashtags to categorize tasks and make them more searchable. Follow these rules:

- a hashtag combines the `#` symbol with letters and numbers (for example, `#sport`)
- to create a hashtag, enter `#` followed by at least one symbol (for example, `#t`) and press Enter
- the To Do List supports an unlimited number of hashtags, separated by spaces (for example, `#tag #tag1`)
- all hashtags are accessible in all projects
- to view the list of hashtags, enter the `#` symbol
- to add a hashtag to a task, click it in the list
- to activate strict filtering, click a hashtag or enter it in the search bar in the toolbar

:::info
Create a default list of tags through the [`tags`](api/configs/tags_config.md) property.
:::

### Dates

To enter a date through the inline editor, type the `!` symbol. The built-in date picker appears on the page.

You can also wrap text in the special symbols `!()`. For example, type `!(Enter Booking date)` and press Enter to close the editor. Click this text later to reopen the date picker.

:::info
Date appearance depends on the [`locale`](api/configs/locale_config.md) and [date format](api/configs/taskshape_config.md).
:::

## Work with the editor {#working-with-editor}

To open the editor for a particular task or project, use the [`openInlineEditor()`](api/methods/openinlineeditor_method.md) method. The snippet below opens the editor for a specific task:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

To close the editor and save the changes, pass the item id to the [`closeInlineEditor()`](api/methods/closeinlineeditor_method.md) method:

~~~js
list.closeInlineEditor({
    id: "1.1.1"
});
~~~

To close the editor without saving the changes, set the `save` parameter to `false`. The example below discards the changes on close:

~~~js
list.closeInlineEditor({
    id: "1.1.1",
    save: false
});
~~~

## Track editor changes

Subscribe to the [`edit-item`](api/events/edititem_event.md) event to track the value typed into the inline editor. The event fires as the user types, before the value is saved.

The snippet below logs the current editor value for a task or project:

~~~js
list.api.on("edit-item", ({ id, currentValue }) => {
    console.log("Current value of", id, "is", currentValue);
});
~~~

## Keyboard shortcuts

:::info
Refer to the [**Keyboard navigation**](guides/keyboard_navigation.md) guide for more information.
:::
