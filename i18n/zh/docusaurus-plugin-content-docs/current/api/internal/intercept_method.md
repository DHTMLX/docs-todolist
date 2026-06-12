---
sidebar_label: api.intercept()
title: api.intercept 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 intercept 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.intercept()

### 描述 {#description}

@short: 允许拦截并阻止内部事件

### 用法 {#usage}

~~~js
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `callback` - （必填）要执行的回调函数（回调参数取决于要触发的事件）

### 事件 {#events}

:::info
To Do List 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

~~~js {12-16}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// forbid removing a project with the "first" ID
list.api.intercept("delete-project", ({ id }) => {
    if(id == "first"){
        return false;
    }
});
~~~
