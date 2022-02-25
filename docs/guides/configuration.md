---
sidebar_label: Configuration
title: Configuration
description: You can learn about the To Do List Configuration in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Configuration

## Read-only mode

The read-only mode lets you limit such actions as *adding*, *editing*, *selecting*, *dragging* of items. 

It is possible to block all these actions at once by setting the [readonly](../../api/configs/readonly_config/) configuration property to *true*.

~~~js
~~~

If you need some operations to be still available for end-users, specify the [readonly](../../api/configs/readonly_config/) property as an object and provide it with extended settings:

~~~js
~~~

## Displaying the count of completed subtasks

You can change the type of the counter which renders the completion of the child tasks.

```todo
add image
```

By default, each parent task is equipped with the counter whose value is shown as the ratio of completed child tasks and the total number of the child tasks.

If you want the value of the counter to be displayed as a percentage, specify the *type: "percentage"* attribute inside the **counter** parameter of the [itemShape](../../api/configs/itemshape_config/) property:

~~~js
~~~

