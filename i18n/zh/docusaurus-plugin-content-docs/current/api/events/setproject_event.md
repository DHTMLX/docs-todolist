---
sidebar_label: set-project
title: set-project 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 set-project 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# set-project

### 描述 {#description}

@short: 当切换当前活动项目时触发

:::info
当使用 [setProject] 方法切换当前活动项目时，该事件会触发
:::

### 用法 {#usage}

~~~js
"set-project": ({
    id: string | number
}) => void;
~~~

### 参数 {#parameters}

`set-project` 事件的回调函数可接受一个包含以下参数的对象：

- `id` - （必填）新活动项目的 ID

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

// 订阅 "set-project" 事件
list.api.on("set-project", ({id}) => {
    console.log("The active project is changed to", id);
});
~~~

**相关文章：** [项目操作](guides/project_operations.md#changing-the-active-project)
