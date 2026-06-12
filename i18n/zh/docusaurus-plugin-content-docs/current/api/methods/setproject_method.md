---
sidebar_label: setProject()
title: setProject 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 setProject 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# setProject()

### 描述 {#description}

@short: 将指定项目设置为当前活动项目

### 用法 {#usage}

~~~js
setProject({
    id: string | number | null
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）项目的 ID。若要显示*无项目*分区，请将 ID 设置为 `null`

### 示例 {#example}

~~~js {17-19}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    projects: [
        { id: "first", label: "First project" },
        { id: "second", label: "Second project" },
        { id: "third", label: "Third project" },
    ],
    activeProject: "second"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 切换当前活动项目
list.setProject({
    id: "first"
});
~~~

**相关文章：** [项目相关操作](guides/project_operations.md)
