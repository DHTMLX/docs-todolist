---
sidebar_label: paste-task
title: paste-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 paste-task 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# paste-task

### 描述 {#description}

@short: 当任务从剪贴板粘贴到指定位置时触发

### 用法 {#usage}

~~~js
"paste-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}) => void;
~~~

### 参数 {#parameters}

`paste-task` 事件的回调函数可接受一个包含以下参数的对象：

- `parent` - （可选）目标父任务的 ID
- `project` - （可选）项目的 ID
- `targetId` - （可选）粘贴任务的目标任务 ID
- `reverse` - （可选）若任务粘贴在目标任务之前，则为 `true`；否则为 `false`

:::info
如需处理内部事件，可使用 [**Event Bus 方法**](category/event-bus-methods.md)
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

// 订阅 "paste-task" 事件
list.api.on("paste-task", (obj) => {
    console.log("The task is pasted", obj); 
}); 
~~~

**相关文章：** [任务操作](guides/task_operations.md#copyingpasting-a-task)
