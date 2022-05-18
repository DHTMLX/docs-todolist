---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# locale

### Description

@short: Optional. Applies the necessary locale to the component

### Usage

~~~js
locale?: object;
~~~

### Default config

By default, DHTMLX To Do List uses [English locale](guides/localization.md#default-locale).

~~~js
locale: en
~~~

### Example

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { data, users, projects, tags } = getData();

const component = new ToDo("#root", {
	data,
	users,
	projects,
	locale: de // sets the "de" locale in the component
});

const toolbar = new Toolbar("#toolbar", {
	api: component.api,
	locale: de // sets the "de" locale in the Toolbar (read Info below)
});
~~~


:::info
The Toolbar is a separate component of To do list . Thus, you also need to apply the necessary locale to the **Toolbar** via the related [locale](api/toolbar_api/configs/locale_config.md) property
:::

:::tip
To change the locale dynamically, use the [setLocale()](api/methods/setlocale_method.md) method
:::

**Related article:** [Localization](guides/localization.md)