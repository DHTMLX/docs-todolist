---
sidebar_label: Localization
title: Localization
description: You can learn about the To Do List localization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Localization

Display the DHTMLX To Do List interface in any language. The library provides a number of predefined locales and lets you create custom ones. By default, DHTMLX To Do List uses the [English locale](#default-locale).

## Default locale

The snippet below shows the full structure of the default English locale:

~~~js
const en = {
    calendar:{ // translations and settings of the calendar
        monthFull: [
            "January", "February", "March",
            "April", "May", "June", 
            "July", "August", "September", 
            "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    
        clear: "Clear",
        done: "Done",
        today: "Today",

        weekStart: 1 // defines the first day of the week (Monday by default)
    },
    // To Do List
    todo: {
        // Toolbar
        "No project": "No project",
        "Search project": "Search project",
        "Add project": "Add project",
        "Rename project": "Rename project",
        "Delete project": "Delete project",

        // added in v1.1 (start)
        "Completed tasks": "Completed tasks",
        "Show": "Show",
        "Hide": "Hide",
        "Sort by": "Sort by",
        "Text (a-z)": "Text (a-z)",
        "Text (z-a)": "Text (z-a)",
        "Due date (new to old)": "Due date (new to old)",
        "Due date (old to new)": "Due date (old to new)",
        "Completion date (new to old)": "Completion date (new to old)",
        "Completion date (old to new)": "Completion date (old to new)",
        "Created (new to old)": "Created (new to old)",
        "Created (old to new)": "Created (old to new)",
        "Edited (new to old)": "Edited (new to old)",
        "Edited (old to new)": "Edited (old to new)",
        // added in v1.1 (end)

        // Task
        "Add task below": "Add task below",
        "Add subtask": "Add subtask",
        "Set due date": "Set due date",
        "Indent": "Indent",
        "Unindent": "Unindent",
        "Assign to": "Assign to",
        "Move to": "Move to",
        "Duplicate": "Duplicate",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",

        // Priorities (added in v1.2)
        "Priority (high to low)": "Priority (high to low)",
        "Priority (low to high)": "Priority (low to high)",
        "Set priority": "Set priority",
        "Reset priority": "Reset priority",

        // Shortcut
        "Enter": "Enter",
        "Tab": "Tab",
        "Shift+Tab": "Shift+Tab",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        
        // For Mac OS
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",

        // Editor
        "Type what you want": "Type what you want",

        // Other
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project",

        // Default priority labels
        "High": "High",
        "Medium": "Medium",
        "Low": "Low"
    }
};
~~~

## Custom locale

To initialize the To Do List component in a non-English language:

- define the language settings — provide translations for all text labels
- apply the locale to the To Do List component and its Toolbar through the `locale` configuration property

The example below declares a German locale object:

~~~js
const de = {
    calendar: {
        // translations for calendar labels
    },
    todo: {
        // translations for To Do List labels
    }
};
~~~

:::tip
To create a custom locale, copy the [default English locale](#default-locale) and translate its text labels.
:::

:::info
[**This GitHub repository**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales) provides To Do List locales for the following languages:

- Chinese (`cn`)
- French (`fr`)
- German (`de`)
- English (`en`)
- Italian (`it`)
- Japanese (`jp`)
- Portuguese (`pt`)
- Russian (`ru`)
- Spanish (`es`)

The files do not include translations for the Calendar labels — add them yourself.
:::

The snippet below applies the `de` locale to the To Do List and the Toolbar:

~~~js {8,13}
const { ToDo, Toolbar} = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    locale: de // sets the "de" locale in the component
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    locale: de // sets the "de" locale in the Toolbar
});
~~~

:::tip
To change the locale dynamically, call [`setLocale()`](api/methods/setlocale_method.md) on the To Do List and [the matching `setLocale()`](api/toolbar_api/methods/setlocale_method.md) on the Toolbar.
:::

## Example

The snippet below switches between the EN and DE locales:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
