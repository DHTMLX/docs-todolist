---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# setLocale()

### Description

@short: Sets the specified locale for To do list

### Usage

~~~js
setLocale(
    locale: object,
): void;
~~~

### Parameters
 
- `locale` - (required) an object of the locale

### Example

~~~js {97-98}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const de = {
	calendar: {
		monthShort: [
			"Jan",
			"Feb",
			"Mrz",
			"Apr",
			"Mai",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Okt",
			"Nov",
			"Dez",
		],
		monthFull: [
			"Januar",
			"Februar",
			"März",
			"April",
			"Mai",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"Dezember",
		],
		dayShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
		dayFull: [
			"Sonntag",
			"Montag",
			"Dienstag",
			"Mittwoch",
			"Donnerstag",
			"Freitag",
			"Samstag",
		],
		clear: "Entfernen",
		done: "Fertig",
		today: "Heute",
	},
	todo: {
		// Toolbar
		"No project": "Kein Projekt",
		"Search project": "Projekt suchen",
		"Add project": "Projekt hinzufügen",
		"Rename project": "Projekt umbenennen",
		"Delete project": "Projekt löschen",
		// Task
		"Add task below": "Aufgabe unten hinzufügen",
		"Add subtask": "Unteraufgabe hinzufügen",
		"Set due date": "Fälligkeitsdatum festlegen",
		"Indent": "Einzug",
		"Unindent": "Nicht einrücken",
		"Assign to": "Zuweisen",
		"Move to": "Ziehen nach",
		"Duplicate": "Duplikat",
		"Copy": "Kopieren",
		"Paste": "Einfügung",
		"Delete": "Löschen",
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
		"Type you want": "Warten auf Eingabe",
		// Other
		"Search": "Suche",
		"Add task": "Aufgabe hinzufügen",
		"Untitled": "Ohne Titel",
	},
};

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// change locale of To do list
list.setLocale(de);

// change locale of Toolbar (read Info)
toolbar.setLocale(de, list.api);
~~~

:::info
The Toolbar of To do list is a separate component. To change its locale, you must apply its own [`setLocale()`](api/toolbar_api/methods/setlocale_method.md) method
:::

**Related article:** [Localization](guides/localization.md)