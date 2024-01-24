---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setConfig()

### Description

@short: Sets a new configuration for the To Do List

### Usage

~~~js
setConfig(config: object): void;
~~~

### Parameters

- `config` - (required) an object with new configuration of To Do List. See the full list of properties [here](api/api_overview.md#to-do-list-properties)

:::tip
The method changes only the parameters you passed. It is also possible to load data into the To Do List via the method, but we recommend that you use the [`parse()`](api/methods/parse_method.md) method for this purpose.
:::

:::important
The `setConfig()` method destroys the current component and initialize a new one. If you use the component with **Toolbar**, you need to call the [`setConfig()`](api/toolbar_api/methods/setconfig_method.md) method of **Toolbar**, because it uses the internal API of To Do List. See the example below!
:::

### Example

~~~js {16-19,21-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "first"
});
            
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// change configuration of To Do List
list.setConfig({
    activeProject: "second"
});

// update configuration parameters of Toolbar
toolbar.setConfig({
    api: list.api,
});
~~~
