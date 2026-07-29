---
sidebar_label: drag
title: drag 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 drag 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# drag

### 描述 {#description}

@short: 用户拖动任务时触发

### 用法 {#usage}

~~~js
"drag":({
    start: string | number,
    source: (string | number)[],
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null
}) => void;
~~~

### 参数 {#parameters}

`drag` 事件的回调函数可以接收一个包含以下参数的对象：

- `start` - （必填）拖动操作开始时的任务 ID
- `source` - （必填）被拖动任务的 ID 数组
- `target` - （必填）潜在目标任务的 ID
- `dropPosition` - （必填）任务相对于目标任务的放置位置：
    - `top` - 目标任务上方
    - `bottom` - 目标任务下方
    - `in` - 目标任务内部

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

// 订阅 "drag" 事件
list.api.on("drag", ({start, source, target, dropPosition}) => {
    console.log(start, source, target, dropPosition);
});
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [拖放功能](guides/configuration.md#drag-n-drop)
