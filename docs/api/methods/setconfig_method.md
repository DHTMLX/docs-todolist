---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setConfig()

### Description

@short: Sets a new configuration for the To Do List

:::tip
Using this method, you can change configuration of the To do list widget. The method changes only the parameters you passed
:::

:::info
It is also possible to load data into the To Do List via the method, but we recommend that you use the [parse()](api/methods/parse_method.md) method for this purpose
:::

### Usage

~~~js
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) an object with new configuration of To do list. See the full list of properties [here](api/api_overview.md#to-do-list-properties) 

### Example

~~~js {16-18,20-22}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
	tasks,
	users,
	projects,
	tags,
	activeProject: "first"
});
			
const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

list.setConfig({
	activeProject: "second"
});

toolbar.setConfig({
	api: list.api,
});
~~~

:::info
The To do list won't be rendered correctly until you call the [setConfig()](api/toolbar_api/methods/setconfig_method.md) method of the Toolbar component
:::