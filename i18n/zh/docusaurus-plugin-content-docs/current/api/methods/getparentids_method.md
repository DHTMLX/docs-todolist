---
sidebar_label: getParentIds()
title: getParentIds 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getParentIds 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getParentIds()

### 描述 {#description}

@short: 返回指定子任务的父任务 ID 数组


### 用法 {#usage}

~~~js
getParentIds({
    id: string | number
}): (string|number)[];
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID

### 返回值 {#returns}

该方法返回一个包含父任务 ID 的数组

### 示例 {#example}

~~~js {20}
const { ToDo, Toolbar } = todo;
const { users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    users,
    projects
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 获取任务的父任务
console.log(list.getParentIds({ id: "1.1.1" })); //  ['1.1', '1']
~~~

**相关文章：** [任务对象/ID](guides/task_object.md)
