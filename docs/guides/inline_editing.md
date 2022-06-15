---
sidebar_label: Inline editing
title: Inline editing
description: You can learn about inline editing in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Inline editing

Inline editing lets you edit the content of a task/project directly by double-clicking on it. The functionality is enabled by default.

:::tip
When you enable the [**readonly**](api/configs/readonly_config.md) mode of To Do List, inline editing becomes unavailable. 
:::

## Supported formats of data

It is possible to type and edit the following types of information via the inline editor:

1\. **Text, numbers**

2\. **Hashtags**

Use hashtags to categorize tasks and make them more searchable. Here are some simple rules to know:

- Hashtag is a combination of the `#` symbol and any letters, numbers (for instance, **#sport**)
- To create a hashtag, enter `#` and at least one symbol after it (for instance, **#t**), and press Enter
- You can use unlimited number of hashtags in To Do List. Separate the tags by spaces (for instance, **#tag #tag1**) 
- All created hashtags are accessible in all projects
- To view the list of all hashtags you've already created, enter the `#` symbol. Click the necessary hashtag to add it to the task
- To activate strict filtering, click a hashtag or enter it in the search bar in the toolbar

:::info
You can create a default list of tags via the [`tags`](api/configs/tags_config.md) property
:::

3\. **Dates**

To enter a date via the inline editor, type the `!` symbol and the built-in date picker will appear on the page.
    
You can also wrap some text in the special symbols - `!()` - for instance, **!(Enter Booking date)**, and press Enter to close the editor. In the future, clicking on this text will open the date picker. 

:::info
The appearance of the added dates depends on the specified [**locale**](api/configs/locale_config.md) and [**date format**](api/configs/taskshape_config.md)
:::

## Working with editor

You can manage the editor by using the API:

To open the editor for a particular task/project, use the [openInlineEditor()](../../api/methods/openinlineeditor_method/) method:

~~~js
list.openInlineEditor({ id: "1.1.1" });
~~~

To close the editor after finishing the editing of the item and save the made changes, pass the ID of the item to the [closeInlineEditor()](../../api/methods/closeinlineeditor_method/) method:

~~~js
list.closeInlineEditor({ 
    id: "1.1.1"
});
~~~

If you don't need to save the changes after closing the editor, set the second **save** parameter of the method to *false*:

~~~js
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~~

