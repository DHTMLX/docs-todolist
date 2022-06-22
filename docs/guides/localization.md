---
sidebar_label: Localization
title: Localization
description: You can learn about the To Do List localization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Localization

You can present the interface of DHTMLX To Do List in any language. The library provides a number of predefined locales and gives the ability to create custom ones. By default, DHTMLX To Do List uses [English locale](#default-locale).

## Default locale

~~~js
const en = {
	// calendar
	calendar:{
		monthFull: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		monthShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		dayFull: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	
		clear: "Clear",
		done: "Done",
		today: "Today",
	},
	// To Do List
	todo: {
		// Toolbar
		"No project": "No project",
		"Search project": "Search project",
		"Add project": "Add project",
		"Rename project": "Rename project",
		"Delete project": "Delete project",

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
		"New project": "New project",
	}
};
~~~

## Custom locale

To initialize the To Do List component in non-English language, you need to:

- define necessary language settings: provide translations for all text labels (it can be any language you need)

~~~js
const de = {
    calendar: {
        // translations for calendar labels
    },
    todo: {
        // translations for To Do List labels
    },
};
~~~

:::tip
To create a custom locale, you can make a copy of the default ([English](#default-locale)) locale, and translate text labels from it into the required language.
:::

:::info
You can download [**a repository from GitHub**](https://github.com/web-widgets/wx-todo-locales/tree/master/locales) which includes locales of the To Do List for the following languages: 

- Chinese (**cn**)
- French (**fr**)
- German (**de**)
- English (**en**)
- Italian (**it**) 
- Japanese (**jp**) 
- Portuguese (**pt**) 
- Russian (**ru**)
- Spanish (**es**)

*The files don't include translations for the Calendar labels, therefore you will need to add them yourself.*
:::

- apply the necessary locale to the To Do List component and its Toolbar via the corresponding **locale** properties:

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
To change the locale dynamically, use the related `setLocale()` methods of the [To Do List](api/methods/setlocale_method.md) and [Toolbar](api/toolbar_api/methods/setlocale_method.md)
:::

## Example

In this snippet you can see how to switch between the EN and DE locales:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>