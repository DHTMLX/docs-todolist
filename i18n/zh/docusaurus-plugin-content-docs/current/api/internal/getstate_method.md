---
sidebar_label: api.getState()
title: api.getState 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.getState()

### 描述 {#description}

@short: 获取包含 To Do List 的 DataStore 当前属性的对象

### 用法 {#usage}

~~~js
api.getState(): object;
~~~

### 返回值 {#returns}

该方法返回一个包含以下属性的对象：

~~~js
{
    activeProject: object,
    tasks: object,
    id: object,
    projects: object,
    readonly: object,
    tags: object,
    taskShape: object,
    selected: object,
    users: object,
    historyState: object
}
~~~

### 示例 {#example}

~~~js {11-12}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To do list
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

const state = list.api.getState();
console.log(state);
~~~

**变更日志：** `historyState` 参数已在 v1.3 中添加
