---
sidebar_label: 与 Svelte 集成
title: 与 Svelte 集成
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解与 Svelte 的集成方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费试用版。
---

# 与 Svelte 集成 {#integration-with-svelte}

:::tip
在阅读本文档之前，请先熟悉 **Svelte** 的基本概念和模式。如需温习相关知识，请参阅 [**Svelte 文档**](https://svelte.dev/docs/svelte/overview)。
:::

DHTMLX To Do List 与 **Svelte** 兼容。以下示例演示如何将两者结合使用。完整项目请参见 [**GitHub 示例**](https://github.com/DHTMLX/svelte-todolist-demo)。

## 创建项目 {#create-a-project}

使用脚手架工具创建新的 Svelte 项目并安装依赖项。

:::info
在创建新项目之前，请先安装 [**Vite**](https://vite.dev/)（可选）和 [**Node.js**](https://nodejs.org/en/)。
:::

创建 **Svelte** 项目有以下两种方式：

- 使用 [**SvelteKit**](https://kit.svelte.dev/)
- 不使用 SvelteKit，改用 **Svelte with Vite**

以下示例使用脚手架创建一个 Svelte + Vite 项目：

~~~bash
npm create vite@latest
~~~

详情请参阅[相关文章](https://svelte.dev/docs/svelte/overview)。

### 安装依赖项 {#install-dependencies}

将项目命名为 *my-svelte-todo-app* 并进入应用目录：

~~~bash
cd my-svelte-todo-app
~~~

使用包管理器安装依赖项并启动开发服务器。

使用 [**yarn**](https://yarnpkg.com/) 运行以下命令：

~~~bash
yarn
yarn start
~~~

使用 [**npm**](https://www.npmjs.com/) 运行以下命令：

~~~bash
npm install
npm run dev
~~~

应用将在本地地址上运行（例如 `http://localhost:3000`）。

## 创建 To Do List {#create-the-to-do-list}

停止应用并安装 To Do List 包。

### 步骤一：安装包 {#step-1-install-the-package}

下载 [**To Do List 试用包**](how_to_start.md#installing-to-do-list-via-npm-or-yarn) 并按照 README 文件中的步骤操作。试用版仅可使用 30 天。

### 步骤二：创建组件 {#step-2-create-the-component}

创建一个 Svelte 组件，将带有 Toolbar 的 To Do List 添加到应用中。在 *src/* 目录下，新建一个名为 *ToDo.svelte* 的文件。

#### 导入源文件 {#import-source-files}

打开 *ToDo.svelte*，导入 To Do List 的源文件。可选择以下两种导入路径之一：

- 从本地文件夹安装的 PRO 版本 - 从 `dhx-todolist-package` 导入
- 试用版 - 从 `@dhx/trial-todolist` 导入

以下示例从 PRO 包导入：

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from 'dhx-todolist-package';
import 'dhx-todolist-package/dist/todo.css';
</script>
~~~

根据包的不同，源文件可能已被压缩。此时请将 CSS 文件导入为 *todo.min.css*。

以下代码片段从试用包导入：

~~~html title="ToDo.svelte"
<script>
import { ToDo, Toolbar } from '@dhx/trial-todolist';
import '@dhx/trial-todolist/dist/todo.css';
</script>
~~~

本教程使用**试用**版本。

#### 设置容器并添加带 Toolbar 的 To Do List {#set-containers-and-add-the-to-do-list-with-toolbar}

要在页面上显示带 Toolbar 的 To Do List，需为两个组件创建容器并使用构造函数进行初始化。以下示例在 `onMount` 中绑定容器并初始化组件：

~~~html {3,6,10-11,13-17,27-28} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

let toolbar_container, todo_container; // 初始化 To Do List 和 Toolbar 的容器
let todo, toolbar;

onMount(() => {
    // 初始化 To Do List 组件
    todo = new ToDo(todo_container, {})

    // 初始化 Toolbar 组件
    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, // 提供 To Do List 内部 API
        // 其他配置属性
    })
});

onDestroy(() => {
    todo.destructor(); // 销毁 To Do List
    toolbar.destructor(); // 销毁 Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 加载数据 {#load-data}

在 *src/* 目录下创建 *data.js* 文件并向其中添加数据。以下示例导出一个 `getData()` 函数，该函数返回任务、用户和项目数据：

~~~jsx {2,19,28,38} title="data.js"
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

打开 *App.svelte*，导入数据并将其作为 **props** 传入 `<ToDo/>` 组件：

~~~html {3,5,8} title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

打开 *ToDo.svelte*，将传入的 **props** 应用到 To Do List 配置对象。以下代码片段通过配置传入用户、任务和项目数据：

~~~html {6-8,15-17} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {
        users,
        tasks,
        projects,
        // 其他配置属性
    })

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api, 
        // 其他配置属性
    })
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

您也可以在 `onMount()` 中使用 [`parse()`](api/methods/parse_method.md) 方法将数据加载到 To Do List。以下示例在初始化后使用 `parse()` 加载数据：

~~~html {6-8,21} title="ToDo.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { ToDo, Toolbar } from "@dhx/trial-todolist";
import "@dhx/trial-todolist/dist/todo.css";

export let users;
export let tasks;
export let projects;

let toolbar_container, todo_container;
let todo, toolbar;

onMount(() => {
    todo = new ToDo(todo_container, {})

    toolbar = new Toolbar(toolbar_container, {
        api: todo.api,
        // 其他配置属性
    })

    todo.parse({ tasks, users, projects });
});

onDestroy(() => {
    todo.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

每次调用 `parse(data)` 都会替换当前数据集。

该组件现在将渲染一个已填充数据的 To Do List。其他可用属性请参见[配置概览](api/overview/configs_overview.md)。

#### 处理事件 {#handle-events}

订阅事件以响应用户操作。请参见[完整事件列表](api/overview/events_overview.md)。

打开 *ToDo.svelte* 并完善 `onMount()` 方法。以下代码片段为 `add-task` 事件添加处理程序：

~~~html {8-10} title="ToDo.svelte"
<script>
// ...
let todo;

onMount(() => {
    todo = new ToDo(todo_container, {});

    todo.api.on("add-task", (obj) => {
        console.log("A new task is added", obj);
    });
});

onDestroy(() => {
    todo.destructor();
});
</script>

// ...
~~~

### 步骤三：将 To Do List 添加到应用中 {#step-3-add-the-to-do-list-into-the-app}

要将组件添加到应用中，请打开 *App.svelte* 并将默认代码替换为以下代码片段：

~~~html title="App.svelte"
<script>
import ToDo from "./ToDo.svelte";
import { getData } from "./data.js";

const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
~~~

启动应用，To Do List 将渲染并显示示例数据：

![在 Svelte 应用程序中渲染的带有示例数据的 DHTMLX To Do List](/img/trial_todolist.png)

在 [**GitHub**](https://github.com/DHTMLX/svelte-todolist-demo) 上查看完整项目。
