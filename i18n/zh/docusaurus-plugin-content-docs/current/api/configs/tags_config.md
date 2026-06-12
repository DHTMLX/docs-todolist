---
sidebar_label: tags
title: tags 配置项
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 tags 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# tags

### 描述 {#description}

@short: 可选。默认显示的井号标签数组

:::tip
在搜索栏或文本编辑器中输入 `#` 即可查看井号标签列表
:::

### 用法 {#usage}

~~~js
tags?: string[];
~~~

:::info
井号标签可以以任何符号开头，`#` 符号会自动添加
:::

### 示例 {#example}

~~~js {8}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags: ["urgent", "normal"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});
~~~

**相关文章：**
- [加载和存储数据](guides/loading_data.md)
- [行内编辑](guides/inline_editing.md)
