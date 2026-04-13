---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Angular

:::tip
Familiarize yourself with basic Angular concepts and patterns before reading this guide. Refer to the [Angular documentation](https://v17.angular.io/docs) to refresh your knowledge.
:::

DHTMLX To Do List is compatible with Angular. For a complete example, see the [demo on GitHub](https://github.com/DHTMLX/angular-todolist-demo).

## Create a project

:::info
Before creating a new project, install [Angular CLI](https://v17.angular.io/cli) and [Node.js](https://nodejs.org/en/).
:::

Create a new `my-angular-todo-app` project using Angular CLI:

~~~json
ng new my-angular-todo-app
~~~

:::note
To follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating the Angular app.
:::

The command installs all necessary tools.

### Install dependencies

Navigate to the new app directory:

~~~json
cd my-angular-todo-app
~~~

Install dependencies and start the dev server using [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

The app runs on a local server (for example, `http://localhost:3000`).

## Create To Do List

Stop the app and install the To Do List package.

### Step 1. Install the package

Download the [trial To Do List package](/how_to_start/#installing-to-do-list-via-npm-or-yarn) and follow the README instructions. The trial is available for 30 days.

### Step 2. Create the component

Create the *todo* folder in *src/app/*, then add a new file named *todo.component.ts*.

#### Import source files

Open *todo.component.ts* and import To Do List source files. The import path depends on the version you use:

- For the PRO version installed from a local folder, use this import path:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

- For the trial version, use this import path:

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

This guide uses the trial version.

#### Set containers and initialize To Do List

The following code snippet sets up the component template and initializes To Do List and Toolbar in `ngOnInit()`:

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // selector used in app.component.ts as <todo />
    styleUrls: ["./todo.component.css"], // include CSS file

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // container for Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // container for To Do List 
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // initialize To Do List
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // initialize Toolbar
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // remove To Do List
        this._toolbar.destructor(); // remove Toolbar
    }
}
~~~

#### Add styles

Create *todo.component.css* in *src/app/todo/* and add styles for To Do List and its container:

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

Create *data.ts* in *src/app/todo/* with sample data:

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

Open *todo.component.ts*, import the data file, and pass data properties to the To Do List constructor in `ngOnInit()`:

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
        const { users, tasks, projects } = getData(); // get data
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

Use the [`parse()`](/api/methods/parse_method/) method inside `ngOnInit()` to load data instead:

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
        const { users, tasks, projects } = getData(); // get data
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // other configuration properties 
        });

        // load data with parse()
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

Call `parse()` again at any point to reload data with new values.

The component is ready. When added to the page, the component initializes To Do List with data. See the [API docs](/api/overview/configs_overview/) for the full list of configuration properties.

#### Handle events

To Do List fires an event on each user action. Use these events to react to changes. See the [full list of events](/api/overview/events_overview/).

The following code snippet handles the `add-task` event inside `ngOnInit()`:

~~~jsx {5-7} title="todo.component.ts"
// ...
ngOnInit() {
    this._todo = new ToDo(this.todo_container.nativeElement, {});

    this._todo.api.on("add-task", (obj) => {
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
    template: `<todo/>` // template defined in todo.component.ts
})
export class AppComponent {
    name = "";
}
~~~

Create *app.module.ts* in *src/app/* and register the components:

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

Open *src/main.ts* and replace the existing code to bootstrap the application:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Start the app to see To Do List loaded with data.

![To Do List initialization](/assets/trial_todolist.png)

Customize the code to fit your requirements. Find the complete example on [GitHub](https://github.com/DHTMLX/angular-todolist-demo).
