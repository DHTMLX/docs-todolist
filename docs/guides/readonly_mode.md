---
sidebar_label: Read-only mode
title: Read-only mode
description: You can learn about the read-only mode in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Read-only mode

To make the To Do List read-only, set the [`readonly`](api/configs/readonly_config.md) configuration property to `true`. The example below initializes the To Do List in read-only mode:

~~~js {8}
const { ToDo, Toolbar } = todo;

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

:::info
In this mode, tasks are non-editable. Users can only select a task and mark it as complete or incomplete.
:::

## Example

The live snippet below demonstrates the read-only mode:

<iframe src="https://snippet.dhtmlx.com/ru1q1p7y?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="520"></iframe>
