---
sidebar_label: existsTask()
title: existsTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 existsTask 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# existsTask()

### 描述 {#description}

@short: 检查指定任务是否存在于 DataStore 中


### 用法 {#usage}

~~~js
existsTask({ id: string | number }): boolean;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID

### 返回值 {#returns}

若任务存在，该方法返回 `true`；否则返回 `false`

### 示例 {#example}

~~~js {19-20}
const { ToDo, Toolbar } = todo;
const { users, projects } = getData();

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

// 检查任务是否存在
list.existsTask({ id: "2" }); // -> false
list.existsTask({ id: "1.2" }); // -> true
~~~

**相关文章：** [任务对象/Id](guides/task_object.md)
