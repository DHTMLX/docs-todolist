---
sidebar_label: Migration to newer versions
title: Migration to newer versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Migration to newer versions

1.1 -> 1.2
---------------

The [`taskShape`](../api/configs/taskshape_config) property of To do list was updated in the following way:

~~~js {} title="Before v1.2"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
}
~~~

~~~js {5-8} title="From v1.2"
taskShape: {
    counter: { ... },
    date: { ... },
    completed: { ... },
    priority: {
        cover: true,
        label: true
    }
}
~~~

The [`tasks`](../api/configs/tasks_config) property of To do list was updated in the following way:

~~~js {} title="Before v1.2"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        ...,
    }, { ... }
]
~~~

~~~js {6} title="From v1.2"
tasks: [
    {
        id: ...,
        parent: ...,
        project: ...,
        priority: 1,
        ...,
    }, { ... }
]
~~~

1.0 -> 1.1
---------------

In the version 1.1 the `selectable` parameter of the [`taskShape`](api/configs/taskshape_config.md) property is renamed to `completed`. Besides, the parameter is extended by the new `taskHide` option.

~~~js {2} title="Before v1.1"
taskShape: {
    selectable: {
        behavior: "manual"
    }
}
~~~

~~~js {2-5} title="From v1.1"
taskShape: {
    completed: {
        behavior: "manual",
        taskHide: true
    }
}
~~~