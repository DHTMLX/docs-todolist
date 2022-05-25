---
sidebar_label: closeInlineEditor()
title: closeInlineEditor Method
description: You can learn about the closeInlineEditor method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# closeInlineEditor()

### Description

@short: Closes the inline editor of a task/project

### Usage

~~~js
closeInlineEditor({
    id: string | number,
    save?: boolean
}): void;
~~~

### Parameters

- `id` - (required) the id of a task/project
- `save` - (optional) defines whether the changes should be saved after closing the editor; **true** by default

### Example

~~~js {17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
	tasks: [
        { id: "1", text: "Task 1" },
		{ id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
		{ id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
	api: list.api,
});

// close inline editor of the task without saving the changes made
list.closeInlineEditor({ 
    id: "1.1.1",
    save: false
});
~~~