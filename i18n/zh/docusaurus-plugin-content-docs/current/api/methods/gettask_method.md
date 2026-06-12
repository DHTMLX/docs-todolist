---
sidebar_label: getTask()
title: getTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getTask 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getTask()

### 描述 {#description}

@short: 根据 ID 获取任务对象

### 用法 {#usage}

~~~js
getTask({ id: string | number }): object;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID

### 返回值 {#returns}

该方法返回包含任务数据的对象

### 示例 {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { projects, users } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 获取任务的数据对象
list.getTask({ id: "1.2" }); // -> {id: '1.2', text: 'Task 1.2', parent: '1'}
~~~

**相关文章：** [任务对象/ID](guides/task_object.md)
