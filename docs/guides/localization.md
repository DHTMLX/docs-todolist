---
sidebar_label: Localization
title: Localization
description: You can learn about the To Do List localization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Localization

Present the To Do List interface in any language. The library includes predefined locales and supports custom ones. By default, To Do List uses the [English locale](#default-locale).

## Default locale

The default English locale defines calendar labels, toolbar labels, task menu items, keyboard shortcuts, and editor placeholder text.

~~~js
const en = {
    calendar:{ // calendar translations and settings
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

        weekStart: 1 // defines a first day of week (Monday by default)
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
        "Type you want": "Type you want",

        // Other
        "Search": "Search",
        "Add task": "Add task",
        "New project": "New project"
    }
};
~~~

## Custom locale

To use a non-English locale:

- Define the language settings and provide translations for all text labels:

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
To create a custom locale, copy the [default English locale](#default-locale) and translate the labels.
:::

:::info
Download a [locale repository from GitHub](https://github.com/web-widgets/wx-todo-locales/tree/master/locales) with ready-made translations for the following languages:

- Chinese (**cn**)
- French (**fr**)
- German (**de**)
- English (**en**)
- Italian (**it**)
- Japanese (**jp**)
- Portuguese (**pt**)
- Russian (**ru**)
- Spanish (**es**)

The files do not include Calendar label translations — add them manually.
:::

- Apply the locale to both To Do List and Toolbar via the `locale` property:

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
To change the locale dynamically, call [`setLocale()`](/api/methods/setlocale_method/) on both To Do List and Toolbar. Note that `setLocale()` reinitializes the component. Pass `list.api` as the second argument to the Toolbar method:

~~~js
list.setLocale(de);
toolbar.setLocale(de, list.api);
~~~
:::

## Example

The following example demonstrates switching between English and German locales:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
