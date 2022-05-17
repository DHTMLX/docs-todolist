---
sidebar_label: Localization
title: Localization
description: You can learn about the To Do List localization in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Localization

You can apply different languages to the interface of DHTMLX To Do List. You can either apply a built-in locale or a custom one.

The library includes four built-in locales: **en**, **ru**, **de**, **cn**. 

You can access the locales via running the following command:

~~~js
npm i @xbs/wx-todo-locales
// or
yarn add @xbs/wx-todo-locales
~~~


By default, DHTMLX To Do List uses [English locale].

~~~js
locale: en
~~~

:::info
If needed you can export the **en** locale right from the component:

~~~js
const { ToDo, Toolbar, en } = todo;
~~~
:::


### Default locale

const calendar = {
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