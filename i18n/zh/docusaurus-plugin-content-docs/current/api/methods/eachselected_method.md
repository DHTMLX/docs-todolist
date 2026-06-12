---
sidebar_label: eachSelected()
title: eachSelected 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 eachSelected 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# eachSelected()

### 描述 {#description}

@short: 遍历所有选中的任务

### 用法 {#usage}

~~~js
eachSelected(
    callback: (id: string | number, index: number) => void,
    sorted?: boolean, // 默认为 false
    reversed?: boolean, // 默认为 false
);
~~~

### 参数 {#parameters}

- `callback` - （必填）对每个选中任务执行的回调函数。该函数接受两个参数：
    - `id` - 选中任务的 ID
    - `index` - 当前任务的索引
- `sorted` - （可选）定义方法是否按任务在列表中的显示顺序对选中任务的 ID 进行排序（`true`）或不排序（`false`）
- `reversed` - （可选）定义方法是否以倒序遍历选中任务（`true`）或正序（`false`）

### 示例 {#example}

~~~js {22-24,27-29,32-34,37-39}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"],
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// sorted - 禁用；reversed - 禁用；
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.2", "1.1", "2.2", "2.1"]
});

// sorted - 启用；reversed - 禁用；
list.eachSelected(id => {
    console.log("selected id:", id); // ["1.1", "1.2", "2.1", "2.2"]
}, true);

// sorted - 禁用；reversed - 启用；
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.1", "2.2", "1.1", "1.2"]
}, false, true);

// sorted - 启用；reversed - 启用；
list.eachSelected(id => {
    console.log("selected id:", id); // ["2.2", "2.1", "1.2", "1.1"]
}, true, true);
~~~

**变更日志：** 在 v1.1 中新增

**相关文章：** [多选与批量操作](guides/multiselection.md)
