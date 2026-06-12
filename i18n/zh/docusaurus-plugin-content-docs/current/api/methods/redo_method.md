---
sidebar_label: redo()
title: redo 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 redo 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# redo()

### 描述 {#description}

@short: 重复执行被 undo 操作撤销的动作

:::info
如果您将 [`history.projects`](api/configs/history_config.md) 参数设置为 `true`，则可以分别管理每个项目的变更历史；否则，将统一管理整个应用的变更历史。
:::

### 用法 {#usage}

~~~js
redo(): void;
~~~

### 示例 {#example}

~~~js {10,15}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// 创建 To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: true, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
list.redo();
~~~

**变更日志：** `redo()` 方法在 v1.3 中新增

**相关 API：**
    - [`history`](api/configs/history_config.md)
    - [`undo`](api/methods/undo_method.md)
