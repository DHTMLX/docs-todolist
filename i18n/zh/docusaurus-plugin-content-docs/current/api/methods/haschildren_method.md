---
sidebar_label: hasChildren()
title: hasChildren 方法
description: 您可以在 DHTMLX JavaScript To Do List 库的文档中了解 hasChildren 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX To Do List 的免费 30 天评估版本。
---

# hasChildren()

### 描述 {#description}

@short: 检查指定任务是否有子任务


### 用法 {#usage}

~~~js
hasChildren({
    id: string | number,
    filtered?: boolean, // false by default
    hideCompleted?: boolean // false by default
}): boolean;
~~~

### 参数 {#parameters}

- `id` - （必填）任务的 ID
- `filtered` - （可选）若为 `false`，被过滤的子任务也会包含在结果中；否则，将从结果中排除
- `hideCompleted` - （可选）若为 `false`，已完成的任务会包含在结果中；否则，将从结果中排除

:::tip
`filtered` 参数在已应用过滤的情况下使用
:::

### 返回值 {#returns}

若任务有子任务，该方法返回 `true`；否则返回 `false`

### 示例 {#example}

~~~js {17,19,22,25-26,28}
const { ToDo, Toolbar } = todo;

const list = new ToDo("#root", {
    tasks: [
        { id: "1", text: "Task 1 #tag1 #tag3" },
        { id: "1.1", text: "Task 1.1", parent: "1" },
        { id: "1.1.1", text: "Task 1.1.1 #tag1", parent: "1.1", checked: true },
        { id: "1.2", text: "Task 1.2", parent: "1" },
    ]
});

const toolbar = new Toolbar("#toolbar", {
    api: list.api,
});

// 检查任务是否有子任务（过滤前）
console.log(list.hasChildren({ id: "1.1" })); // -> true

console.log(list.hasChildren({ id: "1.1", hideCompleted: true})); // -> false

// 过滤任务
list.setFilter({ match: "#tag3", highlight: true });

// 检查任务是否有子任务（过滤后）
console.log(list.hasChildren({ id: "1.1" })); // -> true
console.log(list.hasChildren({ id: "1.1", hideCompleted: true })); // -> false

console.log(list.hasChildren({ id: "1.1", filtered: true })); // -> false
~~~

**更新日志：** `hideCompleted` 参数在 v1.1 中新增

**相关文章：** [任务对象/ID](guides/task_object.md)
