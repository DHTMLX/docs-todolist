---
sidebar_label: Sorting and filtering tasks
title: Sorting and filtering tasks
description: You can learn about sorting and filtering of tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Sorting and filtering tasks

## Sort tasks

Sort tasks in the list using one of two approaches:

- via the **Sort by** option of the [Toolbar menu](../../#toolbar) — sort by text, due date, completion date, creation date, or editing date

- via the [`setSort()`](api/methods/setsort_method.md) method — specify a custom sort function or sort by a [task attribute](api/configs/tasks_config.md#parameters). For example:

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## Filter tasks

Find tasks that match specific criteria in two ways:

- via the [search bar](../../#toolbar) in the Toolbar

- via the [`setFilter()`](api/methods/setfilter_method.md) method. The `strict` mode filters tasks by exact match.

~~~js
// filter tasks by the specified rules
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