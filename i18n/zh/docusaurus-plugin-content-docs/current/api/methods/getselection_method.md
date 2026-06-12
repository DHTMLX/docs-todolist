---
sidebar_label: getSelection()
title: getSelection 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 getSelection 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# getSelection()

### 描述 {#description}

@short: 获取包含已选中任务 ID 的数组

### 用法 {#usage}

~~~js
getSelection({
    sorted?: boolean,
}): (string | number)[];
~~~

### 参数 {#parameters}

- `sorted` - （可选）若为 `true`，按任务在列表中的显示顺序对已选中任务的 ID 进行排序；若为 `false`，则不排序直接输出任务 ID

### 返回值 {#returns}

该方法返回包含已选中任务 ID 的数组

### 示例 {#example}

~~~js {20,23}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.2", text: "Task 2.2", parent: "2" },
    ],
    selected: ["1.2", "1.1", "2.2", "2.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 禁用排序；
console.log(list.getSelection({ sorted: false })); // ["1.2", "1.1", "2.2", "2.1"]

// 启用排序；
console.log(list.getSelection({ sorted: true })); // ["1.1", "1.2", "2.1", "2.2"]
~~~

**更新日志：** `sorted` 参数在 v1.1 中新增

**相关文章：** 
- [任务对象/ID](guides/task_object.md)
- [多选与批量操作](guides/multiselection.md)
