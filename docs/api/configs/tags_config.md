---
sidebar_label: tags
title: tags Config
description: You can learn about the tags config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# tags

### Description

@short: Optional. An array of hashtags to be shown by default

:::tip
To view the list of hashtags, type `#` in the search bar or in the text editor
:::

### Usage

~~~js
tags?: string[];
~~~

:::info
A hashtag can start with any symbol, the `#` symbol is added automatically
:::

### Example

~~~js {8}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags: ["urgent", "normal"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**Related articles:** 
- [Loading and storing data](guides/loading_data.md)
- [Inline editing](guides/inline_editing.md)
