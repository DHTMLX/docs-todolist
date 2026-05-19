---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Angular

:::tip
Familiarize yourself with the basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, refer to the [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX To Do List is compatible with **Angular**. The code examples below show how to use DHTMLX To Do List with **Angular**. For a complete project, refer to the [**Example on GitHub**](https://github.com/DHTMLX/angular-todolist-demo).

## Create a project

This section walks through scaffolding a new Angular project and installing dependencies.

:::info
Before you create a new project, install [**Angular CLI**](https://v17.angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new *my-angular-todo-app* project with Angular CLI. Run the following command:

~~~json
ng new my-angular-todo-app
~~~

:::note
To follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating the new Angular app.
:::

The command installs all the necessary tools. No additional commands are required.

### Install dependencies

Go to the newly created app directory:

~~~json
cd my-angular-todo-app
~~~

Install dependencies and start the dev server with the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app runs on a localhost address (for example, `http://localhost:3000`).

## Create the To Do List

Get the DHTMLX To Do List source code. Stop the app and proceed with installing the To Do List package.

### Step 1. Install the package

Download the [**trial To Do List package**](/how_to_start/#installing-to-do-list-via-npm-or-yarn) and follow the steps in the README file. The trial version is available for 30 days only.

### Step 2. Create the component

Create an Angular component to add the To Do List with the Toolbar into the application. In the *src/app/* directory, add the *todo* folder and create the *todo.component.ts* file inside it.

#### Import source files

Open *todo.component.ts* and import the To Do List source files. Choose one of two import paths:

- PRO version installed from a local folder — import from `dhx-todolist-package`
- trial version — import from `@dhx/trial-todolist`

The following snippet imports from the PRO package:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

The snippet below imports from the trial package:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

This tutorial uses the **trial** version of the To Do List.

#### Set containers and initialize the To Do List with Toolbar

To display the To Do List with the Toolbar on the page, set containers for both components and initialize them with the constructors. The example below defines the template, references the containers, and initializes the components inside `ngOnInit()`:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // template name used in "app.component.ts" as <todo />
    styleUrls: ["./todo.component.css"], // include the css file

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // initialize container for Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // initialize container for To Do List 
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // initialize the To Do List component
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // initialize the Toolbar component
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // destruct To Do List
        this._toolbar.destructor(); // destruct Toolbar
    }
}
~~~

#### Add styles

To display the To Do List correctly, provide the corresponding styles. Create the *todo.component.css* file in the *src/app/todo/* directory and add the styles for the To Do List and its container. The snippet below imports the To Do List styles and sets layout dimensions:

~~~css title="todo.component.css"
/* import To Do List styles */
@import "@dhx/trial-todolist/dist/todo.css";

/* styles for the initial page */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* styles for the To Do List and Toolbar container */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* styles for the To Do List container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Load data

To add data into the To Do List, provide a data set. Create the *data.ts* file in the *src/app/todo/* directory and add data into it. The following example exports a `getData()` function that returns tasks, users, and projects:

~~~jsx {2,19,28,38} title="data.ts"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        // ...
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
~~~

Open *todo.component.ts*. Import the data file and pass the data properties to the configuration object of the To Do List inside the `ngOnInit()` method. The snippet below applies user, task, and project data on initialization:

~~~jsx {2,23,25-27} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // initialize data properties
        this._todo = new ToDo(this.todo_container.nativeElement, {
            users, // apply user data
            tasks, // apply task data
            projects,// apply project data
            // other configuration properties
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

You can also use the [`parse()`](api/methods/parse_method.md) method inside the `ngOnInit()` method of Angular to load data into the To Do List. The example below loads data with `parse()` after initialization:

~~~jsx {2,23,31-36} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", 
    styleUrls: ["./todo.component.css"], 
    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { users, tasks, projects } = getData(); // initialize data properties
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });

        // apply the data via the parse() method
        this._todo.parse({ 
            users, 
            tasks, 
            projects 
        }); 
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

The `parse(data)` method reloads data on each applied change.

The To Do List component is ready to use. When the element is added to the page, it initializes the To Do List with data. Provide additional configuration settings as needed. Visit the [To Do List API docs](api/overview/configs_overview.md) for the full list of available properties.

#### Handle events

When a user performs an action in the To Do List, the component fires an event. Use these events to detect the action and run the desired code. See the [full list of events](api/overview/events_overview.md).

Open *todo.component.ts* and complete the `ngOnInit()` method. The snippet below attaches a handler to the `add-task` event:

~~~jsx {5-7} title="todo.component.ts"
// ...
ngOnInit() {
    this._todo = new ToDo(this.todo_container.nativeElement, {});

    this._todo.events.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
}

ngOnDestroy(): void {
    this._todo.destructor();
}
~~~

### Step 3. Add the To Do List into the app

To add the *ToDoComponent* into the app, open *src/app/app.component.ts* and replace the default code with the following snippet:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // template created in "todo.component.ts"
})
export class AppComponent {
    name = "";
}
~~~

Create the *app.module.ts* file in the *src/app/* directory and register `ToDoComponent`. The example below declares the components and bootstraps the app:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./todo/todo.component";

@NgModule({
    declarations: [AppComponent, ToDoComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

The last step is to open *src/main.ts* and replace the existing code with the following:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Start the app to see the To Do List loaded with data on the page.

![To Do List initialization](../assets/trial_todolist.png)

You now know how to integrate DHTMLX To Do List with Angular. Customize the code to fit your requirements. Find the final example on [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo).
