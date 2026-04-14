---
sidebar_label: Inline editing
title: Inline editing
description: You can learn about inline editing in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Inline editing

Inline editing lets you edit task or project content directly. Double-click any item to open the editor. The feature is enabled by default.

:::tip
Enabling the [`readonly`](api/configs/readonly_config.md) mode disables inline editing.
:::

## Supported data formats

Type and edit the following data in the inline editor:

1\. **Text, numbers**

2\. **Hashtags**

Use hashtags to categorize tasks and make them more searchable. Here are some simple rules to know:

- A hashtag is a combination of the `#` symbol and any letters or numbers (for example, `#sport`)
- To create a hashtag, enter `#` and at least one character after it (for example, `#t`), then press Enter
- Use an unlimited number of hashtags in To Do List. Separate tags by spaces (for example, `#tag #tag1`)
- All created hashtags are accessible in all projects
- To view all existing hashtags, enter the `#` symbol. Click a hashtag to add it to the task
- To activate strict filtering, click a hashtag or enter the hashtag in the search bar

:::info
You can create a default list of tags via the [`tags`](api/configs/tags_config.md) property
:::

3\. **Dates**

To enter a date via the inline editor, type the `!` symbol and the built-in date picker appears.

Wrap placeholder text in `!()` (for example, `!(Enter Booking date)`) and press Enter to close the editor. Clicking that text later opens the date picker.

:::info
The appearance of dates depends on the [`locale`](api/configs/locale_config.md) and [`taskShape`](api/configs/taskshape_config.md) settings.
:::

## Work with the editor

Use the API to open and close the inline editor programmatically.

To open the editor for a specific task or project, call the [`openInlineEditor()`](../../api/methods/openinlineeditor_method/) method:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

To close the editor and save changes, pass the item ID to the [`closeInlineEditor()`](../../api/methods/closeinlineeditor_method/) method:

~~~js
list.closeInlineEditor({ 
    id: "1.1.1"
});
~~~

If you do not need to save changes, set the `save` parameter to `false`:

~~~js
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~

