---
sidebar_label: 初始化
title: 初始化
description: 您可以在文档中了解 DHTMLX JavaScript To Do List 的初始化方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 初始化

要在页面上显示 To Do List，请按照以下步骤操作：

1. [在页面中引入 To Do List 源文件](#include-source-files)
2. [创建两个容器](#create-containers)：一个用于 List，另一个用于 Toolbar
3. [初始化 List 和 Toolbar](#initialize-to-do-list)

## 引入源文件 {#include-source-files}

下载 To Do List 安装包并解压到项目文件夹中。可从[下载页面](https://dhtmlx.com/docs/products/dhtmlxTodo/download.shtml)获取安装包。

在页面中引入以下源文件：

- *todo.js*
- *todo.css*

调整相对路径以匹配您的项目结构。以下示例从 *dist* 文件夹加载这两个文件：

~~~html title="index.html"
<script type="text/javascript" src="./dist/todo.js"></script>
<link rel="stylesheet" href="./dist/todo.css">
~~~

## 创建容器 {#create-containers}

To Do List 组件由两个部分组成：List 和 Toolbar。

为 List 和 Toolbar **创建两个容器**，并为其分配 ID（例如 `"root"` 和 `"toolbar"`）。以下代码片段声明了这两个容器：

~~~html title="index.html"
<div id="toolbar"></div> <!-- Toolbar 容器（可选）-->
<div id="root"></div> <!-- List 容器 -->
~~~

## 初始化 To Do List {#initialize-to-do-list}

### 初始化 List {#initialize-list}

使用 `new ToDo()` 构造函数初始化 List。构造函数接受两个参数：

- 放置 List 的容器（即上面创建的容器）
- 包含配置属性的对象（完整列表请参阅 [configs 概览](api/overview/configs_overview.md)）

以下代码片段在 `#root` 容器中创建一个 List：

~~~js title="index.js"
const { ToDo, Toolbar } = todo; // 解构全局 todo 对象

// 创建 List
const list = new ToDo("#root", {
    // 配置属性
});
~~~

### 初始化 Toolbar {#initialize-toolbar}

使用 `new Toolbar()` 构造函数初始化 Toolbar。构造函数接受两个参数：

- Toolbar 的容器（在上一步中创建）
- 包含配置属性的对象（完整列表请参阅[工具栏属性](category/toolbar-properties.md)）

:::info
Toolbar 初始化是可选的。如果您的应用不需要 Toolbar，可以跳过此步骤。
:::

以下代码片段创建 Toolbar 并通过 `api` 属性将其链接到 List：

~~~js {9-11} title="index.js"
const { ToDo, Toolbar } = todo; // 解构全局 todo 对象

// 创建 List
const list = new ToDo("#root", {
    // 配置属性
});

// 创建 Toolbar
const toolbar = new Toolbar("#toolbar", {
    api: list.api
});
~~~

:::note
将 `todo` 全局对象解构为 `ToDo` 和 `Toolbar` 以直接使用它们。

如果您直接调用 `new todo.ToDo()` 和 `new todo.Toolbar()` 构造函数，则可以跳过此步骤。
:::

## 向 To Do List 加载数据 {#load-data-into-to-do-list}

[数据加载](guides/loading_data.md)文章介绍了如何向 DHTMLX To Do List 加载数据。

## 示例 {#example}

<iframe src="https://snippet.dhtmlx.com/3vwlbwee?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
