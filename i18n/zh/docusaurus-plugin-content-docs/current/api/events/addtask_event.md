---
sidebar_label: add-task
title: add-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 add-task 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# add-task

### 描述 {#description}

@short: 添加新任务时触发

### 用法 {#usage}

~~~js
"add-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}) => void;
~~~

### 参数 {#parameters}

`add-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）所添加任务的 ID
- `parent` - （可选）父任务的 ID
- `project` - （可选）项目的 ID
- `targetId` - （可选）目标任务的 ID
- `reverse` - （可选）若任务添加在目标任务之前，则为 `true`；否则为 `false`
- `task` - （必填）所添加任务的对象

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

// 订阅 "add-task" 事件
list.api.on("add-task", (obj) => {
    console.log("A new task is added", obj);
});
~~~

**相关文章：** [任务操作](guides/task_operations.md#adding-a-new-task)
