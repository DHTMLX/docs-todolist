---
sidebar_label: move-task
title: move-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 move-task 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# move-task

### 描述 {#description}

@short: 当移动任务时触发

### 用法 {#usage}

~~~js
"move-task": ({
    id: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    operation?: "indent" | "unindent" | "project",
    batch?: (string| number)[]
}) => void;
~~~

### 参数 {#parameters}

`move-task` 事件的回调函数可接收一个包含以下参数的对象：

- `id` - （必填）被移动任务的 ID
- `parent` - （可选）父任务的 ID
- `project` - （可选）项目的 ID
- `targetId` - （可选）目标任务的 ID
- `reverse` - （可选）若任务粘贴到目标任务之前则为 `true`，否则为 `false`
- 可应用于 [RestDataProvider](guides/working_with_server.md) 的附加参数：
    - `operation` - （可选）对任务执行的操作类型；可选值：
        - `indent` - 将任务嵌套层级降低一级
        - `unindent` - 将任务嵌套层级提升一级
        - `project` - 将任务移动到另一个项目
        - 若未设置值，则表示在任务所属项目内更改任务位置
    - `batch` - （可选）执行操作的任务 ID 数组

:::info
如需处理内部事件，可以使用 [**Event Bus 方法**](category/event-bus-methods.md)
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

// 订阅 "move-task" 事件
list.api.on("move-task", ({id}) => {
    console.log("The", id, "task is moved"); 
});
~~~ 

**相关文章：** [任务操作](guides/task_operations.md#moving-a-task)
