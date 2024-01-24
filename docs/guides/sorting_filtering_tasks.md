---
sidebar_label: Sorting and filtering tasks
title: Sorting and filtering tasks
description: You can learn about sorting and filtering of tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Sorting and filtering tasks

## Sorting tasks

The library allows you to sort tasks in the list after initialization of To Do List. There are two ways to view the tasks in the sorted order:

- via the **Sort by** option of the [Toolbar menu](../../#toolbar). You may sort tasks by *text*, *due date*, *completion date*, *creation date*, or *editing date*

- via the [`setSort()`](api/methods/setsort_method.md) method. You may specify your own search function  or implement sorting by a [task attribute](api/configs/tasks_config.md#parameters). For instance:

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## Filtering tasks

You can find the tasks that match the specified criteria in 2 ways:

- via the [search bar](../../#toolbar) of Toolbar

- through the [`setFilter()`](api/methods/setfilter_method.md) method. The method supports the *strict* mode of filtering that allows you to filter tasks by the exact match.

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

To reset filtering, call the method without parameters:

~~~js
// reset filtering
list.setFilter({});
~~~