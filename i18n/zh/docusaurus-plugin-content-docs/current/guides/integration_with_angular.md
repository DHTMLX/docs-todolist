---
sidebar_label: 与 Angular 集成
title: 与 Angular 集成
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解与 Angular 的集成方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费试用版。
---

# 与 Angular 集成 {#integration-with-angular}

:::tip
在阅读本文档之前，请先熟悉 **Angular** 的基本概念和模式。如需温习相关知识，请参阅 [**Angular 文档**](https://v17.angular.io/docs)。
:::

DHTMLX To Do List 与 **Angular** 兼容。以下示例演示如何将两者结合使用。完整项目请参见 [**GitHub 示例**](https://github.com/DHTMLX/angular-todolist-demo)。

## 创建项目 {#create-a-project}

使用脚手架工具创建新的 Angular 项目并安装依赖项。

:::info
在创建新项目之前，请先安装 [**Angular CLI**](https://v17.angular.io/cli) 和 [**Node.js**](https://nodejs.org/en/)。
:::

使用 Angular CLI 创建一个名为 *my-angular-todo-app* 的新项目，运行以下命令：

~~~bash
ng new my-angular-todo-app
~~~

:::note
在创建新的 Angular 应用时，请按照本指南的要求禁用服务端渲染（SSR）和静态站点生成（SSG/预渲染）。
:::

该命令会安装所有必要的工具。

### 安装依赖项 {#install-dependencies}

进入新创建的应用目录：

~~~bash
cd my-angular-todo-app
~~~

使用 [**yarn**](https://yarnpkg.com/) 包管理器安装依赖项并启动开发服务器：

~~~bash
yarn
yarn start
~~~

应用将在本地地址上运行（例如 `http://localhost:3000`）。

## 创建 To Do List {#create-the-to-do-list}

停止应用并安装 To Do List 包。

### 步骤一：安装包 {#step-1-install-the-package}

下载 [**To Do List 试用包**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) 并按照 README 文件中的步骤操作。试用版仅可使用 30 天。

### 步骤二：创建组件 {#step-2-create-the-component}

创建一个 Angular 组件，将带有 Toolbar 的 To Do List 添加到应用中。在 *src/app/* 目录下，新建 *todo* 文件夹，并在其中创建 *todo.component.ts* 文件。

#### 导入源文件 {#import-source-files}

打开 *todo.component.ts*，导入 To Do List 的源文件。可选择以下两种导入路径之一：

- 从本地文件夹安装的 PRO 版本 - 从 `dhx-todolist-package` 导入
- 试用版 - 从 `@dhx/trial-todolist` 导入

以下代码片段从 PRO 包导入：

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from 'dhx-todolist-package';
~~~

以下代码片段从试用包导入：

~~~jsx title="todo.components.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
~~~

本教程使用**试用**版本。

#### 设置容器并初始化带 Toolbar 的 To Do List {#set-containers-and-initialize-the-to-do-list-with-toolbar}

要在页面上显示带 Toolbar 的 To Do List，需为两个组件设置容器并使用构造函数进行初始化。以下示例定义模板、引用容器，并在 `ngOnInit()` 内初始化组件：

~~~jsx {1,8-11,15-18,24-31} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist'; 
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "todo", // 模板名称，在 "app.component.ts" 中以 <todo /> 形式使用
    styleUrls: ["./todo.component.css"], // 引入 CSS 文件

    template:  `<main class = "component_container">
                    <div #toolbar_container></div>
                    <div #todo_container class = "widget"></div>
                </main>`
})

export class ToDoComponent implements OnInit, OnDestroy {
    // 初始化 Toolbar 的容器
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // 初始化 To Do List 的容器
    @ViewChild("todo_container", { static: true }) todo_container!: ElementRef;
    
    private _todo!: ToDo;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // 初始化 To Do List 组件
        this._todo = new ToDo(this.todo_container.nativeElement, {});
        
        // 初始化 Toolbar 组件
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 其他配置属性
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor(); // 销毁 To Do List
        this._toolbar.destructor(); // 销毁 Toolbar
    }
}
~~~

#### 添加样式 {#add-styles}

导入 CSS 文件以确保 To Do List 正确渲染。在 *src/app/todo/* 目录下创建 *todo.component.css* 文件，并为 To Do List 及其容器添加样式。以下代码片段导入 To Do List 样式并设置布局尺寸：

~~~css title="todo.component.css"
/* 导入 To Do List 样式 */
@import "@dhx/trial-todolist/dist/todo.css";

/* 初始页面样式 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f7f7f7;
}

/* To Do List 和 Toolbar 容器的样式 */
.component_container {
    height: 100%; 
    max-width: 800px; 
    margin: 0 auto;
}

/* To Do List 容器的样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据 {#load-data}

在 *src/app/todo/* 目录下创建 *data.ts* 文件并向其中添加数据。以下示例导出一个 `getData()` 函数，该函数返回任务、用户和项目数据：

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

打开 *todo.component.ts*，导入数据文件，并在 `ngOnInit()` 方法中将数据属性传入 To Do List 的配置对象。以下代码片段在初始化时应用用户、任务和项目数据：

~~~jsx {2,23,25-27} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // 导入数据
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
        const { users, tasks, projects } = getData(); // 初始化数据属性
        this._todo = new ToDo(this.todo_container.nativeElement, {
            users,
            tasks,
            projects,
            // 其他配置属性
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 其他配置属性
        });
    }

    ngOnDestroy(): void {
        this._todo.destructor();
        this._toolbar.destructor();
    }
}
~~~

您也可以在 `ngOnInit()` 中使用 [`parse()`](api/methods/parse_method.md) 方法将数据加载到 To Do List。以下示例在初始化后使用 `parse()` 加载数据：

~~~jsx {2,23,31-36} title="todo.component.ts"
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import { getData } from "./data"; // 导入数据
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
        const { users, tasks, projects } = getData(); // 初始化数据属性
        this._todo = new ToDo(this.todo_container.nativeElement, {});

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._todo.api,
            // 其他配置属性
        });

        // 通过 parse() 方法应用数据
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

每次调用 `parse(data)` 都会替换当前数据集。

该组件现在将渲染一个已填充数据的 To Do List。其他可用属性请参见[配置概览](api/overview/configs_overview.md)。

#### 处理事件 {#handle-events}

订阅事件以响应用户操作。请参见[完整事件列表](api/overview/events_overview.md)。

打开 *todo.component.ts* 并完善 `ngOnInit()` 方法。以下代码片段为 `add-task` 事件添加处理程序：

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

### 步骤三：将 To Do List 添加到应用中 {#step-3-add-the-to-do-list-into-the-app}

要将 `ToDoComponent` 添加到应用中，请打开 *src/app/app.component.ts* 并将默认代码替换为以下代码片段：

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<todo/>` // 在 "todo.component.ts" 中创建的模板
})
export class AppComponent {
    name = "";
}
~~~

在 *src/app/* 目录下创建 *app.module.ts* 文件并注册 `ToDoComponent`。以下示例声明组件并启动应用：

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

最后一步是打开 *src/main.ts* 并将现有代码替换为以下内容：

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

启动应用，To Do List 将渲染并显示示例数据：

![在 Angular 应用程序中渲染的带有示例数据的 DHTMLX To Do List](/img/trial_todolist.png)

在 [**GitHub**](https://github.com/DHTMLX/angular-todolist-demo) 上查看完整项目。
