---
sidebar_label: destructor()
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# destructor()

### Description

@short: Removes all HTML elements of the To Do List, and detaches all related events


### Usage

~~~js
destructor(): void;
~~~


### Example

~~~js {13}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const component = new ToDo("#root", {
	tasks,
	users,
	projects,
});
const toolbar = new Toolbar("#toolbar", {
	api: component.api,
});

component.destructor();
~~~