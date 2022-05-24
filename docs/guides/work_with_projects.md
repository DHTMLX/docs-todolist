---
sidebar_label: Managing projects
title: Managing projects
description: descr
---

# Managing projects

The list of projects is specified by the [projects](../../api/configs/projects_config/) configuration property of To do list.

~~~js
~~~

To define what project a task will belong to, you need to pass the id of the project to the **project** parameter of the related [data](../../api/configs/tasks_config/) object:

~~~js
~~~

## Active project

```todo
maybe add image
```

You can easily make a certain project active on initialization of To do list via the [activeProject](../../api/configs/activeproject_config/) property:

~~~js
~~~

```todo
Describe behavior if active project isn't set
```

If the specified active project doesn't exist or there are no projects loaded into To Do List at all, the *No project* section will be displayed on initialization of the component. 

The tasks will be included into this section in the following cases:
- if the **project** parameter is not specified in the [data object of the root task](../../api/configs/tasks_config/)
- if **project: null | undefined** is specified in the [data object of the root task](../../api/configs/tasks_config/)

## Changing the active project

It is possible to change the currently active project via the [setProject()](../../api/methods/setproject_method/) method. It takes the id of a project as a parameter:

~~~js
~~~

## Adding a new project

You may create a new project via the [addProject()](../../api/methods/addproject_method/) method:

~~~js
~~~

## Updating a project

To dynamically update parameters of a project, apply the [updateProject()](../../api/methods/updateproject_method/) method:

~~~js
~~~

## Removing a project

To remove an unnecessary project, apply the [deleteProject()](../../api/methods/deleteproject_method/) method:

~~~js
~~~

:::note
The tasks linked to the project won't be removed.
:::