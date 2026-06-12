---
sidebar_label: moveTask()
title: moveTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 moveTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# moveTask()

### 描述 {#description}

@short: 将任务移动到指定位置

父任务会连同其子任务一起移动。

### 用法 {#usage}

~~~js
moveTask({
    id?: string | number,
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 参数 {#parameters}

- `id` - （可选）要移动的任务的 ID
- `project` - （可选）项目的 ID<br>
:::info
若要将任务移动到*无项目*分区，请将该参数的值设置为 `null`
:::
- `parent` - （可选）父任务的 ID
- `targetId` - （可选）目标任务的 ID，移动后的任务将粘贴到该位置
- `reverse` - （可选）定义移动后的任务粘贴的位置：**在**目标任务**之前**（*true*）或**之后**（默认为 *false*）

### 示例 {#example}

~~~js {22-28} title="示例 1. 移动单个任务"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1", project: "p_1"},
        { id: "1.1", text: "Task 1.1", parent: "1", project: "p_1" },
        { id: "2", text: "Task 2", project: "p_2" },
        { id: "2.1", text: "Task 2.1", parent: "2", project: "p_2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1", project: "p_2" },
    ],
    projects: [
        { "id": "p_1", "label": "Project 1" },
        { "id": "p_2", "label": "Project 2" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将 "Task 1.1" 移动到 "Project 2"，并将其作为 "Task 2.1" 的子任务放置在 "Task 2.1.1" 之前
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2.1",
    targetId: "2.1.1",
    reverse: true
});
~~~

下面的示例展示了仅指定 `parent` 参数以及可选的 `reverse` 参数时任务的移动位置：

~~~js {5,12-13}
// 将 "Task 1.1" 移动到 "Project 2"，并将其作为 "Task 2" 的子任务放置在 "Task 2.1" 之后
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
});

// 将 "Task 1.1" 移动到 "Project 2"，并将其作为 "Task 2" 的子任务放置在 "Task 2.1" 之前
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    parent: "2",
    reverse: true
});
~~~

下面的示例展示了仅指定 `targetId` 参数以及可选的 `reverse` 参数时任务的移动位置：

~~~js {5,12-13}
// 将 "Task 1.1" 移动到 "Project 2"，并将其作为根任务放置在 "Task 2" 之后
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
});

// 将 "Task 1.1" 移动到 "Project 2"，并将其作为根任务放置在 "Task 2" 之前
list.moveTask({ 
    id: "1.1",
    project:"p_2",
    targetId: "2",
    reverse: true
});
~~~

~~~js title="示例 2. 移动多个任务"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// 移动所选任务
list.eachSelected(id => {
    list.moveTask({ 
        id,
        parent: "2.1.1"
    });
}, true);
~~~

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
