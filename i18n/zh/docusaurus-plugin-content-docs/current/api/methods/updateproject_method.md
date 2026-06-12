---
sidebar_label: updateProject()
title: updateProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 updateProject 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# updateProject()

### 描述 {#description}

@short: 更新项目的配置参数

### 用法 {#usage}

~~~js
updateProject({
    id: string | number,
    project: object
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）需要更新的项目 ID
- `project` - （必填）包含需要更新的项目参数键值对的对象：
  - `label` - （可选）项目名称

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

// 更新项目的部分配置
list.updateProject({
    id: "second",
    project: {
        label: "Project 2"
    }
});
~~~

**相关文章：** [项目操作](guides/project_operations.md)
