---
sidebar_label: id
title: id 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 id 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# id

### 描述 {#description}

@short: 可选。To Do List 的 ID

:::info
自动生成，用于确保组件各部分（如 Toolbar）的正常运行
:::

### 用法 {#usage}

~~~js
id?: string | number;
~~~

### 示例 {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// 创建 To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    id: "root"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~
