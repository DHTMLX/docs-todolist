---
sidebar_label: destructor()
title: destructor Method
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 Toolbar 的 destructor 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# destructor()

### 描述 {#description}

@short: 移除 Toolbar 的所有 HTML 元素，并解除所有相关事件绑定


### 用法 {#usage}

~~~js
destructor(): void;
~~~


### 示例 {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

toolbar.destructor();
~~~
