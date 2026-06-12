---
sidebar_label: unselectTask()
title: unselectTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 unselectTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# unselectTask()

### 描述 {#description}

@short: 取消选中一个或多个任务

### 用法 {#usage}

~~~js
unselectTask({
    id: string | number | null
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）需要取消选中的任务 id

:::info
向该方法传入 `id: null` 将取消选中所有已选中的任务，并为每个任务触发 [`unselect-task`](api/events/unselecttask_event.md) 事件
:::


### 示例 {#example}

~~~js {17,20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 选中一个任务
list.selectTask({ id: "1.1"});

// 取消选中已选中的任务
list.unselectTask({ id: "1.1" });
~~~

**变更日志：** 在 v1.1 中新增了向该方法传入 `id: null` 的能力

**相关文章：** [多选与批量操作](guides/multiselection.md)
