---
sidebar_label: activeProject
title: activeProject 配置
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 activeProject 配置。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的 30 天免费评估版。
---

# activeProject

### 描述 {#description}

@short: 可选。当前激活项目的 ID

:::info
如果指定的激活项目不存在，或者 To Do List 中根本没有加载任何项目，则组件初始化时将显示 *No project* 区域。

以下情况下，任务将归属于 *No project* 区域：
- 如果 [根任务对象](api/configs/tasks_config.md) 中未指定 `project` 参数
- 如果 [根任务对象](api/configs/tasks_config.md) 中指定了 `project: null | undefined`
:::

### 用法 {#usage}

~~~js
activeProject?: string | number | null;
~~~

:::info
如果未指定 `activeProject`，且没有属于 *No project* 区域的任务，则项目列表中的第一个项目将被加载为激活项目。
:::

### 示例 {#example}

~~~js {4-7,11-12}
const { ToDo, Toolbar } = todo;

// 项目数据
const projects = [
    { "id": "books", "label": "Books" },
    { "id": "films", "label": "Films" },
];

// 创建 To Do List
const list = new ToDo("#root", {
    projects,
    activeProject: "films"
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**相关文章：** [管理项目](guides/project_index.md)
