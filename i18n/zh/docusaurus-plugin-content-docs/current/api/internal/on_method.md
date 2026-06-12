---
sidebar_label: api.on()
title: api.on 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 on 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.on()

### 描述 {#description}

@short: 允许为内部事件绑定处理函数

### 用法 {#usage}

~~~js
api.on(
    event: string,
    handler: function
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `handler` - （必填）要绑定的处理函数（处理函数的参数取决于要触发的事件）

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

// output the project data to console when you remove it
list.api.on("delete-project", ({ id }) => {
    console.log( "The id of the project", { id });
});
~~~
