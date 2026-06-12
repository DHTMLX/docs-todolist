---
sidebar_label: getProject()
title: getProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getProject 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getProject()

### 描述 {#description}

@short: 根据 ID 获取项目对象

### 用法 {#usage}

~~~js
getProject({ id: string | number }): object;
~~~

### 参数 {#parameters}

- `id` - （必填）项目的 ID

### 返回值 {#returns}

该方法返回包含项目数据的对象

### 示例 {#example}

~~~js {19}
const { ToDo, Toolbar } = todo;
const { tasks, users } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 获取项目的数据对象
list.getProject({ id: "first" }); // -> {id: 'first', label: 'First project'}
~~~

**相关文章：** [项目对象](guides/project_object_operations.md)
