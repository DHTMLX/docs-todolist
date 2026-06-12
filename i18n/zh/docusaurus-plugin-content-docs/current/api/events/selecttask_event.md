---
sidebar_label: select-task
title: select-task 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 select-task 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# select-task

### 描述 {#description}

@short: 当选中一个任务时触发

### 用法 {#usage}

~~~js
"select-task": ({
    id: string | number,
    join?: boolean
}) => void;
~~~

### 参数 {#parameters}

`select-task` 事件的回调函数可接受一个包含以下参数的对象：

- `id` - （必填）任务的 ID
- `join` - （可选）定义任务的选中模式：
    - `true` - 多选模式
    - `false` - 单选模式

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

// 订阅 "select-task" 事件
list.api.on("select-task", ({id, join}) => {
    console.log("The", id, "task is selected");
    console.log(join);
});
~~~

**变更日志：** `join` 参数在 v1.1 中新增

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
