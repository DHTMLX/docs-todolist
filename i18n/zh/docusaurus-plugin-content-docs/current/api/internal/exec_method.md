---
sidebar_label: api.exec()
title: api.exec 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 exec 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.exec()

### 描述 {#description}

@short: 允许触发内部事件

### 用法 {#usage}

~~~js
api.exec(
    event: string,
    config: object
): void;
~~~

### 参数 {#parameters}

- `event` - （必填）要触发的事件
- `config` - （必填）包含配置参数的对象（参见要触发的事件）

### 事件 {#events}

:::info
To Do List 内部事件的完整列表可在[**此处**](api/overview/events_overview.md)查看
:::

### 示例 {#example}

~~~js {12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// add a new project
list.api.exec("add-project", { project: { label: "New project" } });
~~~
