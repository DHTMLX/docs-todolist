---
sidebar_label: api.getReactiveState()
title: api.getReactiveState 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getReactiveState 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# api.getReactiveState()

### 描述 {#description}

@short: 获取包含 To Do List 的 DataStore 响应式属性的对象

### 用法 {#usage}

~~~js
api.getReactiveState(): object;
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

~~~js {12-15}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// create To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects
});

// subscribe to the task selection
list.api.getReactiveState().selected.subscribe((value) => {
    console.log(value);
    // other actions
});
~~~

**变更日志：** `historyState` 参数已在 v1.3 中添加
