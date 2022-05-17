---
sidebar_label: items
title: items Config
description: You can learn about the items config of Toolbar in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# items

### Description

@short: Optional. Specifies controls that will be shown in the toolbar of To do list


### Usage

~~~js
items?: [
    "combo",
    "search",
    "menu",
    custom_control // string or function
];
~~~

### Default config

~~~js
items: ["combo", "search", "menu"]
~~~

### Parameters

The **items** array can include the following parameters:

- `"combo"` - the combo control for choosing a project
- `"search"` - the search bar 
- `"menu"` - the menu for adding/renaming/removing a project
- `"custom_item"` - a custom control specified either as a string or a function

:::tip
You can specify your own structure of the toolbar by enumerating necessary elements in the **items** array in the desired order
:::

### Example

~~~js {12-17}
const { ToDo, Toolbar } = todo;
const { data, users, projects, tags } = getData();

const component = new ToDo("#root", {
	data,
	users,
	projects,
	tags,
});
const toolbar = new Toolbar("#toolbar", {
	api: component.api,
	items: [
		`<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
		"search",
		"menu",
		`<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
	],
});
~~~

