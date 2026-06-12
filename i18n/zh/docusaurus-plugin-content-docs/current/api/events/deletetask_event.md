---
sidebar_label: delete-task
title: delete-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 delete-task 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# delete-task

### 描述 {#description}

@short: 删除任务时触发

### 用法 {#usage}

~~~js
"delete-task": ({
    id: string | number,
    batch?: (string | number)[]
}) => void;
~~~

### 参数 {#parameters}

`delete-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）被删除任务的 ID
- `batch` - （可选）批量操作中一同删除的任务 ID 数组

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

// 订阅 "delete-task" 事件
list.api.on("delete-task", ({id}) => {
    console.log("The", id, "task is removed"); 
});
~~~

**相关文章：** [任务操作](guides/task_operations.md#deleting-a-task)
