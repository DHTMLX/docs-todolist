---
sidebar_label: Sorting and filtering tasks
title: Sorting and filtering tasks
description: You can learn about sorting and filtering of tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Sorting and filtering tasks

## Sorting tasks



## Filtering tasks

You can find the tasks that match the specified criteria with the help of the [setFilter()](../../api/methods/setfilter_method/) method. The method supports the *strict* mode of filtering that allows you to filter tasks by the exact match.

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