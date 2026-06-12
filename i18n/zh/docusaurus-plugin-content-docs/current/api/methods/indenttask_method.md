---
sidebar_label: indentTask()
title: indentTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 indentTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天评估版本的 DHTMLX To Do List。
---

# indentTask()

### 描述 {#description}

@short: 根据相邻任务将该任务的嵌套级别降低一级

### 用法 {#usage}

~~~js
indentTask({
    id: string | number
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 id

### 示例 {#example}

~~~js {17-19} title="示例 1. 降低单个任务的嵌套级别"
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

// 降低该任务的嵌套级别
list.indentTask({ 
    id: "1.2",
});

console.log(list.getParentIds({ id: "1.2" })); //  ['1.1', '1']
~~~

~~~js title="示例 2. 降低多个任务的嵌套级别"
const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1" },
        { id: "1.1", text: "Task 1.1"},
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
        { id: "2", text: "Task 2" },
        { id: "2.1", text: "Task 2.1", parent: "2" },
        { id: "2.1.1", text: "Task 2.1.1", parent: "2.1" },
        { id: "2.2", text: "Task 2.2" },
    ],
    selected: ["1.1", "2.2"],
});

// 降低所选任务的嵌套级别
list.eachSelected(id => {
    list.indentTask({ id });
}, true);
~~~

**相关文章：**
- [任务操作](guides/task_operations.md)
- [多选与批量操作](guides/multiselection.md)
