---
sidebar_label: end-drag
title: end-drag 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 end-drag 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# end-drag

### 描述 {#description}

@short: 当任务拖拽操作完成时触发

### 用法 {#usage}

~~~js
"end-drag":({
    target: string | number | null,
    dropPosition: "top" | "bottom" | "in" | null,
    mode: "move" | "copy"
}) => void;
~~~

### 参数 {#parameters}

`end-drag` 事件的回调函数可接收一个包含以下参数的对象：

- `target` - （必填）拖拽操作完成时所在任务的 ID
- `dropPosition` - （必填）被拖拽任务的放置位置：
    - `top` - 目标任务的上方
    - `bottom` - 目标任务的下方
    - `in` - 目标任务的内部
- `mode` - （必填）拖放操作的模式：
    - `move` - 移动模式
    - `copy` - 复制模式

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
    api: list.api
});

// 订阅 "drag" 事件
list.api.on("drag", ({ target, dropPosition, mode }) => {
    console.log(target, dropPosition, mode);
});
~~~

**Change log**: 在 v1.1 中新增

**相关文章：** [拖放](guides/configuration.md#drag-n-drop)
