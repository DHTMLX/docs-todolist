---
sidebar_label: Initialization
title: Initialization
description: You can learn about initialization of the DHTMLX JavaScript To Do List in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Initialization


To create or, in other words, to display To Do List on the page, you need to take the following steps:

1\. [Include the To Do List source files on a page](#include-source-files)

2\. [Create two containers](#create-containers): one for List and another one for Toolbar

3\. [Initialize List and Toolbar](#initialize-to-do-list)

## Include source files

[Download the To Do List package](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml) and unpack it into a folder of your project.

To create To Do List, you need to include 2 source files on your page:

- *todo.js*
- *todo.css*

Make sure that you set correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>  
<link rel="stylesheet" href="./dist/todo.css">	
~~~

## Create containers

The To Do List widget consists of two separate components: a List and a Toolbar. 

Thus, create **two containers** to place a List and Toolbar into and give them IDs, for instance, **"root"** and **"toolbar"**:


~~~html title="index.html"
<div id="toolbar"></div> // the container for Toolbar (if you need to create To Do List with its Toolbar)
<div id="root"></div> // the container for List
~~~

## Initialize To Do List

### Initialize List

After that, initialize List with the **new ToDo()** constructor. It takes two parameters:

- a container to place a List into. The one we have created at the previous step
- an object with configuration properties. [See the full list here](api/overview/configs_overview.md)

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // apply the object destructuring

// create List
const list = new ToDo("#root", {
    // configuration properties
});
~~~

### Initialize Toolbar

Next, initialize Toolbar with the **new Toolbar()** constructor. The constructor also takes two parameters:

- a container to place a Toolbar into. The one we have created at the previous step
- an object with configuration properties. [See the full list here](category/toolbar-properties.md)

:::info
Initialization of the Toolbar is optional. You can skip this step if you don't need the Toolbar in your application
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
You should apply the object destructuring to "unpack" the **todo** global object into two variables: ToDo and Toolbar. 

You don't need this step if you will use the **new todo.ToDo()** and **new todo.Toolbar()** constructors.
:::

## Loading data into To Do List

Detailed information on loading data into DHTMLX To Do is given in the [Data loading](guides/loading_data.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

