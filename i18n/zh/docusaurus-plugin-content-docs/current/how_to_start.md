---
sidebar_label: 快速入门
title: 快速入门
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解如何开始使用 DHTMLX To Do List。浏览开发者指南和 API 参考，体验代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版本。
---

# 快速入门 {#how-to-start}

本教程将指导您创建一个功能完整的 To Do List 并将其集成到 Web 应用中。

![网页上显示的功能完整的 DHTMLX To Do List](/img/todolist.png)

完成以下所有步骤后，您将获得一个可直接使用的 To Do List，可根据需求灵活配置并高效应用于实际场景。

## 第一步：引入源文件 {#step-1-include-source-files}

:::info
请在[**此处**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)下载 To Do List 安装包，并将其解压到您的项目目录中。
:::

首先，创建一个 HTML 文件并命名为 *index.html*，然后在该文件中引入 DHTMLX To Do List 的源文件。

您需要引入以下两个文件：

- To Do List 的 JS 文件
- To Do List 的 CSS 文件

~~~html title="index.html" {5-6}
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <script>
        // 您的代码将写在这里
        </script>
    </body>
</html>
~~~

### 通过 npm 或 yarn 安装 To Do List {#installing-to-do-list-via-npm-or-yarn}

您可以使用 `yarn` 或 `npm` 包管理器将 JavaScript To Do List 导入到项目中。

#### 通过 npm 或 yarn 安装试用版 To Do List {#installing-trial-to-do-list-via-npm-or-yarn}

:::info
如果您希望使用 To Do List 的试用版，请下载[**试用版 To Do List 安装包**](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)，并按照 *README* 文件中的步骤操作。请注意，试用版 To Do List 仅可使用 30 天。
:::

#### 通过 npm 或 yarn 安装 PRO 版 To Do List {#installing-pro-to-do-list-via-npm-or-yarn}

:::info
您可以在[客户专区](https://dhtmlx.com/clients/)中生成 **npm** 登录名和密码，从而直接访问 DHTMLX 私有 **npm**。详细的安装指南也可在该页面找到。请注意，访问私有 **npm** 仅在您的 To Do List 专有许可证有效期内可用。
:::

## 第二步：创建 To Do List {#step-2-create-to-do-list}

现在您可以向页面中添加 To Do List。为此，需要创建两个 DIV 容器，分别用于放置 To Do List 及其 Toolbar。具体步骤如下：

- 在 *index.html* 文件中声明两个 DIV 容器
- 分别使用 `new ToDo()` 和 `new Toolbar()` 构造函数初始化 To Do List 及其 Toolbar

~~~js title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo; // 使用对象解构
            
            const list = new ToDo("#root", {
                // 配置属性
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
                // 更多配置属性
            });
        </script>
    </body>
</html>
~~~

:::note
您需要使用对象解构将 `todo` 全局对象"解包"为两个变量：ToDo 和 Toolbar。

如果您使用 `new todo.ToDo()` 和 `new todo.Toolbar()` 构造函数，则无需此步骤。
:::

:::info
Toolbar 是 To Do List 界面的可选部分。如需创建不带 Toolbar 的 To Do List，只需声明一个 DIV 容器并通过 `new ToDo()` 构造函数初始化列表即可。
:::

有关 To Do List 初始化的更多信息，请阅读[初始化](guides/initialization.md)文章。

## 第三步：向 To Do List 加载数据 {#step-3-load-data-into-to-do-list}

如您所见，To Do List 已完成初始化，但目前仍为空。在此步骤中，您将学习如何向组件填充数据。

:::info
如果您希望页面上显示空组件，可跳过此步骤。
:::

首先，您需要准备要加载到组件中的数据。数据可包含以下几类信息：[`tasks`](api/configs/tasks_config.md)、[`projects`](api/configs/projects_config.md)、[`users`](api/configs/users_config.md)、[`tags`](api/configs/tags_config.md) 以及 [`activeProject`](api/configs/activeproject_config.md)。

最便捷的方式是将数据准备在一个单独的文件中，例如：

~~~js title="data.js"
function getData() {
    // 任务数据
    const tasks = [
        // "widgets" 项目的任务数据
        { "id": "widgets", "project": "widgets", "text": "\u{1F389} DHTMLX widgets" },
        { "id": "gantt", "project": "widgets", "parent": "widgets", "text": "Gantt" },
        { "id": "scheduler", "project": "widgets", "parent": "widgets", "text": "Scheduler" },
        { "id": "diagram", "project": "widgets", "parent": "widgets", "text": "Diagram" },
        
        // "introduction" 项目的任务数据
        {
            "id": "temp://1652991560212",
            "project": "introduction",
            "text": "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List."
        },
        {
            "id": "1652374122964",
            "project": "introduction",
            "text": "You can assign task performers and due dates using the menu.",
            "assigned": [ "user_2", "user_1", "user_3" ],
            "due_date": "2033-03-08T21:00:00.000Z"
        },
        {
            "id": "1652097809881",
            "project": "introduction",
            "text": "You can create tasks with an infinite number of subtasks.",
            "assigned": [ "user_2" ],
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
        // 更多任务对象
    ];

    // 用户数据
    const users = [
        { "id": "user_1", "label": "Don Smith", "avatar": "../avatar_02.jpg" },
        { "id": "user_2", "label": "Nadia Chasey", "avatar": "../avatar_05.jpg" },
        { "id": "user_3", "label": "Mike Young", "avatar": "../avatar_21.jpg" },
        // 更多用户对象
    ];

    // 项目数据
    const projects = [
        { "id": "introduction", "label": "Introduction to DHTMLX To Do List" },
        { "id": "widgets", "label": "Our widgets" },
        // 更多项目对象
    ];

    return { projects, users, tasks };
}
~~~

现在，您可以向 To Do List 填充数据。只需在组件的配置对象中指定相关属性即可：

~~~js {8,16,18-22} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with To Do List</title>
        <script type="text/javascript" src="./dist/todo.js"></script>  
        <link rel="stylesheet" href="./dist/todo.css">

        <script src="../data.js"></script>
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const { ToDo, Toolbar } = todo;
            const { tasks, users, projects } = getData();

            const list = new ToDo("#root", {
                tasks,
                users,
                projects
            });
            const toolbar = new Toolbar("#toolbar", {
                api: list.api,
            });
        </script>
    </body>
</html>
~~~

有关向 To Do List 加载数据的更多信息，请参阅[数据加载](guides/loading_data.md)文章。

## 第四步：配置 To Do List {#step-4-configure-to-do-list}

现在，您可以按需定义 To Do List 的配置。

如您所知，To Do List 由两个独立的界面组成：列表（List）和工具栏（Toolbar），每个界面都拥有各自的配置选项列表：

- 查看 [To Do List 属性](api/overview/configs_overview.md)列表
- 查看 [Toolbar 属性](category/toolbar-properties.md)列表

以下示例展示如何为 To Do List 启用*只读*模式、指定活动项目，以及在工具栏中仅显示搜索框：

~~~js {5-6,11}
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    activeProject: "introduction",
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: ["search"]
});
~~~

## 下一步 {#whats-next}

至此，您已拥有一个可用的 To Do List。您可以加载自己的数据，并对组件进行配置以满足实际需求。

如果您希望深入了解 To Do List，以下内容可供进一步学习：

- [To Do List 概览](/)
- [指南](category/guides.md)
- [API](category/api.md)
