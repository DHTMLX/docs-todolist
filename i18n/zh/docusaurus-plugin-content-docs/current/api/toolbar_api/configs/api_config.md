---
sidebar_label: api
title: api Config
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 Toolbar 的 api 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# api

### 描述 {#description}

@short: 必填。包含 To Do List 内部 API 的对象

:::info
若要使搜索栏和 Toolbar 中的控件正常工作，必须使用 To Do List 的内部 API
:::

### 用法 {#usage}

~~~js
api: object;
~~~

### 示例 {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**相关文章：**
- [初始化](guides/initialization.md)
