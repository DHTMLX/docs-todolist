---
sidebar_label: unassign-user
title: unassign-user 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 unassign-user 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# unassign-user

### 描述 {#description}

@short: 当用户从任务中取消分配时触发

### 用法 {#usage}

~~~js
"unassign-user": ({
    id: string | number,
    userId: string | number
}) => void;
~~~

### 参数 {#parameters}

`unassign-user` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）任务的 ID
- `userId` - （必填）从该任务中取消分配的用户 ID

:::info
要处理内部事件，可以使用 [**Event Bus 方法**](category/event-bus-methods.md)
:::

### 示例 {#example}

~~~js {15-17}
const { ToDo, Toolbar } = todo;
const {tasks, projects, users} = getData();

const list = new ToDo("#root", {
    tasks,
    projects,
    users
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 订阅 "unassign-user" 事件
list.api.on("unassign-user", ({id, userId}) => {
    console.log("The", userId, "user is unassigned from the", id, "task");
});
~~~

**相关文章：** [任务用户](guides/task_users.md)
