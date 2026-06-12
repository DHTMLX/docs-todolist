---
sidebar_label: copy-task
title: copy-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 copy-task 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# copy-task

### 描述 {#description}

@short: 任务被复制到剪贴板时触发

### 用法 {#usage}

~~~js
"copy-task": ({
    id: string | number,
    join?: boolean,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### 参数 {#parameters}

`copy-task` 事件的回调函数接收一个包含以下参数的对象：

- `id` - （必填）任务的 ID
- `join` - （可选）定义任务的复制模式：
    - `true` - 多选复制模式
    - `false` - 单个复制模式

如果复制的任务同时被粘贴到另一个位置，该对象还可以包含*四个额外*参数：

- `parent` - （可选）父任务的 ID
- `project` - （可选）项目的 ID
- `targetId` - （可选）粘贴复制任务的目标任务 ID
- `reverse` - （可选）若复制的任务粘贴到目标任务之前则为 `true`，否则为 `false`

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

// 订阅 "copy-task" 事件
list.api.on("copy-task", ({id}) => {
    console.log("The", id, "task is copied"); 
});
~~~ 

**变更日志：** `join` 参数在 v1.1 中新增

**相关文章：** [任务操作](guides/task_operations.md#copyingpasting-a-task)
