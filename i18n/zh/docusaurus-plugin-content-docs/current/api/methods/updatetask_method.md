---
sidebar_label: updateTask()
title: updateTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 updateTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# updateTask()

### 描述 {#description}

@short: 更新任务的配置参数

### 用法 {#usage}

~~~js
updateTask({
    id: string | number,
    task: object
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）需要更新的任务 id
- `task` - （必填）包含需要更新的任务属性键值对的对象。任务参数的完整列表请参见[此处](api/configs/tasks_config.md)

### 示例 {#example}

~~~js {17-24}
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

// 更新任务的部分配置
list.updateTask({ 
    id: "1.1",
    task: {
        text: "Completed task"
    }
});
~~~

**相关文章：** [任务操作](guides/task_operations.md)
