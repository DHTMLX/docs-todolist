---
sidebar_label: How to start
title: How to start
description: You can learn about how to start working with DHTMLX To Do List in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# How to start

This tutorial will teach you how to create a fully featured To Do List and add it into your web application. 

```todo
add an image
```

After completing all the steps below, you will get a ready-to-use To Do List which you can easily configure to suite your needs and efficiently use in real life.


## Step 1. Include source files

At first, create an HTML file and call it *index.html*. Then include the source files of DHTMLX To Do List into this file.

You need to include the following two files:

- the JS file of To Do List
- the CSS file of To Do List


~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

## Step 2. Prepare data to load

:::info
You can skip this step if you want to display an empty component on the page
:::

Before creating a To Do List, you can prepare data sets for [**tasks**](api/configs/tasks_config.md), [**projects**](api/configs/projects_config.md), [**users**](api/configs/users_config.md), and [**tags**](api/configs/tags_config.md) to load into the component. 

The most convenient way is to prepare data in a separate file, for example:

~~~js title="data.js"
function getData() {

    // data for tasks
    const tasks = [
        // data for tasks of the "widgets" project
        {
            "id": "widgets",
            "project": "widgets",
            "text": "\u{1F389} DHTMLX widgets"
        },
        {
            "id": "gantt",
            "project": "widgets",
            "parent": "widgets",
            "text": "Gantt"
        },
        {
            "id": "scheduler",
            "project": "widgets",
            "parent": "widgets",
            "text": "Scheduler"
        },
        {
            "id": "diagram",
            "project": "widgets",
            "parent": "widgets",
            "text": "Diagram"
        },
        // data for tasks of the "introduction" project    
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [
                "user_2",
                "user_1",
                "user_3",
            ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [
                "user_2"
            ],
            "collapsed": false
        },
        {
            "id": "1652097809882",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Use the Tab and Shift + Tab keys for this.",
            "checked": false
        },
        {
            "id": "1652097809887",
            "project": "introduction",
            "parent": "1652097809881",
            "text": "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            "checked": false
        },
        // more task objects
    ];

    // data for users
    const users = [
        {
            "id": "user_1",
            "label": "Don Smith",
            "path": "../avatar_02.jpg"
        },
        {
            "id": "user_2",
            "label": "Nadia Chasey",
            "path": "../avatar_05.jpg"
        },
        {
            "id": "user_3",
            "label": "Mike Young",
            "path": "../avatar_21.jpg"
        },
        // more user objects
    ];

    // data for projects
    const projects = [
        {
            "id": "introduction",
            "label": "Introduction to DHTMLX To Do List"
        },
        {
            "id": "widgets",
            "label": "Our widgets"
        },
        // more project objects
    ];
}
~~~

## Step 3. Create To Do List

## Step 4. Populate To Do List with data

Include the file with data the page:

~~~html {8} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">

        <script src="../data.js"></script>
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~