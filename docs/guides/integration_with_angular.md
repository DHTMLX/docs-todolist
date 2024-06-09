---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript To Do List library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX To Do List.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX To Do List is compatible with **Angular**. We have prepared code examples on how to use DHTMLX To Do List with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-todolist-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-todo-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-todo-app
~~~

The command above installs all the necessary tools and dependencies, so you don't need to run any additional commands.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-angular-todo-app
~~~

Run the app with the following commands:

~~~json
yarn install
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating To Do List

Now you should get the DHTMLX To Do List code. First of all, stop the app and proceed with installing the To Do List package.

### Step 1. Package installation

Download the [**trial To Do List package**](/how_to_start/#installing-to-do-list-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial To Do List is available 30 days only.
  
### Step 2. Component creation

Now you need to create a component, to add a To Do List into the application. Create the **todo** folder in the **src/app/todo** directory, add a new file into it and name it **todo.component.ts**. Then complete the steps described below.

#### Importing source files

Open the file and import To Do List source files. Note that:

- if you use PRO version and install the To Do List package from a local folder, the imported paths look like this:

~~~jsx
import { ToDo } from 'dhx-todolist-package';
~~~

- if you use the trial version of To Do List, specify the following paths:

~~~jsx
import { ToDo } from '@dhx/trial-todolist';
~~~

In this tutorial you can see how to configure the **trial** version of To Do List.

#### Setting the container and adding To Do List

To display To Do List on the page, you need to set the container to render the component inside. Use the code below:

~~~jsx title="todo.component.ts"
import { ToDo } from '@dhx/trial-todolist';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';

@Component({
    selector: 'todo',
    template: '<div #container></div>'
})
export class ToDoComponent implements OnInit {
    @ViewChild('container', { static: true }) container!: ElementRef;
}
~~~

Then you need to render our To Do List in the container. To do that, use the `ngOnInit()` method of Angular:

~~~jsx {6-9} title="todo.component.ts"
export class ToDoComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) container!: ElementRef;

    private _todo!: ToDo;

    ngOnInit() {
        const todo = new ToDo(this.container.nativeElement,{});
        this._todo = todo;
    }

    ngOnDestroy() {
        this._todo.destructor();
    }
}
~~~

In the above code you also specified the `ngOnDestroy()` method that contains the `_todo.destructor()` expression to clear the component when it is no longer needed.

#### Loading data

To add data into To Do List, you need to provide a data set. You can create the **data.ts** file in the **src/app/todo/** directory and add some data into it:

~~~jsx title="data.ts"
export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1,
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2,
        },
        // ...
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg",
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

Then open the ***todo.component.ts*** file. Import the file with data and specify the corresponding data properties to the configuration object of To Do List within the `ngOnInit()` method, as shown below.

~~~jsx {2,6-9} title="todo.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const { users, tasks, projects } = getData();
    const todo = new ToDo(this.container.nativeElement, {
        users,
        tasks,
        projects
    });
}
~~~

You can also use the [`parse()`](/api/methods/parse_method/) method inside the `ngOnInit()` method of Angular to load data into To Do List. It will reload data on each applied change.

~~~jsx {8} title="todo.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const { users, tasks, projects } = getData();
    const todo = new ToDo(this.container.nativeElement, {});

    todo.parse({users, tasks, projects});
}
~~~

Now the To Do List component is ready. When the element will be added to the page, it will initialize the To Do List object with data. You can provide necessary configuration settings as well. Visit our [To Do List API docs](/api/overview/configs_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the To Do List, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open the **todo.component.ts** file and complete the `ngOnInit()` method as in:

~~~jsx {4-6} title="todo.component.ts"
ngOnInit() {
    const todo = new ToDo(this.container.nativeElement,{ /*...*/ });

    todo.events.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
}
~~~

### Step 3. Adding To Do List into the app

Now it's time to add the component into your app. Open ***src/app/app.component.ts*** and use *ToDoComponent* instead of the default content by inserting the code below:

~~~jsx title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>`
})
export class AppComponent {
    name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and insert the *ToDoComponent* as provided below:

~~~jsx title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./todo/todo.component";

@NgModule({
    declarations: [AppComponent, ToDoComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, you can start the app to see To Do List loaded with data on a page.

![To Do List initialization](../assets/trial_todolist.png)

Now you know how to integrate DHTMLX To Do List with Angular. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo).
