---
sidebar_label: uncheckTask()
title: uncheckTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 uncheckTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX To Do List。
---

# uncheckTask()

### 描述 {#description}

@short: 将任务标记为未完成

### 用法 {#usage}

~~~js
uncheckTask({
    id: string | number,
    manual?: boolean // 默认为 false
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 id
- `manual` - （可选）若为 `true`，以"手动"模式标记任务。若为 `false`，该方法的效果取决于 [taskShape](api/configs/taskshape_config.md) 属性中 `completed` 参数的 `behavior` 属性值

### 示例 {#example}

~~~js {22-25} title="示例 1. 取消勾选单个任务"
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 将任务标记为已完成
list.checkTask({ 
    id: "1.1.1", 
});

// 将指定任务标记为未完成
list.uncheckTask({ 
    id: "1.1.1",
    manual: true // 'true' - 忽略 "taskShape" 属性中 "completed" 参数的 "behavior" 属性值
});
~~~

~~~js title="示例 2. 取消勾选多个任务"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1", parent: "1", checked: true },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2", parent: "2", checked: true },
    ],
    selected: ["1.1", "2.2"],
});

// 取消勾选已选中的任务
list.eachSelected(id => {
    list.uncheckTask({ id });
}, true);
~~~

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
