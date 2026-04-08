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

[Download the To Do List package](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) and unpack it into your project folder.

Add the following two source files to your page:

- `todo.js`
- `todo.css`

The following snippet includes the source files using relative paths to the `dist` folder:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>  
<link rel="stylesheet" href="./dist/todo.css">    
~~~

## Create containers

To Do List consists of two components: a List and a Toolbar.

Create two containers with IDs, for example `"root"` and `"toolbar"`:

~~~html title="index.html"
<div id="toolbar"></div> // Toolbar container (optional)
<div id="root"></div> // List container
~~~

## Initialize To Do List

Initialize the List and Toolbar using their respective constructors.

### Initialize List

Initialize the List with the `ToDo()` constructor. It takes two parameters:

- a container for the List (created in the previous step)
- an object with [configuration properties](/api/overview/configs_overview/)

The following code snippet initializes the List:

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // unpack the todo global object

// create List
const list = new ToDo("#root", {
    // configuration properties
});
~~~

### Initialize Toolbar

Initialize the Toolbar with the `Toolbar()` constructor, passing `list.api` as the required `api` property. It takes two parameters:

- a container for the Toolbar (created in the previous step)
- an object with [configuration properties](/category/toolbar-properties/)

:::info
Toolbar initialization is optional. Skip this step if you do not need the Toolbar.
:::

The following code snippet shows a complete initialization of List and Toolbar:

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // unpack the todo global object

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
Apply object destructuring to unpack the `todo` global object into `ToDo` and `Toolbar` variables.

Skip this step if you use the `todo.ToDo()` and `todo.Toolbar()` constructors directly.
:::

## Load data

See the [Data loading](/guides/loading_data/) guide for details.

## Example

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
