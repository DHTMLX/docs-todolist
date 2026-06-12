---
sidebar_label: readonly
title: readonly 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 readonly 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# readonly

### 描述 {#description}

@short: 可选。将 To Do List 设置为只读模式

:::tip
启用只读模式后，工具栏和列表中的 *添加任务* 按钮及 *三点* 图标将被隐藏

在 *只读* 模式下，只能将任务标记为已完成/未完成
:::

### 用法 {#usage}

~~~js
readonly?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx {}
readonly: false // 只读模式已禁用
~~~

### 示例 {#example}

~~~js {9}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

// 创建 To Do List
const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    readonly: true
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**相关文章：** [只读模式](guides/readonly_mode.md)
