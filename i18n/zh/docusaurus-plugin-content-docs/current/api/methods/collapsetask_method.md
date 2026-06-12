---
sidebar_label: collapseTask()
title: collapseTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 collapseTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# collapseTask()

### 描述 {#description}

@short: 根据 id 折叠任务

### 用法 {#usage}

~~~js
collapseTask({
    id: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）要折叠的任务的 id

### 示例 {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 折叠任务
list.collapseTask({ 
    id: "1",
});
~~~

**相关文章：** [任务操作](guides/task_operations.md)
