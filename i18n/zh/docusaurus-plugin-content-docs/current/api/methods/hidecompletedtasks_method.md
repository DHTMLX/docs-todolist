---
sidebar_label: hideCompletedTasks()
title: hideCompletedTasks 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 hideCompletedTasks 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# hideCompletedTasks()

### 描述 {#description}

@short: 将 To Do List 切换到隐藏已完成任务的模式

### 用法 {#usage}

~~~js
hideCompletedTasks(): void;
~~~


### 示例 {#example}

~~~js {13}
const { ToDo, Toolbar } = todo;
const { task, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

list.hideCompletedTasks(); 
~~~

**更新日志：** 在 v1.1 中新增

**相关文章：** [显示/隐藏已完成任务](guides/hide_completed_tasks.md)
