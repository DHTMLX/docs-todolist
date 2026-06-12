---
sidebar_label: deleteProject()
title: deleteProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 deleteProject 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# deleteProject()

### 描述 {#description}

@short: 删除一个项目

:::note
与该项目关联的任务不会被删除，它们将被移至*"无项目"*分区。
:::

### 用法 {#usage}

~~~js
deleteProject({
    id: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）项目的 ID

### 示例 {#example}

~~~js {16}
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

// 删除一个项目
list.deleteProject({ id: "first" });
~~~

**相关文章：** [项目操作](guides/project_operations.md)
