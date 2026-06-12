---
sidebar_label: assignUser()
title: assignUser 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 assignUser 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# assignUser()

### 描述 {#description}

@short: 将人员分配到指定任务

### 用法 {#usage}

~~~js
assignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 id
- `userId` - （必填）要分配到该任务的人员的 id

### 示例 {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// 创建 To do list
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users: [
        { "id": "user_1", "label": "John" },
        { "id": "user_2", "label": "Kate" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将用户分配到任务
list.assignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**相关文章：** [任务负责人](guides/task_users.md)
