---
sidebar_label: addProject()
title: addProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 addProject 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# addProject()

### 描述 {#description}

@short: 添加一个新项目

### 用法 {#usage}

~~~js
addProject({
    id?: string | number,
    project?: object
}): void;
~~~

### 参数 {#parameters}

- `id` - （可选）新项目的 ID
- `project` - （可选）包含项目参数的对象：
  - `label` - （可选）项目名称的字符串

### 示例 {#example}

~~~js {16-21}
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

// 添加一个新项目
list.addProject({
    id: "fourth",
    project: {
        label: "Fourth project"
    }
});
~~~

**相关文章：** [项目操作](guides/project_operations.md)
