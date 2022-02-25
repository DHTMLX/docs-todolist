---
sidebar_label: readonly
title: readonly Config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# readonly

### Description

@short: Optional. Enables/disables editing, adding, selecting, dragging the items

After you enable the readonly mode, the *add Task* button and *3 dots* icon will be hidden.

### Usage

~~~js
readonly?: boolean;
//or
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### Parameters

As an object with extended settings, the **readonly** property can contain the following parameters:

- `edit` - (optional) enables/disables **editing** of the items
- `add` - (optional) enables/disables **adding** of the new items
- `select` - (optional) enables/disables **selecting** of the items
- `dnd` - (optional) enables/disables **dragging** of the items

### Default config

~~~jsx {}
readonly: false // readonly mode is disabled
//or
readonly: {
	edit: true, // editing is enabled
	add: true, // adding is enabled
	select: true, // selecting is enabled
	dnd: true // dragging is enabled
}
~~~