---
sidebar_label: unassignUser()
title: unassignUser 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 unassignUser 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# unassignUser()

### 描述 {#description}

@short: 将指定人员从指定任务中取消分配

### 用法 {#usage}

~~~js
unassignUser({
    id: string | number,
    userId: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 id
- `userId` - （必填）需要从该任务取消分配的人员 id

### 示例 {#example}

~~~js {22-25}
const { ToDo, Toolbar } = todo;

// 创建 To Do List
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1"},
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1" },
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

// 将用户从任务中取消分配
list.unassignUser({
    id: "1.1",
    userId: "user_2"
});
~~~

**相关文章：** [任务负责人](guides/task_users.md)
