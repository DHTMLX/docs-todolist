---
sidebar_label: serialize()
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# serialize()

### Description

@short: Serializes data of To Do List into a JSON object

### Usage

~~~js
serialize(): object;
~~~

### Returns

The method returns serialized data of the To Do List

~~~js
{
    tasks: [],
    users: [],
    projects: [],
    tags: [],
    activeProject: string,
}
~~~

### Example

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});

// get an object with data of To Do List
list.serialize();
~~~

**Related article:** [Loading and storing data](guides/loading_data.md)
