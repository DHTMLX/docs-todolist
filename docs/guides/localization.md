---
sidebar_label: Localization
title: Localization
description: You can learn about the To Do List localization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Localization

You can present the interface of DHTMLX To Do List in any language. The library provides a number of predefined locales and gives the ability to create custom ones.

## Built-in locales

The library includes the built-in localization for the following languages: 

- Chinese (**cn**)
- English (**en**) - default
- German (**de**) 
- Russian (**ru**)

To access the locales, you need to run the following command:

~~~js
npm i @xbs/wx-todo-locales
// or
yarn add @xbs/wx-todo-locales
~~~

:::info
The **en** locale is available by default but if needed you can export it right from the component:

~~~js
const { ToDo, Toolbar, en } = todo;
~~~
:::

## Activating a locale

To initialize the To Do List component in non-English language, you need to apply the necessary locale to the To Do List component and its toolbar via the corresponding **locale** properties:

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
To change the locale dynamically, use the related **setLocale()** methods of To do list and Toolbar
:::

## Default locale

~~~js
const en = {
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

## Creating a custom locale

The easiest way to create a custom locale is to make a copy of the default (English) locale presented above, and translate all strings from it into the required language.

To apply the custom locale, use either of the following ways:

- activate the locale on initialization of the To Do List component via the [locale](api/configs/locale_config.md) property
- or override the current locale via the [setLocale()](api/methods/setlocale_method.md) method

:::info
Don't forget to apply the custom locale to the Toolbar component as well
:::

## Example

In this snippet you can see how to switch between the EN and DE locales:

<iframe src="https://snippet.dhtmlx.com/kzjwvuq5?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>