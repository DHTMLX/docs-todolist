---
sidebar_label: close-inline-editor
title: close-inline-editor 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 close-inline-editor 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版本。
---

# close-inline-editor

### 描述 {#description}

@short: 关闭任务/项目的内联编辑器时触发

### 用法 {#usage}

~~~js
"close-inline-editor": ({
    id: string | number,
    save: boolean
}) => void;
~~~

### 参数 {#parameters}

`close-inline-editor` 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必填）任务/项目的 ID
- `save` - （必填）若关闭编辑器后所做的更改已保存，则为 `true`；否则为 `false`

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

// 订阅 "close-inline-editor" 事件
list.api.on("close-inline-editor", ({id, save}) => {
    console.log("The inline editor is closed for the", id, "item"); 
});
~~~

**相关文章：** [内联编辑](guides/inline_editing.md#working-with-editor)
