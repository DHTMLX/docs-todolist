---
sidebar_label: pasteTask()
title: pasteTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 pasteTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# pasteTask()

### 描述 {#description}

@short: 将剪贴板中已复制的任务粘贴到指定位置

### 用法 {#usage}

~~~js
pasteTask({
    parent?: string | number | null,
    project?: string | number | null,
    targetId?: string | number,
    reverse?: boolean
}): void;
~~~

### 参数 {#parameters}

- `parent` - （可选）目标父任务的 ID
- `project` - （可选）任务应粘贴到的项目的 ID
- `targetId` - （可选）目标任务的 ID，复制的任务将粘贴到该位置
- `reverse` - （可选）定义复制的任务粘贴的位置：**在**目标任务**之前**（*true*）或**之后**（默认为 *false*）

### 示例 {#example}

~~~js {17-19,22-25}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将 "Task 1.1" 复制到剪贴板
list.copyTask({ 
    id: "1.1",
});

// 将复制的任务粘贴到 "Task 1.2" 之后
list.pasteTask({ 
    parent: "1",
    targetId: "1.2",
});
~~~

**相关 API：** [copyTask()](api/methods/copytask_method.md)

**相关文章：** [任务操作](guides/task_operations.md)
