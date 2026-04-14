---
sidebar_label: Initialization
title: Initialization
description: You can learn about initialization of the DHTMLX JavaScript To Do List in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Initialization

To display To Do List on the page, follow these steps:

1\. [Include the To Do List source files on a page](#include-source-files)

2\. [Create two containers](#create-containers): one for List and another one for Toolbar

3\. [Initialize List and Toolbar](#initialize-to-do-list)

## Include source files

[Download the To Do List package](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) and unpack it into a folder of your project.

Include 2 source files on your page:

- *todo.js*
- *todo.css*

Set the correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>  
<link rel="stylesheet" href="./dist/todo.css">    
~~~

## Create containers

The To Do List widget consists of two separate components: a List and a Toolbar. Create a separate container for each and give them IDs, for example `"root"` and `"toolbar"`:


~~~html title="index.html"
<div id="toolbar"></div> // the container for Toolbar (if you need to create To Do List with its Toolbar)
<div id="root"></div> // the container for List
~~~

## Initialize To Do List

Use the `ToDo` and `Toolbar` constructors to create the widget components.

### Initialize List

Initialize List with the `new ToDo()` constructor. The constructor takes two parameters:

- a container to place List into, created in the previous step
- an object with configuration properties. [See the full list here](api/overview/configs_overview.md)

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // apply the object destructuring

// create List
const list = new ToDo("#root", {
    // configuration properties
});
~~~

### Initialize Toolbar

Initialize Toolbar with the `new Toolbar()` constructor. The constructor takes two parameters:

- a container to place Toolbar into, created in the previous step
- an object with configuration properties. [See the full list here](category/toolbar-properties.md)

:::info
Toolbar initialization is optional. Skip this step if you do not need the Toolbar in your application.
:::

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // apply the object destructuring

// create List
const list = new ToDo("#root", {
    // configuration properties
});

// create Toolbar
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~

:::note
Apply object destructuring to unpack the `todo` global object into two variables: `ToDo` and `Toolbar`.

Skip this step if you use the `new todo.ToDo()` and `new todo.Toolbar()` constructors directly.
:::

## Load data into To Do List

See the [Data loading](guides/loading_data.md) article for details on loading data into DHTMLX To Do.

## Example

The example below demonstrates a complete initialization of To Do List with Toolbar:

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

