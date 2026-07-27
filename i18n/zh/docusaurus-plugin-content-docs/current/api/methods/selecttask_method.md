---
sidebar_label: selectTask()
title: selectTask 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 selectTask 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# selectTask()

### 描述 {#description}

@short: 通过 ID 选中指定的任务

### 用法 {#usage}

~~~js
selectTask({
    id: string | number,
    join?: boolean // 默认为 false
}): void;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID
- `join` - （可选）若为 `true`，则将指定任务追加到已选任务集合中，同时保留之前已选任务的 ID

:::info
以 `join: false` 调用该方法时，会对之前已选中的任务触发 [`unselect-task`](api/events/unselecttask_event.md) 事件
:::

### 示例 {#example}

~~~js {10,17-20}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1", parent: "1.1" },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ],
    selected: ["1.1"]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

console.log(list.getSelection()); // -> ['1.1']

list.selectTask({ 
    id: "1.1.1",
    join: true
});

console.log(list.getSelection()); // -> ['1.1', '1.1.1']
~~~

**更新日志：** `join` 参数在 v1.1 中新增

**相关文章：** [多选与批量操作](guides/multiselection.md)
