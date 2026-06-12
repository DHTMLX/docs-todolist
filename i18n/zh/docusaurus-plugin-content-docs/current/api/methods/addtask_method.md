---
sidebar_label: addTask()
title: addTask() 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 addTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# addTask()

### 描述 {#description}

@short: 向列表中添加一个新任务

### 用法 {#usage}

~~~js
addTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean,
    task: object
}): void;
~~~

### 参数 {#parameters}

- `id` - （可选）新任务的 ID
- `parent` - （可选）父任务的 ID
- `project` - （可选）项目的 ID。默认值为[当前活动项目](api/configs/activeproject_config.md)的 ID<br>
:::info
如果已指定活动项目，但需要将任务添加到*无项目*分区，请将该参数的值指定为 `null`
:::
- `targetId` - （可选）目标任务的 ID，新任务将添加到该任务附近
- `reverse` - （可选）定义新任务的添加位置：在目标任务**之前**或**之后**
- `task` - （必填）新任务的数据对象。任务参数的完整列表可在[此处](api/configs/tasks_config.md)查看

:::info
如果您为方法指定了 `id`、`parent`、`project` 参数，则无需在任务对象中重复指定它们
:::

### 示例 {#example}

~~~js {22-31}
const { ToDo, Toolbar } = todo;

// 创建 To do list
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "first" },
        { id: "1.1", text: "Task 1.1", parent: "1", project: "first" },
        { id: "1.1.2", text: "Task 1.1.2", parent: "1.1", project: "first" },
        { id: "1.2", text: "Task 1.2", parent: "1", project: "first" },
    ],
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 添加一个新任务
list.addTask({
    id: "1.1.1",
    project: "first",
    parent: "1.1",
    targetId: "1.1.2",
    reverse: true,
    task: {
        text: "Task 1.1.1",
    }
});
~~~

**相关文章：** [任务操作](guides/task_operations.md)
