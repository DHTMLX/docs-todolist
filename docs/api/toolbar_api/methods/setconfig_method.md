---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method of Toolbar in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setConfig()

### Description

@short: Sets configuration of the Toolbar component


### Usage

~~~js
setConfig(config: object): void;
~~~

### Parameters
 
- `config` - (required) an object with Toolbar configurations. See the full list of properties [here](category/toolbar-properties.md)

### Example

~~~js {13-15}
const { ToDo, Toolbar } = todo;
const { data, users, projects, tags } = getData();

const component = new ToDo("#root", {
	data,
	users,
	projects,
});
const toolbar = new Toolbar("#toolbar", {
	api: component.api,
});

toolbar.setConfig({
	items: ["combo", "menu"]
});
~~~