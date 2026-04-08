---
sidebar_label: Inline editing
title: Inline editing
description: You can learn about inline editing in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Inline editing

Inline editing lets you edit task and project content directly by double-clicking. It is enabled by default.

:::tip
If you enable [readonly](/api/configs/readonly_config/) mode, inline editing becomes unavailable.
:::

## Supported data formats

Edit the following types of data in the inline editor:

### Text and numbers

Type plain text or numeric values directly into the editor.

### Hashtags

Use hashtags to categorize tasks and make them searchable:

- A hashtag combines the `#` symbol with letters and numbers (for example, `#sport`).
- To create a hashtag, type `#` followed by at least one character (for example, `#t`) and press Enter.
- Use any number of hashtags, separated by spaces (for example, `#tag #tag1`).
- Hashtags are available across all projects.
- To view all existing hashtags, type `#`. Click a hashtag to add it to the task.
- To filter tasks by a hashtag, click it or enter it in the toolbar search bar.

:::info
Use the [`tags`](/api/configs/tags_config/) property to set a default list of tags.
:::

### Dates

To enter a date, type `!` in the inline editor. The built-in date picker appears.

Wrap text in `!()` — for example, `!(Enter Booking date)` — and press Enter to close the editor. Clicking the text later opens the date picker.

:::info
Date appearance depends on the configured [`locale`](/api/configs/locale_config/) and [`date format`](/api/configs/taskshape_config/).
:::

## Work with the editor

Use the following methods to open and close the inline editor programmatically.

To open the editor for a task, pass the task ID to [`openInlineEditor()`](/api/methods/openinlineeditor_method/). Pass `"project"` as the optional `type` parameter to open the editor for a project instead of a task:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

To close the editor and save changes, pass the item ID to [`closeInlineEditor()`](/api/methods/closeinlineeditor_method/):

~~~js
list.closeInlineEditor({ 
    id: "1.1.1"
});
~~~

To discard changes on close, set `save` to `false`:

~~~js
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

## Track editor state

Use the `open-inline-editor` and `close-inline-editor` events to react when the inline editor opens or closes:

~~~js
list.api.on("open-inline-editor", ({id, type}) => {
    console.log("Editor opened for", type, "with ID:", id);
});

list.api.on("close-inline-editor", ({id, save}) => {
    console.log("Editor closed for item", id, "saved:", save);
});
~~~
