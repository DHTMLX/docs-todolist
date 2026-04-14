---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX To Do List is compatible with Angular. For a working example, see the [Example on GitHub](https://github.com/DHTMLX/angular-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Angular CLI](https://v17.angular.io/cli) and [Node.js](https://nodejs.org/en/).
:::

Create a new **my-angular-todo-app** project using Angular CLI. For this purpose, run the following command:

~~~json
ng new my-angular-todo-app
~~~

:::note
Disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating the Angular app.
:::

The command installs all necessary tools. No additional commands are required.

### Install dependencies

Go to the newly created app directory:

~~~json
cd my-angular-todo-app
~~~

Install dependencies and start the dev server. For this, use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app runs on localhost (for example `http://localhost:3000`).

## Create To Do List

Stop the app and install the To Do List package before continuing.

### Step 1. Install the package

Download the [trial To Do List package](/how_to_start/#installing-to-do-list-via-npm-or-yarn) and follow the steps in the README file. The trial version is available for 30 days.

### Step 2. Create the component

Create an Angular component to add To Do List with Toolbar to the application. Create the *todo* folder in the *src/app/* directory, add a new file, and name it *todo.component.ts*.

#### Import source files

Open *todo.component.ts* and import To Do List source files. Note that:

- if you use PRO version and install the To Do List package from a local folder, the imported path looks like this:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

- if you use the trial version of To Do List, specify the following path:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

This tutorial uses the **trial** version of To Do List.

#### Set containers and initialize To Do List with Toolbar

To display To Do List with Toolbar on the page, create containers for both components and initialize them with the corresponding constructors:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // a template name used in the "app.component.ts" file as <todo />
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

Provide the styles for To Do List and its containers. Create *todo.component.css* in the *src/app/todo/* directory and specify the required styles:

~~~css title="todo.component.css"
/* import To Do List styles */
@import "@dhx/trial-todolist/dist/todo.css";

/* specify styles for initial page */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* specify styles for To Do List and Toolbar container*/
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* specify styles for To Do List container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Load data

Create *data.ts* in the *src/app/todo/* directory and add your data:

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

Open *todo.component.ts*, import the data file, and pass the data to the To Do List configuration object in `ngOnInit()`:

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

You can also use the [`parse()`](/api/methods/parse_method/) method inside the `ngOnInit()` method of Angular to load data into To Do List.

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

The To Do List component is ready to use. When added to the page, the component initializes with data. See the [To Do List API docs](/api/overview/configs_overview/) for the full list of available properties.

#### Handle events

When a user performs an action in To Do List, the action triggers an event. Use events to detect actions and run custom code. See the [full list of events](/api/overview/events_overview/).

Open *todo.component.ts* and extend the `ngOnInit()` method:

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

### Step 3. Add To Do List to the app

Open *src/app/app.component.ts* and replace the default code:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // a template created in the "todo.component.ts" file 
})
export class AppComponent {
    name = "";
}
~~~

Create *app.module.ts* in the *src/app/* directory and specify `ToDoComponent`:

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

Open *src/main.ts* and replace the existing code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Start the app to see To Do List loaded with data.

![To Do List initialization](../assets/trial_todolist.png)

The integration is complete. Customize the code to match your requirements. Find the final example on [GitHub](https://github.com/DHTMLX/angular-todolist-demo).
