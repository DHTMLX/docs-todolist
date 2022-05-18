---
sidebar_label: serialize()
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# serialize()

### Description

@short: Serializes data of To do list into a JSON object

### Usage

~~~js
serialize(): {
    data: [{...}, {...}, ...],
    users: [{...}, {...}, ...],
    projects: [{...}, {...}, ...],
    tags: [],
    activeProject: string,
};
~~~

### Returns

The method returns serialized data of the component

### Example

~~~js {11}
const { ToDo, Toolbar } = todo;
const { data, users, projects, tags } = getData();

const component = new ToDo("#root", {
    data,
    users,
    projects,
    tags
});

component.serialize();
~~~