---
sidebar_label: Sort and filter tasks
title: Sort and filter tasks
description: You can learn about sorting and filtering of tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Sort and filter tasks

## Sort tasks

Sort tasks in the list with one of the following options:

- through the **Sort by** option in the [Toolbar menu](../../#toolbar) — sort by *text*, *due date*, *completion date*, *creation date*, or *editing date*

- with the [`setSort()`](/api/methods/setsort_method/) method — specify a custom sort function or sort by a [task attribute](/api/configs/tasks_config/#parameters):

~~~js
list.setSort({
    by: task => task.id, // or by: "text"
    dir: "asc",
    // tree: true // enable tree sort, false by default
});
~~~

## Filter tasks

Find tasks that match specified criteria with one of the following options:

- through the [search bar](../../#toolbar) in the Toolbar

- with the [`setFilter()`](/api/methods/setfilter_method/) method — supports `strict` mode to match tasks by exact value:

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
