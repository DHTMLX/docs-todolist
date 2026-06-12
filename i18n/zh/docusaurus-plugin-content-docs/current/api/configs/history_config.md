---
sidebar_label: history 
title: history 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 history 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# history

### 描述 {#description}

@short: 可选。启用/禁用变更历史记录管理功能

:::info
使用 `history` 属性可以启用或禁用 To Do List 中的变更历史记录管理。如果将 `history` 属性设置为 `false`，则无法通过 [`undo()`](api/methods/undo_method.md)/[`redo()`](api/methods/redo_method.md) 方法及 Toolbar 上的控件来管理变更历史记录。
:::

### 用法 {#usage}

~~~js
history?: boolean; 
// 或 
history?: { 
    projects?: boolean, 
    limit?: number 
};
~~~

### 参数 {#parameters}

配置 `history` 属性时，可以使用**简写**或**扩展**两种方式：

**简写**方式：

- `history` - （可选）启用/禁用 To Do List 的变更历史记录

**扩展**方式：
- `history` - （可选）包含扩展设置的对象，用于配置变更历史记录。可指定以下参数：
    - `projects` - （可选）启用/禁用历史记录的分支管理

    :::info
    如果将 `projects` 参数设置为 `true`，则可以为每个项目单独管理变更历史记录；否则，将对整个应用的历史记录进行统一管理。
    :::

    - `limit` - （可选）限制历史操作的数量

### 默认配置 {#default-config}

~~~jsx {}
history: true
~~~

### 示例 {#example}

~~~js {9}
const { ToDo } = todo;
const { tasks, users, projects } = getData();

// 创建 To Do List
new ToDo("#root", {
    tasks,
    users,
    projects,
    history: { projects: false, limit: 20 }
});
~~~

**更新日志：** `history` 配置在 v1.3 中新增

**相关 API：**
    - [`redo`](api/methods/redo_method.md)
    - [`undo`](api/methods/undo_method.md)
