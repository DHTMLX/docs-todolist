---
sidebar_label: start-drag
title: start-drag 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 start-drag 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# start-drag

### 描述 {#description}

@short: 当用户开始拖拽任务时触发

### 用法 {#usage}

~~~js
"start-drag":({
    start: string | number,
    mode: "move" | "copy"
}) => void;
~~~

### 参数 {#parameters}

`start-drag` 事件的回调函数可以接收一个包含以下参数的对象：

- `start` - （必填）拖拽操作开始时的任务 ID
- `mode` - （必填）拖放模式：
    - `move` - 移动模式
    - `copy` - 复制模式

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

// 订阅 "start-drag" 事件
list.api.on("start-drag", ({ start, mode }) => {
    console.log(start, mode);
});
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [拖放](guides/configuration.md#drag-n-drop)
