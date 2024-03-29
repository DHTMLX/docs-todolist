---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config of Toolbar in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# locale

### Description

@short: Optional. Applies the necessary locale to the Toolbar

### Usage

~~~js
locale?: object;
~~~

### Default config

By default, Toolbar of DHTMLX To Do List uses [English locale](guides/localization.md#default-locale).

~~~js
locale: en
~~~


### Example

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // sets the "de" locale in the To Do List component (read Info below)
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // sets the "de" locale in the Toolbar
});
~~~


:::info
Toolbar is a separate component of To Do List. Thus, before applying the necessary locale to the Toolbar, be sure that you have already applied it to the **To Do List**
:::

:::tip
To change the locale dynamically, use the [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) method
:::

**Related article:** [Localization](guides/localization.md)