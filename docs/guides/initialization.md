---
sidebar_label: Initialization
title: Initialization
description: You can learn about initialization of the DHTMLX JavaScript To Do List in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Initialization

To display the To Do List on the page, follow these steps:

1\. [Include the To Do List source files on a page](#include-source-files)

2\. [Create two containers](#create-containers): one for List and another for Toolbar

3\. [Initialize List and Toolbar](#initialize-to-do-list)

## Include source files

Download the To Do List package and unpack it into a folder of your project. The download page is available [here](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml).

Include the following source files on your page:

- *todo.js*
- *todo.css*

Set correct relative paths to the source files. The example below adds both files from the *dist* folder:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>  
<link rel="stylesheet" href="./dist/todo.css">    
~~~

## Create containers

The To Do List widget consists of two separate components: a List and a Toolbar.

Create **two containers** for the List and the Toolbar, and assign them IDs (for example, **"root"** and **"toolbar"**). The following snippet declares both containers:

~~~html title="index.html"
<div id="toolbar"></div> <!-- container for Toolbar (optional) -->
<div id="root"></div> <!-- container for List -->
~~~

## Initialize To Do List

### Initialize List

Initialize the List with the `new ToDo()` constructor. The constructor takes two parameters:

- a container to place the List into (the container created at the previous step)
- an object with configuration properties (see the full list in the [configs overview](api/overview/configs_overview.md))

The following code snippet creates a List inside the `#root` container:

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // apply the object destructuring

// create List
const list = new ToDo("#root", {
    // configuration properties
});
~~~

### Initialize Toolbar

Initialize the Toolbar with the `new Toolbar()` constructor. The constructor takes two parameters:

- a container to place the Toolbar into (the container created at the previous step)
- an object with configuration properties (see the full list in the [toolbar properties](category/toolbar-properties.md))

:::info
Toolbar initialization is optional. Skip this step if you do not need the Toolbar in your application.
:::

The code snippet below creates the Toolbar and links it to the List through the `api` property:

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
Apply the object destructuring to unpack the `todo` global object into two variables: `ToDo` and `Toolbar`.

Skip this step if you use the `new todo.ToDo()` and `new todo.Toolbar()` constructors directly.
:::

## Load data into To Do List

The [Data loading](guides/loading_data.md) article describes how to load data into the DHTMLX To Do List.

## Example

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
