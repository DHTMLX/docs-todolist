---
sidebar_label: Sorting and filtering tasks
title: Sorting and filtering tasks
description: You can learn about sorting and filtering of tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Sorting and filtering tasks

## Sort tasks {#sorting-tasks}

After initialization, sort tasks in one of two ways:

- through the **Sort by** option of the [Toolbar menu](../../#toolbar) — sort tasks by *text*, *due date*, *completion date*, *creation date*, or *editing date*
- through the [`setSort()`](api/methods/setsort_method.md) method — specify a custom sort function or sort by a [task attribute](api/configs/tasks_config.md#parameters)

The example below sorts tasks by id in ascending order:

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## Filter tasks

Filter tasks in one of two ways:

- through the [search bar](../../#toolbar) of the Toolbar
- through the [`setFilter()`](api/methods/setfilter_method.md) method — supports the *strict* mode for exact-match filtering

The snippet below filters tasks by a specific hashtag in strict mode:

~~~js
// filter data by the specified rules
list.setFilter({
    match: "#tag1",
    highlight: true,
    strict: true
});
~~~

To reset filtering, pass `match: null`:

~~~js
// reset filtering
list.setFilter({ match: null });
~~~
