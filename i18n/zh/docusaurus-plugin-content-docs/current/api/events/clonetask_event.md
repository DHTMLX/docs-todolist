---
sidebar_label: clone-task
title: clone-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 clone-task 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# clone-task

### 描述 {#description}

@short: 将任务从剪贴板粘贴到指定位置时触发

该事件在 [paste-task](api/events/pastetask_event.md) 事件之后触发

### 用法 {#usage}

~~~js
"clone-task": ({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    batch: obj[]
}) => void;
~~~

### 参数 {#parameters}

`clone-task` 事件的回调函数可以接收一个包含以下参数的对象：

- `parent` - （可选）父任务的 ID
- `project` - （可选）项目的 ID
- `targetId` - （可选）任务被粘贴到的目标任务的 ID
- `reverse` - （可选）若任务被粘贴在目标任务之前，则为 `true`；否则为 `false`
- `batch` - （必填）复制后粘贴所创建的对象数组

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

// 订阅 "clone-task" 事件
list.api.on("clone-task", (obj) => {
    console.log(obj); 
});
~~~

**相关文章：** [任务操作](guides/task_operations.md#copyingpasting-a-task)
