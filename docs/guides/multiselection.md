---
sidebar_label: Multi-task selection
title: Multi-task selection
description: You can learn about selection of multiple tasks in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Multi-task selection

![Multiselection](../assets/multiselection.png)


## Operations over multiple tasks


[copyTask()](../../api/methods/copytask_method/) 

[pasteTask()](../../api/methods/pastetask_method/)

[moveTask()](../../api/methods/movetask_method/) 

[deleteTask()](../../api/methods/deletetask_method/) 

[checkTask()](../../api/methods/checktask_method/) and [uncheckTask()](../../api/methods/unchecktask_method/) 

[indentTask()](../../api/methods/indenttask_method/) - to demote the nesting level of a task to one lower level

[unindentTask()](../../api/methods/unindenttask_method/) - to promote the nesting level of the task to one higher level


## Selecting/unselecting a task

To select a particular task, pass the ID of the task as a parameter to the [selectTask()](../../api/methods/selecttask_method/) method:

~~~js
list.selectTask({ 
    id: "1.1",
});
~~~

:::tip
To get the ID of the currently selected task, use the [`getSelection()`](../../api/methods/getselection_method/) method
:::

To remove selection from a selected task, pass the ID of the task as a parameter to the [unselectTask()](../../api/methods/unselecttask_method/) method:

~~~js
list.unselectTask({ id: "1.1" });
~~~









