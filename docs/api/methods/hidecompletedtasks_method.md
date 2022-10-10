---
sidebar_label: hideCompletedTasks()
title: hideCompletedTasks Method
description: You can learn about the hideCompletedTasks method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# hideCompletedTasks()

### Description

@short: Switches To Do List to the mode when completed tasks are hidden from the page

### Usage

~~~js
hideCompletedTasks(): void;
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

list.hideCompletedTasks(); 
~~~

**Change log:** Added in v1.1

**Related article:** [Show/hide completed tasks](guides/hide_completed_tasks.md)