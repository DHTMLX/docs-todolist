---
sidebar_label: open-inline-editor
title: open-inline-editor 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 open-inline-editor 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# open-inline-editor

### 描述 {#description}

@short: 当打开任务/项目的内联编辑器时触发

### 用法 {#usage}

~~~js
"open-inline-editor": ({
    id: string | number,
    type: "task" | "project"
}) => void;
~~~

### 参数 {#parameters}

`open-inline-editor` 事件的回调函数可接收一个包含以下参数的对象：

- `id` - （必填）任务/项目的 ID
- `type` - （必填）条目的类型："task" 或 "project"

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

// 订阅 "open-inline-editor" 事件
list.api.on("open-inline-editor", ({id, type}) => {
    console.log("The inline editor is opened for the", type, "with ID:", id); 
});
~~~

**相关文章：** [内联编辑](guides/inline_editing.md#working-with-editor)
