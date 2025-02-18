---
sidebar_label: menu
title: menu Config
description: You can learn about the menu config in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# menu

### Description

@short: Optional. Specifies the context menu visibility (if boolean) or configuration parameters (if function)

### Usage

~~~js
menu?: boolean; 
// or
menu?: function(config: object);
~~~

#### Show or Hide Context Menu

If you want to *hide* the context menu, set the `menu` config to `false`. To make the default context menu visible, set the `menu` config to `true`.

~~~js
menu: true // display the default context menu

// or

menu: false // hide the context menu
~~~

#### Modify Context Menu

If you want to *modify* a context menu, set the `menu` config to a callback that takes the `config` object as a parameter. The `config` object may have the following structure:

~~~js
config: {
    store: object,
    type: "user" | "toolbar" | "task",
    id?: string | number,
    source?: (string | number)[]
};
~~~

**Parameters**

- `store` - (required) the readonly DataStore, that should be passed to the `getMenuOptions()` method
- `type` - (required) the type of the context menu. Here you can specify one of the following values:
    - `"user"` - the context menu related to users
    - `"toolbar"` - the context menu related to toolbar
    - `"task"` - the context menu related to tasks
- `id` - (optional|required) the ID of the project. This parameter is required if `type: "toolbar"`
- `source` - (optional|required) an array that include the IDs of tasks. This parameter is required if `type: "toolbar"`

**Returns**

The callback should return one of the following values:

- `boolean` - `true` to display a default context menu; `false` to hide context menu
- `null` - ?
- `object[]` - the array of objects that store data for context menu items. Each object may have the following structure:

    ~~~js
    {
        id: string | number,
        type?: string,
        icon?: string,
        label?: string,
        hotkey?: string,
        value?: Date,
        data?: object[],
        handler?: function
    }
    ~~~

    - `id` - (required) the ID of the menu item
    - `icon` - (optional) the icon for the menu item (by default taken from the **wxi** font)
    - `label` - (optional) the text for the menu item
    - `hotkey` - (optional) a hotkey for the action from this menu item
    - `value` - (optional) the due date, valid for "datepicker"
    - `data` - (optional) the array of objects that store subitems of the menu item
    - `handler` - (option) the handler that allows you to perform an action for a custom menu item
    - `type` - (optional) the menu item type. Here you can specify the following types:
        - `"item"` - 
        - `"separator"` - 
        - `"datepicker"` - 
        - `"user"` - 
        - `"priority"` - 

### Example

~~~js {}
...
~~~

**Related articles:**
...
