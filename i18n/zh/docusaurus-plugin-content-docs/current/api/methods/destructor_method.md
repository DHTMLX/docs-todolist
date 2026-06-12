---
sidebar_label: destructor()
title: destructor 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 destructor 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# destructor()

### 描述 {#description}

@short: 移除 To Do List 的所有 HTML 元素，并解绑所有相关事件


### 用法 {#usage}

~~~js
destructor(): void;
~~~


### 示例 {#example}

~~~js {14,17}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 移除 List
list.destructor();

// 移除 Toolbar
toolbar.destructor();
~~~
