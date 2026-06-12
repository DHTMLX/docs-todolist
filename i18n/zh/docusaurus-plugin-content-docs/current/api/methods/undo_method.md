---
sidebar_label: undo()
title: undo 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 undo 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# undo()

### 描述 {#description}

@short: 撤销 To Do List 中的最后一次操作

:::info
如果将 [`history.projects`](api/configs/history_config.md) 参数设置为 `true`，则可以分别管理每个项目的变更历史；否则，将统一管理整个应用的变更历史。
:::

### 用法 {#usage}

~~~js
undo(): void;
~~~

### 示例 {#example}

~~~js {10,14}
const { ToDo } = todo;
const { tasks, users, projects, tags } = getData();

// 创建 To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
    history: { projects: false, limit: 10 }
});

list.addTask({ task: { text: "New task 1" } });
list.undo();
~~~

**变更日志：** `undo()` 方法在 v1.3 中新增

**相关 API：**
    - [`history`](api/configs/history_config.md)
    - [`redo`](api/methods/redo_method.md)
