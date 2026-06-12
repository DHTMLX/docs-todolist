---
sidebar_label: projects
title: projects 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 projects 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# projects

### 描述 {#description}

@short: 可选。指定一个项目对象数组，用于设置到列表中

### 用法 {#usage}

~~~js
projects?: [
    {
        id: string | number,
        label: string
    },
    {...} // 更多项目
];
~~~

### 参数 {#parameters}

`projects` 属性表示一个项目对象数组。每个对象包含以下参数：

- `id` - （必填）项目的 id
- `label` - （必填）项目的名称，显示在可用项目列表中

### 示例 {#example}

~~~js {4-7,11}
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

:::tip
默认情况下，项目对象列表中的第一个项目将作为活跃项目加载。若要将其他项目指定为活跃项目，请使用 [`activeProject`](api/configs/activeproject_config.md) 属性
:::

**相关文章：**
- [加载和存储数据](guides/loading_data.md)
- [管理项目](guides/project_index.md)
