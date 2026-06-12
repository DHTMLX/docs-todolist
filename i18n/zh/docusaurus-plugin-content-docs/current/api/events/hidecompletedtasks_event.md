---
sidebar_label: hide-completed-tasks
title: hide-completed-tasks 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 hide-completed-tasks 事件。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# hide-completed-tasks

### 描述 {#description}

@short: 当 To Do List 切换到隐藏已完成任务的模式时触发

### 用法 {#usage}

~~~js
"hide-completed-tasks": () => void;
~~~

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

// 订阅 "hide-completed-tasks" 事件
list.api.on("hide-completed-tasks", () => {
    console.log("The mode of hiding of completed tasks is enabled"); 
});
~~~

**Change log**: 在 v1.1 中新增

**相关文章：** [显示/隐藏已完成任务](guides/hide_completed_tasks.md)
