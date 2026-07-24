---
sidebar_label: selected
title: selected 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 selected 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# selected

### 描述 {#description}

@short: 可选。包含任务 ID 的数组，这些任务将在 To Do List 初始化时被选中

### 用法 {#usage}

~~~js
selected?: (string | number)[];
~~~

### 示例 {#example}

~~~js {11}
const { ToDo, Toolbar } = todo;

// 创建 To Do List
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [多选与批量操作](guides/multiselection.md)
