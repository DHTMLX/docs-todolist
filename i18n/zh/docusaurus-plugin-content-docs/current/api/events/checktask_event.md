---
sidebar_label: check-task
title: check-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 check-task 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# check-task

### 描述 {#description}

@short: 将任务标记为已完成时触发

### 用法 {#usage}

~~~js
"check-task": ({
    id: string | number,
    manual?: boolean
}) => void;
~~~

### 参数 {#parameters}

`check-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）任务的 ID
- `manual` - （可选）若任务以"手动"模式标记为已完成，则为 `true`

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

// 订阅 "check-task" 事件
list.api.on("check-task", ({id}) => {
    console.log("The", id, "task is marked as completed"); 
});
~~~

**相关文章：** [任务操作](guides/task_operations.md#marking-a-task-completeincomplete)
