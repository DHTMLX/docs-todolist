---
sidebar_label: tags
title: tags Config
description: You can learn about the tags config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# tags

### Description

@short: Optional. An array of tags to be shown by default

:::tip
To view the list of tags, type `#` in the search field or in the text
:::

### Usage

~~~js
tags?: string[];
~~~

:::info
A tag can start with any symbol, the `#` sign is added automatically
:::

### Example

~~~js
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const component = new ToDo("#root", {
	tasks,
	users,
	projects,
	tags: ["urgent", "normal"]
});
~~~

