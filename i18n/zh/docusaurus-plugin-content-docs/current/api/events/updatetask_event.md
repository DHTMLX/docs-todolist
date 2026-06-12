---
sidebar_label: update-task
title: update-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 update-task 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# update-task

### 描述 {#description}

@short: 当更新任务时触发

### 用法 {#usage}

~~~js
"update-task": ({
    id: string | number,
    task: object,
    skipProvider?: boolean,
    batch?: object[]
}) => void;
~~~

### 参数 {#parameters}

`update-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）被更新任务的 ID
- `task` - （必填）被更新任务的对象
- 可用于 [RestDataProvider](guides/working_with_server.md) 的附加参数：
  - `skipProvider` - （可选）允许跳过发送给 RestDataProvider 的事件；若为 `false（默认值）`，RestDataProvider 正常处理该事件；若为 `true`，RestDataProvider 跳过该事件
  - `batch` - （可选）被更新任务对象的数组

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

// 订阅 "update-task" 事件
list.api.on("update-task", ({id, task}) => {
    console.log("The", id, "task is updated. New task object is", task);
});
~~~


**相关文章：** [任务操作](guides/task_operations.md#updating-a-task)
