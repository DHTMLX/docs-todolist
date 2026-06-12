---
sidebar_label: expandTask()
title: expandTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 expandTask 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# expandTask()

### 描述 {#description}

@short: 根据 ID 展开已折叠的任务

### 用法 {#usage}

~~~js
expandTask({
    id: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）要展开的任务的 ID

### 示例 {#example}

~~~js {17-19,22-24}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
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
    id: "1.1",
});

// 展开已折叠的任务
list.expandTask({ 
    id: "1.1",
});
~~~

**相关文章：** [任务操作](guides/task_operations.md)
