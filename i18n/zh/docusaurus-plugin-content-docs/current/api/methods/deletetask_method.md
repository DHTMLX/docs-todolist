---
sidebar_label: deleteTask()
title: deleteTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 deleteTask 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# deleteTask()

### 描述 {#description}

@short: 从 DataStore 中删除指定任务

:::note
该方法会连同所有子任务一起删除
:::

### 用法 {#usage}

~~~js
deleteTask({
    id: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）要删除的任务 ID

### 示例 {#example}

~~~js {17-19} title="示例 1. 删除单个任务"
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

// 删除任务
list.deleteTask({ 
    id: "1.2",
});
~~~

~~~js title="示例 2. 删除多个任务"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.1", "2.1"],
});

// 删除选中的任务
list.eachSelected(id => {
    list.deleteTask({ id });
}, true);
~~~

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
