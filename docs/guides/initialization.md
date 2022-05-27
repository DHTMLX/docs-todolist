---
sidebar_label: Initialization
title: Initialization
description: descr
---

# Initialization


To create or, in other words, to display To Do List on the page, you need to take the following steps:


1\. Include the To Do List source files on a page

2\. Create two containers: one for List and another one for Toolbar

3\. Initialize List and Toolbar

## Include source files

[Download the To Do List package] and unpack it into a folder of your project.

To create To Do List, you need to include 2 source files on your page:

- *todo.js*
- *todo.css*

Make sure that you set correct relative paths to the source files:

~~~html title="index.html"
<script type="text/javascript" src="../dist/todo.js"></script>  
<link rel="stylesheet" href="../dist/todo.css">	
~~~

## Create containers

The To Do List widget consists of two separate components: a List and a Toolbar. 

Thus, create **two containers** to place a List and Toolbar into and give them IDs, for instance, **"root"** and **"toolbar"**:


~~~html title="index.html"
<div id="root"></div> // the container for List
<div id="toolbar"></div> // the container for Toolbar (if you need to create To Do List with its Toolbar)
~~~

## Initialize To Do List


The first thing you have to do is to apply the object destructuring:

~~~js title="index.js"
const { ToDo, Toolbar } = todo;
~~~

### Initialize List

After that, initialize List with the **new ToDo()** constructor. It takes two parameters:

- a container to place a List into. The one we have created at the previous step
- an object with configuration properties. [See the full list here](api/overview/configs_overview.md)

~~~js title="index.js"
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

~~~js {7-9} title="index.js"
// create List
const list = new ToDo("#root", {
    // configuration properties
});

// create Toolbar
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~



