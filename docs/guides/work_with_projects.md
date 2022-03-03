---
sidebar_label: Managing projects
title: Managing projects
description: descr
---

# Managing projects

The list of projects is specified by the [projects](../../api/configs/projects_config/) configuration property of To do list.

~~~js
~~~

To define what project a task will belong to, you need to pass the id of the project to the **project** parameter of the related [data](../../api/configs/data_config/) object:

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

## Changing the active project

It is possible to change the currently active project via the [setProject](../../api/methods/setproject_method/) method. It takes the id of a project as a parameter:

~~~js
~~~

## Creating a new project

You may create a new project via the [createProject()](../../api/methods/createproject_method/) method:

~~~js
~~~

## Removing a project

To remove an unnecessary project, apply the [deleteProject()](../../api/methods/deleteproject_method/) method:

~~~js
~~~

:::note
The tasks linked to the project won't be removed.
:::