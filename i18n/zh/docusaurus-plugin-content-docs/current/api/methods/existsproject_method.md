---
sidebar_label: existsProject()
title: existsProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 existsProject 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# existsProject()

### 描述 {#description}

@short: 检查指定项目是否存在于 DataStore 中


### 用法 {#usage}

~~~js
existsProject({ id: string | number }): boolean;
~~~

### 参数 {#parameters}

- `id` - （必填）项目的 ID

### 返回值 {#returns}

若项目存在，该方法返回 `true`；否则返回 `false`

### 示例 {#example}

~~~js {16-17}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 检查项目是否存在
list.existsProject({ id: 1 }); // -> false
list.existsProject({ id: "first" }); // -> true
~~~

**相关文章：** [项目对象](guides/project_object_operations.md)
