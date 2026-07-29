---
sidebar_label: show-completed-tasks
title: show-completed-tasks 事件
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 show-completed-tasks 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# show-completed-tasks

### 描述 {#description}

@short: 当 To Do List 切换到显示已完成任务的模式时触发

### 用法 {#usage}

~~~js
"show-completed-tasks": () => void;
~~~

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

// 订阅 "show-completed-tasks" 事件
list.api.on("show-completed-tasks", () => {
    console.log("The mode of showing of completed tasks is enabled"); 
});
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [显示/隐藏已完成任务](guides/hide_completed_tasks.md)
