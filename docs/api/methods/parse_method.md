---
sidebar_label: parse()
title: parse Method
description: You can learn about the parse method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# parse()

### Description

@short: Loads data into To Do List

### Usage

~~~js
parse({
    tasks?: [],
    users?: [],
    projects?: [],
    tags?: [],
    activeProject?: string
}): void;
~~~

### Parameters

- [`tasks`](api/configs/tasks_config.md) - (optional) an array of objects with tasks data
- [`users`](api/configs/users_config.md) - (optional) an array of objects with users data
- [`projects`](api/configs/projects_config.md) - (optional) an array of objects with projects data
- [`tags`](api/configs/tags_config.md) - (optional) an array with a list of tags
- [`activeProject`](api/configs/activeproject_config.md) - (optional) the ID of the active project

### Example

~~~js {3,10-14}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// parse prepared data into the component
list.parse({
    tasks,
    users,
    projects,
});
~~~

**Related article:** [Loading and storing data](guides/loading_data.md)
