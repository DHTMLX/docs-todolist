---
sidebar_label: copyTask()
title: copyTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 copyTask 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# copyTask()

### 描述 {#description}

@short: 将任务复制到剪贴板并粘贴到指定位置

:::info
该方法可用于复制并粘贴任务，或仅将任务复制到剪贴板

该方法会连同所有子任务一起复制
:::

### 用法 {#usage}

~~~js
copyTask({
    id: string | number,
    join?: boolean, // 默认为 false
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID
- `join` - （可选）若为 `true`，则将指定任务追加到待复制任务列表中；子任务会自动加入。若为 `false`，则重置所有之前的复制记录（即只复制最后指定的任务）

:::info
如果需要复制（并粘贴！）任务，请向方法传入以下参数以定义任务的新位置：
:::

- `parent` - （可选）目标父任务的 ID
- `project` - （可选）粘贴任务所在项目的 ID
- `targetId` - （可选）目标任务的 ID，复制的任务将粘贴到该任务附近
- `reverse` - （可选）定义复制任务的粘贴位置：目标任务**之前**（*true*）或**之后**（*false*，默认值）

:::tip
一次操作只能复制一个任务
:::

### 示例 {#example}

~~~js {23-29} title="示例 1. 复制单个任务"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将 "Task 1.1" 复制到 "Project 2"，并粘贴到 "Task 2.1.2" 之前
list.copyTask({ 
    id: "1.1",
    project: "p_2",
    parent: "2.1",
    targetId: "2.1.2",
    reverse: true
});
~~~

~~~js title="示例 2. 复制多个任务"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1"},
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "2", text: "Task 2"},
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.1.2", text: "Task 2.1.2", parent: "2.1" },
        { id: "3", text: "Task 3" },
    ],
    selected: ["2", "3"]
});

// 复制选中的任务
list.eachSelected(id => {
    list.copyTask({
        id,
        join: true,
    });
}, true);

// 粘贴复制的任务
list.pasteTask({
    targetId: "2", 
});

// 取消选中任务
list.unselectTask({ id: null });
~~~

**更新日志：** `join` 参数在 v1.1 中新增

**相关文章：** [任务操作](guides/task_operations.md)
