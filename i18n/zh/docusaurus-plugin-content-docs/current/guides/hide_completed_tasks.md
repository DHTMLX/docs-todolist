---
sidebar_label: 隐藏已完成任务
title: 显示/隐藏已完成任务
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解如何隐藏或显示已完成任务。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# 显示/隐藏已完成任务

## 初始模式 {#initial-mode}

To Do List 有两种任务显示模式：

- 显示所有任务（*默认*）
- 隐藏已完成任务

在启动时隐藏已完成任务，让用户专注于未完成的任务。将 `taskShape.completed.taskHide` 设置为 `true`。详情请参阅 [`taskShape`](api/configs/taskshape_config.md) 参考。以下示例在初始化时隐藏已完成任务：

~~~js {6}
const list = new ToDo("#root", {
    tasks,
    taskShape: {
        completed: {
            behavior: "manual",
            taskHide: true
        }
    }
});
~~~

## 在模式之间切换 {#switching-between-modes}

初始化后，可通过以下两种方式之间切换模式：

- 通过[工具栏菜单](/#toolbar)的**已完成任务 → 显示/隐藏**选项
- 通过 [`hideCompletedTasks()`](api/methods/hidecompletedtasks_method.md) 和 [`showCompletedTasks()`](api/methods/showcompletedtasks_method.md) 方法

以下代码片段展示了如何在运行时隐藏或显示已完成任务：

~~~js
list.hideCompletedTasks();
// 或
list.showCompletedTasks();
~~~
