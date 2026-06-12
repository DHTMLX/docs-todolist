---
sidebar_label: items
title: items Config
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 Toolbar 的 items 配置项。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# items

### 描述 {#description}

@short: 可选。指定在 To Do List 的工具栏中显示的控件

### 用法 {#usage}

~~~js
items?: [
    "combo",
    "search",
    "menu",
    "undo",
    "redo"
    custom_control // string or function
];
~~~

### 默认配置 {#default-config}

~~~js
items: ["combo", "search", "menu"]
~~~

### 参数 {#parameters}

`items` 数组可包含以下参数：

- `"combo"` - 用于选择项目的下拉组合控件
- `"search"` - 搜索栏
- `"menu"` - 包含一组选项的菜单，允许您：
    - 按以下条件对任务进行升序/降序排序：
        - 按文本
        - 按截止日期
        - 按完成日期
        - 按创建日期
        - 按编辑日期
    - 隐藏/显示已完成的任务
    - 添加新项目、重命名或删除当前活动项目
- `"undo"` - 撤销上一步操作的控件
- `"redo"` - 重做已被撤销操作的控件
- `"custom_item"` - 自定义控件，可以是字符串或函数

:::tip
您可以通过在 `items` 数组中按所需顺序列举必要元素，来自定义工具栏的结构
:::

### 示例 {#example}

~~~js {12-19}
const { ToDo, Toolbar } = todo;
const { tasks, users, projects, tags } = getData();

const list = new ToDo("#root", {
    tasks,
    users,
    projects,
    tags,
});
const toolbar = new Toolbar("#toolbar", {
    api: list.api,
    items: [
        `<div style="font-weight:500;font-size:18px;padding:0 10px; width: 100%">Logo<div/>`,
        "search",
        "menu",
        "undo",
        "redo",
        `<div style="margin-left: auto; padding-left: 10px;"><button class="g-btn g-btn--sm">Custom button</button></div>`,
    ]
});
~~~

**变更日志：** `"undo"` 和 `"redo"` 参数已在 v1.3 中添加

**相关文章：**
- [配置](guides/configuration.md#toolbar)
- [自定义](guides/customization.md#customize-the-toolbar)
