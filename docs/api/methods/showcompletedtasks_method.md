---
sidebar_label: showCompletedTasks()
title: showCompletedTasks Method
description: You can learn about the showCompletedTasks method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# showCompletedTasks()

### Description

@short: Switches To Do List to the mode when completed tasks are shown on the page

### Usage

~~~js
showCompletedTasks(): void;
~~~


### Example

~~~js {13}
const { ToDo, Toolbar } = todo;
const { task, projects } = getData();

const list = new ToDo("#root", {
	tasks,
	projects
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

list.showCompletedTasks(); 
~~~

**Change log:** Added in v1.1

**Related article:** [Hiding completed tasks](guides/hide_completed.md)