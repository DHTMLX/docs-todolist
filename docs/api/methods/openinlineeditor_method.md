---
sidebar_label: openInlineEditor()
title: openInlineEditor Method
description: You can learn about the openInlineEditor method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# openInlineEditor()

### Description

@short: Opens the inline editor of a task/project

### Usage

~~~js
openInlineEditor({
    id: string | number,
    type?: "task" | "project"
}): void;
~~~

### Parameters

- `id` - (required) the id of a task/project
- `type` - (optional) the type of an item: "task" (by default) or "project"

### Example

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1 #tag1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// open inline editor of the task
list.openInlineEditor({ 
    id: "1.1.1",
});
~~~